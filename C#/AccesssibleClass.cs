using System;
using System.Collections.Generic;

//  Accessible: A well-named, strongly-typed class for our data.
public class UserProfile
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public DateTime? LastLoginDate { get; set; }

    // Accessible: Use a constructor for predictable object creation.
    public UserProfile(int userId, string userName, string email)
    {
        UserId = userId;
        UserName = userName;
        Email = email;
        LastLoginDate = null;
    }
}

public class AccessibleDataExample
{
    // Accessible: Use a descriptive name for the data store.
    private static Dictionary<int, UserProfile> userDatabase = new Dictionary<int, UserProfile>();

    public static void Main()
    {
        Console.WriteLine("--- Accessible Data Management Example ---");

        // Accessible: Use a dedicated method to add data with validation.
        AddNewUser(1, "Jane Doe", "jane@example.com");
        AddNewUser(2, "Alice Smith", "alice@example.com");

        // Accessible: Use a dedicated method to retrieve data.
        UserProfile jane = GetUserById(1);
        if (jane != null)
        {
            //  Accessible: Human-readable output.
            Console.WriteLine($"\nFound user: {jane.UserName} with email {jane.Email}");
        }

        UserProfile nonExistentUser = GetUserById(99);
        if (nonExistentUser == null)
        {
            // Accessible: The message from the GetUserById method provides context.
            Console.WriteLine("\nAttempted to get a non-existent user. The system handled this gracefully.");
        }
    }

    public static void AddNewUser(int userId, string userName, string email)
    {
        // Accessible: Check for existing data to prevent unexpected behavior.
        if (userDatabase.ContainsKey(userId))
        {
            Console.WriteLine($"Error: A user with ID {userId} already exists.");
            return;
        }

        // Accessible: Use a strongly typed class for the data.
        var newUser = new UserProfile(userId, userName, email);
        userDatabase.Add(userId, newUser);
        Console.WriteLine($"Successfully added user: {newUser.UserName}");
    }

    public static UserProfile GetUserById(int userId)
    {
        // Accessible: Graceful error handling and clear return values.
        if (userDatabase.TryGetValue(userId, out UserProfile profile))
        {
            return profile;
        }
        else
        {
            Console.WriteLine($"Warning: User with ID {userId} not found.");
            return null;
        }
    }
}


