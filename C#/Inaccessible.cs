// This example is for demonstration purposes only.
// In a real application, a proper database or file system would be used.
using System.Collections.Generic;
using System;

public class InaccessibleDataExample
{
    public static void Main()
    {
        //  Inaccessible: Using a dictionary for complex data.
        // It's not strongly typed and lacks semantic meaning.
        Dictionary<int, Dictionary<string, object>> profiles = new Dictionary<int, Dictionary<string, object>>();

        // Add a profile.
        profiles.Add(1, new Dictionary<string, object>()
        {
            { "n", "Paul Pheonix" }, //  Inaccessible: 'n' is not descriptive.
            { "e", "paul@pheonix.com" } //  Inaccessible: 'e' is not descriptive.
        });

        // Try to retrieve data with no error handling.
        try
        {
            var profile = profiles[2]; //  Inaccessible: This will throw an exception if the key doesn't exist.
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred."); //  Inaccessible: Non-descriptive error message.
        }
    }
}
