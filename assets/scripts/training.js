/*
 * Training lessons: accessible slide viewer + knowledge check.
 * Progressive enhancement — without JavaScript every slide is visible and each
 * question has a "Show answer" disclosure. With JavaScript we add a one-slide-
 * at-a-time viewer and a "Check answers" button.
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Slide viewer                                                        */
  /* ------------------------------------------------------------------ */
  function initDeck(deck) {
    var slides = Array.prototype.slice.call(deck.querySelectorAll('[data-tdeck-slide]'));
    if (!slides.length) { return; }

    var prevBtn = deck.querySelector('[data-tdeck-prev]');
    var nextBtn = deck.querySelector('[data-tdeck-next]');
    var toggleBtn = deck.querySelector('[data-tdeck-toggle]');
    var status = deck.querySelector('[data-tdeck-status]');
    var total = slides.length;
    var current = 0;
    var showAll = false;

    // Restore "show all" preference if the user chose it before (per browser).
    try { showAll = window.localStorage.getItem('training-show-all') === 'true'; } catch (e) { /* ignore */ }

    function slideTitle(index) {
      var h = slides[index].querySelector('.tslide-title');
      if (!h) { return ''; }
      // Strip the visually-hidden "Slide n of m:" prefix so the status isn't doubled.
      var clone = h.cloneNode(true);
      var hiddenBits = clone.querySelectorAll('.hidden');
      for (var i = 0; i < hiddenBits.length; i++) { hiddenBits[i].parentNode.removeChild(hiddenBits[i]); }
      return clone.textContent.replace(/\s+/g, ' ').trim();
    }

    function render(announce) {
      deck.setAttribute('data-enhanced', showAll ? 'all' : 'one');
      for (var i = 0; i < total; i++) {
        var visible = showAll || i === current;
        slides[i].hidden = !visible;
        slides[i].classList.toggle('is-current', i === current && !showAll);
      }
      var atStart = current === 0;
      var atEnd = current === total - 1;
      prevBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      nextBtn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      prevBtn.hidden = showAll;
      nextBtn.hidden = showAll;
      status.hidden = showAll;
      toggleBtn.setAttribute('aria-pressed', showAll ? 'true' : 'false');
      toggleBtn.textContent = showAll ? 'Show one slide at a time' : 'Show all slides';
      if (!showAll && announce !== false) {
        status.textContent = 'Slide ' + (current + 1) + ' of ' + total + ': ' + slideTitle(current);
      } else if (!showAll) {
        status.textContent = 'Slide ' + (current + 1) + ' of ' + total;
      }
    }

    function go(index) {
      if (index < 0 || index >= total || index === current) { return; }
      current = index;
      render(true);
    }

    prevBtn.addEventListener('click', function () { go(current - 1); });
    nextBtn.addEventListener('click', function () { go(current + 1); });

    toggleBtn.addEventListener('click', function () {
      showAll = !showAll;
      try { window.localStorage.setItem('training-show-all', showAll ? 'true' : 'false'); } catch (e) { /* ignore */ }
      render(false);
      // Keep focus on the toggle so the user knows where they are.
      toggleBtn.focus();
    });

    // Arrow keys work anywhere inside the viewer (buttons or the slide itself),
    // but never steal keys from links or form fields.
    deck.addEventListener('keydown', function (e) {
      if (showAll) { return; }
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || tag === 'a') { return; }
      if (e.altKey || e.ctrlKey || e.metaKey) { return; }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(current + 1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(current - 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(total - 1); }
    });

    // Deep link support: #slide-3 opens that slide in the viewer.
    var m = /^#slide-(\d+)$/.exec(window.location.hash);
    if (m) {
      var idx = parseInt(m[1], 10) - 1;
      if (idx >= 0 && idx < total) { current = idx; showAll = false; }
    }

    render(false);
    status.textContent = 'Slide ' + (current + 1) + ' of ' + total + (showAll ? '' : '');
  }

  /* ------------------------------------------------------------------ */
  /* Knowledge check                                                     */
  /* ------------------------------------------------------------------ */
  function initQuiz(form) {
    var questions = Array.prototype.slice.call(form.querySelectorAll('[data-tquiz-question]'));
    if (!questions.length) { return; }
    var actions = form.querySelector('[data-tquiz-actions]');
    var result = form.querySelector('[data-tquiz-result]');
    var resetBtn = form.querySelector('[data-tquiz-reset]');

    form.setAttribute('data-enhanced', 'true');
    actions.hidden = false;
    var groups = Array.prototype.slice.call(form.querySelectorAll('[data-tquiz-group]'));
    var nojsNotes = document.querySelectorAll('[data-tquiz-nojs]');
    for (var n = 0; n < nojsNotes.length; n++) { nojsNotes[n].hidden = true; }
    // Hide the no-JS "Show answer" disclosures; the button reveals feedback instead.
    questions.forEach(function (q) {
      var reveal = q.querySelector('[data-tquiz-reveal]');
      if (reveal) { reveal.hidden = true; }
    });

    function clearQuestion(q) {
      var fb = q.querySelector('[data-tquiz-feedback]');
      fb.hidden = true;
      fb.textContent = '';
      fb.className = 'tquiz-feedback';
      q.classList.remove('is-correct', 'is-incorrect', 'is-unanswered');
      var inputs = q.querySelectorAll('input[type="radio"]');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('aria-describedby');
        inputs[i].removeAttribute('aria-invalid');
      }
    }

    function describe(q, fbId) {
      var inputs = q.querySelectorAll('input[type="radio"]');
      for (var i = 0; i < inputs.length; i++) { inputs[i].setAttribute('aria-describedby', fbId); }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var correct = 0;
      var unanswered = 0;

      questions.forEach(function (q) {
        clearQuestion(q);
        var answer = q.getAttribute('data-tquiz-answer');
        var chosen = q.querySelector('input[type="radio"]:checked');
        var fb = q.querySelector('[data-tquiz-feedback]');
        var reveal = q.querySelector('[data-tquiz-reveal]');
        var explain = reveal ? reveal.querySelectorAll('p') : null;
        var answerText = explain && explain[0] ? explain[0].textContent.replace(/^\s*Answer:\s*/, '').trim() : '';
        var explainText = explain && explain[1] ? explain[1].textContent.trim() : '';

        if (!chosen) {
          unanswered++;
          q.classList.add('is-unanswered');
          fb.className = 'tquiz-feedback tquiz-feedback-missing';
          fb.textContent = 'Choose an answer for this question.';
          fb.hidden = false;
          describe(q, fb.id);
          return;
        }
        if (chosen.value === answer) {
          correct++;
          q.classList.add('is-correct');
          fb.className = 'tquiz-feedback tquiz-feedback-correct';
          fb.textContent = 'Correct. ' + explainText;
        } else {
          q.classList.add('is-incorrect');
          fb.className = 'tquiz-feedback tquiz-feedback-incorrect';
          fb.textContent = 'Not quite. The answer is: ' + answerText + (/[.!?]$/.test(answerText) ? ' ' : '. ') + explainText;
          chosen.setAttribute('aria-invalid', 'true');
        }
        fb.hidden = false;
        describe(q, fb.id);
      });

      // Per-lesson subtotals (combined knowledge-check page)
      groups.forEach(function (g) {
        var out = g.querySelector('[data-tquiz-group-result]');
        if (!out) { return; }
        var qs = g.querySelectorAll('[data-tquiz-question]');
        var ok = g.querySelectorAll('[data-tquiz-question].is-correct').length;
        var missing = g.querySelectorAll('[data-tquiz-question].is-unanswered').length;
        if (missing === qs.length) {
          out.hidden = true;
          out.textContent = '';
          return;
        }
        out.hidden = false;
        out.className = 'tquiz-group-result ' + (ok === qs.length ? 'is-perfect' : 'is-partial');
        out.textContent = 'This lesson: ' + ok + ' of ' + qs.length + ' correct' +
          (missing ? ' (' + missing + ' unanswered)' : '') + '.';
      });

      var answered = questions.length - unanswered;
      if (unanswered && groups.length && answered > 0) {
        // Combined page: score what was answered, note what wasn't.
        result.className = 'tquiz-result tquiz-result-done';
        result.textContent = 'You got ' + correct + ' of ' + answered + ' answered questions correct. ' +
          unanswered + (unanswered === 1 ? ' question is' : ' questions are') + ' still unanswered.';
      } else if (unanswered) {
        result.className = 'tquiz-result tquiz-result-missing';
        result.textContent = unanswered === 1
          ? 'One question still needs an answer.'
          : unanswered + ' questions still need an answer.';
      } else {
        result.className = 'tquiz-result ' + (correct === questions.length ? 'tquiz-result-perfect' : 'tquiz-result-done');
        result.textContent = 'You got ' + correct + ' of ' + questions.length + ' correct.' +
          (correct === questions.length ? ' Nice work — you’re ready for the next lesson.' : ' Review the feedback above, then try again.');
      }
      // Move focus to the summary so screen reader and keyboard users hear/see the outcome.
      result.focus();
    });

    resetBtn.addEventListener('click', function () {
      questions.forEach(function (q) {
        clearQuestion(q);
        var inputs = q.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < inputs.length; i++) { inputs[i].checked = false; }
      });
      result.className = 'tquiz-result';
      result.textContent = '';
      groups.forEach(function (g) {
        var out = g.querySelector('[data-tquiz-group-result]');
        if (out) { out.hidden = true; out.textContent = ''; }
      });
      var first = form.querySelector('input[type="radio"]');
      if (first) { first.focus(); }
    });
  }

  function init() {
    var decks = document.querySelectorAll('[data-tdeck]');
    for (var i = 0; i < decks.length; i++) { initDeck(decks[i]); }
    var quizzes = document.querySelectorAll('[data-tquiz]');
    for (var j = 0; j < quizzes.length; j++) { initQuiz(quizzes[j]); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
