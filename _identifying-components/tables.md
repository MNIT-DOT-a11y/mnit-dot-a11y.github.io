---
layout: identifying-components
title: Tables
permalink: /identifying-components/tables/
needs_toc: false
---

A table shows information in columns and rows.

<div role="table" aria-label="Students" aria-describedby="students_table_desc">
  <div id="students_table_desc">Students currently enrolled in WAI-ARIA 101 for the coming semester</div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader">First Name</span>
      <span role="columnheader">Last Name</span>
      <span role="columnheader">Company</span>
      <span role="columnheader">Address</span>
    </div>
  </div>
  <div role="rowgroup" >
    <div role="row">
      <span role="cell">Fred</span>
      <span role="cell">Jackson</span>
      <span role="cell">Acme, Inc.</span>
      <span role="cell">123 Broad St.</span>
    </div>
    <div role="row">
      <span role="cell" >Sara</span>
      <span role="cell">James</span>
      <span role="cell">Acme, Inc.</span>
      <span role="cell">123 Broad St.</span>
    </div>
    <div role="row">
      <span role="cell">Ralph</span>
      <span role="cell">Jefferson</span>
      <span role="cell">XYZ, Inc.</span>
      <span role="cell">456 Main St.</span>
    </div>
    <div role="row">
      <span role="cell">Nancy</span>
      <span role="cell">Jensen</span>
      <span role="cell">XYZ, Inc.</span>
      <span role="cell">456 Main St.</span>
    </div>
  </div>
</div>

**Identification:**
- **Visual Inspection:** Look for a structure with rows and columns, often containing header rows.
- **HTML Attributes:** Inspect the HTML code for the `<table>` element. Within the table, look for `<tr>` for rows and `<td>` or `<th>` for cells and headers.