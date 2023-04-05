# 🏗️ Write GraphQL Queries for Front-End Team

Work with a partner to implement the following user story:

* As a developer, I want a list of queries that I will need to use on the front end.

## Acceptance Criteria

* It's done when I have a GraphQL query that returns the following:

  * Every school's name, location, and student body count

  * Every class's name

  * Every professor's name


  query Query {
  schools {
    name
    location
    studentCount
    classes {
      name
      professor {
        name
      }
    }
  }
}


* It's done when I have a GraphQL query that returns the following:

  * Every class's name, credit hours, and building number

  * Every professor's name and student review score

query Query {
  classes {
    name
    creditHours
    building
    professor {
      name
      studentScore
    }
  }
}


* It's done when I have a GraphQL query that returns the following:

  * Every professor's ID, name, student review score, office hours, and office building number

---

## 💡 Hints

* What tools within the Apollo Sandbox can reveal the data that is available to you?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What other GraphQL IDEs can you use besides the Apollo Sandbox?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
