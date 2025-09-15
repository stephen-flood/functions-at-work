var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Copyright Information",
  "body": " Copyright Information   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " Dedicated to the champions of Open Educational Resources at Bridgewater State University and beyond, and to the developers of PreTeXt who developed and maintain the software that made this book possible.  "
},
{
  "id": "to_the_student",
  "level": "1",
  "url": "to_the_student.html",
  "type": "Preface",
  "number": "",
  "title": "How to use this book",
  "body": " How to use this book  Welcome to Business Calculus. You are beginning an exciting adventure into a new kind of mathematics, one with more applications than you have seen in your previous courses, and one which will require new kinds of practice and problem solving.  This book is the result of many years of teaching and refining this course, with a particular focus on highlighting a variety of ways that this course can be of service to you in your future studies.  The large number of examples with full solutions are intended to aid you in your study of the topic.   The Promise of Active Reading  In the online version of this book, the statement of a problem is shown, but the solution starts out hidden. When you see a question like this,  Think about the meaning of the question. What do the terms used mean? Why is this question being asked. Go back to the previous definitions and explanations to refresh yourself.  Try to answer the question yourself by hand, on a piece of paper. Do you know How to start? Do you get stuck at some point?  Once you've been trying for a little bit, then look at the Solution . Did you get the same answer? What steps does the solution use? Why does it use those steps?    This might seem like a lot of extra work, since the solutions are already right there in the text, and you already have many other problems and assignments to get to.   One practical resource is Make It Stick: The Science of Successful Learning by Brown et.al.   In fact, spending time thinking and struggling is an important part of how humans learn. This has been studied extensively in the theory of learning. The importance of thinking for yourself has also been recognized by great thinkers over thousands of years.    The Danger of Passive Reading  As Arthur Melzer writes in Philosophy Betwen the Lines ,    A book is a strange and unseemly thing. It delivers into one person's hands the distilled essence of another's thinking.    The first danger of reading books is that it allows you to skip too many stages, shortcutting the proper intellectual development.... Before you have had a chance to face the questions and live with them a while, you have seen the answers. Books give a false sense of knowledge ... on the belief that you know what you have only read.    Philosophy Between the Lines , page 211.   Melzer also quotes another author (Schopenhauer) who observes that    When we read, another person thinks for us: we merely repeat his mental process.... So it comes that if anyone spends almost the whole day reading ... he gradually loses the capacity for thinking; just as the man who always rides, at last forgets how to walk.    So reading is pointless?  No: we learn quickly with listening and immitation. But we gain the best, most durable learning (like the knowledge you will need during a test) by wrestling with questions and concepts ourselves.    Course Overview  Mathematical knowledge has been described as synthetic . This is both because we learn mathematics by doing, and because we must incorproate each new concept into a broader system of knowledge. Much more can be said about this, which gets into the broader foundations of mathematics. You can read a little bit about this online .   Mastery of College Algebra , or an equivalent class, is absolutely essential for success in this course, and will be assumed throughout . If you would like a brief summary of selected formluas and ideas from algebra, see . If your algebraic skills are weaker, talk to your instructor to obtain resources for additional practice.  The goal of this course is to provide a first introduction to two related topics   In , we will discuss a range of applications of mathematics, including algebra, to economics and business contexts.  Most of the mathematical techniques in this section should be familiar, although the applications will not. The main exception to this will be , where we will introduce the mathematics of exponential and logarithmic functions in some detail.    In , we will introduce and apply mathemtical techniques for studing change, rates, and area. These tools will teach us a method for calculation of rates and areas, and are therefore often given the name calculus .      "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  This book was written during a one semester sabbatical at Bridgewater State University during the Fall of 2022, and expanded during the following few semesters. There may be a range of typographical errors, formatting issues, and so on. If you believe that you have found a mistake, or if you have just found a place where the explanations can be improved or expanded, please contact the author at sflood@bridgew.edu .  The material on graphs of totals and changes is based on previous work in collaboration with my colleague Karen Duseau, also of Bridgewater State University, and funded by a QuAC Course Development Summer Grant . I also learned the terminology of AROC and IROC tables from Karen Duseau.  To the best of my knowledge, the other examples and exposition in this book are newly written, and are based on ideas in common use. However, it is always possible that something from a textbook or other resource I have used in the past has been unintentionally incorporated in some form or another. If you believe this may have happened, please contact the author at sflood@bridgew.edu , and I will happily correct the oversight.  "
},
{
  "id": "ch-functions",
  "level": "1",
  "url": "ch-functions.html",
  "type": "Chapter",
  "number": "1",
  "title": "Functions of Economics",
  "body": " Functions of Economics     Function Concepts  In this section, we will briefly review some key function concepts. However, our main focus will be on beginning to connect these mathematical ideas to the central economic and business concepts, applications, and examples that we will study over the course of this semester.    If you are manufacturing t-shirts, then the total cost will be a function of the number of items you make. This is because there will be a rule which, given of the number of items to be made (the input) tells you a unique total cost in $ (the output).  If represents the number of items, we often write to denote the total cost of these items.    Write the mathematical expression that says \"the cumulative cost of making 97 items costs $350.42\"        Translate the statment into natural language.   This statement says that the cumulative cost of making 52 items is $253.19.    Write a mathematical expression that describes the cost of items 53-97 only . Use the information from the previous parts to find the cost of these items.   We have seen already that tells us the cost of items 0-97, and that tells us the cost of items 0-52.  To find the cost of only items 53-97, we must subtract the cost of items 0-52 from the cost of items 0-97. Mathematically, this is written The total cost of items 53-97 is $97.23.    Functions are important because they give us a single language that can describe an enormous number of different situations.  The next example uses the same language of functions to describe the very different situation of a very simple investment.   Function notation and a simple investment.  You begin with $1000 in a safe, and add $365 each year, spread out evenly over the year. Furthermore, you commit to keeping this up for ten years. You want to study the value in the safe as a function of time.  To allow the amount of time to vary, we introduce an independent variable. Often, we use for the independent variable, which in this case is time. We also often use for the dependent variable, which in this case is the amount saved. Although are common variables, we could also have chosen other letters, such as for value and for time.  Putting this together, we get Reading from left to right, this says that the output balance in $ is equal to a function of the input time , and that we will use the letter to refer this function.  It also says that this function is defined by a rule , which says to take the number of years , to multiply that by 365, and then to add $1000.  Finally, that sentence says that this rule applies only when the input is in the closed interval , which means that can be any number in the interval . In other words, this rule specifies its domain .  Because our savings are spread out evenly over the year , we can find the value of our savings after four and a half years , as well as finding the value after three years exactly. In other words, the domain of our savings function contains decimals like years, as well as whole numbers like years. This even will us to find the amount in the safe after  days . Assuming that there are 365 days in a year, day happens at year  .     Suppose that you begin with $1000 in a safe, and add $365 each year for ten years, spread out evenly over the year.    Write the equation for the value in the safe as a function of time.   This problem does not specify the variables that we should use for our function. If represents value and represents time in years, then we have the same equation tjat that we found in . If we instead used for value and for time, the equation would become We could also use any other variables we decided were most appropriate.    Graph the value of your savings as a function of time.   We are told that this rule only applies between year and year . That means that we should start our graph at , and end it at . In this case, the value is a linear function, so we can complete the graph by connecting these points.          Find the value of savings after four and a half years.   We know the value after years is equal to . To find the value after years, we simply compute .    Find the value of savings after 40 days .   We know the value after years is equal to .  To apply this rule, we must first convert 40 days to years . In a standard calendar year, there are 365 days, so 1 day = 1\/365 year. So day 40 is just a little bit over 10% of a year. More precisely, we can do a unit conversion as follows We can now plug this year into our value function After 40 days, the value will be approximately $1040.      The domain of a function is the set of inputs where the rule is defined.  The range of a function is the set of all outputs that occur.    In many applications, a rule only makes sense for specific inputs. In this case, we talk about the applied domain of the function. For example, you cannot buy a negative number of items, and the price of an item cannot be negative. You can pay people to take an item, but in this case it is not correct to call that payment a price .     This example continues . In that example, we started with $1000 in savings and added $365 per year for 10 years, spread evenly across the whole year.    Find the domain of the savings function.   In , we are explicitly told that our savings function is not defined before year 0, and not defined after year 10. In other words, we are explicitly told that the domain of that function is the interval , or equivalently, the set     Find the range of the savings function.   The range of the savings function is the set of all values that will occur in the account. The smallest value that will occur is $1000, and the largest value that will occur is $4,650. That means that the range is the set of all numbers between those values. In interval notation, this is .   The question of the range in that example is more complex. In words, a number will be in the range of our savings function if there is that amount in the safe at some year between 0 and 10.  If you think about it, you'll never have a value of $900 in your account since it starts at $1000 and increases. You'll also never have $1,000,000 in your account, since you are only adding about a dollar a day for 10 years. In other words, the numbers 900 and $1,000,000 are not in the range of our savings function.  On the other hand, the value $1000 will definitely be in the range because you start on the first day of the first year with dollars in your account. And $4,650 will be in the range because you end the 10th year with in your account. Finally, every value between 1000 and 4650 will also be in the range, because you are continuously adding money to the account. But does that mean only the values for whole number years? What about fractional years? To answer that question, it helps to look at the graph of the savings function.     In the graph of our function, we see that the value is added continuously (uniformly), so all values between 1000 and 4650 can be achieved. Thus, the domain is In interval notation, this is     The concept of domain is very important in mathematics. For example, there is an important difference between a function defined using a table, and a function defined using a formula. When you have a function defined using a table, the domain is restricted to the inputs given for all practical purposes. But when you have a function defined using a formula, the domain includes every input where the function is defined.   Functions defined by tables and formulas   In this example, we will look at the difference in working with the same function numerically (when it is given by a few values in a table) and algebraically (using a formula).    Let be defined by the following table     1  2  3  4  5  6  7  8  9  10     11  9  7  5  3  1  -1  -3  -5  -7      Graph this function, and give its domain.   The only thing the problem gives us is 10 different points on the curve, one for each pair of input and output . The best we can do with this information is to plot these points separately.     The function is only defined for , so that is the domain of the function.   Solve the equation .   Look at the table for all values where the corresponding output is greater than . This is true for   Alternatively, draw the line and pick the values where the dot is above the line.      Evaluate where        Solve     , so the solution is     Let    Graph this function, and give its domain.        The function is defined at every point below the curve. That means that the function is also defined at , and at , and so on. To express this, we can say in words the domain is the set of all real numbers between and , including all decimal numbers in between . We can also write this in interval notation by writing that the domain is    Solve the equation .   We can solve the inequality as follows We can also look at the graph of our function, draw the line , and take all values where the function is above the line. From the graph below, this is the set of to the left of 6.5. In interval notation, this is       Evaluate where        Solve    Solving the equation we get We can double check this by plugging our answer back into our function and check that the output is indeed .    There are also certain forbidden computations .    Dividing by Zero: For any numerator , the fraction is undefined . We often express this by writing      Square Roots of Negative Numbers: The square root of any negative number is undefined. For example, .   For the purposes of this course, a function is defined on an input as long as neither of the above computations occur.    Write the domain of in interval notation.   A fraction is defined as long as the denominator .  That means that the fraction is defined if and only if the denominator .  Rewriting this, we see that the the fraction is defined if and only if .  To write this in interval notation, draw the points where the function is defined on a number line. Use an open circle at to exclude that value, and draw a thick line to include all other numbers     We can now read the domain off of our number line. The function is defined on the interval     Write the domain of in interval notation.   A fraction is defined as long as the denominator .  That means that the fraction is defined if and only if the inside .  To write this in interval notation, draw the points where the function is defined on a number line. Use a closed circle at to include that value, and draw a thick line to the right to include all positive numbers.     We can now read the domain off of our number line. The function is defined on the interval     Write the domain of in interval notation.   At first, this problem can be confusing, because it doesn't have any fractions or roots. But actually, that makes this example very easy.  We are able to multiply, add, and subtract any real number. In other words, the function is defined for all inputs. To write this in interval notation, fill in the entire real line.     We can now read the domain off of our number line. The function is defined on the interval         Graphs of Functions  Nothing is truly constant in economics, business, and life. Time and quantities change, and things like cost, revenue and profit change along with them.  In terms of functions, we can say that changing the input changes the output . On a graph, that means that moving the input left and right causes the output to go up and down.    Here is a static version of the interactive graphic above.      Reading graphs dynamically will play an essential role in the course, beginning in . But this skill also plays an important role in answering much more basic questions about graphs.    The graph of a function is given below.       Compute , , , and .    , , , and     For what is ? For what is ? For what is ?    when or when or when .   when or when .   when .      Remember that the equation means that you are looking for the inputs  which correspond to an output of . Looking at the graph, we see that and that and that . That means that the solution set is .    Note: Endpoints require special care. In this case, there was a filled in dot at the point , which means that is defined and equal to 2. If there was an open circle at the point, then the function would be defined near  , but not at  .   Similarly, solving the equation means finding the inputs that correspond to an output (height) of 3. Looking at the graph, we see that and . That means that the solutions set is   Finally, solving means finding the inputs that have a height of zero. Looking at the graph, this happens only for .    For what is ?   The output of the function is strictly less than 2 on the set , or equivalently when .      Remember that the equation means that you are looking for the inputs  which correspond to an output of strictly less than  . To understand this inequality, follow the graph of the function, moving through -values from left to right.  Above , the height is which is less than . Moving right, the height of the function increases, but stays below until we reach . That means that the function is less than or equal to 2 on the interval . But because we want the height to be strictly less than 2, we must exclude 1, giving us the interval .  Similarly, the height is also less than 2 between and , and equal to 2 at those endpoints, so the function is strictly less than 2 on the interval   Putting it all together, we have that on the set , or equivalently when .    For what is ?   Remember that the equation means that you are looking for the inputs  which correspond to an output of less than or equal to  . This happens for values of satisfying . In interval notation, this corresponds to the set .        For what is ?   The inequality is true for all inputs that correspond to an output that is strictly greater than 0. This is true for all values of  except  . So this is true for values of in the interval .    What is the domain and range of ?   The domain of is the set of -values where the function is defined. In this example, the function is defined starting at and stopping at . Therefore the domain is .  The range of is the set of -values that are output by the function. Looking at the function, note that you can achieve outputs as small as (at ) and as large as (at ), as well as every output between those -values. Furthermore, no larger or smaller can be achieved. As a result, the range of the function is the interval .     "
},
{
  "id": "ex-totalcost1",
  "level": "2",
  "url": "ch-functions.html#ex-totalcost1",
  "type": "Exploration",
  "number": "1.1",
  "title": "",
  "body": "  If you are manufacturing t-shirts, then the total cost will be a function of the number of items you make. This is because there will be a rule which, given of the number of items to be made (the input) tells you a unique total cost in $ (the output).  If represents the number of items, we often write to denote the total cost of these items.    Write the mathematical expression that says \"the cumulative cost of making 97 items costs $350.42\"        Translate the statment into natural language.   This statement says that the cumulative cost of making 52 items is $253.19.    Write a mathematical expression that describes the cost of items 53-97 only . Use the information from the previous parts to find the cost of these items.   We have seen already that tells us the cost of items 0-97, and that tells us the cost of items 0-52.  To find the cost of only items 53-97, we must subtract the cost of items 0-52 from the cost of items 0-97. Mathematically, this is written The total cost of items 53-97 is $97.23.   "
},
{
  "id": "example_function_notation_and_investment",
  "level": "2",
  "url": "ch-functions.html#example_function_notation_and_investment",
  "type": "Example",
  "number": "1.1",
  "title": "Function notation and a simple investment..",
  "body": " Function notation and a simple investment.  You begin with $1000 in a safe, and add $365 each year, spread out evenly over the year. Furthermore, you commit to keeping this up for ten years. You want to study the value in the safe as a function of time.  To allow the amount of time to vary, we introduce an independent variable. Often, we use for the independent variable, which in this case is time. We also often use for the dependent variable, which in this case is the amount saved. Although are common variables, we could also have chosen other letters, such as for value and for time.  Putting this together, we get Reading from left to right, this says that the output balance in $ is equal to a function of the input time , and that we will use the letter to refer this function.  It also says that this function is defined by a rule , which says to take the number of years , to multiply that by 365, and then to add $1000.  Finally, that sentence says that this rule applies only when the input is in the closed interval , which means that can be any number in the interval . In other words, this rule specifies its domain .  Because our savings are spread out evenly over the year , we can find the value of our savings after four and a half years , as well as finding the value after three years exactly. In other words, the domain of our savings function contains decimals like years, as well as whole numbers like years. This even will us to find the amount in the safe after  days . Assuming that there are 365 days in a year, day happens at year  .  "
},
{
  "id": "ex-savedaily",
  "level": "2",
  "url": "ch-functions.html#ex-savedaily",
  "type": "Exploration",
  "number": "1.2",
  "title": "",
  "body": "  Suppose that you begin with $1000 in a safe, and add $365 each year for ten years, spread out evenly over the year.    Write the equation for the value in the safe as a function of time.   This problem does not specify the variables that we should use for our function. If represents value and represents time in years, then we have the same equation tjat that we found in . If we instead used for value and for time, the equation would become We could also use any other variables we decided were most appropriate.    Graph the value of your savings as a function of time.   We are told that this rule only applies between year and year . That means that we should start our graph at , and end it at . In this case, the value is a linear function, so we can complete the graph by connecting these points.          Find the value of savings after four and a half years.   We know the value after years is equal to . To find the value after years, we simply compute .    Find the value of savings after 40 days .   We know the value after years is equal to .  To apply this rule, we must first convert 40 days to years . In a standard calendar year, there are 365 days, so 1 day = 1\/365 year. So day 40 is just a little bit over 10% of a year. More precisely, we can do a unit conversion as follows We can now plug this year into our value function After 40 days, the value will be approximately $1040.   "
},
{
  "id": "def-domainrange",
  "level": "2",
  "url": "ch-functions.html#def-domainrange",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": "  The domain of a function is the set of inputs where the rule is defined.  The range of a function is the set of all outputs that occur.   "
},
{
  "id": "sec-function-concepts-9",
  "level": "2",
  "url": "ch-functions.html#sec-function-concepts-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "applied domain "
},
{
  "id": "ex-savedaily2",
  "level": "2",
  "url": "ch-functions.html#ex-savedaily2",
  "type": "Exploration",
  "number": "1.3",
  "title": "",
  "body": "  This example continues . In that example, we started with $1000 in savings and added $365 per year for 10 years, spread evenly across the whole year.    Find the domain of the savings function.   In , we are explicitly told that our savings function is not defined before year 0, and not defined after year 10. In other words, we are explicitly told that the domain of that function is the interval , or equivalently, the set     Find the range of the savings function.   The range of the savings function is the set of all values that will occur in the account. The smallest value that will occur is $1000, and the largest value that will occur is $4,650. That means that the range is the set of all numbers between those values. In interval notation, this is .   The question of the range in that example is more complex. In words, a number will be in the range of our savings function if there is that amount in the safe at some year between 0 and 10.  If you think about it, you'll never have a value of $900 in your account since it starts at $1000 and increases. You'll also never have $1,000,000 in your account, since you are only adding about a dollar a day for 10 years. In other words, the numbers 900 and $1,000,000 are not in the range of our savings function.  On the other hand, the value $1000 will definitely be in the range because you start on the first day of the first year with dollars in your account. And $4,650 will be in the range because you end the 10th year with in your account. Finally, every value between 1000 and 4650 will also be in the range, because you are continuously adding money to the account. But does that mean only the values for whole number years? What about fractional years? To answer that question, it helps to look at the graph of the savings function.     In the graph of our function, we see that the value is added continuously (uniformly), so all values between 1000 and 4650 can be achieved. Thus, the domain is In interval notation, this is    "
},
{
  "id": "ex_domaintablevsfmla",
  "level": "2",
  "url": "ch-functions.html#ex_domaintablevsfmla",
  "type": "Exploration",
  "number": "1.4",
  "title": "Functions defined by tables and formulas.",
  "body": " Functions defined by tables and formulas   In this example, we will look at the difference in working with the same function numerically (when it is given by a few values in a table) and algebraically (using a formula).    Let be defined by the following table     1  2  3  4  5  6  7  8  9  10     11  9  7  5  3  1  -1  -3  -5  -7      Graph this function, and give its domain.   The only thing the problem gives us is 10 different points on the curve, one for each pair of input and output . The best we can do with this information is to plot these points separately.     The function is only defined for , so that is the domain of the function.   Solve the equation .   Look at the table for all values where the corresponding output is greater than . This is true for   Alternatively, draw the line and pick the values where the dot is above the line.      Evaluate where        Solve     , so the solution is     Let    Graph this function, and give its domain.        The function is defined at every point below the curve. That means that the function is also defined at , and at , and so on. To express this, we can say in words the domain is the set of all real numbers between and , including all decimal numbers in between . We can also write this in interval notation by writing that the domain is    Solve the equation .   We can solve the inequality as follows We can also look at the graph of our function, draw the line , and take all values where the function is above the line. From the graph below, this is the set of to the left of 6.5. In interval notation, this is       Evaluate where        Solve    Solving the equation we get We can double check this by plugging our answer back into our function and check that the output is indeed .   "
},
{
  "id": "ex-finddomainfromrule",
  "level": "2",
  "url": "ch-functions.html#ex-finddomainfromrule",
  "type": "Exploration",
  "number": "1.5",
  "title": "",
  "body": "  Write the domain of in interval notation.   A fraction is defined as long as the denominator .  That means that the fraction is defined if and only if the denominator .  Rewriting this, we see that the the fraction is defined if and only if .  To write this in interval notation, draw the points where the function is defined on a number line. Use an open circle at to exclude that value, and draw a thick line to include all other numbers     We can now read the domain off of our number line. The function is defined on the interval     Write the domain of in interval notation.   A fraction is defined as long as the denominator .  That means that the fraction is defined if and only if the inside .  To write this in interval notation, draw the points where the function is defined on a number line. Use a closed circle at to include that value, and draw a thick line to the right to include all positive numbers.     We can now read the domain off of our number line. The function is defined on the interval     Write the domain of in interval notation.   At first, this problem can be confusing, because it doesn't have any fractions or roots. But actually, that makes this example very easy.  We are able to multiply, add, and subtract any real number. In other words, the function is defined for all inputs. To write this in interval notation, fill in the entire real line.     We can now read the domain off of our number line. The function is defined on the interval    "
},
{
  "id": "sec-functions-readinggraphs-5",
  "level": "2",
  "url": "ch-functions.html#sec-functions-readinggraphs-5",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": " Here is a static version of the interactive graphic above.     "
},
{
  "id": "ex-reading_graphs",
  "level": "2",
  "url": "ch-functions.html#ex-reading_graphs",
  "type": "Exploration",
  "number": "1.6",
  "title": "",
  "body": "  The graph of a function is given below.       Compute , , , and .    , , , and     For what is ? For what is ? For what is ?    when or when or when .   when or when .   when .      Remember that the equation means that you are looking for the inputs  which correspond to an output of . Looking at the graph, we see that and that and that . That means that the solution set is .    Note: Endpoints require special care. In this case, there was a filled in dot at the point , which means that is defined and equal to 2. If there was an open circle at the point, then the function would be defined near  , but not at  .   Similarly, solving the equation means finding the inputs that correspond to an output (height) of 3. Looking at the graph, we see that and . That means that the solutions set is   Finally, solving means finding the inputs that have a height of zero. Looking at the graph, this happens only for .    For what is ?   The output of the function is strictly less than 2 on the set , or equivalently when .      Remember that the equation means that you are looking for the inputs  which correspond to an output of strictly less than  . To understand this inequality, follow the graph of the function, moving through -values from left to right.  Above , the height is which is less than . Moving right, the height of the function increases, but stays below until we reach . That means that the function is less than or equal to 2 on the interval . But because we want the height to be strictly less than 2, we must exclude 1, giving us the interval .  Similarly, the height is also less than 2 between and , and equal to 2 at those endpoints, so the function is strictly less than 2 on the interval   Putting it all together, we have that on the set , or equivalently when .    For what is ?   Remember that the equation means that you are looking for the inputs  which correspond to an output of less than or equal to  . This happens for values of satisfying . In interval notation, this corresponds to the set .        For what is ?   The inequality is true for all inputs that correspond to an output that is strictly greater than 0. This is true for all values of  except  . So this is true for values of in the interval .    What is the domain and range of ?   The domain of is the set of -values where the function is defined. In this example, the function is defined starting at and stopping at . Therefore the domain is .  The range of is the set of -values that are output by the function. Looking at the function, note that you can achieve outputs as small as (at ) and as large as (at ), as well as every output between those -values. Furthermore, no larger or smaller can be achieved. As a result, the range of the function is the interval .   "
},
{
  "id": "ch-combiningfns",
  "level": "1",
  "url": "ch-combiningfns.html",
  "type": "Chapter",
  "number": "2",
  "title": "Working with Functions",
  "body": " Working with Functions   Combining Functions  The big idea behind all of algebra is the use of a symbols to represent a different object. The simplest thing you can do in algebra is to replace the symbol with the value it represents, often called plugging in the value.    Let .    Evaluate , and simplify completely.   The expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, and the simplifying, gives     Evaluate , and simplify completely.   Again, the expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, gives the expression It is very important to include parentheses when you are subtituting with the term .  To simplify this expression, you should separately simplify the first term and the second term. Expanding out (FOIL-ing) the first term gives . Distributing out the second term gives Putting it all together we get  Note: Whenever substituing an expression into another expression, such as when we substitued the simplifications for and above, you must always include parentheses around each term. Above, that helped us remember that we needed to distribute the subtraction to both terms of .    Evaluate , and simplify completely.   Again, the expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, gives the expression We could separately simplify the first and second term as before, or we can do it all together in a single sequence of steps. You can take whichever approach you are most comfortable with.     Note that in our last example, we plugged a expression for x into another expression for x. In the language of , that means we plugged one function into another. In mathematics, we call this process of plugging one function into another \"composing\" the functions.    Let and . Compute .    The problem asks us to evaluate the result of plugging the function into the every occurance of in the equation   First, we can look at , and notice that we have already been told that the expression refers to . As a result, we can replace the argument to as follows   Next, we just replace every ocurance of in the definition with the expression . This gives   Putting it all together, we get     We'll need to do a lot of composition later in the semester. For now, we will use these concepts to practice our algebra skills.    Let . Simplify the following expressions completely                          This expression is slightly more complex. The key idea is to realize that the numerator contains two separate expressions and , and that we have already found that they equal and respectively. Making the appropriate replacements gives Now we can use basic algebra to simplify the expression as before.     The previous example is complicated because it combines a number of different kinds of steps. To see what's going on, it can help to think of these different steps separately.    Let and . Simplify the following expressions completely.        To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra. Note that subtracting both terms of was the same thing as adding and adding a positive         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.   The only way to simplify a fraction is to factor the top and bottom separately, and see if any of the terms cancel. The top factors as . The bottom factors as . Using this, we get Surprisingly, the expression simplifies down to the identifty function         To evaluate the expression , first replace with teh expression . This gives But the expression is just the instruction to take the equation , and to replace each copy of with the expression . This gives . Simplifying this gives     In the examples above, we have seen how to simplify various combinations of functions algebraically.  For a few ways of combining of functions, it is also possible to explain very precisely how the combination changes the graph of the function. Let be the graph of some function, and let be constant numbers.   The graph of is obtained by scaling the graph of by .    The graph of is obtained by scaling the graph of left units when is positive (and right when is negative).    The graph of is obtained by shifting the graph of up by units when is positive (and down when is negative).         *Graphs of Totals and Changes  Many things change over time, such as the cost of gasoline. There are different ways of thinking about describing this change. For example, suppose the price of gas over the course of a single week is given by the following table:   This gives us the total cost of gas per day. There are also another way to think about this: how much does the price change each day? Over the course of the week the price decreases 25 cents, then decreases another 50 cents, then increases 50 cents, then increases , then decreases , and finally increases another 50 cents.  We will write to emphasize that this is the change in price each day in a table.    A Strategy for Computing  In the example above, we described the change in words, and summarized this in a table. But we can also find the change using mathematical language.  Day 1 is a special case. Because it is our first data point, there's nothing to compare it to.  On day 2 our cost was 3.75, and on day 1 our cost was 4. Then the change in y on day 2 is . We can also translate this into function language.   The cost on day 1 is $4, so we write     The cost on day 2 is $3.75, so we write     To compute on day 2, we compute    Repeating this process, we can find for days 3, 4, 5, 6, and 7.  We can also summarize this technique using even more general mathemaitcal language by defining the change in due to changing from to to be the expression    Now we have two tables, which both give functions that describe a different perspective on how the cost of gas changes over time: the total value ( ) of gas graphed with respect to time, and the change in value ( ) graphed with respect to time.  To see how they're related, we can graph both functions side by side:     In the example above, the biggest drop in the total (left) occurs on day 5. This matches the graph on the right, where day 5 has the largest negative movement (change) . On the other hand, there is almost no change on day 2 in the total graph on the left (only a small drop in ), which matches the small value of in the change graph on the right.   Graphs of totals and changes occur in a wide variety of economic, business, and other contexts. But one of the most common and important applications is in the important distinction between debts and deficits .   Debts and Deficits  The US national debt in a given year is the total amount of money that the government owed in that year. The net revenue from a given year is the difference between money taken in (through taxes) and money spent by the government. The government is running an annual deficit if it spends more than it takes in. In other words, having negative net revenue in a given year is the same thing as a positive deficit in that year.  The page https:\/\/datalab.usaspending.gov\/americas-finance-guide\/deficit\/trends\/ lists US budget deficits in trillions of dollars since the year 2000, rounded to two decimal places. The same page indicates that the US debt in 2000 was 5.65 trillions.  As before, we can compute the debt for each year since 2000 by starting with 5.65 and repeatedly adding the for each year.  Note: Actually, the debt is always more than the sum of the deficits, since the government must also pay interest on the money it borrows to cover a deficit. The true debt for each year is shown using a red dot. The actual value of the debt (not adjusted for inflation) can be found at . This gives us our familiar graphs of the total and change .      In most examples, we will only be given one of these types of graphs, and we will need to create the other type of graph. In the next example you are only given the graph of the total value ( ), and asked to find the graph of the change ( ).   Using Total Value to Compute Change   The graph of gas price as a function of the day is given below on the left.       What is the cost of gas (y) on days 5 and 6? What is the change of cost ( ) between days 5 and 6?   From our graph, we see that and that . That means that the change is     Write down a table giving the actual price and change in price on all seven days.        Graph the Change in Cost function. (Use the graph provided on the right).        Often, we are working with formulas that define (or model) the quantity of interest.   Changes and Formulas   Suppose that on day , the value of a certain stock is given by .    Use the formula you are given to fill in the following table. Note that the difference between consecutive days is given by .    Hint: You can use the Table mode of a graphing calculator to speed this up significantly.        Note that the change implicitly depends on the distance . Here, all our x values are consecutive, but you could imagine computing (the change in ) in different increments, such as for .  Using the same function as above, complete the following table. Note that the difference between consecutive days is now given by .            *Connecting and   This section is inspired by Thompson's Calculus Made Easy    We can now introduce one of the central ideas in calculus, which we will come back in more detail in Part III of the class. For now, our main goal is to better see the connection between change graphs (which have clear economic and business applications) and functions and their combinations (which does not).  There are three key ideas.   The independent variable and dependent variable both change and grow.    The change in input is written (denoted) , and the change in output is written     Because and are related by some function , then and are aso related.   Our goal is to understand how to find from and and, eventually, to understand the relationship between and .  We can make these ideas precise in a definition    Given a function and two inputs , and corresponding outputs and , we say that the change in between and is written . There are three different, but equivalent, ways that we will think about  These first two are saying the same thing because we always write and . We need the third equation when we only know only and , but not . In that case, we solve for , and compute .      Suppose that , that and are two unknown inputs, and that is the change in input.    Find the value of the function at input    To find the value of at , just plug this value into our function      Find the value of the function at input .   As before, we could just plug into our function to get But we can get a more informative answer by using the fact that because , then . Plugging this into our equation gives     Find in terms of and    Recall that is just the change in that occurs as a result of changing the input from to . Mathematically, this gives us Using our work above, we know and that . This gives us We now have a formula for how the change in output depends on the change in input     Find an equation for .   We have already see that We can factor a term of out of the right hand side. Now, we can divide both sides by to get a on the left hand side. We will see what this term really means later in the course, when we discuss rates of change and slopes.    In the next chapter, we will see a special case of when we review linear functions. We will also introduce a number of functions that play an important role in economics and business. We close with a quick example using the total cost function     Suppose that gives the total cost of purchasing barrels of oil.  In the past, you have purchased barrels of oil each month. But now you are thinking of buying a bit more oil. You want to know how much your costs will change as a result of this increase in purchase volume.    Find the cost of barrels of oil.        Find the change in cost between barrels and barrels.   The formula for change in cost is Here, the first cost is the cost of 300 barrels The second cost is the cost of 600 barrels The change in the cost is therefore The additional barrels will increase the total cost by $600 (an average of $6 per barrel).    Suppose you want to increase your purchase volume from by barrels. What is the change in cost going to be?   We want to compare the cost of and barrels of oil. We can compute the costs separately, and then subtract them. Subtracting these total costs gives us the change in cost The cost will increase dollars    You are not sure how much you want to increase the purchase by. In other words, , but is unknown. Find an equation for the change in cost .   We want to find . We know that , but we do not know . Therefore, we must write   We can now compute and  and We have found that We can now compute     You are not sure how much you want to increase the purchase by. In other words, , but is unknown. Find an equation for .   We found above that for , , and unknown (arbitarary) that To find , we first need to factor out of every term on the right side. Now we can divide both sides by      You want to look at how changing quantity impacts the change in cost in general. In other words, find a formula for and terms of an unknown starting quantity and unknown change .   We want to find . We do not know , so we must write   We can now compute and  and We have found that We can now compute To find , we need to factor a out of every term on the right, and then divide by it.       "
},
{
  "id": "ex-combiningfunctions1",
  "level": "2",
  "url": "ch-combiningfns.html#ex-combiningfunctions1",
  "type": "Exploration",
  "number": "2.1",
  "title": "",
  "body": "  Let .    Evaluate , and simplify completely.   The expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, and the simplifying, gives     Evaluate , and simplify completely.   Again, the expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, gives the expression It is very important to include parentheses when you are subtituting with the term .  To simplify this expression, you should separately simplify the first term and the second term. Expanding out (FOIL-ing) the first term gives . Distributing out the second term gives Putting it all together we get  Note: Whenever substituing an expression into another expression, such as when we substitued the simplifications for and above, you must always include parentheses around each term. Above, that helped us remember that we needed to distribute the subtraction to both terms of .    Evaluate , and simplify completely.   Again, the expression is really an instruction to take the definition of , and to replace every occurance of with the value . Performing this subsitution, gives the expression We could separately simplify the first and second term as before, or we can do it all together in a single sequence of steps. You can take whichever approach you are most comfortable with.    "
},
{
  "id": "ex-combiningfunctions2",
  "level": "2",
  "url": "ch-combiningfns.html#ex-combiningfunctions2",
  "type": "Exploration",
  "number": "2.2",
  "title": "",
  "body": "  Let and . Compute .    The problem asks us to evaluate the result of plugging the function into the every occurance of in the equation   First, we can look at , and notice that we have already been told that the expression refers to . As a result, we can replace the argument to as follows   Next, we just replace every ocurance of in the definition with the expression . This gives   Putting it all together, we get    "
},
{
  "id": "ex-simplifyingfunctions1",
  "level": "2",
  "url": "ch-combiningfns.html#ex-simplifyingfunctions1",
  "type": "Exploration",
  "number": "2.3",
  "title": "",
  "body": "  Let . Simplify the following expressions completely                          This expression is slightly more complex. The key idea is to realize that the numerator contains two separate expressions and , and that we have already found that they equal and respectively. Making the appropriate replacements gives Now we can use basic algebra to simplify the expression as before.    "
},
{
  "id": "ex-combiningfunctions3",
  "level": "2",
  "url": "ch-combiningfns.html#ex-combiningfunctions3",
  "type": "Exploration",
  "number": "2.4",
  "title": "",
  "body": "  Let and . Simplify the following expressions completely.        To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra. Note that subtracting both terms of was the same thing as adding and adding a positive         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.         To evaluate the expression , first replace with the expression , and replace with the expression . Then, simplify the remaining expression completely using algebra.   The only way to simplify a fraction is to factor the top and bottom separately, and see if any of the terms cancel. The top factors as . The bottom factors as . Using this, we get Surprisingly, the expression simplifies down to the identifty function         To evaluate the expression , first replace with teh expression . This gives But the expression is just the instruction to take the equation , and to replace each copy of with the expression . This gives . Simplifying this gives    "
},
{
  "id": "sec_graphsoftotalsandchanges-3",
  "level": "2",
  "url": "ch-combiningfns.html#sec_graphsoftotalsandchanges-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total "
},
{
  "id": "sec_graphsoftotalsandchanges-4",
  "level": "2",
  "url": "ch-combiningfns.html#sec_graphsoftotalsandchanges-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change "
},
{
  "id": "sec_graphsoftotalsandchanges-5",
  "level": "2",
  "url": "ch-combiningfns.html#sec_graphsoftotalsandchanges-5",
  "type": "Example",
  "number": "2.1",
  "title": "A Strategy for Computing <span class=\"process-math\">\\(\\Delta y\\)<\/span>.",
  "body": " A Strategy for Computing  In the example above, we described the change in words, and summarized this in a table. But we can also find the change using mathematical language.  Day 1 is a special case. Because it is our first data point, there's nothing to compare it to.  On day 2 our cost was 3.75, and on day 1 our cost was 4. Then the change in y on day 2 is . We can also translate this into function language.   The cost on day 1 is $4, so we write     The cost on day 2 is $3.75, so we write     To compute on day 2, we compute    Repeating this process, we can find for days 3, 4, 5, 6, and 7.  We can also summarize this technique using even more general mathemaitcal language by defining the change in due to changing from to to be the expression   "
},
{
  "id": "economics-debts-and-deficits-2",
  "level": "2",
  "url": "ch-combiningfns.html#economics-debts-and-deficits-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "US national debt net revenue annual deficit "
},
{
  "id": "economics-debts-and-deficits-4",
  "level": "2",
  "url": "ch-combiningfns.html#economics-debts-and-deficits-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: interest "
},
{
  "id": "ex-using-total-value-to-compute-change",
  "level": "2",
  "url": "ch-combiningfns.html#ex-using-total-value-to-compute-change",
  "type": "Exploration",
  "number": "2.5",
  "title": "Using Total Value to Compute Change.",
  "body": " Using Total Value to Compute Change   The graph of gas price as a function of the day is given below on the left.       What is the cost of gas (y) on days 5 and 6? What is the change of cost ( ) between days 5 and 6?   From our graph, we see that and that . That means that the change is     Write down a table giving the actual price and change in price on all seven days.        Graph the Change in Cost function. (Use the graph provided on the right).       "
},
{
  "id": "ex-changes-and-formulas",
  "level": "2",
  "url": "ch-combiningfns.html#ex-changes-and-formulas",
  "type": "Exploration",
  "number": "2.6",
  "title": "Changes and Formulas.",
  "body": " Changes and Formulas   Suppose that on day , the value of a certain stock is given by .    Use the formula you are given to fill in the following table. Note that the difference between consecutive days is given by .    Hint: You can use the Table mode of a graphing calculator to speed this up significantly.        Note that the change implicitly depends on the distance . Here, all our x values are consecutive, but you could imagine computing (the change in ) in different increments, such as for .  Using the same function as above, complete the following table. Note that the difference between consecutive days is now given by .        "
},
{
  "id": "def-Deltayfromx1x2",
  "level": "2",
  "url": "ch-combiningfns.html#def-Deltayfromx1x2",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": "  Given a function and two inputs , and corresponding outputs and , we say that the change in between and is written . There are three different, but equivalent, ways that we will think about  These first two are saying the same thing because we always write and . We need the third equation when we only know only and , but not . In that case, we solve for , and compute .   "
},
{
  "id": "ex_deltay_variable",
  "level": "2",
  "url": "ch-combiningfns.html#ex_deltay_variable",
  "type": "Exploration",
  "number": "2.7",
  "title": "",
  "body": "  Suppose that , that and are two unknown inputs, and that is the change in input.    Find the value of the function at input    To find the value of at , just plug this value into our function      Find the value of the function at input .   As before, we could just plug into our function to get But we can get a more informative answer by using the fact that because , then . Plugging this into our equation gives     Find in terms of and    Recall that is just the change in that occurs as a result of changing the input from to . Mathematically, this gives us Using our work above, we know and that . This gives us We now have a formula for how the change in output depends on the change in input     Find an equation for .   We have already see that We can factor a term of out of the right hand side. Now, we can divide both sides by to get a on the left hand side. We will see what this term really means later in the course, when we discuss rates of change and slopes.   "
},
{
  "id": "ex_deltay_numerical",
  "level": "2",
  "url": "ch-combiningfns.html#ex_deltay_numerical",
  "type": "Exploration",
  "number": "2.8",
  "title": "",
  "body": "  Suppose that gives the total cost of purchasing barrels of oil.  In the past, you have purchased barrels of oil each month. But now you are thinking of buying a bit more oil. You want to know how much your costs will change as a result of this increase in purchase volume.    Find the cost of barrels of oil.        Find the change in cost between barrels and barrels.   The formula for change in cost is Here, the first cost is the cost of 300 barrels The second cost is the cost of 600 barrels The change in the cost is therefore The additional barrels will increase the total cost by $600 (an average of $6 per barrel).    Suppose you want to increase your purchase volume from by barrels. What is the change in cost going to be?   We want to compare the cost of and barrels of oil. We can compute the costs separately, and then subtract them. Subtracting these total costs gives us the change in cost The cost will increase dollars    You are not sure how much you want to increase the purchase by. In other words, , but is unknown. Find an equation for the change in cost .   We want to find . We know that , but we do not know . Therefore, we must write   We can now compute and  and We have found that We can now compute     You are not sure how much you want to increase the purchase by. In other words, , but is unknown. Find an equation for .   We found above that for , , and unknown (arbitarary) that To find , we first need to factor out of every term on the right side. Now we can divide both sides by      You want to look at how changing quantity impacts the change in cost in general. In other words, find a formula for and terms of an unknown starting quantity and unknown change .   We want to find . We do not know , so we must write   We can now compute and  and We have found that We can now compute To find , we need to factor a out of every term on the right, and then divide by it.     "
},
{
  "id": "ch-algebra_linearfunctions",
  "level": "1",
  "url": "ch-algebra_linearfunctions.html",
  "type": "Chapter",
  "number": "3",
  "title": "Lines and Linear Functions",
  "body": " Lines and Linear Functions   Linear functions show up everywhere, and have very nice mathematical properties. In this section we will begin by briefly reviewing the basic properties of lines. But our main focus will be on introducing and understanding a number of important applications of linear functions to topics in economic and business contexts.       Finding the Equation of a Line     Review the equation for the point-slope form of a line    Find the equation of a line under a variety of circumstances.       Any two points and define a line with slope .  Graphically, we get the following picture.   A line between two points.    The point slope form of a line through the point with slope is the equation   The slope intercept form of a line has the form , and is what you get if you use algebra to simplify the point slope form of the line.      Suppose is a line with slope through the point . Find the equation of this line, and draw the graph of the function.    The point slope form for the line is .  We are also given values for the three constants , , and . Putting this together, we get .        Important: there are is only one independent variable, in the right hand side of the point slope form. The letters , , and all refer to specific numbers .   Whenever you are asked for the equation for a line , you just need to find numerical values for the slope and a single point on the line .    Find the equation for a line through the points and , and draw a graph of this line.    You are asked to find the equation of the line described. That means to find a rule defining the function as   First, write down the point-slope definition of the line. You must find numbers for , for , and for . In the problem, the first point corresponds to and . You could also use the second point , which would correspond to the point and .  To find the slope, use the formula   Plugging this into the point slope form, , you get the point slope form    If you are instead asked for the slope-intercept form  , you just need to simplify the equation you found above        Linear functions arise whenever you have a constant rate of change . We will examine rates in detail beginning in . For now, a few examples will suffice.   Velocity is a rate measured in miles per hour  .    Item Price is a rate measured in dollars per item .       Suppose that you are driving down a state highway at a constant speed with a broken spedometer. At 3:00am, you drive by mile marker 5. Later, at 5:30 am, you drive by mile marker 152.5.  Find an equation for your position (mile marker) as a function of the number of hours since midnight.    Because we are asked to find the equation for a line, we first write down the point-slope form . To fill in the missing information (the red variables), we must find the slope , and a point and .  First, we must convert the information we are given into two points where is a number of hours since midnight, and is a mile marker.  Because 3:00 am is three hours after midnight, the first piece of information corresponds to the point hours and miles.  The second point is more tricky. 5:30 am is five and a half hours after midnight, so this corresponds to the point and   To find the slope of the line, we can now use the formula In other words, our average velocity is 59 miles per hour.  To find the linear equation for our location, we now plug , , and into our equation for point-slope form to get           Use whenever there is a constant rate of change.    Slope =     Slope Intercept Form:  where is the slope and is the -intercept.    Point Slope form:  where is the slope and is any point on the line.        Demand Price and Linear Functions     Introduce the concept of demand price and supply price .    Be able to find an equation for the function describing the demand price and supply price based on a verbal description of the marketplace.    Find the point of equilibrium between a supply and demand function.     We want to use mathematics to study questions in economics and business. To do this, we first need to introduce the key ideas between each of these economics concepts, and then apply mathematical tools to study them.  In the sections that follow, each Application will introduce the concept from a more intuitive and economic perspective, and will connect these applications to the mathematical tools we have in this course. We will then summarize this connection, often with a mathematical Definition .  In the ebook, this gives you two different ways to study this material   Expand and read the Application before moving on to the mathematical Definition and Explorations .    Jump to the mathematical Definition and Explorations first to get a preview of the mathematics first. You'll notice that it hard to understand the question or follow many steps without an understanding of the economic background. Make sure to go back and study the Application to master the context of the question.      Item Price, Scenarios, and Possible Universes  In life, and particularly in business, you need to make specific, concrete decisions. You either hire a new employee or you don't. You take out a loan of one amount, rather than another.  Sometimes, you ask yourself what would happen if I make this decision? Or, once it's too late, you might ask yourself what would have happened if I made that decision?   When comparing mutually exclusive choices, people often use words like scenario or possible universe to identify the different possible options.  There are many ways of trying to decide the price at which you will sell an item. In an auction, buyers each decide the maximum price at which they will buy the item, and the individual who has largest maximum price wins the auction. In a going-out-of-business sale, the company starts with high prices, and progressively lowers the price until everything in the store is sold. Each individual has a different maximum price at which they will purchase the item. The lower the price goes, the more items are sold.   In this class we always assume a company picks a single item price , and everyone pays that single price.  We also assume that you can change the price from day to day, holding all other things equal. That means that fewer items will be sold on a day when the price is high, and more items will be sold on a day when the price is low.   We will focus on how changing the the number of items to be sold impacts the revenue, cost, and profitibility of a business. Because of that, we will generally think of the item price as a function of the number of items .    The demand price function is an equation . Given a number of items that you wish to sell, this function tells you the price that will result in exactly items being sold.    If demand price is linear, we can use the techniques of find an equation for the demand price function.   A Demand Price Function   Suppose that 5 units are sold when the price is 10$\/item, and 15 units are sold when the price is 5 $\/item.     Suppose that demand is linear. Find the equation of the line through these points.    From this problem, we are told that at the first quantity , the item price is . Furthermore, at the second quantity , the item price is . We need to find the equation of the line between these points.  The point slope form of a line is given by the equation . Because the dependent variable here is named instead of , we can write this as .  For the slope of the line, we use   Putting it all together, we get     That function lets us know the price-per-item sold in every possible universe . In other words, the slope of lets us know how much we need to lower the price to move to a possible universe where we sell one additional unit.      Suppose you sell 15 items at 4 $ per item, and 20 items at 2 $ per item. Suppose also that demand price is linear.    Find an equation for price function , and simplify completely. Assume that the price function is linear.   You will need to use point-slope form to find the equation of the function.   We are given two points on the line. When the quantity is , the price is . When the quantity is , the price is .  To find the equation for the line , use the point-slope form .  For the slope of the line, we use   Putting it all together, we get Simplifying this, we get     What item price is required to sell 18 items?   We want to find the price when . In other words, substitute for every occurance of . A price of $\/item will result in 18 items being sold.    How many items will be sold when the price is 8.4 $\/item? What will the revenue be at this price?   We want to find the quantity for which the price is equal to .  In other words, set the price function equal to . Solve for .   Four items will be sold when each item costs dollars.  Because Revenue equals price times quantity ( ), The total revenue will be $33.60.      Supply Price  In any economic transaction, the person selling a product and the person buying a product have very different perspectives.  We already talked about the buyer's perspective when we talked about the demand price. We now want to think about the seller's perspective by studying the supply price.  Any seller has a huge number of options available to them. On any given day, and in any given market, they might decide to create a new product, to cancel an existing product, to go out of business completely, etc.  Furthermore, making one product takes up time and energy that could otherwise be used to create another product. In other words, there are many tradeoffs.  The supply price of a particular number of items refers to the item price that the seller must be able to earn in order to make it worth their time to create that number of items.  For example, you might only be willing to increase production to items if you are sure that you would be able to sell each item for $ each. In this case, the supply price for 100 items is 15$.  Note that a higher item price will encourage sellers to produce more. That means that supply functions are always increasing.     The supply price function is an equation . Given a number of items , this function tells you the minimum item price that will result in a manufacturer being willing to produce items.     Finding a supply price function   Suppose that a manufacturer is willing to supply 2 items when the item price is 5 $ per item, and that they are willing to supply 10 items when the item price is 7 $ per item. Suppose also that supply price is linear. Find an equation for the supply function.    Even though the application is new, the mathematics is identical to the demand price example.  From this problem, we are told the seller will supply the quantity at an item price of . Furthermore, the seller will supply the quantity at an item price of . We need to find the equation of the line between these points.  The point slope form of a line is given by the equation .  For the slope of the line, we use   Putting it all together, we get      Equilibrium quantity and price  Supply price and demand price capture the two sides of the market, the seller (supply) side and the buyer (demand) side.  Because supply price is an increasing function, and demand price is a decreasing function, there will often be a single point where the two curves intersect.  If the curves do not intersect, then the demand price is always lower than the supply price. In other words, there is no quanitity at which the market willing to pay the item price required by the seller. In other words, no items are sold in this case.  The price where this happens is called the equilibrium point , because at this quaintity, the supply price and demand price are equal (in equilibrium).     Suppose you are given a demand price function and a supply price function The equilibrium point is the point where the two curves intersect.  The value of is called the equilibrium quantity, and is the quantity of items sold when supply and demand prices are equal. The value of is the price that results in this equilibrium between supply and demand.     Equilibrium Price and Quantity   In a certain market, 5 units will be sold when the price is 10 $ per item, and 15 units will be sold when the price is 5 $ per item.  Furthermore, the manufacturer is willing to supply 2 items when the item price is 5 $ per item, and that they are willing to supply 10 items when the item price is 7 $ per item.  Find the equilibrium quanitity and price.    The equilibrium price is $ per item , and the equilibrium quantity is items. That means that the equilibrium point is approximately .    We have already found in above that the demand price function correspoinding to and is given by the equation and found in that supply price function corresponding to and is given by .  Furthermore, we know that the equilibrium occurs at the intersection of these lines, which is the point at which the price from both of these equations is equal.  But if the price in both equations is equal, that means that we can set the right hand sides to be equal, giving Now we just need to solve this equation for    In other words, the equilibrium quantity is . To find the equilibrium price, plug this quanitity into either the supply or demand price functions.  Using the supply price function, this gives or equivalently using the demand price function gives In either case, we get that the equilibrium price of $ per item corresponds to an equilibrium quantity of about items. Putting it all together, we get that the equilibrium point is approximately      Demand Price     Economics studies different, incompatable scenarios or possible universes .  In this course, we often compare universes where different numbers of items are sold.    A price function is a rule which when given a number , tells you the item price in the universe where exactly items are sold.    In most of this course, we will take the perspective of a manufacturing company, and the price function represents their market research.  In a few problems, we will study the market from the outside. In these probelms, we will have different price functions for supply and demand.      Each of the concepts we look at in this class will build on the previous ones. That means it is very important to understand both the mathematics and the economic meaning of each concept we study.  In this case, one of the best ways to remember what item price means is to think about it in connection to revenue. The revenue of a scenario is the total amount of money that you take in.  When the item price is fixed, there is a simple equation for this:   When the item price function is linear, the Revenue function is quadratic. In other words, to understand even basic questions about profitability, we will need more powerful mathematical tools. Because of this, we will discuss revenue in more detail in .    Item Cost, Total Cost, and Linear Functions     Introduce the concepts of item cost , fixed cost , variable cost , and total cost     Use the fixed cost and item cost to find a formula for the total cost.    Use the total cost function to find the item cost and fixed cost.     For the purposes of this course, we will generally focus on the perspective of a business that is selling a single product in a specific market. As discussed above, this business will need to understand the demand price function for their market. Multiplying the price times quantity will give the total income, or revenue, of any given scenario.  But in order to create an item for sale to others, the business will also have to purchase materials and labor of its own. We will describe the expense side of the business using the total cost function , usually abbreviated the cost function .       The fixed cost is the amount of money that must be spent before any items can be produced. In other words, the fixed cost is the total cost of 0 items.    The variable cost of an item is the cost of that item alone.    The total cost of items, written , is the cumulative cost of making items numbered through         Finding the total cost function   You are planning to manufacture a new plastic toy. It costs $100 to create a mold, and $5 in plastic, labor, and electricity per unit created.  Find the total cost function .    Once you have purchased the mold, but before you have created the first toy, you have manufactured items, but you have already spent dollars. In other words, the cumulative cost of 0 items is 100$  After you have manufactured item, you have spent $.  After you have manufactured items, you have spent $.  After you have manufactured items, you have spent $.  Looking at the pattern in these equations, you can \"see\" the equation for the total cost function. For any number of items , the total cost will be .   Note: There are several different ways to find a cost function. In this example, we followed an intuitive approach. In and ( ), we will use the point slope form of the line.     Using the total cost function   Above, we found that if it costs $100 to create a mold, and $5 in plastic\/labor\/electricity per unit created, then the total cost to items is   If you (the toy making business) have $300, how many toys can you make?    We want to find the number of items such that the total cost is equal to 300. In other words, we want to solve for such that . But we also know that , so we can subsitute that equation for . We can now solve this as normal You are able to manufacture items.    It is important to see and remember the difference between the concepts of total cost , item cost , and fixed cost . In the next section, we will use graphs of totals and changes to help make these distinctions more vivid.  To get a broader and more intuitive picture of the relationship between item cost and total cost , it is helpful to think about total and change graphs, as in . For example, suppose that is a total cost function, and that its total and change graphs are given below.     In the total graph on the left, we are told the total cost of purchasing a given number of items. For example, purchasing 0 items cost $1. This means that there is a fixed cost of $1 (to set up the assembly line) that must be paid in addition to the cost for actually producing an item.  In the change graph on the right, we are told the change in cost due to each individual item. For simplicity, this is often called the variable cost . For example, items 1 through 5 each have a variable cost of $2.    Suppose that the total cost function is as described using the total and change graph below.       What is the fixed cost? What is the variable cost?   Remember that in the graph above, we are given the cumulative (or total) cost on the left, and the item cost on the right.  Using the graph of on the left, we can see that the cumulative (total) cost of 0 items is $1, the total cost of 1 item is $3, the total cost of 2 items is 5, and so on.  First, this means that we have a fixed cost of $1. Second, this suggests that each additional item increases the cost by $2.  The graph on the right tells us the variable cost for each item. As expected, the cost increases by 2$ for each item, so the variable cost is equal to 2.    Write down a formula for total cost as a function of .   Our strategy is to think through the meaning of the total cost as in .  We have already found above that the fixed cost is , and the variable cost is . Therefore, the total cost is equal to And indeed this matches exactly the line you would get by connecting every dot in the graph on the left.    Write down a formula for change in cost as a function of .   Recall that is the graph on the right, which tells us the item cost.  Looking at the graph, we see that each item contributes the same amount to the total cost. In other words, no matter which item you are asking about, the that item contributes will always be . In other words, is the constant function And indeed connecting the dots in the graph on the right would indeed result in the line .    Explain how relates to the formula for .   In this example, is the slope of the line .  This will always be the case when the total cost function is linear , and the increment is equal to 1.  The goal of calculus is to give a more complete connection between graphs of totals and changes for non-linear functions, and for situations where you are looking at changes with a different value of .    Most total cost functions in this class will be given as word problems. But remembering the meaning of total and change graphs will often make it easier to interpret the different parts of the question correctly.    A certain assembly line costs $5 to set up, and that it costs a total of $9 to make 4 items. Suppose that the cost to produce each item is the same.    Write down a formula for total cost as a function of the number of items .   Because the cost per item is constant, the total cost function is linear.  We must therefore use the point slope form of the line The knowledge that no ( ) items corresponds to a cost of dollars tells us that the point and is on our line.  We are also told that items corresponds to a price of dollars, giving us the second point on our line.  To find , use the slope formula   In other words, the slope is , or 1 $ per item.  Putting it all together, we get the equation or equivalently .    Graph the total cost and the change in cost           You are manufacturing custom dinner plates. The total cost of manufacturing two items is $6, and the total cost of manufacturing four items is $11. The cost per item is constant.    Write down a formula for the total cost as a function of the number of items    Because the cost per item is constant, the total cost function is linear.  We must therefore use the point slope form of the line The knowledge that items corresponds to a cost of dollars tells us that the point and is on our line.  We are also told that items corresponds to a price of dollars, giving us the second point on our line.  To find , use the slope formula   In other words, the slope is , or 2.5 $ per item.  Putting it all together, we get the equation or equivalently .    Graph the total cost and the change in cost .         For Reflection  Suppose that you are looking at a function of linear cost. Can you come up with a formula if you are given only a graph? Why or why not? What if you are given only a graph? Why or why not?    More Realistic Cost Functions are Not Linear  In the examples above, the change in cost, , of producing each additional item has been constant. In other words, in the examples above, creating an additional unit always costs the same amount. When this is the case, the total cost function will be a linear function.  But life is often more complicated. Sometimes, you can get a bulk discount - if you manufacture enough items, the cost per item can come down. Other times, when there is only a limited amount of your raw materials, the item cost can increase as you produce more and more items. Often, you'll run into a more complex combination of these features.  In the remainder of the course, we will use the study of rates of change for nonlinear functions that capture these kinds of economic dynamics. But to give a more complete picture, we will close this section with two examples of non-linear cost functions.   A Non-Linear Cost Function  A non-linear total cost function is given below.     Note that because the total graph on the left is not a line, the change graph on the right is not constant. In fact, the 1st and 10th items cost the most to manufacture, and the 4th-7th items cost the least to manufacture.    Another Non-Linear Cost Function  A second non-linear cost function is given below.     Note again that because the change is not constant, the total graph is not linear. In this example, the 1st and 10th items cost the least to manufacture, and the 5th-6th items cost the most to manufacture.     Think Economically with Units  Suppose that you are planning to publish a new book, and you know from experience that it will cost $20,000 to edit and market the book, and $5 to print each individual copy of the book.  These two costs are very different. The $20,000 is a single cost that applies regardless of the number of books. To highlight this, we call this the fixed cost , and measure this in dollars ($). On the other hand, the $5 cost applies to each item, so we call this the variable cost , and measure this in dollars per item or .  Suppose that we wish to purchase 1,000 books. Then the total cost is . But there is actually something quite important going on here behind the scene. Here, each book is a separate item, so the units of the 1000 is going to be in items .  By using the letter for the number of items, we get an equation that helps us think about the total cost of creating any number of books.  Units of measure gives an easy trick for identifying the parts of the total cost function:    The fixed cost will be in $.    The variable cost will be in .    Use the variable for the number of items.    Units also help us make sense of equations once we've set them up. You can generally think of units of measure like variables, which means you can use algebra to interpret any equation.   Notice that you can only  combine like terms . If you ever find yourself trying to add number items to dollars , then you know that there is a problem!  We can also use this idea to come up with a function for the cost of different numbers of books      items  total cost    5     10              For this reason, we often write the total cost function      Models and Applied Domains  In mathematics, functions are often defined by rules, and the domain of a function is usually set of all the inputs where the rule can be applied. For example, if , then I can apply the rule to any number except zero, because is undefined (or ). This was discussed in greater detail in in general, and in particular.  But some functions are intended to realistic phenomena, such as price, quanitity, and so on. These realistic models impose additional constraints on when a model should be defined.    Suppose that is some function intended to model some application, phenomena, etc.  The applied domain of the function is the set of inputs where the function is both defined and where all of the quanitites involved make real, practical sense.    In this class, we will focus on price functions, and on two specific restrictions.   The quantity cannot be negative. That is, in the implied domain of a price function, we must have     The price cannot be negative. That is, for to be in the implied domain of a price function, we must have       Suppose that defines an item price function. Find the applied (or implied) domain of .   The implied domain of a function is the set of imputs where its applied meaning makes sense.  In the case of item price, it doesn't make sense to look at the price of a negative number of items, and it doesn't make sense to talk about items with a negative prices. That means that the implied domain of price is the set of where and   But we can rewrite the equation as follows: So the item price function makes sense when and . In other words, the applied domain is the interval      "
},
{
  "id": "sec-algebra-linear-equations-2",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-equations-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   Review the equation for the point-slope form of a line    Find the equation of a line under a variety of circumstances.    "
},
{
  "id": "def-point_slope",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-point_slope",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  Any two points and define a line with slope .  Graphically, we get the following picture.   A line between two points.    The point slope form of a line through the point with slope is the equation   The slope intercept form of a line has the form , and is what you get if you use algebra to simplify the point slope form of the line.   "
},
{
  "id": "sec-algebra-linear-equations-4",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-equations-4",
  "type": "Exploration",
  "number": "3.1",
  "title": "",
  "body": "  Suppose is a line with slope through the point . Find the equation of this line, and draw the graph of the function.    The point slope form for the line is .  We are also given values for the three constants , , and . Putting this together, we get .      "
},
{
  "id": "sec-algebra-linear-equations-7",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-equations-7",
  "type": "Exploration",
  "number": "3.2",
  "title": "",
  "body": "  Find the equation for a line through the points and , and draw a graph of this line.    You are asked to find the equation of the line described. That means to find a rule defining the function as   First, write down the point-slope definition of the line. You must find numbers for , for , and for . In the problem, the first point corresponds to and . You could also use the second point , which would correspond to the point and .  To find the slope, use the formula   Plugging this into the point slope form, , you get the point slope form    If you are instead asked for the slope-intercept form  , you just need to simplify the equation you found above       "
},
{
  "id": "sec-algebra-linear-equations-9",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-equations-9",
  "type": "Exploration",
  "number": "3.3",
  "title": "",
  "body": "  Suppose that you are driving down a state highway at a constant speed with a broken spedometer. At 3:00am, you drive by mile marker 5. Later, at 5:30 am, you drive by mile marker 152.5.  Find an equation for your position (mile marker) as a function of the number of hours since midnight.    Because we are asked to find the equation for a line, we first write down the point-slope form . To fill in the missing information (the red variables), we must find the slope , and a point and .  First, we must convert the information we are given into two points where is a number of hours since midnight, and is a mile marker.  Because 3:00 am is three hours after midnight, the first piece of information corresponds to the point hours and miles.  The second point is more tricky. 5:30 am is five and a half hours after midnight, so this corresponds to the point and   To find the slope of the line, we can now use the formula In other words, our average velocity is 59 miles per hour.  To find the linear equation for our location, we now plug , , and into our equation for point-slope form to get    "
},
{
  "id": "sec-algebra-linear-demandprice-2",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-demandprice-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "   Introduce the concept of demand price and supply price .    Be able to find an equation for the function describing the demand price and supply price based on a verbal description of the marketplace.    Find the point of equilibrium between a supply and demand function.    "
},
{
  "id": "sec-algebra-linear-demandprice-6",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-demandprice-6",
  "type": "Application",
  "number": "3.2",
  "title": "Item Price, Scenarios, and Possible Universes.",
  "body": " Item Price, Scenarios, and Possible Universes  In life, and particularly in business, you need to make specific, concrete decisions. You either hire a new employee or you don't. You take out a loan of one amount, rather than another.  Sometimes, you ask yourself what would happen if I make this decision? Or, once it's too late, you might ask yourself what would have happened if I made that decision?   When comparing mutually exclusive choices, people often use words like scenario or possible universe to identify the different possible options.  There are many ways of trying to decide the price at which you will sell an item. In an auction, buyers each decide the maximum price at which they will buy the item, and the individual who has largest maximum price wins the auction. In a going-out-of-business sale, the company starts with high prices, and progressively lowers the price until everything in the store is sold. Each individual has a different maximum price at which they will purchase the item. The lower the price goes, the more items are sold.   In this class we always assume a company picks a single item price , and everyone pays that single price.  We also assume that you can change the price from day to day, holding all other things equal. That means that fewer items will be sold on a day when the price is high, and more items will be sold on a day when the price is low.  "
},
{
  "id": "def-demand",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-demand",
  "type": "Definition",
  "number": "3.3",
  "title": "",
  "body": "  The demand price function is an equation . Given a number of items that you wish to sell, this function tells you the price that will result in exactly items being sold.   "
},
{
  "id": "eg_demandprice_1",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#eg_demandprice_1",
  "type": "Exploration",
  "number": "3.4",
  "title": "A Demand Price Function.",
  "body": " A Demand Price Function   Suppose that 5 units are sold when the price is 10$\/item, and 15 units are sold when the price is 5 $\/item.     Suppose that demand is linear. Find the equation of the line through these points.    From this problem, we are told that at the first quantity , the item price is . Furthermore, at the second quantity , the item price is . We need to find the equation of the line between these points.  The point slope form of a line is given by the equation . Because the dependent variable here is named instead of , we can write this as .  For the slope of the line, we use   Putting it all together, we get     That function lets us know the price-per-item sold in every possible universe . In other words, the slope of lets us know how much we need to lower the price to move to a possible universe where we sell one additional unit.   "
},
{
  "id": "explore_pricefn1",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#explore_pricefn1",
  "type": "Exploration",
  "number": "3.5",
  "title": "",
  "body": "  Suppose you sell 15 items at 4 $ per item, and 20 items at 2 $ per item. Suppose also that demand price is linear.    Find an equation for price function , and simplify completely. Assume that the price function is linear.   You will need to use point-slope form to find the equation of the function.   We are given two points on the line. When the quantity is , the price is . When the quantity is , the price is .  To find the equation for the line , use the point-slope form .  For the slope of the line, we use   Putting it all together, we get Simplifying this, we get     What item price is required to sell 18 items?   We want to find the price when . In other words, substitute for every occurance of . A price of $\/item will result in 18 items being sold.    How many items will be sold when the price is 8.4 $\/item? What will the revenue be at this price?   We want to find the quantity for which the price is equal to .  In other words, set the price function equal to . Solve for .   Four items will be sold when each item costs dollars.  Because Revenue equals price times quantity ( ), The total revenue will be $33.60.    "
},
{
  "id": "sec-algebra-linear-demandprice-12",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-demandprice-12",
  "type": "Application",
  "number": "3.4",
  "title": "Supply Price.",
  "body": " Supply Price  In any economic transaction, the person selling a product and the person buying a product have very different perspectives.  We already talked about the buyer's perspective when we talked about the demand price. We now want to think about the seller's perspective by studying the supply price.  Any seller has a huge number of options available to them. On any given day, and in any given market, they might decide to create a new product, to cancel an existing product, to go out of business completely, etc.  Furthermore, making one product takes up time and energy that could otherwise be used to create another product. In other words, there are many tradeoffs.  The supply price of a particular number of items refers to the item price that the seller must be able to earn in order to make it worth their time to create that number of items.  For example, you might only be willing to increase production to items if you are sure that you would be able to sell each item for $ each. In this case, the supply price for 100 items is 15$.  Note that a higher item price will encourage sellers to produce more. That means that supply functions are always increasing.  "
},
{
  "id": "def-supply",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-supply",
  "type": "Definition",
  "number": "3.5",
  "title": "",
  "body": "  The supply price function is an equation . Given a number of items , this function tells you the minimum item price that will result in a manufacturer being willing to produce items.   "
},
{
  "id": "exploration_supplyprice_1",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#exploration_supplyprice_1",
  "type": "Exploration",
  "number": "3.6",
  "title": "Finding a supply price function.",
  "body": " Finding a supply price function   Suppose that a manufacturer is willing to supply 2 items when the item price is 5 $ per item, and that they are willing to supply 10 items when the item price is 7 $ per item. Suppose also that supply price is linear. Find an equation for the supply function.    Even though the application is new, the mathematics is identical to the demand price example.  From this problem, we are told the seller will supply the quantity at an item price of . Furthermore, the seller will supply the quantity at an item price of . We need to find the equation of the line between these points.  The point slope form of a line is given by the equation .  For the slope of the line, we use   Putting it all together, we get    "
},
{
  "id": "sec-algebra-linear-demandprice-15",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-demandprice-15",
  "type": "Application",
  "number": "3.6",
  "title": "Equilibrium quantity and price.",
  "body": " Equilibrium quantity and price  Supply price and demand price capture the two sides of the market, the seller (supply) side and the buyer (demand) side.  Because supply price is an increasing function, and demand price is a decreasing function, there will often be a single point where the two curves intersect.  If the curves do not intersect, then the demand price is always lower than the supply price. In other words, there is no quanitity at which the market willing to pay the item price required by the seller. In other words, no items are sold in this case.  The price where this happens is called the equilibrium point , because at this quaintity, the supply price and demand price are equal (in equilibrium).  "
},
{
  "id": "def-equlibrium",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-equlibrium",
  "type": "Definition",
  "number": "3.7",
  "title": "",
  "body": "  Suppose you are given a demand price function and a supply price function The equilibrium point is the point where the two curves intersect.  The value of is called the equilibrium quantity, and is the quantity of items sold when supply and demand prices are equal. The value of is the price that results in this equilibrium between supply and demand.   "
},
{
  "id": "ex_supply-demand-equilibrium",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#ex_supply-demand-equilibrium",
  "type": "Exploration",
  "number": "3.7",
  "title": "Equilibrium Price and Quantity.",
  "body": " Equilibrium Price and Quantity   In a certain market, 5 units will be sold when the price is 10 $ per item, and 15 units will be sold when the price is 5 $ per item.  Furthermore, the manufacturer is willing to supply 2 items when the item price is 5 $ per item, and that they are willing to supply 10 items when the item price is 7 $ per item.  Find the equilibrium quanitity and price.    The equilibrium price is $ per item , and the equilibrium quantity is items. That means that the equilibrium point is approximately .    We have already found in above that the demand price function correspoinding to and is given by the equation and found in that supply price function corresponding to and is given by .  Furthermore, we know that the equilibrium occurs at the intersection of these lines, which is the point at which the price from both of these equations is equal.  But if the price in both equations is equal, that means that we can set the right hand sides to be equal, giving Now we just need to solve this equation for    In other words, the equilibrium quantity is . To find the equilibrium price, plug this quanitity into either the supply or demand price functions.  Using the supply price function, this gives or equivalently using the demand price function gives In either case, we get that the equilibrium price of $ per item corresponds to an equilibrium quantity of about items. Putting it all together, we get that the equilibrium point is approximately    "
},
{
  "id": "principle-demand-price-2",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#principle-demand-price-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scenarios possible universes "
},
{
  "id": "sec-algebra-linear-demandprice-20",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algebra-linear-demandprice-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "revenue "
},
{
  "id": "sec-algeba-linear-cost-2",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   Introduce the concepts of item cost , fixed cost , variable cost , and total cost     Use the fixed cost and item cost to find a formula for the total cost.    Use the total cost function to find the item cost and fixed cost.    "
},
{
  "id": "sec-algeba-linear-cost-4",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total cost function cost function "
},
{
  "id": "def-totalcost",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-totalcost",
  "type": "Definition",
  "number": "3.8",
  "title": "",
  "body": "     The fixed cost is the amount of money that must be spent before any items can be produced. In other words, the fixed cost is the total cost of 0 items.    The variable cost of an item is the cost of that item alone.    The total cost of items, written , is the cumulative cost of making items numbered through       "
},
{
  "id": "explore_totalcost1",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#explore_totalcost1",
  "type": "Exploration",
  "number": "3.8",
  "title": "Finding the total cost function.",
  "body": " Finding the total cost function   You are planning to manufacture a new plastic toy. It costs $100 to create a mold, and $5 in plastic, labor, and electricity per unit created.  Find the total cost function .    Once you have purchased the mold, but before you have created the first toy, you have manufactured items, but you have already spent dollars. In other words, the cumulative cost of 0 items is 100$  After you have manufactured item, you have spent $.  After you have manufactured items, you have spent $.  After you have manufactured items, you have spent $.  Looking at the pattern in these equations, you can \"see\" the equation for the total cost function. For any number of items , the total cost will be .   Note: There are several different ways to find a cost function. In this example, we followed an intuitive approach. In and ( ), we will use the point slope form of the line.   "
},
{
  "id": "sec-algeba-linear-cost-7",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-7",
  "type": "Exploration",
  "number": "3.9",
  "title": "Using the total cost function.",
  "body": " Using the total cost function   Above, we found that if it costs $100 to create a mold, and $5 in plastic\/labor\/electricity per unit created, then the total cost to items is   If you (the toy making business) have $300, how many toys can you make?    We want to find the number of items such that the total cost is equal to 300. In other words, we want to solve for such that . But we also know that , so we can subsitute that equation for . We can now solve this as normal You are able to manufacture items.   "
},
{
  "id": "sec-algeba-linear-cost-9",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "item cost total cost "
},
{
  "id": "sec-algeba-linear-cost-11",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total cost fixed cost "
},
{
  "id": "sec-algeba-linear-cost-12",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change variable cost "
},
{
  "id": "sec-algeba-linear-cost-13",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-algeba-linear-cost-13",
  "type": "Exploration",
  "number": "3.10",
  "title": "",
  "body": "  Suppose that the total cost function is as described using the total and change graph below.       What is the fixed cost? What is the variable cost?   Remember that in the graph above, we are given the cumulative (or total) cost on the left, and the item cost on the right.  Using the graph of on the left, we can see that the cumulative (total) cost of 0 items is $1, the total cost of 1 item is $3, the total cost of 2 items is 5, and so on.  First, this means that we have a fixed cost of $1. Second, this suggests that each additional item increases the cost by $2.  The graph on the right tells us the variable cost for each item. As expected, the cost increases by 2$ for each item, so the variable cost is equal to 2.    Write down a formula for total cost as a function of .   Our strategy is to think through the meaning of the total cost as in .  We have already found above that the fixed cost is , and the variable cost is . Therefore, the total cost is equal to And indeed this matches exactly the line you would get by connecting every dot in the graph on the left.    Write down a formula for change in cost as a function of .   Recall that is the graph on the right, which tells us the item cost.  Looking at the graph, we see that each item contributes the same amount to the total cost. In other words, no matter which item you are asking about, the that item contributes will always be . In other words, is the constant function And indeed connecting the dots in the graph on the right would indeed result in the line .    Explain how relates to the formula for .   In this example, is the slope of the line .  This will always be the case when the total cost function is linear , and the increment is equal to 1.  The goal of calculus is to give a more complete connection between graphs of totals and changes for non-linear functions, and for situations where you are looking at changes with a different value of .   "
},
{
  "id": "ex-totalcost2",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#ex-totalcost2",
  "type": "Exploration",
  "number": "3.11",
  "title": "",
  "body": "  A certain assembly line costs $5 to set up, and that it costs a total of $9 to make 4 items. Suppose that the cost to produce each item is the same.    Write down a formula for total cost as a function of the number of items .   Because the cost per item is constant, the total cost function is linear.  We must therefore use the point slope form of the line The knowledge that no ( ) items corresponds to a cost of dollars tells us that the point and is on our line.  We are also told that items corresponds to a price of dollars, giving us the second point on our line.  To find , use the slope formula   In other words, the slope is , or 1 $ per item.  Putting it all together, we get the equation or equivalently .    Graph the total cost and the change in cost        "
},
{
  "id": "ex-totalcost3",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#ex-totalcost3",
  "type": "Exploration",
  "number": "3.12",
  "title": "",
  "body": "  You are manufacturing custom dinner plates. The total cost of manufacturing two items is $6, and the total cost of manufacturing four items is $11. The cost per item is constant.    Write down a formula for the total cost as a function of the number of items    Because the cost per item is constant, the total cost function is linear.  We must therefore use the point slope form of the line The knowledge that items corresponds to a cost of dollars tells us that the point and is on our line.  We are also told that items corresponds to a price of dollars, giving us the second point on our line.  To find , use the slope formula   In other words, the slope is , or 2.5 $ per item.  Putting it all together, we get the equation or equivalently .    Graph the total cost and the change in cost .       "
},
{
  "id": "more-realistic-cost-functions-5",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#more-realistic-cost-functions-5",
  "type": "Example",
  "number": "3.9",
  "title": "A Non-Linear Cost Function.",
  "body": " A Non-Linear Cost Function  A non-linear total cost function is given below.     Note that because the total graph on the left is not a line, the change graph on the right is not constant. In fact, the 1st and 10th items cost the most to manufacture, and the 4th-7th items cost the least to manufacture.  "
},
{
  "id": "more-realistic-cost-functions-6",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#more-realistic-cost-functions-6",
  "type": "Example",
  "number": "3.10",
  "title": "Another Non-Linear Cost Function.",
  "body": " Another Non-Linear Cost Function  A second non-linear cost function is given below.     Note again that because the change is not constant, the total graph is not linear. In this example, the 1st and 10th items cost the least to manufacture, and the 5th-6th items cost the most to manufacture.  "
},
{
  "id": "think-economically-with-units",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#think-economically-with-units",
  "type": "Application",
  "number": "3.11",
  "title": "Think Economically with Units.",
  "body": " Think Economically with Units  Suppose that you are planning to publish a new book, and you know from experience that it will cost $20,000 to edit and market the book, and $5 to print each individual copy of the book.  These two costs are very different. The $20,000 is a single cost that applies regardless of the number of books. To highlight this, we call this the fixed cost , and measure this in dollars ($). On the other hand, the $5 cost applies to each item, so we call this the variable cost , and measure this in dollars per item or .  Suppose that we wish to purchase 1,000 books. Then the total cost is . But there is actually something quite important going on here behind the scene. Here, each book is a separate item, so the units of the 1000 is going to be in items .  By using the letter for the number of items, we get an equation that helps us think about the total cost of creating any number of books.  Units of measure gives an easy trick for identifying the parts of the total cost function:    The fixed cost will be in $.    The variable cost will be in .    Use the variable for the number of items.    Units also help us make sense of equations once we've set them up. You can generally think of units of measure like variables, which means you can use algebra to interpret any equation.   Notice that you can only  combine like terms . If you ever find yourself trying to add number items to dollars , then you know that there is a problem!  We can also use this idea to come up with a function for the cost of different numbers of books      items  total cost    5     10              For this reason, we often write the total cost function   "
},
{
  "id": "def-applied_domain",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#def-applied_domain",
  "type": "Definition",
  "number": "3.13",
  "title": "",
  "body": "  Suppose that is some function intended to model some application, phenomena, etc.  The applied domain of the function is the set of inputs where the function is both defined and where all of the quanitites involved make real, practical sense.   "
},
{
  "id": "sec-applied_domain-6",
  "level": "2",
  "url": "ch-algebra_linearfunctions.html#sec-applied_domain-6",
  "type": "Checkpoint",
  "number": "3.14",
  "title": "",
  "body": " Suppose that defines an item price function. Find the applied (or implied) domain of .   The implied domain of a function is the set of imputs where its applied meaning makes sense.  In the case of item price, it doesn't make sense to look at the price of a negative number of items, and it doesn't make sense to talk about items with a negative prices. That means that the implied domain of price is the set of where and   But we can rewrite the equation as follows: So the item price function makes sense when and . In other words, the applied domain is the interval   "
},
{
  "id": "ch_polynomials_and_rationals",
  "level": "1",
  "url": "ch_polynomials_and_rationals.html",
  "type": "Chapter",
  "number": "4",
  "title": "Polynomial and Rational Functions",
  "body": " Polynomial and Rational Functions   In the previous sections, we have discussed the mathematics of lines, and applications to item price and total cost functions. But linear functions are not powerful enough to model other important concepts, such as revenue and profit . Before we introduce these concepts, we first breifly review quadratic and polynoimal functions.  The concepts in this and the previous chapter are inter-related in complex ways. The following diagram summarizes the relationships between the main concepts in this section and the preceeding section. Refer back to this diagram from time to time to help organize your thoughts.       Quadratic and Polynomial Functions       A monomial with variable is some number times a power of .    A polynomial is a sum of monomials with positive integer powers. The degree of a polynomial is the largest power that occurs.    A quadratic function is a polynomial with maximum degree 2.        Basic polynomial terms      is a monomial of degree 2.     is a monomial of degree 4.     is a polynomial of degree 7.     is a quadratic function.        Let be any function. The roots of are those inputs such . Graphically, the roots of a function are the -values where the function intersects the -axis, and are also called the function's -intercepts .     The Quadratic Formula   If are real numbers, then   In particular, if is any quadratic function, the roots of can be found using the quadratic formula.    The shape of the quadratic is determined by the leading coefficient . The curve opens up if , and the curve opens down if .   Quadratics can open up or down        The vertex of a quadratic is the point in the middle of the curve about which the curve is symmetric. If , it is the point on the curve with the smallest  -value If , it is the point on the curve with the largest  -value.    If the quadratic function has vertex , the biggest or smallest output will be . This extreme output will occur when the input is .   Features of a Quadratic Function       Vertices can be maxima or minima      Most quadratics that we see in this course will pass through the . In this case, there are two ways to find the vertex of a quadratic. One is easier to remember, and one is easier to use.  Notice that quadratic functions have a perfect reflection symmetry through the vertex . That means that the vertex is half way between the two roots, or equivalently the vertice's -value is the average of the roots of the function (if they exist).  That means you can find the -value of a vertex, denoted , by first finding the roots (using the quadratic equation), and then by averaging them. To find the -value of the vertex, plug into the equation for the quadratic. In other words, .  There is also a shortcut for finding the -value of a vertex.    Suppose that is a quadratic function. Then the vertex is located at the point with -value is the average of the -intercepts, and -value , which is equal to .    We have already noticed that is the average of the roots by the symmetry of the quadratic function.  Recall also that the roots of the function are and .  To find the average of those roots, simply compute   To find the -value of the vertex, simply plug into the original function . That gives      Quadratic Functions     Have the form     The curve opens up if , and the curve opens down if .    You can find the -intercepts using the quadratic formula:     The vertex is located at  where is the average of the -intercepts, and .    The max\/min output is , and occurs when the input is .    You can visualize any quadratic as a cup that opens up (if ) or opens down (if ).    You can find the -intercept by evaluating at . In other words, the -intercept is       To solve polynomial inequalities, start with a sketch of the function. The key idea is that any quadratic looks like one of the two examples from . Then, use the formulas above to fill in -intercepts and the coordinate of the vertex. Finally, use your sketch to answer the question.    Let .    Solve    We must solve the equation . We can do this by factoring, or by using the quadratic equation.  Using the quadratic equation , we get that or .  We will evenutally need to solve equations by factoring, so this is a good time to start practicing. We will rewrite the equation . It is easiest to factor when the leading term is just . Here, the leading coefficient is , so we should divide each term on the left by . Essentially, we are \"un-distributing\" the leading term of . Simplifying the equation down, we now get Now we can factor the quadratic inside. We want to find some numbers such that . In other words, we want numbers that add to and multiply to positive . Trying and , we get and as desired. That means we can rewrite our original equation as But the product of two numbers can only equal zero if the individual numbers are zero. That means that the equation is equivalent to either having  or having .  In other words, this is equivalent to having or , which are the two -intercepts of our quadratic.    Find the vertex of .   Remember that there are two ways to find the -value of the vertex.  Because the vertex is the average of the roots, and because we have already found that the roots are and , the vertex has -value .  On the other hand, for quadratics only , we have a nice formula, that   To find the -value of the vertex , just compute      Sketch a graph of .   Recall that the shape of a quadratic depends only on the coefficient of . Because , the graph of the function is a parabola that opens down.  We have also already found the -intercepts and and the vertex . Putting this all together we get the following picture:       Solve the inequality .   To solve this inequality, we first need the graph from the previous step. Notice that solving the equation is the same thing as looking for the values of which result in a height of greater than . Let's look at what this means on the picture:     We can see that the function outputs values strictly greater than if and only if , which corresponds to the interval     Find the maximum -value that the function achieves. At what value does the function achieve this output?   Again, the key is to look at the sketch of the function. Because the coefficient of is negative, the curve opens down, and the largest output occurs at the vertex. We have already shown that the vertex is .  That means a maximum output of occurs at the -value .    In the previous example, we have seen a technique that we will use in a variety of contexts during this course.   Solving Inequalities of Continuous Functions  Suppose that is any function.  To solve an inequality such as , or , follow the following steps:     Solve the inequality .    Draw a number line, and label the -values where the solutions occur.    Notice that you have divided the -axis into several different intervals. Now, look at each interval separately.  For each interval, use a graph, a calculator, or some other technique to decide whether the inequality is true or false on that interval.    Write your final answer down in interval notation, excluding the endpoints (using parentheses).     To solve an inequality like or , repeat the same steps but include the endpoints (using square brackets).     Revenue with Fair Pricing     Revenue is the total amount of money you take in from selling a number of items. In this class, we'll focus on fair pricing - where everything is sold at the same unit price. In this case, we have a simple equation:       In a certain market, you will sell 15 items when the item price is 4 $\/item, and you will sell 20 items when the item price is 2 $\/item.    Find the Revenue in the scenerio (possible universe) where you sell 15 items.   To find revenue, we need to apply . That means we need to multiply quantity and price.  In the scenario (possible universe) where we sell 15 items at 4$\/item, our total revenue will be .    Find the Revenue in the scenerio (possible universe) where you sell 20 items.   Again, we must use .  In the scenario where we sell 20 items at 2$\/item, our total revenue will be .    But there are infinitely many possible universes that we need to compare! When the universe depends on the number of items sold, we often call the quantity .  Find a formula that you the revenue as a function of the number of items to be sold.   To find revenue, we need to apply . That means we need to multiply quantity and price.   In this question, we are told to use to represent the quantity , or number of items.  We must also find the price as a function of . In fact, we have already done that for exactly these numbers in the solution to .  In that example, we used the point-slope form of the line to show that the item price function is .  But we need to find the Revenue , plugging in the above values into the equation .  That means that in any universe , the total revenue will be given by     Once you have found a revenue function, you can answer a range of questions by translating the question into a more familiar algebraic question.    Suppose that the revenue of in the scenario where items are sold is given by the function     Find the scenarios (quantities ) where you make no revenue.   Solve   There are several ways to solve this equation.   Quadratic Equation  Use the quadratic equation with , , and     Solving by Factoring  We know that a product if and only if or . So to solve the equation since we have 0 on the right, we should try factoring the left side. Because both terms have an , we can factor out of both terms.   This product can equal zero if and only if either   or  .  There are two quantities where revenue equals zero. The first point is   To find the second point, solve the second equation for    The revenue equals zero when or .       For what scenarios (values of ) is your revenue positive? Give your answer in interval notation.   The revenue function is a quadratic with negative leading coefficient, so it is a parabola that opens down, which goes through the -axis at the break-even points. This allows us to create a quick sketch of the function.  Using this sketch, we can solve the inequality , and see that it is true for . In interval notation, this is written .       For what scenario (value of ) is your revenue maximized?   Because revenue is a quadratic polynomial with negative leading coefficient, the maximum revenue occurs at the vertex .  Recall also that the x-value of the vertex is located at the average of the two x-interceps. In other words, revenue is maximized at items.    We can now put together everything we have done so far in this class into a single example (exploration). Make sure that you are able to do problems like this on your own, since they are common quiz and exam questions.    Suppose you sell 100 items at 12 $\/item and 500 items at 4 $\/item. Suppose also that price is linear.    Find an equation for price as a function of . Give the units of each number in your equation for your price function .   To find the equation of a linear price function, use the point-slope form of the line Note that we are told that items are sold when the item price is , and that items are sold when the price is .  That gives us a slope Putting it all together we get     Find an equation for total revenue as a function of . What are the units of your total revenue function ?   To find revenue, we need to apply . That means we need to multiply quantity and price.   In this question, we are told to use to represent the quantity , or number of items.  In the first part of this question, we have already found that the price that will result in items being sold is   To find the total Revenue of scenario , plug the above values into the equation .  In any universe , the total revenue will be given by     Evaluate and . What are the units of each of these quantities? What do they mean?   Recall that is the item price at which items will be sold, and will be the total revenue from that scenario.  In the scenario where items are sold, . In other words, each item will be sold for $   In this scenario, the total revenue will be items times dollars, which equals $ of total revenue.  Equivalently, dollars.    Compare the total revenue you can earn from the scenario (possible universe) where you sell 100 units, with the scenario where you sell 500 units, and with the scenario where you sell 600 units. Which of these three scenarios yields the highest total revenue?   We have already seen that . and   Note that you will earn the same amount of revenue from selling items as you will from selling items. However, you will earn even more revenue from selling items.    Find the number (quantity) of items that yields highest total revenue. What item price will result in the highest total revenue? s   Note that the total revenue function is a quadratic function with negative leading coefficient. That means that the largest revenue will occur at the vertex. To find the vertex, either find and average the roots, or use the formula . In this case, The maximum revenue will occur when 350 items are sold.  To find the price at which 350 items are sold, use the item price function. The maximum revenue will occur when the item price is 7 $\/item. The maximum revenue achieved will be 2,450 dollars.     What does the Revenue Function Teach Us?  As soon as you decide on how much you want to sell each item for, and print the price tag, you are locked into that price until you decide to print a new price tag. Because the quantity you sell will change depending on the price you choose, it is important to think through the implications of your choice before you make that decision. In practice, this usually means a multi-step process:    Do market research to decide how many units you are likely to sell at different item prices.    Use this information to get a function for price as a function of the scenario . This gives a model of how the price changes depending on which possible scenario you are in.    The revenue for each scenario is the product of that by the scenario's item price.    You then compare the different values of Revenue , and select the scenario (possible universe) that works best for you. In this case, the meaning of the change in revenue between different values of is a bit complex. Here, represents how much revenue would have changed if you had chosen a different possible universe , by deciding to sell additional units by lowering the fixed unit cost that everyone pays.  In other words, the maximum revenue occurs when increasing the quantity stops increasing the total revenue and starts decreasing the total revenue, because stops being positive and starts being negative. This is an important feature, and we'll come back to this later in the semester.       Graphs of Changes in Time vs Items  You may have noticed a little bit of a change in how we are thinking about price and revenue versus how we thought about gas prices earlier in the semester. The gas prices is a function of time, so the change in gas price simply measures how much the price has changed between two days. But for price and revenue, the different values of correspond to different and incompatible scenarios where you imagine selling a different number of units.  To see how these fit together, imagine you are running a sequence of experiments where on day 1, you set the price so you sell 1 unit. Then, on day 2, you set the price so you sell 2 units, and so on. In this experiment measures the change in revenue as you move between different days, which each correspond to a different scenario (possible universe).  Just remember - with revenue your goal isn't the experiment itself. You want to use this thought experiment to find the single scenerio where you have the best revenue.     Understanding Profit  The most important concept for the applications we will is the idea of different possible universes , which we often call scenarios .  The goal of planning is to figure out what the best possible world would look like, and how to achieve that possible world.  In a market economy, businesses must make a profit , by ensuring that all of the money they take (their total revenue) in is greater than all of the money they spend (their total cost). In this case, finding the best possible world means finding the scenario where the profit is the greatest.    The profit of a particiular possible world is the total revenue of that scenerio minus the total cost of that scenerio. In other words,   Recall that we write to denote the total revenue in the scenerio where items are sold, and to denote the total cost of the scenerio where items are sold. Following that notation, we write for the total profit of this scenerio, and have the equation   You break even when your Revenue equals your Cost. In other words, you break even at those quanitites which make the profit .     Approaching Word Problems  When you read an economics problem, always try to translate it into mathematical language. For example, suppose that you have been asked to find all quantities where you make a profit . You might think through the question as follows:   Remember that we use the variable to represent the quanitity of items sold in any scenerio.    Remember that we write for the total profit of the scenario.     Think carefully and realize that you make a profit if and only if the total profit is greater than 0 .    That means the question is asking you to find an equation for the profit function , and to solve the equation , using the techinques from .        You are developing a new product line. You have already found equations for the total revenue and total cost in a variety of scenarios, based on the total number of items to be sold. Suppose that and     Find an equation for the profit function.   Recall . Write down the definition of profit   Next, replace with and with . Note that the parentheses are very important -- you must subtract both the and the fixed cost .  Finally, simplify the expression     Find the break even points.   Recall that breaking even is the same thing as having . Using the equation above, we want to solve   Recall that we can often solve quadratic equations by factoring or using the quadratic equation. But this case, the function does not factor nicely, so we must use the quadratic equation.  You break even when the quantities are Using a calculator, we see that you break even when or     Sketch a graph of the profit function   You can graph the function using a graphing calculator, or you can use your knowledge of quadratic functions and the -intercepts you have found above.  Because the profit function is a quadratic with negative leading coefficient , it is a parabola that opens down. Furthermore, the parabola goes through the -axis at and , and the parabola is symmetric around the vertex which is half way between those points. Taken together, we get the following image.       Find all quantities where you make a profit. Write your answer in interval notation.   Solve the inequality by looking at the break even points, and the graph of the profit function.  From this graph, we see that the profit is positive when is between and , which is equivalent to having in the interval         To Round or Not to Round?  In the previous example, we found that the break even quantities were or . But you cannot sell units, so what does this answer mean practically?  Unfortunately, this depends a lot on the specific context of your specific application.  In the simple case of $ profit as a result of items given above, you will only be able to make a profit by selling items, items, or items, since any integer larger or smaller than these will result in a negative profit.  But the power of mathematics is that the same tools can be used to answer questions in very different contexts. For example, suppose instead that was the number of thousands of items sold. In other words, suppose that is the profit from selling five thousand items. In that case, you will break even when you sell  thousand items or  thousand items. In that case, you would need to sell between items and items to make a proift.  Other applications require even greater precision. For example, currency exchange rates are often given to at least four decimal places. But what if you are investing millions of dollars in a foreign currency? Then the fifth, sixth, etc decimal places will suddenly be more important.  In a mathematics class, we will generally try to keep as much precision as possible. In any specific application , you should think carefully and consult generally accepted practices related to rounding.     You are planning to open a business selling ornamental pins. After a few weeks of experimenting with the price, you decide that during the average week, you can sell 100 pins at $11 per pin, and 200 pins at $1 per pin. Suppose also that uppose that it costs $500 to rent the production line, and $3 to make each pin.  Finally, after looking at a graph of some additional data, you decide that demand price is a linear function.    Find the item price as a function of the quantity to be sold.   To find the equation of a linear function, use the point-slope form of the line Note that we are told that items are sold when the item price is , and that items are sold when the price is .  That gives us a slope Putting it all together we get     Find the total profit function as a function of the total number of items to be sold.   Recall from that That means to find , we must first find equations for and .  To find the equation for Revenue, recall from that We write for the number of items, and we have already found that the item price is in the scenerio where items are sold. That means we just multiply by to get revenue.   To find the total cost, recall our approach from . If you are going to sell items, you must pay a fixed cost of dollars, as well as $ for each item . That gives us a total cost function   We can now combine the total revenue and total cost functions to get the profit function.     What is the total profit if you sell 100 units? What if you sell no units?   In the scenario (possible universe) where items are sold, the total profit (which includes all revenue minus all cost) will be   In the scenario (possible universe) where items are sold, the total profit (which includes all revenue minus all cost) will be     Find the number of units where you will break even.   To break even is to have exactly zero profit . That means solving the equation You can solve this equation using the quadratic equation or by factoring. This function does not have a nice factorization, so we use the quadratic equation This gives us or     What is the number of units needed to maximize profit? What is the maximum profit?   Because profit is a quadratic that opens down, the maximum profit occurs at the vertex , which is located half way between the two roots.  That means we can find by averaging and  The maximum profit occurs when items are sold.  To find the maximum profit, plug this into the function  The maximum profit you can achieve in any possible world (number of quanitites sold) is $ . That total profit is achieved in the scenario where you set the price so that items are sold.    What is the number of units needed to maximize profit? What is the maximum profit?      Rational Functions    A function is a rational function if can be written as a fraction of polynomials. In other words, a rational function can be written as a fraction where the numerator and denominator and are both polynomials.  Because division by 0 is undefined, there are often values of which make a function undefined . For such an input , we say that .    Every polynomial is a rational function (with denominator ), but not every rational function is a polynomial.   Solving Inequalities of Rational Functions  Suppose that is a rational function. In other words, suppose that where the numerator and denominator and are both polynomials.  To solve an inequality such as , , , or follow the following steps:     Solve the inequality , by finding all inputs that make the numerator  equal to .  Draw a number line, and label the -values where the solutions occur. Use an open circle if the inequality is or , or a closed circle if the inequality is or .    Find any inputs where the function is undefined (such that ). In other words, find all values of which make the denominator  equal .  Label the -values where the function on your number line using open circles.    For each interval, use a graph, a calculator, or some other technique to decide whether the inequality is true or false on that interval.    Write your final answer down in interval notation. include all endpoints with closed circles (use square brackets), and exclude all endpoints with open circles (use parentheses).       "
},
{
  "id": "def-monomial",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-monomial",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "     A monomial with variable is some number times a power of .    A polynomial is a sum of monomials with positive integer powers. The degree of a polynomial is the largest power that occurs.    A quadratic function is a polynomial with maximum degree 2.      "
},
{
  "id": "sec_quadratic_functions-3",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#sec_quadratic_functions-3",
  "type": "Example",
  "number": "4.2",
  "title": "Basic polynomial terms.",
  "body": " Basic polynomial terms      is a monomial of degree 2.     is a monomial of degree 4.     is a polynomial of degree 7.     is a quadratic function.     "
},
{
  "id": "def-roots",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-roots",
  "type": "Definition",
  "number": "4.3",
  "title": "",
  "body": "  Let be any function. The roots of are those inputs such . Graphically, the roots of a function are the -values where the function intersects the -axis, and are also called the function's -intercepts .   "
},
{
  "id": "prop-quadraticroot",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#prop-quadraticroot",
  "type": "Proposition",
  "number": "4.4",
  "title": "The Quadratic Formula.",
  "body": " The Quadratic Formula   If are real numbers, then   In particular, if is any quadratic function, the roots of can be found using the quadratic formula.   "
},
{
  "id": "eg_polynomialoptions",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#eg_polynomialoptions",
  "type": "Example",
  "number": "4.5",
  "title": "Quadratics can open up or down.",
  "body": " Quadratics can open up or down     "
},
{
  "id": "def-vertex",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-vertex",
  "type": "Definition",
  "number": "4.6",
  "title": "",
  "body": "  The vertex of a quadratic is the point in the middle of the curve about which the curve is symmetric. If , it is the point on the curve with the smallest  -value If , it is the point on the curve with the largest  -value.   "
},
{
  "id": "fig_quadraticfeatures",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#fig_quadraticfeatures",
  "type": "Figure",
  "number": "4.7",
  "title": "",
  "body": " Features of a Quadratic Function     "
},
{
  "id": "sec_quadratic_functions-11",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#sec_quadratic_functions-11",
  "type": "Example",
  "number": "4.8",
  "title": "Vertices can be maxima or minima.",
  "body": " Vertices can be maxima or minima     "
},
{
  "id": "prop-quadraticvertex",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#prop-quadraticvertex",
  "type": "Proposition",
  "number": "4.9",
  "title": "",
  "body": "  Suppose that is a quadratic function. Then the vertex is located at the point with -value is the average of the -intercepts, and -value , which is equal to .    We have already noticed that is the average of the roots by the symmetry of the quadratic function.  Recall also that the roots of the function are and .  To find the average of those roots, simply compute   To find the -value of the vertex, simply plug into the original function . That gives    "
},
{
  "id": "ex_analyze_polynomial",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#ex_analyze_polynomial",
  "type": "Exploration",
  "number": "4.1",
  "title": "",
  "body": "  Let .    Solve    We must solve the equation . We can do this by factoring, or by using the quadratic equation.  Using the quadratic equation , we get that or .  We will evenutally need to solve equations by factoring, so this is a good time to start practicing. We will rewrite the equation . It is easiest to factor when the leading term is just . Here, the leading coefficient is , so we should divide each term on the left by . Essentially, we are \"un-distributing\" the leading term of . Simplifying the equation down, we now get Now we can factor the quadratic inside. We want to find some numbers such that . In other words, we want numbers that add to and multiply to positive . Trying and , we get and as desired. That means we can rewrite our original equation as But the product of two numbers can only equal zero if the individual numbers are zero. That means that the equation is equivalent to either having  or having .  In other words, this is equivalent to having or , which are the two -intercepts of our quadratic.    Find the vertex of .   Remember that there are two ways to find the -value of the vertex.  Because the vertex is the average of the roots, and because we have already found that the roots are and , the vertex has -value .  On the other hand, for quadratics only , we have a nice formula, that   To find the -value of the vertex , just compute      Sketch a graph of .   Recall that the shape of a quadratic depends only on the coefficient of . Because , the graph of the function is a parabola that opens down.  We have also already found the -intercepts and and the vertex . Putting this all together we get the following picture:       Solve the inequality .   To solve this inequality, we first need the graph from the previous step. Notice that solving the equation is the same thing as looking for the values of which result in a height of greater than . Let's look at what this means on the picture:     We can see that the function outputs values strictly greater than if and only if , which corresponds to the interval     Find the maximum -value that the function achieves. At what value does the function achieve this output?   Again, the key is to look at the sketch of the function. Because the coefficient of is negative, the curve opens down, and the largest output occurs at the vertex. We have already shown that the vertex is .  That means a maximum output of occurs at the -value .   "
},
{
  "id": "def-revenue",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-revenue",
  "type": "Definition",
  "number": "4.10",
  "title": "",
  "body": "   Revenue is the total amount of money you take in from selling a number of items. In this class, we'll focus on fair pricing - where everything is sold at the same unit price. In this case, we have a simple equation:    "
},
{
  "id": "explore_revenuefromprofit",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#explore_revenuefromprofit",
  "type": "Exploration",
  "number": "4.2",
  "title": "",
  "body": "  In a certain market, you will sell 15 items when the item price is 4 $\/item, and you will sell 20 items when the item price is 2 $\/item.    Find the Revenue in the scenerio (possible universe) where you sell 15 items.   To find revenue, we need to apply . That means we need to multiply quantity and price.  In the scenario (possible universe) where we sell 15 items at 4$\/item, our total revenue will be .    Find the Revenue in the scenerio (possible universe) where you sell 20 items.   Again, we must use .  In the scenario where we sell 20 items at 2$\/item, our total revenue will be .    But there are infinitely many possible universes that we need to compare! When the universe depends on the number of items sold, we often call the quantity .  Find a formula that you the revenue as a function of the number of items to be sold.   To find revenue, we need to apply . That means we need to multiply quantity and price.   In this question, we are told to use to represent the quantity , or number of items.  We must also find the price as a function of . In fact, we have already done that for exactly these numbers in the solution to .  In that example, we used the point-slope form of the line to show that the item price function is .  But we need to find the Revenue , plugging in the above values into the equation .  That means that in any universe , the total revenue will be given by    "
},
{
  "id": "explore_analyzerevenue1",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#explore_analyzerevenue1",
  "type": "Exploration",
  "number": "4.3",
  "title": "",
  "body": "  Suppose that the revenue of in the scenario where items are sold is given by the function     Find the scenarios (quantities ) where you make no revenue.   Solve   There are several ways to solve this equation.   Quadratic Equation  Use the quadratic equation with , , and     Solving by Factoring  We know that a product if and only if or . So to solve the equation since we have 0 on the right, we should try factoring the left side. Because both terms have an , we can factor out of both terms.   This product can equal zero if and only if either   or  .  There are two quantities where revenue equals zero. The first point is   To find the second point, solve the second equation for    The revenue equals zero when or .       For what scenarios (values of ) is your revenue positive? Give your answer in interval notation.   The revenue function is a quadratic with negative leading coefficient, so it is a parabola that opens down, which goes through the -axis at the break-even points. This allows us to create a quick sketch of the function.  Using this sketch, we can solve the inequality , and see that it is true for . In interval notation, this is written .       For what scenario (value of ) is your revenue maximized?   Because revenue is a quadratic polynomial with negative leading coefficient, the maximum revenue occurs at the vertex .  Recall also that the x-value of the vertex is located at the average of the two x-interceps. In other words, revenue is maximized at items.   "
},
{
  "id": "explore_revenuefrompricedata",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#explore_revenuefrompricedata",
  "type": "Exploration",
  "number": "4.4",
  "title": "",
  "body": "  Suppose you sell 100 items at 12 $\/item and 500 items at 4 $\/item. Suppose also that price is linear.    Find an equation for price as a function of . Give the units of each number in your equation for your price function .   To find the equation of a linear price function, use the point-slope form of the line Note that we are told that items are sold when the item price is , and that items are sold when the price is .  That gives us a slope Putting it all together we get     Find an equation for total revenue as a function of . What are the units of your total revenue function ?   To find revenue, we need to apply . That means we need to multiply quantity and price.   In this question, we are told to use to represent the quantity , or number of items.  In the first part of this question, we have already found that the price that will result in items being sold is   To find the total Revenue of scenario , plug the above values into the equation .  In any universe , the total revenue will be given by     Evaluate and . What are the units of each of these quantities? What do they mean?   Recall that is the item price at which items will be sold, and will be the total revenue from that scenario.  In the scenario where items are sold, . In other words, each item will be sold for $   In this scenario, the total revenue will be items times dollars, which equals $ of total revenue.  Equivalently, dollars.    Compare the total revenue you can earn from the scenario (possible universe) where you sell 100 units, with the scenario where you sell 500 units, and with the scenario where you sell 600 units. Which of these three scenarios yields the highest total revenue?   We have already seen that . and   Note that you will earn the same amount of revenue from selling items as you will from selling items. However, you will earn even more revenue from selling items.    Find the number (quantity) of items that yields highest total revenue. What item price will result in the highest total revenue? s   Note that the total revenue function is a quadratic function with negative leading coefficient. That means that the largest revenue will occur at the vertex. To find the vertex, either find and average the roots, or use the formula . In this case, The maximum revenue will occur when 350 items are sold.  To find the price at which 350 items are sold, use the item price function. The maximum revenue will occur when the item price is 7 $\/item. The maximum revenue achieved will be 2,450 dollars.   "
},
{
  "id": "sect_whatdoesrevenueteach",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#sect_whatdoesrevenueteach",
  "type": "Application",
  "number": "4.11",
  "title": "What does the Revenue Function Teach Us?",
  "body": " What does the Revenue Function Teach Us?  As soon as you decide on how much you want to sell each item for, and print the price tag, you are locked into that price until you decide to print a new price tag. Because the quantity you sell will change depending on the price you choose, it is important to think through the implications of your choice before you make that decision. In practice, this usually means a multi-step process:    Do market research to decide how many units you are likely to sell at different item prices.    Use this information to get a function for price as a function of the scenario . This gives a model of how the price changes depending on which possible scenario you are in.    The revenue for each scenario is the product of that by the scenario's item price.    You then compare the different values of Revenue , and select the scenario (possible universe) that works best for you. In this case, the meaning of the change in revenue between different values of is a bit complex. Here, represents how much revenue would have changed if you had chosen a different possible universe , by deciding to sell additional units by lowering the fixed unit cost that everyone pays.  In other words, the maximum revenue occurs when increasing the quantity stops increasing the total revenue and starts decreasing the total revenue, because stops being positive and starts being negative. This is an important feature, and we'll come back to this later in the semester.     "
},
{
  "id": "graphsintimevsitems",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#graphsintimevsitems",
  "type": "Application",
  "number": "4.12",
  "title": "Graphs of Changes in Time vs Items.",
  "body": " Graphs of Changes in Time vs Items  You may have noticed a little bit of a change in how we are thinking about price and revenue versus how we thought about gas prices earlier in the semester. The gas prices is a function of time, so the change in gas price simply measures how much the price has changed between two days. But for price and revenue, the different values of correspond to different and incompatible scenarios where you imagine selling a different number of units.  To see how these fit together, imagine you are running a sequence of experiments where on day 1, you set the price so you sell 1 unit. Then, on day 2, you set the price so you sell 2 units, and so on. In this experiment measures the change in revenue as you move between different days, which each correspond to a different scenario (possible universe).  Just remember - with revenue your goal isn't the experiment itself. You want to use this thought experiment to find the single scenerio where you have the best revenue.  "
},
{
  "id": "sec-understandingprofit-4",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#sec-understandingprofit-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "profit "
},
{
  "id": "def-profit",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-profit",
  "type": "Definition",
  "number": "4.13",
  "title": "",
  "body": "  The profit of a particiular possible world is the total revenue of that scenerio minus the total cost of that scenerio. In other words,   Recall that we write to denote the total revenue in the scenerio where items are sold, and to denote the total cost of the scenerio where items are sold. Following that notation, we write for the total profit of this scenerio, and have the equation   You break even when your Revenue equals your Cost. In other words, you break even at those quanitites which make the profit .   "
},
{
  "id": "sec-understandingprofit-6",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#sec-understandingprofit-6",
  "type": "Application",
  "number": "4.14",
  "title": "Approaching Word Problems.",
  "body": " Approaching Word Problems  When you read an economics problem, always try to translate it into mathematical language. For example, suppose that you have been asked to find all quantities where you make a profit . You might think through the question as follows:   Remember that we use the variable to represent the quanitity of items sold in any scenerio.    Remember that we write for the total profit of the scenario.     Think carefully and realize that you make a profit if and only if the total profit is greater than 0 .    That means the question is asking you to find an equation for the profit function , and to solve the equation , using the techinques from .     "
},
{
  "id": "ex_profit_fromRC",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#ex_profit_fromRC",
  "type": "Exploration",
  "number": "4.5",
  "title": "",
  "body": "  You are developing a new product line. You have already found equations for the total revenue and total cost in a variety of scenarios, based on the total number of items to be sold. Suppose that and     Find an equation for the profit function.   Recall . Write down the definition of profit   Next, replace with and with . Note that the parentheses are very important -- you must subtract both the and the fixed cost .  Finally, simplify the expression     Find the break even points.   Recall that breaking even is the same thing as having . Using the equation above, we want to solve   Recall that we can often solve quadratic equations by factoring or using the quadratic equation. But this case, the function does not factor nicely, so we must use the quadratic equation.  You break even when the quantities are Using a calculator, we see that you break even when or     Sketch a graph of the profit function   You can graph the function using a graphing calculator, or you can use your knowledge of quadratic functions and the -intercepts you have found above.  Because the profit function is a quadratic with negative leading coefficient , it is a parabola that opens down. Furthermore, the parabola goes through the -axis at and , and the parabola is symmetric around the vertex which is half way between those points. Taken together, we get the following image.       Find all quantities where you make a profit. Write your answer in interval notation.   Solve the inequality by looking at the break even points, and the graph of the profit function.  From this graph, we see that the profit is positive when is between and , which is equivalent to having in the interval       "
},
{
  "id": "insight_rounding",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#insight_rounding",
  "type": "Application",
  "number": "4.15",
  "title": "To Round or Not to Round?",
  "body": " To Round or Not to Round?  In the previous example, we found that the break even quantities were or . But you cannot sell units, so what does this answer mean practically?  Unfortunately, this depends a lot on the specific context of your specific application.  In the simple case of $ profit as a result of items given above, you will only be able to make a profit by selling items, items, or items, since any integer larger or smaller than these will result in a negative profit.  But the power of mathematics is that the same tools can be used to answer questions in very different contexts. For example, suppose instead that was the number of thousands of items sold. In other words, suppose that is the profit from selling five thousand items. In that case, you will break even when you sell  thousand items or  thousand items. In that case, you would need to sell between items and items to make a proift.  Other applications require even greater precision. For example, currency exchange rates are often given to at least four decimal places. But what if you are investing millions of dollars in a foreign currency? Then the fifth, sixth, etc decimal places will suddenly be more important.  In a mathematics class, we will generally try to keep as much precision as possible. In any specific application , you should think carefully and consult generally accepted practices related to rounding.  "
},
{
  "id": "ex_profit_from_pricecost",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#ex_profit_from_pricecost",
  "type": "Exploration",
  "number": "4.6",
  "title": "",
  "body": "  You are planning to open a business selling ornamental pins. After a few weeks of experimenting with the price, you decide that during the average week, you can sell 100 pins at $11 per pin, and 200 pins at $1 per pin. Suppose also that uppose that it costs $500 to rent the production line, and $3 to make each pin.  Finally, after looking at a graph of some additional data, you decide that demand price is a linear function.    Find the item price as a function of the quantity to be sold.   To find the equation of a linear function, use the point-slope form of the line Note that we are told that items are sold when the item price is , and that items are sold when the price is .  That gives us a slope Putting it all together we get     Find the total profit function as a function of the total number of items to be sold.   Recall from that That means to find , we must first find equations for and .  To find the equation for Revenue, recall from that We write for the number of items, and we have already found that the item price is in the scenerio where items are sold. That means we just multiply by to get revenue.   To find the total cost, recall our approach from . If you are going to sell items, you must pay a fixed cost of dollars, as well as $ for each item . That gives us a total cost function   We can now combine the total revenue and total cost functions to get the profit function.     What is the total profit if you sell 100 units? What if you sell no units?   In the scenario (possible universe) where items are sold, the total profit (which includes all revenue minus all cost) will be   In the scenario (possible universe) where items are sold, the total profit (which includes all revenue minus all cost) will be     Find the number of units where you will break even.   To break even is to have exactly zero profit . That means solving the equation You can solve this equation using the quadratic equation or by factoring. This function does not have a nice factorization, so we use the quadratic equation This gives us or     What is the number of units needed to maximize profit? What is the maximum profit?   Because profit is a quadratic that opens down, the maximum profit occurs at the vertex , which is located half way between the two roots.  That means we can find by averaging and  The maximum profit occurs when items are sold.  To find the maximum profit, plug this into the function  The maximum profit you can achieve in any possible world (number of quanitites sold) is $ . That total profit is achieved in the scenario where you set the price so that items are sold.    What is the number of units needed to maximize profit? What is the maximum profit?   "
},
{
  "id": "def-rationalfunction",
  "level": "2",
  "url": "ch_polynomials_and_rationals.html#def-rationalfunction",
  "type": "Definition",
  "number": "4.16",
  "title": "",
  "body": "  A function is a rational function if can be written as a fraction of polynomials. In other words, a rational function can be written as a fraction where the numerator and denominator and are both polynomials.  Because division by 0 is undefined, there are often values of which make a function undefined . For such an input , we say that .   "
},
{
  "id": "ch_exponentials",
  "level": "1",
  "url": "ch_exponentials.html",
  "type": "Chapter",
  "number": "5",
  "title": "Compound Interest and Depreciation",
  "body": " Compound Interest and Depreciation   In the last chapter, we have looked at polynomials, where the terms are monomials like . In a monomial, the base is a variable , and the coefficient and power are both constant numbers.  In this chapter, we will look at exponential functions like . In this example, the exponent is a variable , ad the coefficient and base are both constant numbers.    Exponential Functions  To see what this looks like, it is helpful to try out a few examples.    Let . Compute , , , and . Then, sketch the graph of .   Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture       Let . Compute , , , and . Then, sketch the graph of    Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture       Let . Compute , , , and . Then, sketch the graph of    Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture        A picture is worth a thousand words . When you chose a different number for the coefficient or base , you get a different function. In the graphic below, use the sliders to change these two numbers, and get a sense of how fast the different functions grow or decay.     In this chapter, we will make extensive use of the Properties of Exponential Functions . If you get stuck duing a computation, it is a good idea to see if there is a property that you may find useful.    Use the laws of exponents to rewrite the following functions in the form where are numbers.    Rewrite as an exponential function in standard form.    Note that in the second to last step, we only had a base and a power. In the last step, we introduce a coefficient of , which does not change the value of the expression.  We have shown that is equal to with and .    Rewrite as an exponential function in standard form.    We have shown that is equal to with and .    Rewrite as an exponential function in standard form.    We have shown that is equal to with and .      Percents and Percent Change  You should already be familiar with the concept of percents. But because percents play an essential role in many topics in economics and business, we briefly review the definitions before moving on to our main applications.  The english word cent derives from the Latin word centum which means hundred . In other words, 20 percent literally means 20 per hundred or     Given any number , the expression percent (also written %) refers to the decimal rate    Given any numbers , you can find % of by multiplying by the decimal rate      Basic Percentages     % is equal to the decimal    % is equal to the decimal    % is equal to the decimal    % of $ is equal to    % of $ is equal to    % of $ is equal to       Understanding percent change  It is common to talk about an economic quanity by changing by a given percentage.  The term percent is an abbreviation of the expression per cent , which means per one hundred . In other words, % is the same thing as hundreds, or a decimal rate of .  For example, % of , is equal to .  Now, suppose that you say that  increases by percent. How much do you have after this increase?  If you are increasing the value by 25%, you keep the original , and add the new . In other words, you have .  Suppose that you increase by 25%. You take the original , and add the to get the final value   There is a pattern here. If you take a principal value of , and increase it by a decimal rate of , the final value will be We can factor a out of each term, to get that the result of increasing by a decimal rate of results in a final value of   To decrease  by %, subtract from , resulting in   To decrease a principal value of by a decimal rate of , compute     Percent Change   Suppose that is a decimal rate, and that is any value. is the result of  increasing  by the rate if , also written .  If is the result of decreasing  by the rate of  , we subtract instead, resulting in the formula       Suppose you begin with $1000. How much do you have if the value is increased by 25%, and then decreased by 30%?    25% corresponds to a decimal rate of . To increase $1000 by 25%, add $1000 to  We could also just have multiplied by   30% corresponds to a decimal rate of . To decrease $1250 by 30%, take $1250 and subtract  We could also just have multiplied by     To find the percent change between and , set up the equation and solve for    If the balance of your investment goes from $ to $ , by what percent has it changed?   We want to find the percent so that Solving for gives   The value has increased by 37.33%    If the balance of your investment goes from $ to $ , by what percent has it changed?   We want to find the percent so that Solving for gives   The value has decreased by 22%      Let be any principal value. For each of the following final values, find out whether the principal has been increased or decreased, and the find the corresponding decimal rate and percent of this change.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been increased by a decimal rate of , which corresponds to an increase of %.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been decreased by a decimal rate of , which corresponds to an decrease of %.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been increased by a decimal rate of , which corresponds to an increased of %.    We have focused above on understanding and applying the definition of percent change , since this will be important to understand compound interest below. However, there are also a variety of other equivalent formulas that can be used to find percent change.    The percent change from to is given by , or equivalently by     To get both equations, solve for . For the first, For the second,       Compound Interest and Depreciation  The power mathematics comes from the fact that the same basic tools apply in a surprisingly wide variety of contexts. For example, percent changes occur in many contexts including   loan payments,    inflation, and    the change in value of physical objects.   In finance, your hope is that the value of your investments will increase over time. In other contexts (manufacturing, purchasing a car, etc.), you understand that the value of your investment will decrease over time. The process of an object losing value over time is called depreciation .  To describe the results of inflation at a fixed percent (say, 4%) over several years, or to describe an object that repeatedly decreases in value by a fixed percent over several years, we will need a formula for repeated percent changes.   Repeated percent changes  Inflation refers to the process of prices increasing over time. Often, we talk about prices increasing at the same rate per year, over a period of several years.  For example, suppose that prices are increasing at % per year, which corresponds to a decimal rate . Suppose also that a certain product costs $ in the first year.  One year later, the cost is the original amount plus a change of dollars. In other words, the value one year later is In our notation for percent change, we can also write this as   How much will the value be after two years? In the second year, the value of increases a second time, also by 5%, or a rate of . That means In our notation for percent change, we can write this as But the leading coefficent of can also be rewritten, since . In other words,   We can find the value after three years in the same way. We will take the value from the second year, and increase it by a rate of . Furthermore, that increase is equivalent to multiplying the value from the second year by another coefficient of .   This line of reasoning works for any positive period of time , giving us a formula for the value of an object with original value , where the price has been increased 5% for years.      Suppose that an original principal value of is repeatedly changed by a fixed decimal rate of  one time per year . The value after years will be given by .  If the value is being increased, use a posive value for the rate . If the value is being decreased, use a negative value for the rate .    Accountants often keep track of the present value of a larged investment or fixed asset. The term depreciation refers to a decrease in the value of the asset. You can find a more complete introduction to the concept on Investopedia at .   Accounting and depreciation  Value can be measured in many ways. For example, suppose that you purchase a car and that you somehow know that it will last 200,000 miles, and that you will drive 20,000 miles each year. By how much has the value value of the car decreased after 3 years?  The \"correct\" answer to this question depends on a surprising number of factors.   If you are measuring value as \"percent of lifetime miles remaining\", there would be of the total miles remaining, so the value of the car would be , or 80%, of its original value.  After four years, the value of the car would be , or 70%, of its original value. And after five years, the value of the car would be , or 60%, of its original value.  In this case, the value is decreasing at a constant amount per year. This is often called straight line depreciation , since connecting the dots yields a linear equation     On the other hand, cars are known to break more and more frequently as they get older. If you knew which repairs would be required each year, you could make a table of values telling you the value of the vechicle at each point in time (or at each number of miles). For each year, you would take its value from the previous year, decrease the value based on the reduced mileage of the car, and subtract the expected maintenence from that point of time.  This way of tracking the decrease, or depreciation, is in some ways more accurate than straightline depreciation but is much more complicated to compute.    From a different perspective, it is clear that new cars have many features that older cars do not. To oversimplify things, suppose that a new car always has 10% more features than an older car. If you are going to buy a car that is one year older, you will want the price to decrease enough to make up for that loss in additional features.  Said another way, many investments will lose a fixed percent of their value every year. This is called declining balance depreciation.  Suppose that the value of a different car decreases by 25% each year. After one year, 75% of the value is retained. After 2 years, 75% of the original 75% is retained, resulting in , or 56.25% of the value remains. After 3 years, the value that remains is , or 42.19% of the original value.  More generally, the value after years is defined by the exponential equation      Deciding when to use each depreciation scheme is an important question in Accounting, and is well beyond the scope of this course. As a result, in this course, we will restrict our attention to declining balance depreciation, and we will usually state explicitly that a fixed percentage of value is lost each year.     Your company has recently invested in a $500,000 CNC machine for a high throughput production line. After some research, you have decided that each year, the machine will lose 20% of its remaining value.    What is the net value of the asset after one year? After two years?   After one year, the value is After two years, the value is     Find a formula for the future value of the asset as a function of the number of years in the future. Sketch a graph of this function.   We are repeatedly reducing the principal (original value) by 20%, or a decimal rate of . Using , we see that the value of the investment at time is given by   In other words, 80% of the value is retained each year. We can now use this formula to answer the first part of the question:          Compound interest  The process of repeatedly increasing a value by a fixed percent is called compounding . If you increase the value every year, you are said to be compounding yearly. If you increase the value 12 times per year, you are said to be compounding monthly.  The term interest refers to a very specfic kind of compounding. As Investopedia puts it, Interest is the monetary charge for borrowing money—generally expressed as a percentage, such as an annual percentage rate (APR). ( )  In compound interest , you pay interest on both the principal and on the interest accrued so far.  The term compounding refers to the action of computing the new interest, and adding it back into the principal.  The simplest example (which we have already mentioned above) happens when the For example, suppose that you borrow $100, at an interest rate of 3%, and that the interest is compounded (or added to the principal value) each year.   Interest Compounded Yearly     Years Elapsed  Previous Debt  New interest  New Debt                      Often, interest will be compounded multiple times each year. Suppose, for example, that you borrow money at 3% interest, compounded twice each year.  Does this mean that you need to pay 3% interest after 6 months, and a second 3% interest after the next 6 months? Absolutely not - that would be like paying 6% interest over the year!  Instead, the convention is to divide the state annual percentage rate evenly among the number of compoundings per year. For example, if you borrow at 3% compounded twice per year, then the interest per compounding is % per compounding, or a decimal rate of 0.015 per compounding.   Interest Compounded Biannualy     Years Elapsed  Previous Debt  New interest  New Debt                                     Most banking instruments are compounded monthly, or more frequently. That means that you would compound times each year, with an interest per compounding of % per compounding, or a decimal rate of .  We could compute this using a table, but you can see that this rapidly becomes unworkable. Instead, we can modfiy the for repeatedly changing the principal by a fixed value.     Suppose that a principal is invested at an annual decimal rate , and compounded times each year. The value of the investment after years is equal to   The rate is called the annual percentage rate , and the value at year is called the future value of the investment at time .  The interest earned is the difference between the principle and the future value.    To remember the formula, remember that you are increasing the principal by the decimal rate each compounding. Because you are computing times per year, after years, you will have repeated this process times.    Suppose that you have invested $1000 at an APR of 3%, compounded monthly.    Find the future value of this instrument as a function of the number years .   Use the compound interest formula with , , , and time represented by the variable .     Find the future value after 10 years and six months.   10 years and 6 months corresponds to 10.5 years. Using the compound interest formula, The future value after 10.5 years is approximately $     Rewrite the future value function in the form where are numbers.   In the expression the base is a single number. That lets us rewrite the expression as Next, we can use the property of exponents to rewrite the expression as Now we can again simplify the base , which gives the expression We have now written with and .    What is the effective annual interest rate? In other words, what is the actual percentage by which the balance increases every year?   Recall that gives the result of increasing the value by a rate of , repeated times.  We have shown above that the future value is given by Rewriting this we get In other words, this is equivalent to increasing the value by an actual , or effective , rate of percent each year.      The effective APR of an investment is the rate such that      Another way to find Effective APR  Given the definition of effective APR, it is generally easist to find the effective APR by using the laws of exponents to simplify the compound interest formula with your given values.  This approach may, however, make it a bit more difficult to see the actual meaning of . To make this meaning more clear, we will introduce another more numerical way to compute .  Recall that the effective APR of an investment tells you the actual percent by which the value grows each year. That means that you can also find the effective APR by computing and comparing the value of the investment at any conscutive two years .  For example, in the the exercise above, we found that the future value was given by . That means that the value in year is and that the value in year is . To find the percent change from years 0 to 1, we can compute the ratio Between years 0 and 1, the principal has been increased by a multiple of which corresponds to a decimal rate of , or a percent rate of 3.041595691%     You invest in a company at 20%, compounded quarterly.    If you start with $100, find the balance as a function of time in years. What is the balance after 1 year?   Start by writing down the formula for . Using the principal , decimal rate , and frequency of compounding , since there are four quarters in each year.  That gives the equation We could stop there, but it is often nice to clean this up by simplifying the base of the exponent to get a formula for the value after years   To find the value after one year, plug in and simplify,     How much should you start with to get $1000 after 5 years?   Again, start by writing down the formula for  . Next, fill in the values given. In this problem, we want the future value  at the future time  . We are also given and . . Note that now the unknown variable is the starting (or present) value .  Simplifying the base and exponents gives Using a calculator, we obtain Solve for by dividing both sides by  You must start with a present value to achieve the desired future value in 5 years.    Rewrite in the form . What is the effective APR?   Again, start by writing down the formula for  . Next, fill in the values given. . No other values are given in this part, so we now simplify. Using the law of algebra , we get Recall . This reminds us that the expression above coressponds to the process of repeatedly increasing the principal by % each year.  In other words, the effective APR is %.     How much must you invest at 3% interest, compounded monthly, to have 10,000 after 5 years?   Again, start by writing down the formula for  . Next, fill in the values given. . We want to solve for the unknown variable . We could simplify the expression using a calculator, or we could just use the fact that is a constant number and divide both sides by it to get. .      A picture is worth a thousand words . The present value will grow more fast or slow based on the value of the principal , APR , and frequency of compounding . In the graphic below, use the sliders to change these two numbers, and get a sense of how fast each of these parameters impact the growth of a balance compounded continuously.   Compound interest as a function of time     The Natural Exponential for Calculus   Compounding Faster and Faster  In the interactive graphic above, note that once you increase the frequency above about 20, the graph of compound interest appears to stop changing.  Actually, if you compute things out with a calculator, you will see that there are differences when you change , but those changes get smaller and smaller as you increase .  Fix an APR of (a rate of 100%).     Frequency of compounding  Future Value function   Effective APR    1       10        20        100        1000        In other words, as you compound more and more frequently at an APR of 100%, the effective APR settles down to a specific number (171%).  Said another way, as you compound more and more frequently at 100%, the base settles down on a specific number . Mathematicians use the letter to denote this number.   Surprisingly, there is a very simple equation for what happens when you compound continuously.    If you compound continuously at a rate , the value after years is given by the function where is a number that is approximately .    Surprisingly, exponential functions with base play a very important role in calculus. Because of this, we call it the natural base to use for the exponential function. More precisely, we make the following definition.    The function is called the natural exponential function . Sometimes, we denote this function by writing       "
},
{
  "id": "ch_exponentials-2-2",
  "level": "2",
  "url": "ch_exponentials.html#ch_exponentials-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential "
},
{
  "id": "ex_computing_exponentials",
  "level": "2",
  "url": "ch_exponentials.html#ex_computing_exponentials",
  "type": "Exploration",
  "number": "5.1",
  "title": "",
  "body": "  Let . Compute , , , and . Then, sketch the graph of .   Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture       Let . Compute , , , and . Then, sketch the graph of    Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture       Let . Compute , , , and . Then, sketch the graph of    Be very careful to follow the order of operations PEMDAS.        Graphing these points and connecting them gives the following picture      "
},
{
  "id": "interactive_exponentials",
  "level": "2",
  "url": "ch_exponentials.html#interactive_exponentials",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": "  "
},
{
  "id": "ex_exponential-sandard-form",
  "level": "2",
  "url": "ch_exponentials.html#ex_exponential-sandard-form",
  "type": "Exploration",
  "number": "5.2",
  "title": "",
  "body": "  Use the laws of exponents to rewrite the following functions in the form where are numbers.    Rewrite as an exponential function in standard form.    Note that in the second to last step, we only had a base and a power. In the last step, we introduce a coefficient of , which does not change the value of the expression.  We have shown that is equal to with and .    Rewrite as an exponential function in standard form.    We have shown that is equal to with and .    Rewrite as an exponential function in standard form.    We have shown that is equal to with and .   "
},
{
  "id": "def-percent",
  "level": "2",
  "url": "ch_exponentials.html#def-percent",
  "type": "Definition",
  "number": "5.2",
  "title": "",
  "body": "  Given any number , the expression percent (also written %) refers to the decimal rate    Given any numbers , you can find % of by multiplying by the decimal rate    "
},
{
  "id": "ex_basic-percentages",
  "level": "2",
  "url": "ch_exponentials.html#ex_basic-percentages",
  "type": "Example",
  "number": "5.3",
  "title": "Basic Percentages.",
  "body": " Basic Percentages     % is equal to the decimal    % is equal to the decimal    % is equal to the decimal    % of $ is equal to    % of $ is equal to    % of $ is equal to     "
},
{
  "id": "sec_percent_change-6",
  "level": "2",
  "url": "ch_exponentials.html#sec_percent_change-6",
  "type": "Application",
  "number": "5.4",
  "title": "Understanding percent change.",
  "body": " Understanding percent change  It is common to talk about an economic quanity by changing by a given percentage.  The term percent is an abbreviation of the expression per cent , which means per one hundred . In other words, % is the same thing as hundreds, or a decimal rate of .  For example, % of , is equal to .  Now, suppose that you say that  increases by percent. How much do you have after this increase?  If you are increasing the value by 25%, you keep the original , and add the new . In other words, you have .  Suppose that you increase by 25%. You take the original , and add the to get the final value   There is a pattern here. If you take a principal value of , and increase it by a decimal rate of , the final value will be We can factor a out of each term, to get that the result of increasing by a decimal rate of results in a final value of   To decrease  by %, subtract from , resulting in   To decrease a principal value of by a decimal rate of , compute   "
},
{
  "id": "def-percentchange",
  "level": "2",
  "url": "ch_exponentials.html#def-percentchange",
  "type": "Definition",
  "number": "5.5",
  "title": "Percent Change.",
  "body": " Percent Change   Suppose that is a decimal rate, and that is any value. is the result of  increasing  by the rate if , also written .  If is the result of decreasing  by the rate of  , we subtract instead, resulting in the formula    "
},
{
  "id": "ex_percentchange1",
  "level": "2",
  "url": "ch_exponentials.html#ex_percentchange1",
  "type": "Exploration",
  "number": "5.3",
  "title": "",
  "body": "  Suppose you begin with $1000. How much do you have if the value is increased by 25%, and then decreased by 30%?    25% corresponds to a decimal rate of . To increase $1000 by 25%, add $1000 to  We could also just have multiplied by   30% corresponds to a decimal rate of . To decrease $1250 by 30%, take $1250 and subtract  We could also just have multiplied by    "
},
{
  "id": "ex_percentchange2",
  "level": "2",
  "url": "ch_exponentials.html#ex_percentchange2",
  "type": "Exploration",
  "number": "5.4",
  "title": "",
  "body": "  If the balance of your investment goes from $ to $ , by what percent has it changed?   We want to find the percent so that Solving for gives   The value has increased by 37.33%    If the balance of your investment goes from $ to $ , by what percent has it changed?   We want to find the percent so that Solving for gives   The value has decreased by 22%   "
},
{
  "id": "ex_percentchange3",
  "level": "2",
  "url": "ch_exponentials.html#ex_percentchange3",
  "type": "Exploration",
  "number": "5.5",
  "title": "",
  "body": "  Let be any principal value. For each of the following final values, find out whether the principal has been increased or decreased, and the find the corresponding decimal rate and percent of this change.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been increased by a decimal rate of , which corresponds to an increase of %.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been decreased by a decimal rate of , which corresponds to an decrease of %.    By what percent has been changed, if you end up with a final value of ?   We want to rewrite in the form for some number . Here we have In other words, the principal has been increased by a decimal rate of , which corresponds to an increased of %.   "
},
{
  "id": "cor-percentchange",
  "level": "2",
  "url": "ch_exponentials.html#cor-percentchange",
  "type": "Corollary",
  "number": "5.6",
  "title": "",
  "body": "  The percent change from to is given by , or equivalently by     To get both equations, solve for . For the first, For the second,    "
},
{
  "id": "sec_compound_interest-2",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "depreciation "
},
{
  "id": "sec_compound_interest-4",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-4",
  "type": "Application",
  "number": "5.7",
  "title": "Repeated percent changes.",
  "body": " Repeated percent changes  Inflation refers to the process of prices increasing over time. Often, we talk about prices increasing at the same rate per year, over a period of several years.  For example, suppose that prices are increasing at % per year, which corresponds to a decimal rate . Suppose also that a certain product costs $ in the first year.  One year later, the cost is the original amount plus a change of dollars. In other words, the value one year later is In our notation for percent change, we can also write this as   How much will the value be after two years? In the second year, the value of increases a second time, also by 5%, or a rate of . That means In our notation for percent change, we can write this as But the leading coefficent of can also be rewritten, since . In other words,   We can find the value after three years in the same way. We will take the value from the second year, and increase it by a rate of . Furthermore, that increase is equivalent to multiplying the value from the second year by another coefficient of .   This line of reasoning works for any positive period of time , giving us a formula for the value of an object with original value , where the price has been increased 5% for years.   "
},
{
  "id": "prop-compounding",
  "level": "2",
  "url": "ch_exponentials.html#prop-compounding",
  "type": "Proposition",
  "number": "5.8",
  "title": "",
  "body": "  Suppose that an original principal value of is repeatedly changed by a fixed decimal rate of  one time per year . The value after years will be given by .  If the value is being increased, use a posive value for the rate . If the value is being decreased, use a negative value for the rate .   "
},
{
  "id": "sec_compound_interest-6",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "depreciation "
},
{
  "id": "insight-depreciation",
  "level": "2",
  "url": "ch_exponentials.html#insight-depreciation",
  "type": "Application",
  "number": "5.9",
  "title": "Accounting and depreciation.",
  "body": " Accounting and depreciation  Value can be measured in many ways. For example, suppose that you purchase a car and that you somehow know that it will last 200,000 miles, and that you will drive 20,000 miles each year. By how much has the value value of the car decreased after 3 years?  The \"correct\" answer to this question depends on a surprising number of factors.   If you are measuring value as \"percent of lifetime miles remaining\", there would be of the total miles remaining, so the value of the car would be , or 80%, of its original value.  After four years, the value of the car would be , or 70%, of its original value. And after five years, the value of the car would be , or 60%, of its original value.  In this case, the value is decreasing at a constant amount per year. This is often called straight line depreciation , since connecting the dots yields a linear equation     On the other hand, cars are known to break more and more frequently as they get older. If you knew which repairs would be required each year, you could make a table of values telling you the value of the vechicle at each point in time (or at each number of miles). For each year, you would take its value from the previous year, decrease the value based on the reduced mileage of the car, and subtract the expected maintenence from that point of time.  This way of tracking the decrease, or depreciation, is in some ways more accurate than straightline depreciation but is much more complicated to compute.    From a different perspective, it is clear that new cars have many features that older cars do not. To oversimplify things, suppose that a new car always has 10% more features than an older car. If you are going to buy a car that is one year older, you will want the price to decrease enough to make up for that loss in additional features.  Said another way, many investments will lose a fixed percent of their value every year. This is called declining balance depreciation.  Suppose that the value of a different car decreases by 25% each year. After one year, 75% of the value is retained. After 2 years, 75% of the original 75% is retained, resulting in , or 56.25% of the value remains. After 3 years, the value that remains is , or 42.19% of the original value.  More generally, the value after years is defined by the exponential equation      Deciding when to use each depreciation scheme is an important question in Accounting, and is well beyond the scope of this course. As a result, in this course, we will restrict our attention to declining balance depreciation, and we will usually state explicitly that a fixed percentage of value is lost each year.  "
},
{
  "id": "ex_depreciation1",
  "level": "2",
  "url": "ch_exponentials.html#ex_depreciation1",
  "type": "Exploration",
  "number": "5.6",
  "title": "",
  "body": "  Your company has recently invested in a $500,000 CNC machine for a high throughput production line. After some research, you have decided that each year, the machine will lose 20% of its remaining value.    What is the net value of the asset after one year? After two years?   After one year, the value is After two years, the value is     Find a formula for the future value of the asset as a function of the number of years in the future. Sketch a graph of this function.   We are repeatedly reducing the principal (original value) by 20%, or a decimal rate of . Using , we see that the value of the investment at time is given by   In other words, 80% of the value is retained each year. We can now use this formula to answer the first part of the question:        "
},
{
  "id": "sec_compound_interest-9",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-9",
  "type": "Application",
  "number": "5.10",
  "title": "Compound interest.",
  "body": " Compound interest  The process of repeatedly increasing a value by a fixed percent is called compounding . If you increase the value every year, you are said to be compounding yearly. If you increase the value 12 times per year, you are said to be compounding monthly.  The term interest refers to a very specfic kind of compounding. As Investopedia puts it, Interest is the monetary charge for borrowing money—generally expressed as a percentage, such as an annual percentage rate (APR). ( )  In compound interest , you pay interest on both the principal and on the interest accrued so far.  The term compounding refers to the action of computing the new interest, and adding it back into the principal.  The simplest example (which we have already mentioned above) happens when the For example, suppose that you borrow $100, at an interest rate of 3%, and that the interest is compounded (or added to the principal value) each year.   Interest Compounded Yearly     Years Elapsed  Previous Debt  New interest  New Debt                      Often, interest will be compounded multiple times each year. Suppose, for example, that you borrow money at 3% interest, compounded twice each year.  Does this mean that you need to pay 3% interest after 6 months, and a second 3% interest after the next 6 months? Absolutely not - that would be like paying 6% interest over the year!  Instead, the convention is to divide the state annual percentage rate evenly among the number of compoundings per year. For example, if you borrow at 3% compounded twice per year, then the interest per compounding is % per compounding, or a decimal rate of 0.015 per compounding.   Interest Compounded Biannualy     Years Elapsed  Previous Debt  New interest  New Debt                                     Most banking instruments are compounded monthly, or more frequently. That means that you would compound times each year, with an interest per compounding of % per compounding, or a decimal rate of .  We could compute this using a table, but you can see that this rapidly becomes unworkable. Instead, we can modfiy the for repeatedly changing the principal by a fixed value.  "
},
{
  "id": "def-compoundinterest",
  "level": "2",
  "url": "ch_exponentials.html#def-compoundinterest",
  "type": "Definition",
  "number": "5.13",
  "title": "",
  "body": "  Suppose that a principal is invested at an annual decimal rate , and compounded times each year. The value of the investment after years is equal to   The rate is called the annual percentage rate , and the value at year is called the future value of the investment at time .  The interest earned is the difference between the principle and the future value.   "
},
{
  "id": "ex_compoundinterest1",
  "level": "2",
  "url": "ch_exponentials.html#ex_compoundinterest1",
  "type": "Exploration",
  "number": "5.7",
  "title": "",
  "body": "  Suppose that you have invested $1000 at an APR of 3%, compounded monthly.    Find the future value of this instrument as a function of the number years .   Use the compound interest formula with , , , and time represented by the variable .     Find the future value after 10 years and six months.   10 years and 6 months corresponds to 10.5 years. Using the compound interest formula, The future value after 10.5 years is approximately $     Rewrite the future value function in the form where are numbers.   In the expression the base is a single number. That lets us rewrite the expression as Next, we can use the property of exponents to rewrite the expression as Now we can again simplify the base , which gives the expression We have now written with and .    What is the effective annual interest rate? In other words, what is the actual percentage by which the balance increases every year?   Recall that gives the result of increasing the value by a rate of , repeated times.  We have shown above that the future value is given by Rewriting this we get In other words, this is equivalent to increasing the value by an actual , or effective , rate of percent each year.   "
},
{
  "id": "def-effectiveapr",
  "level": "2",
  "url": "ch_exponentials.html#def-effectiveapr",
  "type": "Definition",
  "number": "5.14",
  "title": "",
  "body": "  The effective APR of an investment is the rate such that    "
},
{
  "id": "sec_compound_interest-14",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-14",
  "type": "Application",
  "number": "5.15",
  "title": "Another way to find Effective APR.",
  "body": " Another way to find Effective APR  Given the definition of effective APR, it is generally easist to find the effective APR by using the laws of exponents to simplify the compound interest formula with your given values.  This approach may, however, make it a bit more difficult to see the actual meaning of . To make this meaning more clear, we will introduce another more numerical way to compute .  Recall that the effective APR of an investment tells you the actual percent by which the value grows each year. That means that you can also find the effective APR by computing and comparing the value of the investment at any conscutive two years .  For example, in the the exercise above, we found that the future value was given by . That means that the value in year is and that the value in year is . To find the percent change from years 0 to 1, we can compute the ratio Between years 0 and 1, the principal has been increased by a multiple of which corresponds to a decimal rate of , or a percent rate of 3.041595691%  "
},
{
  "id": "ex_compoundinterest2",
  "level": "2",
  "url": "ch_exponentials.html#ex_compoundinterest2",
  "type": "Exploration",
  "number": "5.8",
  "title": "",
  "body": "  You invest in a company at 20%, compounded quarterly.    If you start with $100, find the balance as a function of time in years. What is the balance after 1 year?   Start by writing down the formula for . Using the principal , decimal rate , and frequency of compounding , since there are four quarters in each year.  That gives the equation We could stop there, but it is often nice to clean this up by simplifying the base of the exponent to get a formula for the value after years   To find the value after one year, plug in and simplify,     How much should you start with to get $1000 after 5 years?   Again, start by writing down the formula for  . Next, fill in the values given. In this problem, we want the future value  at the future time  . We are also given and . . Note that now the unknown variable is the starting (or present) value .  Simplifying the base and exponents gives Using a calculator, we obtain Solve for by dividing both sides by  You must start with a present value to achieve the desired future value in 5 years.    Rewrite in the form . What is the effective APR?   Again, start by writing down the formula for  . Next, fill in the values given. . No other values are given in this part, so we now simplify. Using the law of algebra , we get Recall . This reminds us that the expression above coressponds to the process of repeatedly increasing the principal by % each year.  In other words, the effective APR is %.   "
},
{
  "id": "ex_compoundinterest3",
  "level": "2",
  "url": "ch_exponentials.html#ex_compoundinterest3",
  "type": "Checkpoint",
  "number": "5.16",
  "title": "",
  "body": " How much must you invest at 3% interest, compounded monthly, to have 10,000 after 5 years?   Again, start by writing down the formula for  . Next, fill in the values given. . We want to solve for the unknown variable . We could simplify the expression using a calculator, or we could just use the fact that is a constant number and divide both sides by it to get. .    "
},
{
  "id": "sec_compound_interest-18",
  "level": "2",
  "url": "ch_exponentials.html#sec_compound_interest-18",
  "type": "Figure",
  "number": "5.17",
  "title": "",
  "body": " Compound interest as a function of time   "
},
{
  "id": "subsec-naturalexp-2",
  "level": "2",
  "url": "ch_exponentials.html#subsec-naturalexp-2",
  "type": "Application",
  "number": "5.18",
  "title": "Compounding Faster and Faster.",
  "body": " Compounding Faster and Faster  In the interactive graphic above, note that once you increase the frequency above about 20, the graph of compound interest appears to stop changing.  Actually, if you compute things out with a calculator, you will see that there are differences when you change , but those changes get smaller and smaller as you increase .  Fix an APR of (a rate of 100%).     Frequency of compounding  Future Value function   Effective APR    1       10        20        100        1000        In other words, as you compound more and more frequently at an APR of 100%, the effective APR settles down to a specific number (171%).  Said another way, as you compound more and more frequently at 100%, the base settles down on a specific number . Mathematicians use the letter to denote this number.  "
},
{
  "id": "thm-continuouscompounding",
  "level": "2",
  "url": "ch_exponentials.html#thm-continuouscompounding",
  "type": "Theorem",
  "number": "5.19",
  "title": "",
  "body": "  If you compound continuously at a rate , the value after years is given by the function where is a number that is approximately .   "
},
{
  "id": "def-naturalexp",
  "level": "2",
  "url": "ch_exponentials.html#def-naturalexp",
  "type": "Definition",
  "number": "5.20",
  "title": "",
  "body": "  The function is called the natural exponential function . Sometimes, we denote this function by writing    "
},
{
  "id": "ch_logarithms",
  "level": "1",
  "url": "ch_logarithms.html",
  "type": "Chapter",
  "number": "6",
  "title": "Logarithms and Solving for Time",
  "body": " Logarithms and Solving for Time   In the previous section, we used exponential functions to compute the value of compound interest as a function of time. For example, Investing $100 and 25% interest compounded yearly follows the function   Often, you will be given the principal, rate, and frequency of compounding, and you will need to find the amount of time you will have to wait to achieve a certain future balance. If, in the example above, you want to find the time needed to achieve a balance of $4000, you will need to solve the equation . This is equivalent to , but now we are stuck, since the is trapped inside the exponent.  To get further, we will need to \"undo\" our compound interest calculation. Mathematically, this means that we will need an inverse function.    Inverse Functions  Recall that a one-to-one function sends each input to a different output.   Exploring the definition of one-to-one  This definition is easiest to apply when you are thinking about functions defined using arrow diagrams.   The function f is one-to-one. The function g is not one-to-one because g(2)=b and g(3)=b     If your function is one-to-one, then flipping the arrows gives you a new function that undoes your original function. That new function is called the inverse of the original function.    Let be a one-to-one function. Its inverse is the function, written , which satisfies     In , the function has an inverse function , defined by flipping each of the arrows. For example, because , we have .   Danger Zone: In general, the inverse is not the same thing as the reciprocal. In other words, is not  in general.   Key Idea  Inverse functions swich the roles of and (of input and ouput).    Understanding Inverses Graphically  Graphically, reversing the roles of input and ouput is the same thing as reflecting the graph of the function across the diagonal line .      Recall that the function  undoes  . Mathematically, this means and   Finding inverses and solving equations are two sides of the same coin.    Let     Find an equation for    First, write down the equation . In this case, Next, solve this equation for . Finally, reverse the roles of and . This gives the equation The equation for our inverse is     Use your equation for to evaluate .   We are given that . We have also found that .  To compute , replace every in the equation for with the equation . We have shown in this case that . In other words, we have shown that the function and inverse undo eachother.      Logarithms Undo Exponentials  Our main goal is to use logarithms to solve for time in a compound interest equation. Those equations involve many parts, so we will start with a few slightly simpler questions, in the form of a riddle.    How many times do you need to double the number to achieve an eight-fold increase?   Just start doubling 10, and see what works! You need to double 10 three times to get from 10 to 80 (an eight-fold increase). In other words,     How many times do you need to double any number to achieve an eight fold increase of ?   Our strategy for the first example works the same here: You need to double any number three times to get an eight-fold increase. This is the same as saying that ,     How many times do you need to triple to get an 81-fold increase?   Our strategy for the first example works the same here: You need to triple any number four times to get an eighty one-fold increase. This is the same as saying that ,      Logarithms are functions that answer the riddle \"how many times do I need to multiply by a number \" to increase by a given factor. More precisely, we make the following definition.    Given any numbers , is equal to the exponent such that     We can now rephrase in logarithmic language. Because , we say that . Similarly, because , we say that . More precisely, we can now answer the following question.    Compute    Written in exponential form, finding is the same as finding the exponent such that Here, because , we say that     Compute    Written in exponential form, finding is the same as finding the exponent such that Here, because , we say that .    Compute    Written in exponential form, finding is the same as finding the exponent such that To get the right hand side, we must multiply 10 nine times. That means . Therefore, we have that .      Fix any base . The function is the inverse of the the base exponential function .       The Natural Logarithm for Calculus  Recall that the function is called the natural exponential function . We call it's inverse the natural logarithm .    We write where   In other words, the natural logarithm  is the inverse of the natural exponential function .      Compute    There are two ways to answer this question. Algebraically, we know that undoes base exponentiation. So simply rewrite the argument of the function as a power of    Alternatively, you can answer the question by playing the riddle game: what does the exponent of need to be for to equal ?  We know that . In other words, we need the exponent of to be . That tells us that     Compute    Again, there are two ways to answer this question. Algebraically, we know that undoes base exponentiation. So simply rewrite the argument of the function as a power of    Alternatively, you can answer the question by playing the riddle game: what does the exponent of need to be for to equal ?  We know that . In other words, we need the exponent of to be . That tells us that     Let and . Simplify , , , and    This is just a more complex way of asking us to simplify the natural log of e to various numbers. Reasoning as above gives         Key Facts  The functions and  undo eachother.      Simplify .         Laws of Logarithms  Logarithms have three important properties, which will play a central role in our computations.   Laws of Logarithms              Expand the following completely using the laws of logarithms.        When you look at this expression, you see a power, so write down the first law of logarithms . Using the numbers we're given, we obtain .        When you look at this expression, you see that the input is the product and , so write down the second law of logarithms . Applying that in our example, we get .  Recopy the first logarithm . For the second logarithm, see that the input is a power, so write down the first law of logarithms . That gives .     Warning: Note that our three laws of logarithms only apply when the exponential, product, or fraction is inside the logarithm.  If you try to divide logarithms, such as in , you will get something very different than our log laws. This is because of the surprising fact that For example, if you divide , you actually get , which is not the same thing as .  Again, for the remainder of the course, we will almost always restrict our attention to natural logarithms. But this last property is useful in many applications, and may help you remember when you can (and when you can't) perform a simplification using the laws of logarithms.    Solving Compound Interest for Time  We can now use the laws of logarithms to help us solve equations where the variable is in the exponent.  As with everything else in algebra, if we have the equation , we can replace it with the equation .    Solve for satisfying    The key idea of algebra is that if you have the equation , you can do the same thing to both sides and have another true equation. Here, we are given that That means that we also know that the equation is true, replacing and . This gives We have the property of logarithms that on the left, to get the equation Now, this looks complicated, but we can use a calculator to simplify and . This gives us the equation Rearranging the left side, we have Using a calculator, we see that , which gives Dividing both sides by , we get You could also have done this with the original by dividing both sides by to get     Solve for satisfying    There are two different approaches for solving an equation like this, planning ahead or using brute force.   Planning Ahead  We wish to solve the equation We want to eventually introduce logarithms to allow us to apply Log Law 3, to pull the out of the exponent. However, that law will not apply to because of the coefficient of .  But we can divide both sides of the equation by 4. This gives us Now, we can take the logarithm of both sides Now we can apply the law of logs on the left with and  We can now divide both sides by to get This example is exact, but it can be a bit overwhelming. You can also use your calculator to simplify If you do use your calculator, try to use as many decimal places as possible. Rounding errors can grow if you do a lot of calculations. It is possible to understand how these errors grow, but that question is beyond the scope of this course.    Brute Force  We have seen how to solve this equation with a bit of planning ahead. But what happens if you start by taking the natural log of both sides of the quation You get On the left side, we have . We cannot use Log Law 1, since this is a product. Instead, we need to use Log Law 2 with and . This gives Now we can use Law Log 1 with and to get You can simplify this using a calculator to get You can solve this as usual to get Alternatively, you can solve the exact equation to get        The balance of a certain investment is given by as a function of the number of years . How long must you wait until the balance reaches 80?   Note that this specific function is very simple, so it is possible to answer this numerically. After one year, the balance will be , after two years the balance will be , and after three years the balance will be . It will take 3 years for the balance to reach .  For more complex equations, we will need to set up and solve an exponential equation. In this case, we want to find a such that equals 80. This gives us the equation Alternatively, we could have simplified the natural log terms and solved as follows     We can now apply these techinques to solve the equations that arise in questions of compound interest.    You invest $1000 at 15% interest compounded monthly.    How many years are required until you double your money?   First, write down the compound interest formula from . with , , and . Furthermore, we want the future value to be twice 1000. In other words, we want This gives Dividing both sides by 1000 gives   Next, we can simplify this equation using a calculator and the properties of exponents      Finally, finish solving the exponential equation as above using the Laws of Logs . With 15% interest, it will take about 4.64 years for the balance to double.    How long will it be until the balance reaches $10,000?   First, write down the compound interest formula and plug in the values we are given. Note that we want the time when the future value . That gives Simplifying this with a calculator and the laws of exponents gives Taking of both sides and applying the laws of logarithms, we get The balance will increase to $10,000 in about 15 years.    As an exercise, find how long it takes for a balance of $1000 to double at 2% interest, at 5% interest, and at 30% interest.  For our last application, we will return to the concept of depreciation , discussed in more depth in and     Suppose that a certain asset loses 30% of its value each year. In other words, suppose that the value of the asset after years is given by     Suppose that the asset starts with value . Find the value after 12 years.   The future value function is After years, After years, the value of the asset will be approximately $13.84    Suppose that the value after 12 years is $50. Find the starting value .   The future value function is We know that when , that . Plugging this in gives The starting value must have been about $3,612.38    Suppose that the asset starts with a value . Find the number of years for the value to decrease to .   The future value function is We want the time when the value reaches when from a starting value of . Plugging this in gives It will take about 6.45 years for the balance to decline from 1000 to 100.     Depreciating Assets and Scrap Value  In this class, our focus is on the mathematical tools that underly economics, business, and accounting.  In accounting, you will learn about how to decide which mathematical too to use (straight line versus declining balance depreciation), and to find a numerical value for the rate of depreciation.  Rates of depreciation can be found in many ways. For example, you can use the actual sales price for cars based on their mileage to emperically determine how much the value drops per mile.  But there are also other ways of calculating the rate of depreciation. For example, some assets have a known or conventional \"scrap value\" and \"expected lifespan.\"  Once you know the starting value, the scrap value, and the expected lifespan, you can actually compute the yearly depreciation you should use. Mathematically, that means solving for the rate to get       Applications of Logarithms  Although logarithms are less familiar than lines, polynomials, and rational functions, they do play an important role in the physical and economic sciences. In this section we will introduce two examples of logarithms. These examples are somewhat simplified for mathematical clarity, but the interested reader is encouraged to continue their study to understand the relevant nuances.  Logarithmic models often arise when discussing quantities that are more meaningful when compared to a baseline than when viewed as isolated numbers.  For example, it is hard to say how happy it would make someone to win a $1000 prize. Presumably this win would make someone with $5,000 in their bank account would be much happier than a similar win would make someone with $5,000,000 in wealth.  Similarly, a cell phone ringer might seem very loud in a quiet library, but the same ringer would sound very quiet at a packed concert.   Sound Perception and Logarithms   Let denote the magnitude of a sound, measured by the amplitude of the sound wave itself. The percieved sound level is given by    This formula is a slight oversimplificaiton. See, for example, Wikipedia for more details.     The sound waves of rustling leaves have power . Find .    decibels    The sound waves in a quiet library have power . Find . How much louder does this sound compared to rustling leaves?    decibels.  The decibel rating of a quiet library (40 dB) is twice the decibel rating of leaves (20 dB), so the library sounds twice as loud.  But surprisingly, this apparent doubling is actually the result of a -fold increase in the power of the waves.    The sound waves from an alarm clock have power . Find . How much louder does this sound compared to a quiet library?    decibels.  The decibel rating of an alarm clock (80 dB) is twice the decibel rating of a quiet library (40 dB), so the library sounds twice as loud.  But surprisingly, this apparent doubling is actually the result of a -fold increase in the power of the waves.    How much does doubling the power of the sound waves increase the decibel rating of a given frequency ?   We want to understand the decibel rating of . Using the definition of gives Doubling the power of the sound waves only increases the decibel rating by about     How much does increasing the power of the sound waves by a factor of 100 change the decibel rating of a given frequency ?   We want to understand the decibel rating of . Using the definition of gives  Multiplying the power of sound waves by a factor of only increases the decibel rating by the addition of .     Utility and Logarithms   Some economists argue that the percieved value of money (often called the utility of money) is logarithmic. Of course, different people will have different utility functions. To see why, we will explore a specific utility function.   You can find more on this in Chapter 25 of Thinking Fast and Slow .    Given life savings of money in dollars, let the utility of $ of these savings be given by     Find the utility of $0, $10, $100, $1000, $10,000, $100,000, and $1,000,000.  Explain the meaning of these numbers. Why are some negative? Why are some positive? How do they change as your life savings increases?    The first thing to note is that is undefined. Mathematically, this is because is undefined. Practically, this is because you would be very unhappy if you did not have any money to use to pay rent, buy food, etc.  Next, note that this person has negative utility until approximately . Perhaps this would mean that the individual needs at least $1000 for basic necessities. Then a balance of less than $1000 implies unmet necesseties, which would make the individual unhappy indeed.  Finally, consider the values above $1000. Note that increasing the balance by a factor of 10 approximately increases their happiness by 50 utility points. Often, this is because the individual will start with a list of very clear and very productive uses of the money. As those clear producive uses are taken care of, the individual needs to look for less clear or less productive uses for their money. Thus, each dollar does not have the same value to the individual!  Of course, this is an overly simplified example. In fact, utility functions are much more complex. But even these more complex functions will share many of the above properties with our logarithmic utility.    How does doubling a wealth of $ impact utility?   We are asked to understand the utility of $ dollars. Using the utility function given, we have  Doubling the amount of money available adds 15.04 utility (or \"happiness\") points.    How does multiplying a wealth of $ by a factor of 10 impact utility?   We are asked to understand the utility of $ dollars. Using the utility function given, we have  Multipling by 10 the amount of money available adds 49.97 utility (or \"happiness\") points.     "
},
{
  "id": "sec-inverses-2",
  "level": "2",
  "url": "ch_logarithms.html#sec-inverses-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one "
},
{
  "id": "eg_onetoone",
  "level": "2",
  "url": "ch_logarithms.html#eg_onetoone",
  "type": "Example",
  "number": "6.1",
  "title": "Exploring the definition of one-to-one.",
  "body": " Exploring the definition of one-to-one  This definition is easiest to apply when you are thinking about functions defined using arrow diagrams.   The function f is one-to-one. The function g is not one-to-one because g(2)=b and g(3)=b    "
},
{
  "id": "sec-inverses-4",
  "level": "2",
  "url": "ch_logarithms.html#sec-inverses-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "ch_logarithms.html#def-inverse",
  "type": "Definition",
  "number": "6.2",
  "title": "",
  "body": "  Let be a one-to-one function. Its inverse is the function, written , which satisfies    "
},
{
  "id": "sec-inverses-9",
  "level": "2",
  "url": "ch_logarithms.html#sec-inverses-9",
  "type": "Example",
  "number": "6.3",
  "title": "Understanding Inverses Graphically.",
  "body": " Understanding Inverses Graphically  Graphically, reversing the roles of input and ouput is the same thing as reflecting the graph of the function across the diagonal line .     "
},
{
  "id": "sec-inverses-12",
  "level": "2",
  "url": "ch_logarithms.html#sec-inverses-12",
  "type": "Exploration",
  "number": "6.1",
  "title": "",
  "body": "  Let     Find an equation for    First, write down the equation . In this case, Next, solve this equation for . Finally, reverse the roles of and . This gives the equation The equation for our inverse is     Use your equation for to evaluate .   We are given that . We have also found that .  To compute , replace every in the equation for with the equation . We have shown in this case that . In other words, we have shown that the function and inverse undo eachother.   "
},
{
  "id": "ex_motivatinglogs",
  "level": "2",
  "url": "ch_logarithms.html#ex_motivatinglogs",
  "type": "Exploration",
  "number": "6.2",
  "title": "",
  "body": "  How many times do you need to double the number to achieve an eight-fold increase?   Just start doubling 10, and see what works! You need to double 10 three times to get from 10 to 80 (an eight-fold increase). In other words,     How many times do you need to double any number to achieve an eight fold increase of ?   Our strategy for the first example works the same here: You need to double any number three times to get an eight-fold increase. This is the same as saying that ,     How many times do you need to triple to get an 81-fold increase?   Our strategy for the first example works the same here: You need to triple any number four times to get an eighty one-fold increase. This is the same as saying that ,    "
},
{
  "id": "sec_logartims-4",
  "level": "2",
  "url": "ch_logarithms.html#sec_logartims-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logarithms "
},
{
  "id": "def-logs",
  "level": "2",
  "url": "ch_logarithms.html#def-logs",
  "type": "Definition",
  "number": "6.4",
  "title": "",
  "body": "  Given any numbers , is equal to the exponent such that    "
},
{
  "id": "ex_computinglogs",
  "level": "2",
  "url": "ch_logarithms.html#ex_computinglogs",
  "type": "Exploration",
  "number": "6.3",
  "title": "",
  "body": "  Compute    Written in exponential form, finding is the same as finding the exponent such that Here, because , we say that     Compute    Written in exponential form, finding is the same as finding the exponent such that Here, because , we say that .    Compute    Written in exponential form, finding is the same as finding the exponent such that To get the right hand side, we must multiply 10 nine times. That means . Therefore, we have that .   "
},
{
  "id": "prop-logsareinverses",
  "level": "2",
  "url": "ch_logarithms.html#prop-logsareinverses",
  "type": "Proposition",
  "number": "6.5",
  "title": "",
  "body": "  Fix any base . The function is the inverse of the the base exponential function .    "
},
{
  "id": "subsec-naturallogs-2",
  "level": "2",
  "url": "ch_logarithms.html#subsec-naturallogs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "def-naturallog",
  "level": "2",
  "url": "ch_logarithms.html#def-naturallog",
  "type": "Definition",
  "number": "6.6",
  "title": "",
  "body": "  We write where   In other words, the natural logarithm  is the inverse of the natural exponential function .   "
},
{
  "id": "ex_computingln",
  "level": "2",
  "url": "ch_logarithms.html#ex_computingln",
  "type": "Exploration",
  "number": "6.4",
  "title": "",
  "body": "  Compute    There are two ways to answer this question. Algebraically, we know that undoes base exponentiation. So simply rewrite the argument of the function as a power of    Alternatively, you can answer the question by playing the riddle game: what does the exponent of need to be for to equal ?  We know that . In other words, we need the exponent of to be . That tells us that     Compute    Again, there are two ways to answer this question. Algebraically, we know that undoes base exponentiation. So simply rewrite the argument of the function as a power of    Alternatively, you can answer the question by playing the riddle game: what does the exponent of need to be for to equal ?  We know that . In other words, we need the exponent of to be . That tells us that     Let and . Simplify , , , and    This is just a more complex way of asking us to simplify the natural log of e to various numbers. Reasoning as above gives       "
},
{
  "id": "sec_logartims-11",
  "level": "2",
  "url": "ch_logarithms.html#sec_logartims-11",
  "type": "Checkpoint",
  "number": "6.7",
  "title": "",
  "body": " Simplify .      "
},
{
  "id": "ex_usingloglaws",
  "level": "2",
  "url": "ch_logarithms.html#ex_usingloglaws",
  "type": "Exploration",
  "number": "6.5",
  "title": "",
  "body": "  Expand the following completely using the laws of logarithms.        When you look at this expression, you see a power, so write down the first law of logarithms . Using the numbers we're given, we obtain .        When you look at this expression, you see that the input is the product and , so write down the second law of logarithms . Applying that in our example, we get .  Recopy the first logarithm . For the second logarithm, see that the input is a power, so write down the first law of logarithms . That gives .   "
},
{
  "id": "ex_solving_exponentials",
  "level": "2",
  "url": "ch_logarithms.html#ex_solving_exponentials",
  "type": "Exploration",
  "number": "6.6",
  "title": "",
  "body": "  Solve for satisfying    The key idea of algebra is that if you have the equation , you can do the same thing to both sides and have another true equation. Here, we are given that That means that we also know that the equation is true, replacing and . This gives We have the property of logarithms that on the left, to get the equation Now, this looks complicated, but we can use a calculator to simplify and . This gives us the equation Rearranging the left side, we have Using a calculator, we see that , which gives Dividing both sides by , we get You could also have done this with the original by dividing both sides by to get     Solve for satisfying    There are two different approaches for solving an equation like this, planning ahead or using brute force.   Planning Ahead  We wish to solve the equation We want to eventually introduce logarithms to allow us to apply Log Law 3, to pull the out of the exponent. However, that law will not apply to because of the coefficient of .  But we can divide both sides of the equation by 4. This gives us Now, we can take the logarithm of both sides Now we can apply the law of logs on the left with and  We can now divide both sides by to get This example is exact, but it can be a bit overwhelming. You can also use your calculator to simplify If you do use your calculator, try to use as many decimal places as possible. Rounding errors can grow if you do a lot of calculations. It is possible to understand how these errors grow, but that question is beyond the scope of this course.    Brute Force  We have seen how to solve this equation with a bit of planning ahead. But what happens if you start by taking the natural log of both sides of the quation You get On the left side, we have . We cannot use Log Law 1, since this is a product. Instead, we need to use Log Law 2 with and . This gives Now we can use Law Log 1 with and to get You can simplify this using a calculator to get You can solve this as usual to get Alternatively, you can solve the exact equation to get        The balance of a certain investment is given by as a function of the number of years . How long must you wait until the balance reaches 80?   Note that this specific function is very simple, so it is possible to answer this numerically. After one year, the balance will be , after two years the balance will be , and after three years the balance will be . It will take 3 years for the balance to reach .  For more complex equations, we will need to set up and solve an exponential equation. In this case, we want to find a such that equals 80. This gives us the equation Alternatively, we could have simplified the natural log terms and solved as follows    "
},
{
  "id": "ex_compoundinterestfortime",
  "level": "2",
  "url": "ch_logarithms.html#ex_compoundinterestfortime",
  "type": "Exploration",
  "number": "6.7",
  "title": "",
  "body": "  You invest $1000 at 15% interest compounded monthly.    How many years are required until you double your money?   First, write down the compound interest formula from . with , , and . Furthermore, we want the future value to be twice 1000. In other words, we want This gives Dividing both sides by 1000 gives   Next, we can simplify this equation using a calculator and the properties of exponents      Finally, finish solving the exponential equation as above using the Laws of Logs . With 15% interest, it will take about 4.64 years for the balance to double.    How long will it be until the balance reaches $10,000?   First, write down the compound interest formula and plug in the values we are given. Note that we want the time when the future value . That gives Simplifying this with a calculator and the laws of exponents gives Taking of both sides and applying the laws of logarithms, we get The balance will increase to $10,000 in about 15 years.   "
},
{
  "id": "sec_solvingfortime-8",
  "level": "2",
  "url": "ch_logarithms.html#sec_solvingfortime-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "depreciation "
},
{
  "id": "ex_depreciation2",
  "level": "2",
  "url": "ch_logarithms.html#ex_depreciation2",
  "type": "Exploration",
  "number": "6.8",
  "title": "",
  "body": "  Suppose that a certain asset loses 30% of its value each year. In other words, suppose that the value of the asset after years is given by     Suppose that the asset starts with value . Find the value after 12 years.   The future value function is After years, After years, the value of the asset will be approximately $13.84    Suppose that the value after 12 years is $50. Find the starting value .   The future value function is We know that when , that . Plugging this in gives The starting value must have been about $3,612.38    Suppose that the asset starts with a value . Find the number of years for the value to decrease to .   The future value function is We want the time when the value reaches when from a starting value of . Plugging this in gives It will take about 6.45 years for the balance to decline from 1000 to 100.   "
},
{
  "id": "sec_solvingfortime-10",
  "level": "2",
  "url": "ch_logarithms.html#sec_solvingfortime-10",
  "type": "Application",
  "number": "6.8",
  "title": "Depreciating Assets and Scrap Value.",
  "body": " Depreciating Assets and Scrap Value  In this class, our focus is on the mathematical tools that underly economics, business, and accounting.  In accounting, you will learn about how to decide which mathematical too to use (straight line versus declining balance depreciation), and to find a numerical value for the rate of depreciation.  Rates of depreciation can be found in many ways. For example, you can use the actual sales price for cars based on their mileage to emperically determine how much the value drops per mile.  But there are also other ways of calculating the rate of depreciation. For example, some assets have a known or conventional \"scrap value\" and \"expected lifespan.\"  Once you know the starting value, the scrap value, and the expected lifespan, you can actually compute the yearly depreciation you should use. Mathematically, that means solving for the rate to get   "
},
{
  "id": "sec-logapplications-6",
  "level": "2",
  "url": "ch_logarithms.html#sec-logapplications-6",
  "type": "Exploration",
  "number": "6.9",
  "title": "Sound Perception and Logarithms.",
  "body": " Sound Perception and Logarithms   Let denote the magnitude of a sound, measured by the amplitude of the sound wave itself. The percieved sound level is given by    This formula is a slight oversimplificaiton. See, for example, Wikipedia for more details.     The sound waves of rustling leaves have power . Find .    decibels    The sound waves in a quiet library have power . Find . How much louder does this sound compared to rustling leaves?    decibels.  The decibel rating of a quiet library (40 dB) is twice the decibel rating of leaves (20 dB), so the library sounds twice as loud.  But surprisingly, this apparent doubling is actually the result of a -fold increase in the power of the waves.    The sound waves from an alarm clock have power . Find . How much louder does this sound compared to a quiet library?    decibels.  The decibel rating of an alarm clock (80 dB) is twice the decibel rating of a quiet library (40 dB), so the library sounds twice as loud.  But surprisingly, this apparent doubling is actually the result of a -fold increase in the power of the waves.    How much does doubling the power of the sound waves increase the decibel rating of a given frequency ?   We want to understand the decibel rating of . Using the definition of gives Doubling the power of the sound waves only increases the decibel rating by about     How much does increasing the power of the sound waves by a factor of 100 change the decibel rating of a given frequency ?   We want to understand the decibel rating of . Using the definition of gives  Multiplying the power of sound waves by a factor of only increases the decibel rating by the addition of .   "
},
{
  "id": "sec-logapplications-7",
  "level": "2",
  "url": "ch_logarithms.html#sec-logapplications-7",
  "type": "Exploration",
  "number": "6.10",
  "title": "Utility and Logarithms.",
  "body": " Utility and Logarithms   Some economists argue that the percieved value of money (often called the utility of money) is logarithmic. Of course, different people will have different utility functions. To see why, we will explore a specific utility function.   You can find more on this in Chapter 25 of Thinking Fast and Slow .    Given life savings of money in dollars, let the utility of $ of these savings be given by     Find the utility of $0, $10, $100, $1000, $10,000, $100,000, and $1,000,000.  Explain the meaning of these numbers. Why are some negative? Why are some positive? How do they change as your life savings increases?    The first thing to note is that is undefined. Mathematically, this is because is undefined. Practically, this is because you would be very unhappy if you did not have any money to use to pay rent, buy food, etc.  Next, note that this person has negative utility until approximately . Perhaps this would mean that the individual needs at least $1000 for basic necessities. Then a balance of less than $1000 implies unmet necesseties, which would make the individual unhappy indeed.  Finally, consider the values above $1000. Note that increasing the balance by a factor of 10 approximately increases their happiness by 50 utility points. Often, this is because the individual will start with a list of very clear and very productive uses of the money. As those clear producive uses are taken care of, the individual needs to look for less clear or less productive uses for their money. Thus, each dollar does not have the same value to the individual!  Of course, this is an overly simplified example. In fact, utility functions are much more complex. But even these more complex functions will share many of the above properties with our logarithmic utility.    How does doubling a wealth of $ impact utility?   We are asked to understand the utility of $ dollars. Using the utility function given, we have  Doubling the amount of money available adds 15.04 utility (or \"happiness\") points.    How does multiplying a wealth of $ by a factor of 10 impact utility?   We are asked to understand the utility of $ dollars. Using the utility function given, we have  Multipling by 10 the amount of money available adds 49.97 utility (or \"happiness\") points.   "
},
{
  "id": "ch_limits",
  "level": "1",
  "url": "ch_limits.html",
  "type": "Chapter",
  "number": "7",
  "title": "Limits",
  "body": " Limits       Reading Graphs Dynamically  Reading graphs dynamically will be an essential part of understanding the key concepts of calculus, and applying those concepts to your daily life.  To read any graph dynamically, start at a specific value, and imagine \"standing\" on the function above that point on the x-axis. The value corresponds with your height above the x-axis.  Next, imagine walking right (increasing ) and left (decreasing ) along the curve. As you walk, the curve forces your height to move up or down.   Exploring Limits     Exploring  Let's explore what happens in .    To see what happens as you approach from the left ,   Move the value to some number less than . For simplicity, start by moving to . At that point on the curve, your height will be .    Drag the slider to increase towards 1, making sure never to allow to equal 1.  As you increased (as you move it right), you will have seen the height increase as well. Even more, you will have seen the height getting closer and closer to .    Because of this, we say that your height gets closer and closer to as approaches 1 from the left.      Important: The fact that is unrelated to our question, because that tells us what happens at that point , not what happens during the process of approaching that point .    To see what happens as you approach from the right ,   Move the slider so that is significantly bigger than . For simplicity, start by moving to . At that point on the curve, your height will be .    Drag the slider to decrease  toward 1, making sure never to allow to equal 1. As you do this, the height decreases, getting closer and closer to .    Because of this, we say that the height gets closer and closer to as approaches 1 from the right.       As you approach from the left, your height increases to .  As you approach from the right, your height decreases to .     To answer these questions clearly and concisely, we need new mathematical language. To understand our notation, it will be helpful to remember the number line. If you ( ) approach a number  from the left , you are approaching from the side of the number line with all the negative numbers. Because of that, we write as a shorthand for approaches from the left .   If you ( ) approach a number  from the right , you are approaching from the side of the number line with all the positive numbers. Because of that, we write as a shorthand for approaches from the right .       Suppose that is some function, and that and are two numbers.    Left  Suppose that is approaching from the left (that ). If the heights get closer and closer to a number , then we say that the the left hand limit exists, and write We can read this expression by saying \"(1) the limit (2) as approaches from the left is (3) equal to \"L\".    Right  Suppose that is approaching from the right (that ). If the heights get closer and closer to a number , then we say that the the right hand limit exists, and write We can read this expression by saying \"(1) the limit (2) as approaches from the right is (3) equal to \"L\".    Undirected  Sometimes, we talk about limits without any direction.  We say that the (undirected) limit of as approaches is equal to , written if as the input gets closer to  , the output gets closer to  .        Let be the function defined by the graph in . Compute the following limits.      Following the reasoning from , we see that       Following the reasoning from , we see that       We have seen that as approaches 1, the height goes to 2 regardless of the direction. That tells us that the undirected limit exists and equals 2. In other words,       Following the reasoning from , we see that       Following the reasoning from , we see that       We have seen that as approaches 3, the height goes to different values depending on your direction of approach. That tells us that the undirected limit does not exist . In other words,     In the graph above, we have already seen that as we move the input (slider) closer to , that the height (output) gets closer to . In our new lanugage, that says    A little extra precision  In this class, we only need an informal understanding of limits, and the definitions above should be more than enough.  But there is still a little bit of ambiguity in expressions like \"getting closer and closer to.\" It is natural to ask, how close is close enough? The answer to that question gives us the full, mathematical definition of a limit.  That definition says that if and only if for any acceptable error , there is an acceptable distance such that the difference between the actual height and the limit height of is less than whenever the input is no more than distance from the point that you are approaching.  Again, unless you find it helpful we don't need that more formal definition for this class. The main point is that it is possible to eliminate any ambiguity about what \"close enough\" really means.   The function in Figure is very unusual. Most mathematical functions can be drawn smoothly, with one or two strokes of a pen. But this function includes lots of jumping around, and we need to lift the pen every time there is a \"jump\". We can make this precise using the following definition.    We say that a function is continuous on its domain if you can draw the graph of the function without lifting your pen.  A function is continuous at the number if , which means that both the left and right limits exist, and equal the value that achieves at .    The two definitions are really two ways of saying the same thing. If your function can be drawn without lifting your pen, then each point flows smoothly into the next point, and the limit exists and equals   On the other hand, if the function can't be drawn without lifting your pen, then there must be some point in drawing the curve where the function does not smoothly flow into the next point. In that case, the limit either does not exist, or it does not equal .    Three reasons a function might not be continuous.    Removable Discontinuity     Imagine running along this graph. The discontinuity is a hole in the ground, like an open manhole cover. If you were to walk over that hole, you would fall down the hole, and hit the ground at the bottom. But it seems like someone should be able to remove this discontinuity by covering up the manhole cover (by redefining the function at that specific point).  We say that any function has a removable discontinuity if the left and right limits both exist, and both equal the same number, but if that number is not equal to .    Jump Discontinuity     In this graph, the limit does not exist. If you imagine running along this curve, you would need to jump to get from one side of the discontinuity to the other.  We say that any function has a jump discontinuity if the left and right limits equal two different finite numbers.    Infinite Discontinuity     In this graph, the left and right limits both go off to infinity, and the graph of the function has a vertical asymptote. If you imagine running along this curve, you would need to be able to go to infinity in the process of getting from one side to the other.  We say that any function has an infinite discontinuity if either the left or right limit goes to infinity.       Macroeconomics and Mostly Continuous Functions  There is an important difference between histograms and scatter plots on the one hand, and continuous functions on the other.   In a discrete graph, you would need to \"jump\" to move between the discrete points. But as you add more and more points, the distance you would need to \"jump\" gets smaller and smaller. If you add enough discrete points, the graph becomes indistinguishable from a continuous curve, where you can walk smoothly along the curve.  In the words of Investopedia , Macroeconomics is the branch of economics that deals with the structure, performance, behavior, and decision-making of the whole, or aggregate, economy .  There are a lot of data points in the overall economy, so many macroeconomic functions are essentially continuous. However, certain unique events can introduce jumps.  As a very simplified example, any given oil rig will be able to produce different amounts of oil, based on how many people are working on it, how much electricity is used for the pump, and other factors. These factors can generally be scaled smoothly, so the cost of producing oil should be roughly continuous as a function of the number of barrels to be produced.  But there are also limits to the amount of oil that a certain rig will be able to extract. To produce more than that amount of oil, an entirely new oil rig will need to be set up, causing a massive jump in the cost. Furthermore, additional refinement will probably be needed after the new rig is produced, possibly resulting in another jump in cost.    Suppose that the following graph shows the cost in millions of dollars of producing million barells of oil at a specific oil field. Use this graph to answer the following questions.     Compute What does this tell us about oil production?   As the number of (millions of) gallons of oil increases to 10 from the left , the cost increases to $100 (million) dollars. Therefore,     Compute What does this tell us about oil production?   As the number of (millions of) gallons of oil decreases to 10 from the right , the cost decreases to $150 (million) dollars. Therefore,     Compute What does this tell us about oil production?   To produce exactly 10 (millon) barrels, the cost will be exactly $125 (million) dollars. Therefore,     To define functions with jumps, we often use piecewise functions . The graph in is made up of the following three functions:   When , graph the line     When , graph the point     When , graph the line    Mathematically, this is often abbreviated as     Computing Limits Numerically  You can also compute limits numerically. The process is straighforward, once you understand what the question is asking. For example, suppose that    You are asked to compute     Remember this means you want to see what happens to your height when your value approaches from the right.    Think about some values you would pass through when approaching from the right. For example, you would pass through and so on.    Compute the height at each of the values we listed above.                                     Think about what is happening to your height as your value is approaching 2 from the right.  Notice that the -value is getting closer and closer to 0 . In other words,      To get more comfortable with what this means, the graph of the piecewise function is given below. As you change the value of , the left side of the screen displays   The current value of .    Whether is greater, equal, or less than . This is used to decide which of the three equations to use when computing .    The result of plugging the current value of into the equation for , which gives the current value.      We can use the equation    Suppose that the cost of producing barrels of oil is given by     Compute    Think about some values you would pass through when approaching from the right. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                 As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the right.  And as these values approach 10, we see that the heights get closer and closer to 150. That means     Compute    Think about some values you would pass through when approaching from the left. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the left.  And as these values approach 10, we see that the heights get closer and closer to 100. That means     Is continuous at ? If not, classify the type of discontinuity.   We have seen above that the left and right hand limits exist, but do not equal eachother. In other words, we have seen that . It follows that the function is not continuous at .  Because the directed limits exist and equal finite numbers, this is a jump discontinuity .     Let . Find .   Think about some values you would pass through when approaching from the right. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                       As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the right.  And as these values approach 0, we see that the heights are getting bigger and bigger, without bound. That means      "
},
{
  "id": "figure_interactivelimit",
  "level": "2",
  "url": "ch_limits.html#figure_interactivelimit",
  "type": "Figure",
  "number": "7.1",
  "title": "Exploring Limits",
  "body": " Exploring Limits   "
},
{
  "id": "example_interactivelimit_intuitive",
  "level": "2",
  "url": "ch_limits.html#example_interactivelimit_intuitive",
  "type": "Example",
  "number": "7.2",
  "title": "Exploring Figure 7.1.",
  "body": " Exploring  Let's explore what happens in .    To see what happens as you approach from the left ,   Move the value to some number less than . For simplicity, start by moving to . At that point on the curve, your height will be .    Drag the slider to increase towards 1, making sure never to allow to equal 1.  As you increased (as you move it right), you will have seen the height increase as well. Even more, you will have seen the height getting closer and closer to .    Because of this, we say that your height gets closer and closer to as approaches 1 from the left.      Important: The fact that is unrelated to our question, because that tells us what happens at that point , not what happens during the process of approaching that point .    To see what happens as you approach from the right ,   Move the slider so that is significantly bigger than . For simplicity, start by moving to . At that point on the curve, your height will be .    Drag the slider to decrease  toward 1, making sure never to allow to equal 1. As you do this, the height decreases, getting closer and closer to .    Because of this, we say that the height gets closer and closer to as approaches 1 from the right.       As you approach from the left, your height increases to .  As you approach from the right, your height decreases to .    "
},
{
  "id": "sec_readingdynamically-7",
  "level": "2",
  "url": "ch_limits.html#sec_readingdynamically-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "from the left from the right "
},
{
  "id": "def-limit",
  "level": "2",
  "url": "ch_limits.html#def-limit",
  "type": "Definition",
  "number": "7.3",
  "title": "",
  "body": "  Suppose that is some function, and that and are two numbers.    Left  Suppose that is approaching from the left (that ). If the heights get closer and closer to a number , then we say that the the left hand limit exists, and write We can read this expression by saying \"(1) the limit (2) as approaches from the left is (3) equal to \"L\".    Right  Suppose that is approaching from the right (that ). If the heights get closer and closer to a number , then we say that the the right hand limit exists, and write We can read this expression by saying \"(1) the limit (2) as approaches from the right is (3) equal to \"L\".    Undirected  Sometimes, we talk about limits without any direction.  We say that the (undirected) limit of as approaches is equal to , written if as the input gets closer to  , the output gets closer to  .     "
},
{
  "id": "sec_readingdynamically-9",
  "level": "2",
  "url": "ch_limits.html#sec_readingdynamically-9",
  "type": "Exploration",
  "number": "7.1",
  "title": "",
  "body": "  Let be the function defined by the graph in . Compute the following limits.      Following the reasoning from , we see that       Following the reasoning from , we see that       We have seen that as approaches 1, the height goes to 2 regardless of the direction. That tells us that the undirected limit exists and equals 2. In other words,       Following the reasoning from , we see that       Following the reasoning from , we see that       We have seen that as approaches 3, the height goes to different values depending on your direction of approach. That tells us that the undirected limit does not exist . In other words,    "
},
{
  "id": "sec_readingdynamically-11",
  "level": "2",
  "url": "ch_limits.html#sec_readingdynamically-11",
  "type": "Note",
  "number": "7.4",
  "title": "A little extra precision.",
  "body": " A little extra precision  In this class, we only need an informal understanding of limits, and the definitions above should be more than enough.  But there is still a little bit of ambiguity in expressions like \"getting closer and closer to.\" It is natural to ask, how close is close enough? The answer to that question gives us the full, mathematical definition of a limit.  That definition says that if and only if for any acceptable error , there is an acceptable distance such that the difference between the actual height and the limit height of is less than whenever the input is no more than distance from the point that you are approaching.  Again, unless you find it helpful we don't need that more formal definition for this class. The main point is that it is possible to eliminate any ambiguity about what \"close enough\" really means.  "
},
{
  "id": "def-continuous",
  "level": "2",
  "url": "ch_limits.html#def-continuous",
  "type": "Definition",
  "number": "7.5",
  "title": "",
  "body": "  We say that a function is continuous on its domain if you can draw the graph of the function without lifting your pen.  A function is continuous at the number if , which means that both the left and right limits exist, and equal the value that achieves at .   "
},
{
  "id": "sec_readingdynamically-16",
  "level": "2",
  "url": "ch_limits.html#sec_readingdynamically-16",
  "type": "Example",
  "number": "7.6",
  "title": "Three reasons  a function might <em class=\"emphasis\">not<\/em> be continuous..",
  "body": " Three reasons a function might not be continuous.    Removable Discontinuity     Imagine running along this graph. The discontinuity is a hole in the ground, like an open manhole cover. If you were to walk over that hole, you would fall down the hole, and hit the ground at the bottom. But it seems like someone should be able to remove this discontinuity by covering up the manhole cover (by redefining the function at that specific point).  We say that any function has a removable discontinuity if the left and right limits both exist, and both equal the same number, but if that number is not equal to .    Jump Discontinuity     In this graph, the limit does not exist. If you imagine running along this curve, you would need to jump to get from one side of the discontinuity to the other.  We say that any function has a jump discontinuity if the left and right limits equal two different finite numbers.    Infinite Discontinuity     In this graph, the left and right limits both go off to infinity, and the graph of the function has a vertical asymptote. If you imagine running along this curve, you would need to be able to go to infinity in the process of getting from one side to the other.  We say that any function has an infinite discontinuity if either the left or right limit goes to infinity.    "
},
{
  "id": "explore_oillimit_graphical",
  "level": "2",
  "url": "ch_limits.html#explore_oillimit_graphical",
  "type": "Exploration",
  "number": "7.2",
  "title": "",
  "body": "  Suppose that the following graph shows the cost in millions of dollars of producing million barells of oil at a specific oil field. Use this graph to answer the following questions.     Compute What does this tell us about oil production?   As the number of (millions of) gallons of oil increases to 10 from the left , the cost increases to $100 (million) dollars. Therefore,     Compute What does this tell us about oil production?   As the number of (millions of) gallons of oil decreases to 10 from the right , the cost decreases to $150 (million) dollars. Therefore,     Compute What does this tell us about oil production?   To produce exactly 10 (millon) barrels, the cost will be exactly $125 (million) dollars. Therefore,    "
},
{
  "id": "sec-ComputingLimitsNumerically-6",
  "level": "2",
  "url": "ch_limits.html#sec-ComputingLimitsNumerically-6",
  "type": "Exploration",
  "number": "7.3",
  "title": "",
  "body": "  Suppose that the cost of producing barrels of oil is given by     Compute    Think about some values you would pass through when approaching from the right. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                 As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the right.  And as these values approach 10, we see that the heights get closer and closer to 150. That means     Compute    Think about some values you would pass through when approaching from the left. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the left.  And as these values approach 10, we see that the heights get closer and closer to 100. That means     Is continuous at ? If not, classify the type of discontinuity.   We have seen above that the left and right hand limits exist, but do not equal eachother. In other words, we have seen that . It follows that the function is not continuous at .  Because the directed limits exist and equal finite numbers, this is a jump discontinuity .   "
},
{
  "id": "sec-ComputingLimitsNumerically-7",
  "level": "2",
  "url": "ch_limits.html#sec-ComputingLimitsNumerically-7",
  "type": "Checkpoint",
  "number": "7.7",
  "title": "",
  "body": " Let . Find .   Think about some values you would pass through when approaching from the right. For example, you would pass through and so on. Compute the height at each of the values we listed above.                                       As you move from the top row of the table to the bottom row of the table, the values get closer and closer to , always from the right.  And as these values approach 0, we see that the heights are getting bigger and bigger, without bound. That means    "
},
{
  "id": "ch_totalschanges",
  "level": "1",
  "url": "ch_totalschanges.html",
  "type": "Chapter",
  "number": "8",
  "title": "Average Rates of Change",
  "body": " Average Rates of Change   The concepts contained in are all connected in important, but sometimes tricky to follow ways. As you go through this section, you may find it helpful to refer to the diagram below to see how the concepts we have seen so far are related.   A concept map of the relationship between concepts of limits, rates of change, and slope.      Average Rates of Change  Let be any function of . That means that any change of input produces a change in the output . If we average the change in outputs over the inputs , we get the average change  .  For reasons we will see in a future section, we will use the terms average change and average rate of change interchangeably.    Given a curve and two input values and    The change in input that results from moving from to is     The resulting change in output that results from moving from to is where and .    The average rate of change of as a result of changing the inputs from to is         Recall that the total cost function is a function of the total number of items to be produced. Suppose that increasing your production by 100 items will increase the total cost by $2000. Find the average (aka average rate of ) change in the cost.   We are told that a change of input will result in an increase in total cost of . To find the average change, divide that $2000 evenly across the 100 additional items On average, each of the 100 additional items will increase the total cost by $20.   Average rates are common throughout economics and daily life. When the number of items is large (in the context of macroeconomics), limits show up and calculus begins. But before we get there, we will first explore a number of examples that emphasize the connection between totals , changes and averages\/rates .    A total (cumulative) cost function is defined by in dollars as a function of the total number of items to be produced.    Last year, you made 100 items. This year, you are considering increasing your production to 150 items. Find the change in cost and the average rate of change in the cost that would result from this change.   From the information given in the problem, we can compute the total cost of producing 100 items is and that the total cost of producing 150 items would be The change in cost between these quantities is This change is a result of changing the quantity by . Dividing the total cost evenly among the items results in an average cost per item of   There were a lot of parts of this calculation. You can either use a the definition which is a single formula that combines all of these steps, or you can organize the different parts separately using the table below. This is called an Average Rate of Change table, often abbreviated AROC.                         Use the cost function above to find the average change in cost between 100 and 125 items, between 100 and 110 items, and between 100 and 101 items.                                              Suppose that last year you produced 100 items, and that you are planning to increasing production by 5 items this year. Find the average rate of change in cost that results from this change.   We are given the starting quantity and the change in quantity . Using this, we can reason backward to get the ending quantity . We can use the AROC equation or create an AROC table                     The 5 additional items will increase the total cost by an average of 70.50 dollars per item .      Graphs of Rates, Changes, and Totals   Understanding and Applying \"Average Rates of Change\"  We've spent a lot of time thinking about total and change graphs. In each of those examples, we knew the value of the total for each natural number   But what happens if we only have information about a few values of . For example, in the graph on the right, we only know the total value on day 0, 5, 10, etc.  What should we do if we want to know the change between day 0 and 1? We can't know that number for certain, but we can try to compute the average change.  Since the value went up 2 units over 5 days, if we divide that change evenly over the 5 days we get the Average Rate Of Change       Summarizing this in a table, we get the row in an Average Rate Of Change (AROC) table:                          Suppose, as in , that a total cost function is given by the histogram below          Fill in the following AROC table                                                                                                       Use your AROC table to fill in the graphs of the change and of the rate in the graph below.                 Suppose that . Find the average rate of change between and , between and , and between and 15.    Use an AROC table to find the average rate of change between and , between and , and between and and     Graph histograms representing the total function , the change function , and of the rate of change function .      Here's a graph of the solution:         Velocity and Instantaneous Rates of Change  So far, we have seen many examples of finding and applying average change . But we have not yet seen why we would call the average rate of change . To understand that side of the story, we need to make a small detour into the physical world.   Measuring Speed with Radar  Imagine driving down the highway, coming around a corner at 75 miles per hour. Suddenly, you see a speed trap ahead, measuring your speed with radar. How does this work? The detector actually measures your distance at two points in time and .     Subtracting the distances gives your change in distance  in miles, and subtracting the times gives your change in time  in hours (or minutes, or seconds).  Your estimated velocity will be the average rate of change of your position   Better radar detectors use smaller .    hour gives a bad approximation.     hours (1 minute) gives a better approximation.     hours gives a very good approximation.    By making smaller and smaller, we get closer and closer to your true speed . Mathematically, that means      To find velocity numerically , compute the average rate (AROC) over smaller and smaller intervals ( ) to see where ends up going.   Mathematical notation  Average rates of change provide a rough, blocky approximation of change or difference . We highlight this by using the greek capital letter for D, to denote the large changes in time and position.  By letting go to 0, the approximation smooths out , giving the exact or instantaneous rate of change (IROC) . We sometimes denote instantanous rates by writing , using the smooth letter to emphasize that this is an improved version of the rough AROC.     Suppose that a position function corresponds to the AROC table below                                                    Complete the AROC table.                                                    Important: Note that as gets smaller, the decimal accuracy of your average gets smaller and smaller . To ensure that you had 4 decimal places of accuracy for , you would need to start with eight decimal places of accuracy.  On the homework, you will need to make sure you leave as many decimal places as possible. Otherwise, your and may be marked correct, but your may be marked incorrect.    Use your table to find the exact (instantaneous) velocity at .   To find the exact velocity (IROC) at , read the table from top to bottom, since the smaller values of are further down in the table.  As you read the column, note that it is getting closer and closer to . In other words, at ,      How do instantaneous rates of change connect to econonmics? Take a look at Exploration , and note that the AROC in the solution to that exercise is arranged in a very similar way to the table we used to compute the car's velocity at time in the example above.  Using a similar argument, we can use the AROC table in Exploration to see that the instantaneous rate of change of the total cost function at items is equal to 70 dollars per item.  What does this mean? We will return to this in much greater detail in section .   "
},
{
  "id": "sec-AROC-2",
  "level": "2",
  "url": "ch_totalschanges.html#sec-AROC-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average change "
},
{
  "id": "sec-AROC-3",
  "level": "2",
  "url": "ch_totalschanges.html#sec-AROC-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average change average rate of change "
},
{
  "id": "def-averagerate",
  "level": "2",
  "url": "ch_totalschanges.html#def-averagerate",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": "  Given a curve and two input values and    The change in input that results from moving from to is     The resulting change in output that results from moving from to is where and .    The average rate of change of as a result of changing the inputs from to is       "
},
{
  "id": "sec-AROC-5",
  "level": "2",
  "url": "ch_totalschanges.html#sec-AROC-5",
  "type": "Checkpoint",
  "number": "8.2",
  "title": "",
  "body": " Recall that the total cost function is a function of the total number of items to be produced. Suppose that increasing your production by 100 items will increase the total cost by $2000. Find the average (aka average rate of ) change in the cost.   We are told that a change of input will result in an increase in total cost of . To find the average change, divide that $2000 evenly across the 100 additional items On average, each of the 100 additional items will increase the total cost by $20.  "
},
{
  "id": "sec-AROC-7",
  "level": "2",
  "url": "ch_totalschanges.html#sec-AROC-7",
  "type": "Exploration",
  "number": "8.1",
  "title": "",
  "body": "  A total (cumulative) cost function is defined by in dollars as a function of the total number of items to be produced.    Last year, you made 100 items. This year, you are considering increasing your production to 150 items. Find the change in cost and the average rate of change in the cost that would result from this change.   From the information given in the problem, we can compute the total cost of producing 100 items is and that the total cost of producing 150 items would be The change in cost between these quantities is This change is a result of changing the quantity by . Dividing the total cost evenly among the items results in an average cost per item of   There were a lot of parts of this calculation. You can either use a the definition which is a single formula that combines all of these steps, or you can organize the different parts separately using the table below. This is called an Average Rate of Change table, often abbreviated AROC.                         Use the cost function above to find the average change in cost between 100 and 125 items, between 100 and 110 items, and between 100 and 101 items.                                              Suppose that last year you produced 100 items, and that you are planning to increasing production by 5 items this year. Find the average rate of change in cost that results from this change.   We are given the starting quantity and the change in quantity . Using this, we can reason backward to get the ending quantity . We can use the AROC equation or create an AROC table                     The 5 additional items will increase the total cost by an average of 70.50 dollars per item .   "
},
{
  "id": "insight-applyingAROC",
  "level": "2",
  "url": "ch_totalschanges.html#insight-applyingAROC",
  "type": "Application",
  "number": "8.3",
  "title": "Understanding and Applying \"Average Rates of Change\".",
  "body": " Understanding and Applying \"Average Rates of Change\"  We've spent a lot of time thinking about total and change graphs. In each of those examples, we knew the value of the total for each natural number   But what happens if we only have information about a few values of . For example, in the graph on the right, we only know the total value on day 0, 5, 10, etc.  What should we do if we want to know the change between day 0 and 1? We can't know that number for certain, but we can try to compute the average change.  Since the value went up 2 units over 5 days, if we divide that change evenly over the 5 days we get the Average Rate Of Change       Summarizing this in a table, we get the row in an Average Rate Of Change (AROC) table:                       "
},
{
  "id": "sec_graphsofrateschangesandtotals-3",
  "level": "2",
  "url": "ch_totalschanges.html#sec_graphsofrateschangesandtotals-3",
  "type": "Exploration",
  "number": "8.2",
  "title": "",
  "body": "  Suppose, as in , that a total cost function is given by the histogram below          Fill in the following AROC table                                                                                                       Use your AROC table to fill in the graphs of the change and of the rate in the graph below.              "
},
{
  "id": "sec_graphsofrateschangesandtotals-4",
  "level": "2",
  "url": "ch_totalschanges.html#sec_graphsofrateschangesandtotals-4",
  "type": "Exploration",
  "number": "8.3",
  "title": "",
  "body": "  Suppose that . Find the average rate of change between and , between and , and between and 15.    Use an AROC table to find the average rate of change between and , between and , and between and and     Graph histograms representing the total function , the change function , and of the rate of change function .      Here's a graph of the solution:      "
},
{
  "id": "sec_velocityAndIROC-2",
  "level": "2",
  "url": "ch_totalschanges.html#sec_velocityAndIROC-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate "
},
{
  "id": "subsec-speedradar-5",
  "level": "2",
  "url": "ch_totalschanges.html#subsec-speedradar-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average rate of change "
},
{
  "id": "subsec-speedradar-6",
  "level": "2",
  "url": "ch_totalschanges.html#subsec-speedradar-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "true speed "
},
{
  "id": "subsec-speedradar-8",
  "level": "2",
  "url": "ch_totalschanges.html#subsec-speedradar-8",
  "type": "Remark",
  "number": "8.4",
  "title": "Mathematical notation.",
  "body": " Mathematical notation  Average rates of change provide a rough, blocky approximation of change or difference . We highlight this by using the greek capital letter for D, to denote the large changes in time and position.  By letting go to 0, the approximation smooths out , giving the exact or instantaneous rate of change (IROC) . We sometimes denote instantanous rates by writing , using the smooth letter to emphasize that this is an improved version of the rough AROC.  "
},
{
  "id": "subsec-speedradar-9",
  "level": "2",
  "url": "ch_totalschanges.html#subsec-speedradar-9",
  "type": "Exploration",
  "number": "8.4",
  "title": "",
  "body": "  Suppose that a position function corresponds to the AROC table below                                                    Complete the AROC table.                                                    Important: Note that as gets smaller, the decimal accuracy of your average gets smaller and smaller . To ensure that you had 4 decimal places of accuracy for , you would need to start with eight decimal places of accuracy.  On the homework, you will need to make sure you leave as many decimal places as possible. Otherwise, your and may be marked correct, but your may be marked incorrect.    Use your table to find the exact (instantaneous) velocity at .   To find the exact velocity (IROC) at , read the table from top to bottom, since the smaller values of are further down in the table.  As you read the column, note that it is getting closer and closer to . In other words, at ,    "
},
{
  "id": "ch_tangentsecant",
  "level": "1",
  "url": "ch_tangentsecant.html",
  "type": "Chapter",
  "number": "9",
  "title": "Understanding Slope",
  "body": " Understanding Slope   The concepts contained in are all connected in important, but sometimes tricky to follow ways. As you go through this section, you can refer to the diagram below to see how what we are covering here is related to, and also distinct from, what we have already covered.   A concept map of the relationship between concepts of limits, rates of change, and slope.      Slopes and Rates of Change  In general, the average rate of change (AROC) of any function over the interval is given by    Note: the AROC formula is the same formula as the one for the slope of a line. In other words, the concepts of AROC and slope are closely related.  The concept of \"slope\" is easier to understand for some functions than for others.   Linear Functions  If is a line, the following are always the same, regardless of the points chosen   the slope of     the average rate of change of on     the instantaneous rate of change of at           Quadratic Functions  Quadratic functions do not have a constant slope . In other words, if you imagine standing on the curve, the slope of the hill you are standing on will be steeper in some places, and flatter in other places.     As a consequence, quadratic functions do not have a constant average rate of change .     In fact, we have a more general result. A function has a constant slope if and only if the function is a line.   Understand Rates by Studying Slopes  Our goal in this class is to develop tools that will help us understand the economic concept of a \"rate of change\" by connecting it to the graphical concept of a slope.  Because we only really understand slopes in the context of \"lines,\" the first step is to define a line approximating the function . We will call this the tangent line .     In the image above, the blue line perfectly lines up with at the point . We call the blue line the line tangent to at  . If we can find the slope of the tangent line, then we will be able to find the slope of the function at , and visa versa.    Suppose that we know the slope of the tangent line or, equivalently of , at the point . Then the line tangent to at has the equation where , and are constant numbers .      Suppose that you are told that at the point with , that , and that the line tangent to at has slope . Find an equation for the tangent line to at .    We are asked for the equation of a line, so start by writing down General Point Slope Form .   First, will always be the point that we are looking for the tangent to be \"at\". In this example, we want the tangent at , so we have   Second, will always be the height of the tangent at . In other words,   Finally, the slope of the tangent is always equal to the slope of the function. In this example, we are just told that both slopes are equal to   Putting it all together, we get     Because most functions have curves in them, looking at different points will give you tangent lines with very different slopes.   Said another way, the slope of the tangent to  is a function of the point where you are centering your approximation. For simplicity, we often denote this using the notation    Connecting Slope and Tangent Lines     Near a point , the function is approximately equal to the line tangent to at that point. Mathematically, this means for all values of near to     It follows that the slope of the function at is approximately equal to the slope of the tangent at the point. In other words,       This observation is very powerful, and it works in two directions. For now, we will see how to use tangent lines to help us to approximate the slope of a curve at various values of .  Later, we will see how to compute the slope of  precisely at some point . As a result, we will also have found the slope of the line tangent to the function at that value of .    A function is defined using the graph below.       Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , find the tangent to at . Find two points on this tangent line. One is , and another is . The slope of the line between these lines is Therefore, the slope of at is equal to 1.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to 0.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to -1.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.   To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to 0.       Approximating Slope with Secant Lines   Given a function , and an value , we want to find the slope of at . Unfortunately, you need two points to define a line, but a tangent line usualy only touches the curve at one point . To help us define slope precisely, we will need a new concept.         The secant line to  at  is the line that passes through the graph of at and .      Furthermore, the slope of the secant to at is equal to     The key idea thing to notice is that when is very close to , then the secant line is very close to the tangent line.     Let . We want to study the function at .    Estimage the slope of at by computing the slope of the secant between and a value that is 0.1 units away, 0.01 units away, and 0.001 units away.   Compute the average rate of change over the intervals , , and . In other words, we have the values, so we need to find the values, the changes and , and then divide those changes to get the average change .                                           To interpret this table, note that the top row is an approximation of the slope where the points are reasonably far apart ( ). In the middle row the points are closer together ( ), and in the bottom row the points are very close together ( ).  In other words, as you move from the top to bottom, the approximating line gets closer and closer to the function.  As the approximation improves, the \"estimated slope\" decreases from 8.1 to 8.01 to 8.001. It looks like the slopes are getting closer and closer to a slope of exactly at .    Use this slope to find an equation for the line tangent to at .   To find the equation of a line, start by writing down the point-slope form We are given that the x-value is . Plug this into the equation for the function to get .  The only remaining number to find is the slope of the function . But we have already found above that the slope of the function at is . And the slope of the tangent equals the slope of the function, so we have that .  Putting this together, the slope of the line tangent to at 3 is This is the equation for the line that approximates at the point .     Secant Lines, AROC, and Slope     Just as we will use tangent lines to approximate the original function, we will secant lines to approximate tangent lines.    The Average Rate of Change (AROC) is defined to be . To compute the average rate of change just compute the height of your function at the given values, and divide by the difference between those values.    We often use a table to help us compute the average rate of change, and call these AROC tables. These are simply a way of organizing the different parts of computing for various values of and .                                           Suppose you are given a function and an -value . To approximate the slope of at , create an AROC table as follows:   Set in each row. Pick several values for that get smaller and smaller (think , , ). Put the largest in the top row, and put smaller in lower rows. For each row, set     Fill in the table, computing and .    Read the right hand of the table from top to bottom. Where is the average rate going as ?         The above process for approximating slope is the most accurate way of doing things, but it can be a bit involved. In specific circumstances, you can often approximate the slope using a single computation. Instead of repeatedly calculating for smaller and smaller values of , you can sometimes pick a single very small value for . For example, picking gives us That value is only approximate , so it might be too large and it might be too small. By using an AROC table, we get a better sense of whether the exact slope is smaller or larger.    Defining Slope Algebraically  In the previous section, we developed a method that allows us to approximate slope by an iterative process of seeing where average slope is going as the change in input goes to zero .  Using the language of , we can translate this into a limit definition of slope.    Given a function and a number . The slope of f at a , abbreviated is equal to English keyboards do not have a button for , so we can use the letter to abbreviate the change in the input. This gives us an alternative form:     To use the limit definition,   Completely simplify the fraction using the specific function and number that you are given.    Compute the limit of the simplified function by letting go to . For the purposes of this course, this means plugging in as long as this does not result in division by .       Let . Use the limit definition to find the slope of at .    The limit definnition of slope at gives us This function includes several components, that we first simplify on their own. The function is defined by the rule . That means that . Similarly, we can simplify the expression as follows: We can now plug these simplified expressions back into our limit definition It is tempting to try to plug in , but if you do that on your calculator, you end up dividing by 0, which gives a value of or . Because of this, we need to keep simplifying as in : As , the expression goes to . In other words, the slope of at is exactly .     Our goal in this course is to use mathematics as a tool to deepen our understanding of economics and business concepts. One of the most important insights from the limit definition of slope is the following result.    Suppose that is a function, and that there are units for both the input and output . The following are always equal    The slope of at     The instantaneous rate of change (IROC) of at      Furthermore, the units of slope and the units of IROC are always      Units and applied slope     If gives the value of a stock in dollars as a function of the number of days , then you can always find how fast the stock is changing by looking at the slope of the value function . Furthermore, that slope is measured in dollars per day .    If gives your milemarker on a highway as a function of the time in hours, then you can always find how fast your position is changing by looking at the slope of the position function . Furthermore, that slope is measured in miles per hour.        Suppose that the profit of a certain oil investment is given by in millions of $ as a function of the number of gallons of oil produced over the lifetime of the investment.  How fast is the profit changing when million units?    We are asked for the instantaneous rate of change of profit at . Because IROC is the same thing as slope, we can use the limit definion of slope. In other words, we must compute at using the formula As before, we will first simplify the components of this expression separately, and only put them back together later on.      Putting this back into the limit definition gives   The rate of change in profit is 2 (million $) per (million gallons). Simplifying the units, this tells us that the profit is changing by 2 dollars per gallon when million gallons.      Defining a Slope Function  So far, we have seen how to understand, approximate, and define the slope of a function at a point . If you want to look at the slope of the function at a different point, you can redo all of the computations, only with a different number.  As you recompute the slope at different values, you will notice that there is a lot of repeated effort that seems very similar. We can avoid that repeated effort by instead studying slope functions .    Let be any function. The derivative of , written , is the function which, when given any number , outputs the slope of the original function at .      The function is graphed below.     Use the graph to approximate , , .   To find a slope from a graph, first draw the tangent line at that point. Then, find the slope of that tangent line.  In this interactive graphic, adjusting the slider draws the tangent line for you.  In either case, we see that , ,     Use the interactive graphic to come up with a conjecture (educacted guess) for an equation for the slope function  .   Try adjusting the value of , and look at what the slope ends up equaling.  No matter what value of you end up selecting, it looks like the slope is exactly twice the value. This leads to a conjecture that     Use the limit definition of the derivative to find an equation for   To apply the limit definition of slope to any value of , we just need to write down the same formula, only using a variable instead of a specific number . In other words, we must compute As always, we simplify the corresponding expressions separately. First, by definition . This expression cannot be simplified further, so can now move onto the second expression This cannot be simplified further, so we can now plug our expressions back into the limit definition of slope     Find an equation for the line tangent to at .   To find the equation for the tangent line, first write down point slope form of the line We are given that . To find , find plug 10 into the equation for the original function    We can't use the graph to find the slope of the functino at , so we either need to approximate the slope numerically, use the limit definition, or use the equation for the slope function that we have found above.  Since we know that the slope of at is , we can find the slope at 10 by plugging 10 into the slope or derivative function  Putting all of this into the point slope form, we get that the equation of the tangent line is       A function is defined using the graph below.       Compute , , , , , , .   We will approximate the slope at a value of by first drawing the tangent to the curve at that point, and using the fact that . To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.     Using these tangent lines, you can determine that           Find all points where the tangent is horizontal.   The tangent is horizontal at if and only if the slope of the function is equal to 0 at , if and only if  .  This happens at the values , and at no other x-values.    Find the intervals where is increasing.   The function is increasing if and only if the slope of at is positive if and only if  .  Looking at the graph, the slope is positive at to different parts of the graph:   between and     to the right of    In interval notation, is increasing on the interval     Find the intervals where .   The function is decreasing if and only if the slope of at is negative if and only if  .  Looking at the graph, the slope is negative at two different parts of the graph:   to the left of     between and    In interval notation, is decreasing on the interval     Draw a sketch of the slope function .   We have already computed the slope function  at x-values . Summarizing that in a table, we have                       To sketch the graph of the slope as a function of , plot each of these slopes , and then connect them with a reasonably smooth curve.        Interpreting the Meaning of  So far, we have focused on the graphical interpretation of the derivative function by emphasizing that for a graph  But the true power of calculus comes from the many applications of derivatives to other kinds of questions . We have already seen this breifly in , but it will be helpful to expand on this in greater detail.  Perhaps the simplest way to understand the meaning of in different situations is to pay attention to the units of measurement for and . For example, for a height function  , the units of might be meters or feet. On the other hand, for a profit function  , the units of might be dollars, or millions of dollars, or yuan.  The units of the input also play an important part in the meaning of the function. There is a world of difference between moving 6 miles between hours  and (an average velocity of 6 miles per hour) and moving 6 miles between second  and (an average velocity of 360 miles per hour).  To help us remember the units of derivatives, it is helpful to consider an alternate notation for the derivative function . The key idea here is to realize that is the greek letter . Since we use the blocky symbol to refer to approximate changes, we can instead use the smooth symbol to refer to instantaneous changes. This gives us the following notation.    Let be any function.  Because , we often write This notation helps us remember , which says     For example, if is the total (cumulative) cost in $ of items, then the rate of change of cost (how fast the cost is changing) In other words, if you have a graph of total cost, the item cost is equal to the slope of the graph . We will return to this example in greater detail in    Interpreting Derivatives     Height Functions  Suppose that gives the height of a hill in feet as a function of the horizontal position in feet. Then gives the slope of the hill in (meters-per-meter).    Position Functions  Suppose that gives the position of a vehicle in miles as a function of the current time in hours. Then gives the velocity of the vehicle in (miles per hour).    Profit Functions  Suppose that gives the total profit of a business in dollars as a function of the number of items being sold. Then tells you how fast Profit changes in (dollars per item) when you increase the number of items being sold.        Suppose that gives the height of a hill in feet as a function of the horizontal position in feet. Suppose also that , and that Explain what this tells you about .   Because , the height of the hill is 300 feet at the location . Because , the slope of the hill will be at this particular location. In other words, if you are standing above , moving one foot forward will increase your height by about 2 feet.    Suppose that gives the position of a car on a highway in miles as a function of the time in hours. Suppose also that , and that Explain what this tells you about .   Because , the position of the car is mile marker 37 after hours of travel. Because , the velocity of the car will be at this particular point in time. In other words, assuming you don't change your speed, you would travel an additional 62 miles per additional hour of travel.    Suppose that is a function that tells you the profit in dollars as a function of in items. Suppose also that , and that . Explain what this tells you about .   Because , we know that the total profit that results froms selling items 0-100 will be $30,000.  Because , we know that when you are selling 100 items, the profit is changing at . In other words, if you are selling 100 items, and then increase your sales , then the profit will go up by approximately dollars-per-additional-item.     The goal of this course is to understand the application of derivatives, particularly to questions of economics, accounting, and management.  We now have two functions to think about in every problem, the original (height) function and the derivative (slope) function . In the last example, we even found the graph of the derivative function.  The next example makes the relationship between these concepts very concrete, and shows its important connection to economic and business applications.   Derivative Graphs Are (Related to) Change Graphs  Previously, we have used histograms to understand the connection between graphs of total functions , change functions , and average rates of change    In , we carefully studied economic functions such as the total (cumulative) cost function .    In , we studied the relationship between the graph of a total and the change graph .    And in we seen that the average change graph is just a scaled version of the graph of the change .     In this example, we will see that these concrete applications are very closely related to the continuous total function and derivatives (slope) functions that we have studied in this section.  To make this concrete, we will look at a specific total (cumulative) cost function. Let . As in previous sections, we can create the graphs of , , and .     How do the functions and fit into this picture? The graph of the total is a discrete version of .  To find an equation for the derivaitve (slope) function, you can use the techniques from this section to find that Now that we have formulas for and its derivative , let's see how the derivative relates to the graphs of and . The total is graphed on the left, and the derivative is graphed on the same axes as in the middle, and as on the right. What is the relationship between the derivative , the change , and the AROC ?     From the graphs above, it looks like the derivative is very close to the average rate of change , and is a scaled version of the graph of the change . For that reason, the derivative is often abbreviated . To see why, note that is Greek for letter D, so the notation is intended to help you remember that it's very closely related to .    "
},
{
  "id": "sec_slope-2",
  "level": "2",
  "url": "ch_tangentsecant.html#sec_slope-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average rate of change "
},
{
  "id": "sec_slope-6-3",
  "level": "2",
  "url": "ch_tangentsecant.html#sec_slope-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent line "
},
{
  "id": "prop-tangenteqn",
  "level": "2",
  "url": "ch_tangentsecant.html#prop-tangenteqn",
  "type": "Proposition",
  "number": "9.1",
  "title": "",
  "body": "  Suppose that we know the slope of the tangent line or, equivalently of , at the point . Then the line tangent to at has the equation where , and are constant numbers .   "
},
{
  "id": "ex_tangentlinefromgiveninfo",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_tangentlinefromgiveninfo",
  "type": "Exploration",
  "number": "9.1",
  "title": "",
  "body": "  Suppose that you are told that at the point with , that , and that the line tangent to at has slope . Find an equation for the tangent line to at .    We are asked for the equation of a line, so start by writing down General Point Slope Form .   First, will always be the point that we are looking for the tangent to be \"at\". In this example, we want the tangent at , so we have   Second, will always be the height of the tangent at . In other words,   Finally, the slope of the tangent is always equal to the slope of the function. In this example, we are just told that both slopes are equal to   Putting it all together, we get    "
},
{
  "id": "ex_slope_from_graph",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_slope_from_graph",
  "type": "Exploration",
  "number": "9.2",
  "title": "",
  "body": "  A function is defined using the graph below.       Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , find the tangent to at . Find two points on this tangent line. One is , and another is . The slope of the line between these lines is Therefore, the slope of at is equal to 1.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to 0.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.  To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to -1.    Approximate the slope to the function at the point    We will approximate the slope at a value of by first drawing the tangent to the curve at that point.   We can then find two points on the line and use the slope formula Note that these points will not be on the original curve, since we are technically finding the slope of the tangent line , which we are only using to approximate the real curve.  To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.   To find the slope of at , first, draw the line tangent to at , and find two points on that line. One point is , and another is The slope of the line between these lines is Therefore, the slope of at is equal to 0.   "
},
{
  "id": "def-secant",
  "level": "2",
  "url": "ch_tangentsecant.html#def-secant",
  "type": "Definition",
  "number": "9.2",
  "title": "",
  "body": "   The secant line to  at  is the line that passes through the graph of at and .      Furthermore, the slope of the secant to at is equal to    "
},
{
  "id": "ex_approx_slope_from_secant",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_approx_slope_from_secant",
  "type": "Exploration",
  "number": "9.3",
  "title": "",
  "body": "  Let . We want to study the function at .    Estimage the slope of at by computing the slope of the secant between and a value that is 0.1 units away, 0.01 units away, and 0.001 units away.   Compute the average rate of change over the intervals , , and . In other words, we have the values, so we need to find the values, the changes and , and then divide those changes to get the average change .                                           To interpret this table, note that the top row is an approximation of the slope where the points are reasonably far apart ( ). In the middle row the points are closer together ( ), and in the bottom row the points are very close together ( ).  In other words, as you move from the top to bottom, the approximating line gets closer and closer to the function.  As the approximation improves, the \"estimated slope\" decreases from 8.1 to 8.01 to 8.001. It looks like the slopes are getting closer and closer to a slope of exactly at .    Use this slope to find an equation for the line tangent to at .   To find the equation of a line, start by writing down the point-slope form We are given that the x-value is . Plug this into the equation for the function to get .  The only remaining number to find is the slope of the function . But we have already found above that the slope of the function at is . And the slope of the tangent equals the slope of the function, so we have that .  Putting this together, the slope of the line tangent to at 3 is This is the equation for the line that approximates at the point .   "
},
{
  "id": "def-slopeAsLimit",
  "level": "2",
  "url": "ch_tangentsecant.html#def-slopeAsLimit",
  "type": "Definition",
  "number": "9.3",
  "title": "",
  "body": "  Given a function and a number . The slope of f at a , abbreviated is equal to English keyboards do not have a button for , so we can use the letter to abbreviate the change in the input. This gives us an alternative form:    "
},
{
  "id": "ex_slope_from_limit_defn",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_slope_from_limit_defn",
  "type": "Exploration",
  "number": "9.4",
  "title": "",
  "body": "  Let . Use the limit definition to find the slope of at .    The limit definnition of slope at gives us This function includes several components, that we first simplify on their own. The function is defined by the rule . That means that . Similarly, we can simplify the expression as follows: We can now plug these simplified expressions back into our limit definition It is tempting to try to plug in , but if you do that on your calculator, you end up dividing by 0, which gives a value of or . Because of this, we need to keep simplifying as in : As , the expression goes to . In other words, the slope of at is exactly .   "
},
{
  "id": "cor-unitsofslope",
  "level": "2",
  "url": "ch_tangentsecant.html#cor-unitsofslope",
  "type": "Corollary",
  "number": "9.4",
  "title": "",
  "body": "  Suppose that is a function, and that there are units for both the input and output . The following are always equal    The slope of at     The instantaneous rate of change (IROC) of at      Furthermore, the units of slope and the units of IROC are always    "
},
{
  "id": "sec_slopealgebraically-9",
  "level": "2",
  "url": "ch_tangentsecant.html#sec_slopealgebraically-9",
  "type": "Application",
  "number": "9.5",
  "title": "Units and applied slope.",
  "body": " Units and applied slope     If gives the value of a stock in dollars as a function of the number of days , then you can always find how fast the stock is changing by looking at the slope of the value function . Furthermore, that slope is measured in dollars per day .    If gives your milemarker on a highway as a function of the time in hours, then you can always find how fast your position is changing by looking at the slope of the position function . Furthermore, that slope is measured in miles per hour.     "
},
{
  "id": "ex_iroc_from_limit_defn",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_iroc_from_limit_defn",
  "type": "Exploration",
  "number": "9.5",
  "title": "",
  "body": "  Suppose that the profit of a certain oil investment is given by in millions of $ as a function of the number of gallons of oil produced over the lifetime of the investment.  How fast is the profit changing when million units?    We are asked for the instantaneous rate of change of profit at . Because IROC is the same thing as slope, we can use the limit definion of slope. In other words, we must compute at using the formula As before, we will first simplify the components of this expression separately, and only put them back together later on.      Putting this back into the limit definition gives   The rate of change in profit is 2 (million $) per (million gallons). Simplifying the units, this tells us that the profit is changing by 2 dollars per gallon when million gallons.   "
},
{
  "id": "sec-slopefunction-3",
  "level": "2",
  "url": "ch_tangentsecant.html#sec-slopefunction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope functions "
},
{
  "id": "def-derivativefunction",
  "level": "2",
  "url": "ch_tangentsecant.html#def-derivativefunction",
  "type": "Definition",
  "number": "9.6",
  "title": "",
  "body": "  Let be any function. The derivative of , written , is the function which, when given any number , outputs the slope of the original function at .   "
},
{
  "id": "explore_derivativeofx2",
  "level": "2",
  "url": "ch_tangentsecant.html#explore_derivativeofx2",
  "type": "Exploration",
  "number": "9.6",
  "title": "",
  "body": "  The function is graphed below.     Use the graph to approximate , , .   To find a slope from a graph, first draw the tangent line at that point. Then, find the slope of that tangent line.  In this interactive graphic, adjusting the slider draws the tangent line for you.  In either case, we see that , ,     Use the interactive graphic to come up with a conjecture (educacted guess) for an equation for the slope function  .   Try adjusting the value of , and look at what the slope ends up equaling.  No matter what value of you end up selecting, it looks like the slope is exactly twice the value. This leads to a conjecture that     Use the limit definition of the derivative to find an equation for   To apply the limit definition of slope to any value of , we just need to write down the same formula, only using a variable instead of a specific number . In other words, we must compute As always, we simplify the corresponding expressions separately. First, by definition . This expression cannot be simplified further, so can now move onto the second expression This cannot be simplified further, so we can now plug our expressions back into the limit definition of slope     Find an equation for the line tangent to at .   To find the equation for the tangent line, first write down point slope form of the line We are given that . To find , find plug 10 into the equation for the original function    We can't use the graph to find the slope of the functino at , so we either need to approximate the slope numerically, use the limit definition, or use the equation for the slope function that we have found above.  Since we know that the slope of at is , we can find the slope at 10 by plugging 10 into the slope or derivative function  Putting all of this into the point slope form, we get that the equation of the tangent line is    "
},
{
  "id": "ex_fprime_from_graph",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_fprime_from_graph",
  "type": "Exploration",
  "number": "9.7",
  "title": "",
  "body": "  A function is defined using the graph below.       Compute , , , , , , .   We will approximate the slope at a value of by first drawing the tangent to the curve at that point, and using the fact that . To find the tangent to a curve at a point, take a ruler and \"line it up\" with the curve at that point. The interactive graphic below shows the line you would get at each point.     Using these tangent lines, you can determine that           Find all points where the tangent is horizontal.   The tangent is horizontal at if and only if the slope of the function is equal to 0 at , if and only if  .  This happens at the values , and at no other x-values.    Find the intervals where is increasing.   The function is increasing if and only if the slope of at is positive if and only if  .  Looking at the graph, the slope is positive at to different parts of the graph:   between and     to the right of    In interval notation, is increasing on the interval     Find the intervals where .   The function is decreasing if and only if the slope of at is negative if and only if  .  Looking at the graph, the slope is negative at two different parts of the graph:   to the left of     between and    In interval notation, is decreasing on the interval     Draw a sketch of the slope function .   We have already computed the slope function  at x-values . Summarizing that in a table, we have                       To sketch the graph of the slope as a function of , plot each of these slopes , and then connect them with a reasonably smooth curve.      "
},
{
  "id": "def-dydx-notation",
  "level": "2",
  "url": "ch_tangentsecant.html#def-dydx-notation",
  "type": "Definition",
  "number": "9.7",
  "title": "",
  "body": "  Let be any function.  Because , we often write This notation helps us remember , which says    "
},
{
  "id": "ex_meaningofderivative_1",
  "level": "2",
  "url": "ch_tangentsecant.html#ex_meaningofderivative_1",
  "type": "Exploration",
  "number": "9.8",
  "title": "",
  "body": "  Suppose that gives the height of a hill in feet as a function of the horizontal position in feet. Suppose also that , and that Explain what this tells you about .   Because , the height of the hill is 300 feet at the location . Because , the slope of the hill will be at this particular location. In other words, if you are standing above , moving one foot forward will increase your height by about 2 feet.    Suppose that gives the position of a car on a highway in miles as a function of the time in hours. Suppose also that , and that Explain what this tells you about .   Because , the position of the car is mile marker 37 after hours of travel. Because , the velocity of the car will be at this particular point in time. In other words, assuming you don't change your speed, you would travel an additional 62 miles per additional hour of travel.    Suppose that is a function that tells you the profit in dollars as a function of in items. Suppose also that , and that . Explain what this tells you about .   Because , we know that the total profit that results froms selling items 0-100 will be $30,000.  Because , we know that when you are selling 100 items, the profit is changing at . In other words, if you are selling 100 items, and then increase your sales , then the profit will go up by approximately dollars-per-additional-item.   "
},
{
  "id": "insight_continuousderivativesanddiscretechanges",
  "level": "2",
  "url": "ch_tangentsecant.html#insight_continuousderivativesanddiscretechanges",
  "type": "Application",
  "number": "9.8",
  "title": "Derivative Graphs Are (Related to) Change Graphs.",
  "body": " Derivative Graphs Are (Related to) Change Graphs  Previously, we have used histograms to understand the connection between graphs of total functions , change functions , and average rates of change    In , we carefully studied economic functions such as the total (cumulative) cost function .    In , we studied the relationship between the graph of a total and the change graph .    And in we seen that the average change graph is just a scaled version of the graph of the change .     In this example, we will see that these concrete applications are very closely related to the continuous total function and derivatives (slope) functions that we have studied in this section.  To make this concrete, we will look at a specific total (cumulative) cost function. Let . As in previous sections, we can create the graphs of , , and .     How do the functions and fit into this picture? The graph of the total is a discrete version of .  To find an equation for the derivaitve (slope) function, you can use the techniques from this section to find that Now that we have formulas for and its derivative , let's see how the derivative relates to the graphs of and . The total is graphed on the left, and the derivative is graphed on the same axes as in the middle, and as on the right. What is the relationship between the derivative , the change , and the AROC ?     From the graphs above, it looks like the derivative is very close to the average rate of change , and is a scaled version of the graph of the change . For that reason, the derivative is often abbreviated . To see why, note that is Greek for letter D, so the notation is intended to help you remember that it's very closely related to .  "
},
{
  "id": "ch_basicderivativerules",
  "level": "1",
  "url": "ch_basicderivativerules.html",
  "type": "Chapter",
  "number": "10",
  "title": "Slope Shortcuts for Basic Functions",
  "body": " Slope Shortcuts for Basic Functions   Before introducing the shortcut rules for finding slope functions, let's review where we have been so far. If  total cost of items, then is the derivative function.  More precisely, refers to the total cost of making items 1-5 in dollars , and refers to how fast the total cost is changing when the number of items is 5 in dollars per item  , which is equal to the slope of the cost function at .  Graphically,   Algebraically,   Our goal in this section will be to find or take the derivative of a given function. We will use the following notation as a shorthand for the sentence \"Find the derivative of with respect to \"  Some students find the notation difficult to read because of the large number of symbols involved. In that case, you can use an alternate notation: In this notation, we use square brackets with an apostraphe on the right to say \"take the derivative of the function inside the brackets. \"    Basic Derivative Rules   Slope of a Constant Function  Some functions always output the same number , regardless of the input . These functions have the form , and their graphs are horizontal lines.   This function is horizontal everywhere, so has a slope of for all . In other words, we have which is the same as saying      Let . Find .       Equivalently, we could use our bracket notation to write      Slope of a Linear Function  Some functions are lines. These functions have the form for some number .   This function has the same slope everywhere, which is equal to the slope of the line. In other words, we have which is the same as saying      Let . Find .       Equivalently, we could use our bracket notation to write      Slopes of Lines and Constant Functions  Suppose that are constant numbers. We have the following derivative shortcuts            In bracket notation, this is             More complex functions need derivative templates or shortcut rules . For example, the function has different slopes at different values of . The same thing is true for other power functions like , , , , and so on.  In , we showed that when , then using the limit definition of the derivative.  In theory, you could use the limit definition of the derivative to find for every power function for any constant power . Fortunately, there is a pattern in these derivatives which gives a much easier formula to remember.   The Power Rule  If the exponent is a constant number,   In bracket notation, this is      Find the slope of Let . Find the slope of at , at , and at     First, we must find the slope function using the power rule In bracket notation, this is   Next, we can use the slope function to find the slope at each given value.   Slope at       Slope at       Slope at            Let . Find     We always start by setting up the right notation  Now, we need to find a derivative rule to apply. So far, the rule we have are , , and . None of those rules have a root in them. Fortunately, we can use our knowledge of algebra to rewrite the original function (without taking the derivative) to see that . That means we can rewrite the derivative as follows Now we can use the power rule  This is an acceptable answer, but you can also rewrite if you like     Square roots are particularly common, so it may be helpful to remember a specific derivative rule for square roots.    Let . Then      Recall from algebra that roots correspond to fractional powers. In particular . Using this,    After enough practice, you should be able to use the derivative shortcut rules in this section off the top of your head.  But we will eventually learn much more complicated derivative rules, and need to apply them to more complicated functions. To help build the skills you will need to do this, it is important to learn how to use the shortcuts using or notation .  Recall from section that can break more compex functions into combinations of simpler funtions. Mathematically, we say that we build functions recursively (layer by layer) from the inside out.  As a simple example, is build by taking , and then tripling it. In other words, .  Our derivative rules will allow us to compute derivatives from the outside in (removing one layer at a time).   Derivatives and Constant Coefficients  If is a constant number,m and is any differentiable function, In bracket notation, this is      Let . Find     Recall that is just another way of saying . So we can start by writing Now, we must use one of the four rules we have so far: , , , and .  The only rule that can handle the coefficient of is the last one: That means we must interpret the problem as follows, first using the coefficient rule, and then using the power rule`   In bracket notation, the computation is exactly the same     In words, the constant coefficient rule says that you can pull constant coefficients through the derivative.     Let . Find .    The first step is always to set up the problem in or . Next, we look at our list of derivative rules , , , and .  Unfortunately, none of these apply as written. That means that you need to rewrite the original function before we can apply any rules. Here, we can use the basic property of algebra that  Now we can apply the derivative rule  Now we can use the power rule      The key idea of each of the computation above is that derivative rules attack functions from the outside in.   Derivatives of Sums and Differences  Suppose that and are differentiable functions. Then and In bracket notation, this is written and      Let . Find , and find the slope of at     As always, we need to set up and we look at our list of derivative rules , , , , and .  How do we decide which rule we can use? We use the order of operations to figure out the \"outermost\" or \"weakest\" operation. Following the acronym PEMDAS, subtraction and addition are the weakest operations, so we can think of the expression as Now we have the derivative of a sum, which is equal to the sum of the derivatives Using the other, more familiar rules we can now compute   To find the slope at , just plug 2 into the formula for .      Basic Derivative Rules  Suppose that are differentiable functions of , that are constant numbers. Then      and                  Danger! The derivative rules for and are much more complicated. We will address those rules in a later section.  In bracket notation, these rules are written      and                    Suppose that the total profit in the scenario where you sell items is equal to . Find how fast the profit is changing when items, and when items.    We will study many applications of derivatives, beginning in the next section. For now, recall that if gives the total profit in $ in the scenario when you sell items, then the slope of profit  is in $\/item, and tells you approximately how much a single additional item will change the total proift.  The first step is to find the slope function by writing   In the scenario where you are selling items, we have in $\/item. In other words, selling an additional item (going from 100 to 101 items) will increase total profit by approximately 10$ for that single item.  In the scenario where you are selling items, we have in $\/item. In other words, selling an additional item (going from 200 to 201 items) will decrease total profit by approximately 10$ for that single item.    We will frequently have questions that combine several of the strategies and concepts that we have learned in this course. These are often called synthesis problems .  Finding the equation for tangent lines is a classic kind of synthesis problem.    Let . Find the equation for the line tangent to at .    We want to find the equation of a line . That means we will need to use point slope form Furthermore, we want the line to pass through our function at the point , and we want the line to have the same slope as our function at this point.  To make sure the line passes through our curve, we set and   To make sure the slope of this line matches the slope of the curve, we want to set That means to find , we first need an equation for . That means that Putting this all together, the equation for the line tangent to at is If you wanted, you could simplify this to get       Suppose that under current market conditions, your revenue is going up at 5$\/unit and that your costs are going up at 12 $\/unit. How fast is your cost changing?    The key concept here is to remember that Mathematically, this is To understand how fast profit is changing , we must take the derivative of profit Using our derivative rules, In the text of the problem, we are told the values of and that \"under current market conditions\". In other words, we are told and for whatever the \"current\" value of is. That means we can plug this information into our formula for  Under current market conditions (for the current value of ), profit is decreasing by 7 $\/item.      Suppose that . Find    There are two ways to find this derivative. First, note that where and . Using the shortcut , we get   You can also find this derivative using the formula for derivatives of sums and differences, for constant coefficients and the formulas and for any number .     Let . Find .        Let . Find         Let . Find    Recall that and that . That means we are being asked to find     Let . Find    Recall that and that . That means that we are asked to compute In most problems, you get to chose how to write your answer. For example, you don't need to do all of the simplifications above. They are shown here to remind you of some algebra that you might need to do in other problems.  A perfectly acceptable answer to this question would be something like     Let . Find the equation for the line tangent to at .   Recall that the equation of the line tangent to at will have the form where , , and . We can immediately compute To find , we first need an equation for . Using this, we can find that Putting it all together, we get that the equation for the tangent line to at is      Tips for Taking Derivatives     Always start by writing down , filling in the original function you are given.    Write down the derivative rules every time you use them. To identify which rules you are allowed , think about Order of Operations (PEMDAS). You will be able to use the rule that goes along with the weakest operation that you see in your expression.    If you cannot use any derivative rule with the function as written, use algebra to rewrite the original function.    For example, rewriting can help you find the derivative of     Rewriting can help you find the derivative of     Rewriting can help you find the derivative of           Derivatives of Exponentials and Logarithms  In a previous section , we have already noted that the number e\\approx 2.714\\dots will play an important role in calculus.  More precisely, we said that is the natural exponential for calculus , so we will call it the natural exponential function.  Just like polynomials, the slope of the nautral exponenital function is different at different values of  Is there a nice formula that gives us the slope as a function of ? Surprisingly, the answer is yes.   The Derivative of  In bracket notation, this is In other words, the slope of any point on the curve is equal to the height of that point on the curve.    Let . Find .     Note that the only new thing in this compoutation was the last step, where we used our new formula that we can replace with     Recall also that , called the natural logarithm is the inverse of . This function also has different slopes at different values of  Is there a nice formula that gives us the slope as a function of ? Surprisingly, the answer is also yes.   The Derivative of  In bracket notation, this is     Let . Find .          Derivatives of Exponentials and Logarithms                   Let . Find .        Let . Find         Let . Find .        Let . Find .   This problem requires very careful reading . The key is to remember that our only variable is . The other characters and both refer to constant numbers. This is where notation shines, since it reminds us that the vairable is . Look very carefully about where the variable is in each term. In the first term, is in the exponent, so use the exponential rule In the second term, is in the base, so use the power rule with  Putting this all together gives the following     Let . Find .   This problem requires very careful reading . The key is to remember that our only variable is . The other characters and both refer to constant numbers. This is where notation shines, since it reminds us that the vairable is . Note that there are no 's in either term. That means we can type them into our calculator and replace them with numbers: and . Putting this in and using our derivative rules gives the following      "
},
{
  "id": "sec_basicrules1-2",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec_basicrules1-2",
  "type": "Example",
  "number": "10.1",
  "title": "Slope of a Constant Function.",
  "body": " Slope of a Constant Function  Some functions always output the same number , regardless of the input . These functions have the form , and their graphs are horizontal lines.   This function is horizontal everywhere, so has a slope of for all . In other words, we have which is the same as saying   "
},
{
  "id": "sec_basicrules1-3",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec_basicrules1-3",
  "type": "Exploration",
  "number": "10.1",
  "title": "",
  "body": "  Let . Find .       Equivalently, we could use our bracket notation to write    "
},
{
  "id": "sec_basicrules1-4",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec_basicrules1-4",
  "type": "Example",
  "number": "10.2",
  "title": "Slope of a Linear Function.",
  "body": " Slope of a Linear Function  Some functions are lines. These functions have the form for some number .   This function has the same slope everywhere, which is equal to the slope of the line. In other words, we have which is the same as saying   "
},
{
  "id": "sec_basicrules1-5",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec_basicrules1-5",
  "type": "Exploration",
  "number": "10.2",
  "title": "",
  "body": "  Let . Find .       Equivalently, we could use our bracket notation to write    "
},
{
  "id": "ex_usingslopefn",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_usingslopefn",
  "type": "Exploration",
  "number": "10.3",
  "title": "",
  "body": "  Find the slope of Let . Find the slope of at , at , and at     First, we must find the slope function using the power rule In bracket notation, this is   Next, we can use the slope function to find the slope at each given value.   Slope at       Slope at       Slope at         "
},
{
  "id": "ex_powerruleroots",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_powerruleroots",
  "type": "Exploration",
  "number": "10.4",
  "title": "",
  "body": "  Let . Find     We always start by setting up the right notation  Now, we need to find a derivative rule to apply. So far, the rule we have are , , and . None of those rules have a root in them. Fortunately, we can use our knowledge of algebra to rewrite the original function (without taking the derivative) to see that . That means we can rewrite the derivative as follows Now we can use the power rule  This is an acceptable answer, but you can also rewrite if you like    "
},
{
  "id": "cor_powerruleroots",
  "level": "2",
  "url": "ch_basicderivativerules.html#cor_powerruleroots",
  "type": "Corollary",
  "number": "10.3",
  "title": "",
  "body": "  Let . Then    "
},
{
  "id": "sec_basicrules1-15",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec_basicrules1-15",
  "type": "Proof",
  "number": "10.1.1",
  "title": "",
  "body": " Recall from algebra that roots correspond to fractional powers. In particular . Using this,   "
},
{
  "id": "ex_coefficientrule1",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_coefficientrule1",
  "type": "Exploration",
  "number": "10.5",
  "title": "",
  "body": "  Let . Find     Recall that is just another way of saying . So we can start by writing Now, we must use one of the four rules we have so far: , , , and .  The only rule that can handle the coefficient of is the last one: That means we must interpret the problem as follows, first using the coefficient rule, and then using the power rule`   In bracket notation, the computation is exactly the same    "
},
{
  "id": "ex_coefficientrule2",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_coefficientrule2",
  "type": "Exploration",
  "number": "10.6",
  "title": "",
  "body": "  Let . Find .    The first step is always to set up the problem in or . Next, we look at our list of derivative rules , , , and .  Unfortunately, none of these apply as written. That means that you need to rewrite the original function before we can apply any rules. Here, we can use the basic property of algebra that  Now we can apply the derivative rule  Now we can use the power rule     "
},
{
  "id": "ex_summdifferencerule",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_summdifferencerule",
  "type": "Exploration",
  "number": "10.7",
  "title": "",
  "body": "  Let . Find , and find the slope of at     As always, we need to set up and we look at our list of derivative rules , , , , and .  How do we decide which rule we can use? We use the order of operations to figure out the \"outermost\" or \"weakest\" operation. Following the acronym PEMDAS, subtraction and addition are the weakest operations, so we can think of the expression as Now we have the derivative of a sum, which is equal to the sum of the derivatives Using the other, more familiar rules we can now compute   To find the slope at , just plug 2 into the formula for .    "
},
{
  "id": "ex_basicderivativesprofit",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_basicderivativesprofit",
  "type": "Exploration",
  "number": "10.8",
  "title": "",
  "body": "  Suppose that the total profit in the scenario where you sell items is equal to . Find how fast the profit is changing when items, and when items.    We will study many applications of derivatives, beginning in the next section. For now, recall that if gives the total profit in $ in the scenario when you sell items, then the slope of profit  is in $\/item, and tells you approximately how much a single additional item will change the total proift.  The first step is to find the slope function by writing   In the scenario where you are selling items, we have in $\/item. In other words, selling an additional item (going from 100 to 101 items) will increase total profit by approximately 10$ for that single item.  In the scenario where you are selling items, we have in $\/item. In other words, selling an additional item (going from 200 to 201 items) will decrease total profit by approximately 10$ for that single item.   "
},
{
  "id": "ex_basicderivativestangent",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_basicderivativestangent",
  "type": "Exploration",
  "number": "10.9",
  "title": "",
  "body": "  Let . Find the equation for the line tangent to at .    We want to find the equation of a line . That means we will need to use point slope form Furthermore, we want the line to pass through our function at the point , and we want the line to have the same slope as our function at this point.  To make sure the line passes through our curve, we set and   To make sure the slope of this line matches the slope of the curve, we want to set That means to find , we first need an equation for . That means that Putting this all together, the equation for the line tangent to at is If you wanted, you could simplify this to get    "
},
{
  "id": "ex_basicderivatives_synthesis",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_basicderivatives_synthesis",
  "type": "Exploration",
  "number": "10.10",
  "title": "",
  "body": "  Suppose that under current market conditions, your revenue is going up at 5$\/unit and that your costs are going up at 12 $\/unit. How fast is your cost changing?    The key concept here is to remember that Mathematically, this is To understand how fast profit is changing , we must take the derivative of profit Using our derivative rules, In the text of the problem, we are told the values of and that \"under current market conditions\". In other words, we are told and for whatever the \"current\" value of is. That means we can plug this information into our formula for  Under current market conditions (for the current value of ), profit is decreasing by 7 $\/item.   "
},
{
  "id": "ex_basicderivatives",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_basicderivatives",
  "type": "Exploration",
  "number": "10.11",
  "title": "",
  "body": "  Suppose that . Find    There are two ways to find this derivative. First, note that where and . Using the shortcut , we get   You can also find this derivative using the formula for derivatives of sums and differences, for constant coefficients and the formulas and for any number .     Let . Find .        Let . Find         Let . Find    Recall that and that . That means we are being asked to find     Let . Find    Recall that and that . That means that we are asked to compute In most problems, you get to chose how to write your answer. For example, you don't need to do all of the simplifications above. They are shown here to remind you of some algebra that you might need to do in other problems.  A perfectly acceptable answer to this question would be something like     Let . Find the equation for the line tangent to at .   Recall that the equation of the line tangent to at will have the form where , , and . We can immediately compute To find , we first need an equation for . Using this, we can find that Putting it all together, we get that the equation for the tangent line to at is    "
},
{
  "id": "sec-derivativesexplog-3",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec-derivativesexplog-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural exponential "
},
{
  "id": "sec-derivativesexplog-6",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec-derivativesexplog-6",
  "type": "Exploration",
  "number": "10.12",
  "title": "",
  "body": "  Let . Find .     Note that the only new thing in this compoutation was the last step, where we used our new formula that we can replace with    "
},
{
  "id": "sec-derivativesexplog-7",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec-derivativesexplog-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "sec-derivativesexplog-9",
  "level": "2",
  "url": "ch_basicderivativerules.html#sec-derivativesexplog-9",
  "type": "Exploration",
  "number": "10.13",
  "title": "",
  "body": "  Let . Find .        "
},
{
  "id": "ex_derivatives_explog",
  "level": "2",
  "url": "ch_basicderivativerules.html#ex_derivatives_explog",
  "type": "Exploration",
  "number": "10.14",
  "title": "",
  "body": "  Let . Find .        Let . Find         Let . Find .        Let . Find .   This problem requires very careful reading . The key is to remember that our only variable is . The other characters and both refer to constant numbers. This is where notation shines, since it reminds us that the vairable is . Look very carefully about where the variable is in each term. In the first term, is in the exponent, so use the exponential rule In the second term, is in the base, so use the power rule with  Putting this all together gives the following     Let . Find .   This problem requires very careful reading . The key is to remember that our only variable is . The other characters and both refer to constant numbers. This is where notation shines, since it reminds us that the vairable is . Note that there are no 's in either term. That means we can type them into our calculator and replace them with numbers: and . Putting this in and using our derivative rules gives the following    "
},
{
  "id": "ch_marginalcost",
  "level": "1",
  "url": "ch_marginalcost.html",
  "type": "Chapter",
  "number": "11",
  "title": "Derivatives and Business",
  "body": " Derivatives and Business   Marginal Cost   Derivatives provide a powerful tool for studying many concepts in economics and buisness. In this section, we will introduce a central application in the context of cost, revenue, and profit functions. Recall that     total cost in $. For example, is the cumulative cost of items 1-10.      total revenue in $. For example, is the total revenue of items 1-10.      total profit in $. For example, is the total revenue of items 1-10.        Let be a total cost function. The marginal cost function is the derivative of total cost. Furthermore,       Suppose that $\/item. Estimate the cost of the 201st item only .    By , the cost of the next item only.  The next item after 200 is the 201st item. That means that The approximate cost of the 201st item is 5$.      Suppose that     What is the approximate cost of the 11th item only?   By , when we are asked to approximate the cost of the next item, we must find and use the marginal cost function.  To find the marginal cost function, use the derivative shortcuts   To use the marginal cost function, recall that We want to find the approximate cost of the 11th item. Item 11 is the item that is immediately after item 10 .  In other words, compute . That will tell us the approximate cost of the item after 10, which is the 11th item. The 11th item will cost approximately 3$.    What is the exact cost of the 11th item only?   By definition, the total cost function gives the cumulative cost of items through .  In other words, tells you the cumulative cost of items 1-11, and tells you the cumulative cost of items 1-10.     In other words, the cost of the 11th item only is equal to The exact cost of the 11th item only is $2.90      You are making 100 trailers, and the total cost function is given by     What is the exact cost of the 100th trailer?   Recall that total\/cumulative cost of items 1 to 100. Using the equation given, We don't want to know the cost of all of these items, just the last item. To get rid of items 1-99, we compute their cost separately Subtracting out the items we don't care about, we get The 100th trailer only costs exactly $148,505.    What is the approximate cost of the 100th trailer?   By , when we are asked to approximate the cost of the next item, we must find and use the marginal cost function.  To find the marginal cost function, use the derivative shortcuts   To use the marginal cost function, recall that We want to find the approximate cost of the 100th item only. Item 100 is the item that is immediately after item 99 .  In other words, compute . The 11th item will cost approximately $147,015.    The example above helps explain part of the value of using the marginal cost function, instead of always finding exact cost. Computing the exact meant talking about costs in the millions, even though the individual item's value was only in the hundreds of thousands. Even better, once we have computed the equation for marginal cost function we can quickly compare the item cost for a range of numbers of items.   Why Derivatives Approximate the Cost of the Next Item  What is the connection between derivatives and approximate item cost?  Looking at the units of measurement provides one way of understanding the connection. If total cost is measured in dollars, and quantity is measured in items, then In other words, because the derivative of cost has units $\/item, it tells you approximately how many $ an individual item will cost.  Why does the marginal cost tell us the cost of the next item?  Remember that limits arise in business when quantities are large. For example, suppose that is 5000 items.  Expanding out the limit definition of slope\/IROC, we get Because is large, then a change of more item is (relatively) small. This means that simpilfying this gives which is equal to the 5001st item, which is the next item after 5000.    Understanding Change, AROC, and IROC  We now have several tools for analyzing economic questions: change , average rate , and marginal cost . Always make sure you understand what the question is asking for, and know how to apply the correct tool for that question.    Average and Change look Backward  If you have moved from to items, then you can compute the change and the average rate (AROC) Finding the exact cost of a single item is a special case of finding the change in cost.  For example, to find the exact cost of item 105, compute . This can be thought of as a change , or an average change with   Change and AROC are used for accounting for changes in the past .    Marginal Cost and Derivatives look Foreward   Marginal cost and derivatives are used to make decisions about the future      The power of mathematics is that the same tools apply to a range of contexts.    Let be any total or cumulatve function, such as cost, revenue, or profit. The marginal function is     In other words, if total revenue and total profit, then approximate revenue of the next (501st) item and approximate revenue of the next (501st) item   Beautiful Consequence  The slope of total profit at items is approximately equal to the profit         "
},
{
  "id": "defn_marginalcost",
  "level": "2",
  "url": "ch_marginalcost.html#defn_marginalcost",
  "type": "Definition",
  "number": "11.1",
  "title": "",
  "body": "  Let be a total cost function. The marginal cost function is the derivative of total cost. Furthermore,    "
},
{
  "id": "ex_marginalcost1",
  "level": "2",
  "url": "ch_marginalcost.html#ex_marginalcost1",
  "type": "Exploration",
  "number": "11.1",
  "title": "",
  "body": "  Suppose that $\/item. Estimate the cost of the 201st item only .    By , the cost of the next item only.  The next item after 200 is the 201st item. That means that The approximate cost of the 201st item is 5$.   "
},
{
  "id": "ex_marginalcost2",
  "level": "2",
  "url": "ch_marginalcost.html#ex_marginalcost2",
  "type": "Exploration",
  "number": "11.2",
  "title": "",
  "body": "  Suppose that     What is the approximate cost of the 11th item only?   By , when we are asked to approximate the cost of the next item, we must find and use the marginal cost function.  To find the marginal cost function, use the derivative shortcuts   To use the marginal cost function, recall that We want to find the approximate cost of the 11th item. Item 11 is the item that is immediately after item 10 .  In other words, compute . That will tell us the approximate cost of the item after 10, which is the 11th item. The 11th item will cost approximately 3$.    What is the exact cost of the 11th item only?   By definition, the total cost function gives the cumulative cost of items through .  In other words, tells you the cumulative cost of items 1-11, and tells you the cumulative cost of items 1-10.     In other words, the cost of the 11th item only is equal to The exact cost of the 11th item only is $2.90   "
},
{
  "id": "ex_marginalcost3",
  "level": "2",
  "url": "ch_marginalcost.html#ex_marginalcost3",
  "type": "Exploration",
  "number": "11.3",
  "title": "",
  "body": "  You are making 100 trailers, and the total cost function is given by     What is the exact cost of the 100th trailer?   Recall that total\/cumulative cost of items 1 to 100. Using the equation given, We don't want to know the cost of all of these items, just the last item. To get rid of items 1-99, we compute their cost separately Subtracting out the items we don't care about, we get The 100th trailer only costs exactly $148,505.    What is the approximate cost of the 100th trailer?   By , when we are asked to approximate the cost of the next item, we must find and use the marginal cost function.  To find the marginal cost function, use the derivative shortcuts   To use the marginal cost function, recall that We want to find the approximate cost of the 100th item only. Item 100 is the item that is immediately after item 99 .  In other words, compute . The 11th item will cost approximately $147,015.   "
},
{
  "id": "sec-marginalcost-8",
  "level": "2",
  "url": "ch_marginalcost.html#sec-marginalcost-8",
  "type": "Application",
  "number": "11.2",
  "title": "Why Derivatives Approximate the Cost of the Next Item.",
  "body": " Why Derivatives Approximate the Cost of the Next Item  What is the connection between derivatives and approximate item cost?  Looking at the units of measurement provides one way of understanding the connection. If total cost is measured in dollars, and quantity is measured in items, then In other words, because the derivative of cost has units $\/item, it tells you approximately how many $ an individual item will cost.  Why does the marginal cost tell us the cost of the next item?  Remember that limits arise in business when quantities are large. For example, suppose that is 5000 items.  Expanding out the limit definition of slope\/IROC, we get Because is large, then a change of more item is (relatively) small. This means that simpilfying this gives which is equal to the 5001st item, which is the next item after 5000.  "
},
{
  "id": "def-marginalfunctions",
  "level": "2",
  "url": "ch_marginalcost.html#def-marginalfunctions",
  "type": "Definition",
  "number": "11.3",
  "title": "",
  "body": "  Let be any total or cumulatve function, such as cost, revenue, or profit. The marginal function is    "
},
{
  "id": "ch_productquotientrule",
  "level": "1",
  "url": "ch_productquotientrule.html",
  "type": "Chapter",
  "number": "12",
  "title": "Product and Quotient Rule",
  "body": " Product and Quotient Rule   Previously, we have seen rules for taking derivatives of basic functions.   Basic Derivative Rules (So Far)  Suppose that are differentiable functions of , that are constant numbers. Then      and                     Previously, we noted that the derivative rules for and are much more complicated. We will address these rules in and .    Derivatives of Products  Remember from elementary school that the product is equal to the area of the rectangle with base and height .  Suppose now that we want the base or height to change over time. How does that change the area as a function of time? In other words, we want to know .     Looking at the picture, there are two main parts of how the area is changing, as a result of the changing base (blue) and as a result of the changing height (green). There is also a little area in the upper corner, but it seems negiligible compared to the other changes.  More precisely you can prove that there are two parts to the rate of change in area    due to changing base is equal to      due to changing height is equal to    Putting these together, we get the product rule:    The Product Rule   Suppose that and are differentiable functions. Then This is eaiser to remember in bracket notation:       Let . Find .    As always, start by setting up the derivative We don't have any derivative rule for square roots, but we can always rewrite . In particular, using gives us To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the product of with . That means we will use the product rule   You could keep \"simpifying\" this derivative, but we might as well stop here.      Let . Find .    As always, start by setting up the derivative To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the sum of and . That means we will use the sum rule   Now we have two separate derivatives to compute: and . The second derivative is easy: . For the remaining derivative, we need to use PEMDAS to identify the \"outermost\" operation, which is a product, so we will use the product rule  The remaining derivatives are basic rules: and .       Let . Find .    This problem requires several steps. First, begin by setting up the question We want to take the derivative of a product, so we must use the product rule . The problem is that here are only two functions in our formula, but there are multiplied terms in our definition of . Fortunately, because of the associativity of multiplication , so we can group the terms any way we like. Now we have two derivatives remaining: a simple derivative and a product rule . Putting it all together we get     Any time a product is changing, the product rule comes into play. In business, products play an important role in the study of revenue and profit, since Previously, we have only looked at the impact of changing quanitity. But in real economies , things like marketing can increase the quanitity sold over time without decreasing the price.    Thanks to a word of mouth marketing campaign, business is booming. Suppose that How fast is Revenue changing on day 3?    Before we can find any rates of change with respect to time, we first need to know what the revenue function is as a function of . Using the formula we have Now, we can find the derivative with respect to t For the first derivative, we have a constant coefficent times a function, so we can use the rule . For the second derivative, we can use the power rule  On day , the rate of change of revenue is On the third day, the price is going up approximately 192.82 $\/day.    In general, if price and quanity are both functions of , then because the revenue function is then the rate of change of revenue is In other words, the rate of revenue change has two parts: the change in due to changing price (the first term), and the change in due to changing quanity (the second term).    Derivatives of Fractions  There is also a special rule for derivatives of fractions. Another name for a fraction is a quotient , so this is often called the quotient rule .    Suppose that and are differentiable functions. Then It is often easier to memorize this formula in an abbreviated form:              Let . Find .     To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the fraction of and . That means we will use the quotient rule   At ,     You can \"show your work\" in several ways. We have already seen the strategy. This strategy is good because it is very robust, and almost always works. Unfortunately, this strategy also uses a lot of symbols.  An alternative technique makes a much greater use of scrap work. We will illustrate this strategy using the following exercise.    Let . Find .    As always, start by setting up the derivative. The outermost operation is a fraction, so we must use the quotient rule with and . For the quotient rule, we need to subsitute expressions for , , , and . We already have expressions for and . We next do some \"scrap work\" to find and  Similarly, we can compute We now can go back to our original question, and apply the quotient rule       Let . Find .     We must use the quotient rule        Let . Find      The most important part of any derivative is to find the \"outermost\" operation. Here, we have a fraction where the numerator is and the denominator is . We must use the quotient rule.  There are two derivatives in the expression above. The second expression is straightforward: . The first derivative is more complicated is a product, so will require the product rule       "
},
{
  "id": "thm-productrule",
  "level": "2",
  "url": "ch_productquotientrule.html#thm-productrule",
  "type": "Theorem",
  "number": "12.1",
  "title": "The Product Rule.",
  "body": " The Product Rule   Suppose that and are differentiable functions. Then This is eaiser to remember in bracket notation:    "
},
{
  "id": "ex_productrule1",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_productrule1",
  "type": "Exploration",
  "number": "12.1",
  "title": "",
  "body": "  Let . Find .    As always, start by setting up the derivative We don't have any derivative rule for square roots, but we can always rewrite . In particular, using gives us To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the product of with . That means we will use the product rule   You could keep \"simpifying\" this derivative, but we might as well stop here.   "
},
{
  "id": "ex_productrule2",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_productrule2",
  "type": "Exploration",
  "number": "12.2",
  "title": "",
  "body": "  Let . Find .    As always, start by setting up the derivative To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the sum of and . That means we will use the sum rule   Now we have two separate derivatives to compute: and . The second derivative is easy: . For the remaining derivative, we need to use PEMDAS to identify the \"outermost\" operation, which is a product, so we will use the product rule  The remaining derivatives are basic rules: and .    "
},
{
  "id": "ex_productrule3",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_productrule3",
  "type": "Exploration",
  "number": "12.3",
  "title": "",
  "body": "  Let . Find .    This problem requires several steps. First, begin by setting up the question We want to take the derivative of a product, so we must use the product rule . The problem is that here are only two functions in our formula, but there are multiplied terms in our definition of . Fortunately, because of the associativity of multiplication , so we can group the terms any way we like. Now we have two derivatives remaining: a simple derivative and a product rule . Putting it all together we get    "
},
{
  "id": "ex_productrule4",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_productrule4",
  "type": "Exploration",
  "number": "12.4",
  "title": "",
  "body": "  Thanks to a word of mouth marketing campaign, business is booming. Suppose that How fast is Revenue changing on day 3?    Before we can find any rates of change with respect to time, we first need to know what the revenue function is as a function of . Using the formula we have Now, we can find the derivative with respect to t For the first derivative, we have a constant coefficent times a function, so we can use the rule . For the second derivative, we can use the power rule  On day , the rate of change of revenue is On the third day, the price is going up approximately 192.82 $\/day.   "
},
{
  "id": "sec_quotientrule-2",
  "level": "2",
  "url": "ch_productquotientrule.html#sec_quotientrule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotient rule "
},
{
  "id": "thm-quotientrule",
  "level": "2",
  "url": "ch_productquotientrule.html#thm-quotientrule",
  "type": "Theorem",
  "number": "12.2",
  "title": "",
  "body": "  Suppose that and are differentiable functions. Then It is often easier to memorize this formula in an abbreviated form:           "
},
{
  "id": "ex_quotientrule1",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_quotientrule1",
  "type": "Exploration",
  "number": "12.5",
  "title": "",
  "body": "  Let . Find .     To apply our derivative rules, you need to use order of operations (PEMDAS) to identify the \"outermost\" operation. In this case, our function is the fraction of and . That means we will use the quotient rule   At ,    "
},
{
  "id": "ex_quotientrule2",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_quotientrule2",
  "type": "Exploration",
  "number": "12.6",
  "title": "",
  "body": "  Let . Find .    As always, start by setting up the derivative. The outermost operation is a fraction, so we must use the quotient rule with and . For the quotient rule, we need to subsitute expressions for , , , and . We already have expressions for and . We next do some \"scrap work\" to find and  Similarly, we can compute We now can go back to our original question, and apply the quotient rule    "
},
{
  "id": "ex_quotientrule3",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_quotientrule3",
  "type": "Exploration",
  "number": "12.7",
  "title": "",
  "body": "  Let . Find .     We must use the quotient rule     "
},
{
  "id": "ex_quotientrule4",
  "level": "2",
  "url": "ch_productquotientrule.html#ex_quotientrule4",
  "type": "Exploration",
  "number": "12.8",
  "title": "",
  "body": "  Let . Find      The most important part of any derivative is to find the \"outermost\" operation. Here, we have a fraction where the numerator is and the denominator is . We must use the quotient rule.  There are two derivatives in the expression above. The second expression is straightforward: . The first derivative is more complicated is a product, so will require the product rule     "
},
{
  "id": "ch_chainrule",
  "level": "1",
  "url": "ch_chainrule.html",
  "type": "Chapter",
  "number": "13",
  "title": "The Chain Rule",
  "body": " The Chain Rule   So far, we have seen rules for sums, products, and quotients  Basic Derivative Rules (So Far)  Suppose that are differentiable functions of , that are constant numbers. Then      and                            But what happens if you have a function inside of another function?  For example, in Excel you will often see an expression like Here, the function is inside the function . In this case, we call   the inside function the argument or inner function     the outside function is the outer function     the original function is the composition of the outside function and the argument.     In this chapter, we will introduce one final rule (or set of rules) that will let us compute derivatives of compositions of functions.    The Generalized Power Rule  Compositions where the outside function is a power is the simplest case to work with.   Let . Write this function in the form    The easiest way to interpret compositions is to try to circle the inside function .    The argument is the circled inside term .    To find the outside function , replace the circled box with the letter .    If and , then as desired.   In very simple cases, we can compute the derivative of a composition with the rules we already have.   Let . Find using only the rules from the previous sections.    No rule applies, but we can rewrite the function using algebra first. On the face of it, there is no clear connection between the equations for and . We need a new shortcut.    The Generalized Power Rule   Suppose that is a differentiable function, and that is a constant number. In other words, if you have a composition , the derivative is the same thing as following the power rule and multiplying by the derivative of the argument.  In bracket notation, this rule is written      Let as before. Find using the generalized power rule.   As always, start by writing As in , this is a composition with argument and outside function . We must use the generalized power rule      Let . Find .    This is a composition of two functions, with the inside function (argument) and outside function      Let . Find .    You can compute this derivative using the quotient rule, as in . You can also rewrite this as a power, and use the generalized power rule. You are now taking the derivative of a composition with argument and outside function .     Use the product and chain rules to derive equation for the quotient rule.   Suppose that and are differentiable functions. We wish to compute To use the product and generalized power rule, we can get rid of the fraction by using an exponent of . Using the product rule, we get There are two that remain. The second one is simply notation: . The first requires the chain rule Putting this back into the broader derivative To combine these fractions, we need a common denominator Rearranging the top gives This is exactly the quotient rule from .    Let . Find    Recall that . That means we can rephrase the question given as follows. Note that both sets of parentheses in the last term are required for a correct answer.   Recall that for root functions, we have an optional derivative shortcut . Combined with the generalized power rule, this gives an optional shortcut.    Let . Then     Recall that roots correspond to fractional powers. In particular, . This allows us to rewrite the function before taking the derivative.     There is a consistent strategy when using the generalized power rule in all of the examples above.   See a composition .    Identify the argument and the outside function .    Find the derivative of the outside     Apply the rule    An easy way to summarize this is to write But is this more general formula true for any outside function ?    The Chain Rule    Suppose that and are differentiable functions.   To memorize this formula, use one of the abbreviations      Because there are so many moving pieces in the chain rule, we will generally compute using the following steps   Identify the argument and the outer function     Using scrap work, separately compute and .    Use your scrap work above to answer the original question using the Chain Rule formula       Let . Find .   We wish to compute This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives     Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives    In the previous two examples, there was a pattern that arose because outside function was in both cases. This gives a new \"optional shortcut\" derivative rule.   The one last function we have studied in this course is the natural logarithm.   Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives     Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives    There is a pattern in the previous two examples, which results from the fact that in both cases, the outside function is . This gives another \"optional shortcut\" derivative rule    Suppose that is a constant base (not necessarily ). Find a formula for    In this derivative, the variable is in the exponent. The only related rule we have is the formula , but this only applies when the base is .  The trick is to use properties of exponentials and logarithms to rewrite the number as . With that, we can find the derivative as follows   This is a chain rule problem, with outside function and inside function . Clearly, . And because and are constants,   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives    The previous exercise gives us one last derivative rule. If is any constant number, For example,   In this chapter, we have learned many different derivative rules. Make sure that you are   comfortable using the rules correctly and efficiently, and    able to accurately identify which rule to use in any given situation.      Be Careful When Deciding Which Rule To Use   Let    Always start by setting up the derivative Use order of operations to identify the outermost operation. In case, after you pull the constant coefficient of 15 through the derivaitve, the outermost operation is the fact that is inside the power of 2 function       Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case, the function is the prodcut of and , so we must use the product rule .     Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case the outermost operation is the logarithmic function  , and the argument is . That means we can either use the full chain rule , or we can use the shortcut . In either case, we get     Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case the outermost operation is the exponential function  , and the argument is . That means we can either use the full chain rule , or we can use the shortcut . In either case, we get Now we must take the derivative of the inside function . This is also a composition with outside function and inside function .       List of All Derivative Rules   Complete List of Derivative Rules  Suppose that are differentiable functions of , that are constant numbers. Then      and                                          If is any constant number,        "
},
{
  "id": "ch_chainrule-2-3",
  "level": "2",
  "url": "ch_chainrule.html#ch_chainrule-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "argument inner function outer function composition "
},
{
  "id": "ex_generalizedpower_decomposing",
  "level": "2",
  "url": "ch_chainrule.html#ex_generalizedpower_decomposing",
  "type": "Checkpoint",
  "number": "13.1",
  "title": "",
  "body": " Let . Write this function in the form    The easiest way to interpret compositions is to try to circle the inside function .    The argument is the circled inside term .    To find the outside function , replace the circled box with the letter .    If and , then as desired.  "
},
{
  "id": "ex_powerrule-nopower",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule-nopower",
  "type": "Checkpoint",
  "number": "13.2",
  "title": "",
  "body": " Let . Find using only the rules from the previous sections.    No rule applies, but we can rewrite the function using algebra first. On the face of it, there is no clear connection between the equations for and . We need a new shortcut.  "
},
{
  "id": "thm-generalizedpowerrule",
  "level": "2",
  "url": "ch_chainrule.html#thm-generalizedpowerrule",
  "type": "Theorem",
  "number": "13.3",
  "title": "The Generalized Power Rule.",
  "body": " The Generalized Power Rule   Suppose that is a differentiable function, and that is a constant number. In other words, if you have a composition , the derivative is the same thing as following the power rule and multiplying by the derivative of the argument.  In bracket notation, this rule is written    "
},
{
  "id": "ex_powerrule1",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule1",
  "type": "Checkpoint",
  "number": "13.4",
  "title": "",
  "body": " Let as before. Find using the generalized power rule.   As always, start by writing As in , this is a composition with argument and outside function . We must use the generalized power rule    "
},
{
  "id": "ex_powerrule2",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule2",
  "type": "Checkpoint",
  "number": "13.5",
  "title": "",
  "body": " Let . Find .    This is a composition of two functions, with the inside function (argument) and outside function    "
},
{
  "id": "ex_powerrule3",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule3",
  "type": "Checkpoint",
  "number": "13.6",
  "title": "",
  "body": " Let . Find .    You can compute this derivative using the quotient rule, as in . You can also rewrite this as a power, and use the generalized power rule. You are now taking the derivative of a composition with argument and outside function .   "
},
{
  "id": "ex_powerrule4",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule4",
  "type": "Checkpoint",
  "number": "13.7",
  "title": "",
  "body": " Use the product and chain rules to derive equation for the quotient rule.   Suppose that and are differentiable functions. We wish to compute To use the product and generalized power rule, we can get rid of the fraction by using an exponent of . Using the product rule, we get There are two that remain. The second one is simply notation: . The first requires the chain rule Putting this back into the broader derivative To combine these fractions, we need a common denominator Rearranging the top gives This is exactly the quotient rule from .  "
},
{
  "id": "ex_powerrule5",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule5",
  "type": "Checkpoint",
  "number": "13.8",
  "title": "",
  "body": " Let . Find    Recall that . That means we can rephrase the question given as follows. Note that both sets of parentheses in the last term are required for a correct answer.  "
},
{
  "id": "cor_generalizedroot",
  "level": "2",
  "url": "ch_chainrule.html#cor_generalizedroot",
  "type": "Corollary",
  "number": "13.9",
  "title": "",
  "body": "  Let . Then     Recall that roots correspond to fractional powers. In particular, . This allows us to rewrite the function before taking the derivative.    "
},
{
  "id": "thm-chainrule",
  "level": "2",
  "url": "ch_chainrule.html#thm-chainrule",
  "type": "Theorem",
  "number": "13.10",
  "title": "",
  "body": "  Suppose that and are differentiable functions.   To memorize this formula, use one of the abbreviations     "
},
{
  "id": "ex_powerrule_exp1",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule_exp1",
  "type": "Checkpoint",
  "number": "13.11",
  "title": "",
  "body": " Let . Find .   We wish to compute This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives   "
},
{
  "id": "ex_powerrule_exp2",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule_exp2",
  "type": "Checkpoint",
  "number": "13.12",
  "title": "",
  "body": " Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives   "
},
{
  "id": "ex_powerrule_log1",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule_log1",
  "type": "Checkpoint",
  "number": "13.13",
  "title": "",
  "body": " Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives   "
},
{
  "id": "ex_powerrule_log2",
  "level": "2",
  "url": "ch_chainrule.html#ex_powerrule_log2",
  "type": "Checkpoint",
  "number": "13.14",
  "title": "",
  "body": " Let . Find .    This is a composition with argument and outside function .  Using our regular derivative rules, we know that and that   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives   "
},
{
  "id": "sec-chainrule-11",
  "level": "2",
  "url": "ch_chainrule.html#sec-chainrule-11",
  "type": "Checkpoint",
  "number": "13.15",
  "title": "",
  "body": " Suppose that is a constant base (not necessarily ). Find a formula for    In this derivative, the variable is in the exponent. The only related rule we have is the formula , but this only applies when the base is .  The trick is to use properties of exponentials and logarithms to rewrite the number as . With that, we can find the derivative as follows   This is a chain rule problem, with outside function and inside function . Clearly, . And because and are constants,   Now that we have done our scrap work, we can return to our original question Substituting the values first for , and then for and , into the above equation gives   "
},
{
  "id": "ex_complexchainrule",
  "level": "2",
  "url": "ch_chainrule.html#ex_complexchainrule",
  "type": "Exploration",
  "number": "13.1",
  "title": "Be Careful When Deciding Which Rule To Use.",
  "body": " Be Careful When Deciding Which Rule To Use   Let    Always start by setting up the derivative Use order of operations to identify the outermost operation. In case, after you pull the constant coefficient of 15 through the derivaitve, the outermost operation is the fact that is inside the power of 2 function       Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case, the function is the prodcut of and , so we must use the product rule .     Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case the outermost operation is the logarithmic function  , and the argument is . That means we can either use the full chain rule , or we can use the shortcut . In either case, we get     Let . Find .   Always start by setting up the derivative Use order of operations to identify the outermost operation. In this case the outermost operation is the exponential function  , and the argument is . That means we can either use the full chain rule , or we can use the shortcut . In either case, we get Now we must take the derivative of the inside function . This is also a composition with outside function and inside function .    "
},
{
  "id": "ch-maxmin",
  "level": "1",
  "url": "ch-maxmin.html",
  "type": "Chapter",
  "number": "14",
  "title": "Finding Maxima and Minima",
  "body": " Finding Maxima and Minima   Finding Local Extrema  In any economic system, and in any business, there are many different choices you can make. Of these choices, some are better than others.  Ideally, you will want to make the best choice. In practice, limits on resources and time often limit the amount of change that is feasible. In these cases, you want to make the locally optimal choice -- the choice that is better than all the alternatives that are \"nearby\" to your current location.  Part of the complexity of economic systems are the large number of variables and different ways of comparing which options are \"better.\" In this course, we will focus on functions of a single variable, and we will always compare the magnitude of the outputs.  To help define our terms precisely, we will start with a more concrete, physical example.    The example below shows a cross section of a path through a set of hills in the forest. In other words, the height of the trail at mile marker is give by .         At which values does have a local\/relative maximum ?   The graph has local maxima at and , because has   These are local maxima because if you imagine standing on the graph at those points, moving left or right will decrease your height.  Said another way, there is a local maxima because when you read the graph from left to right, these are the -values where the graph looks like .    At which values does have a local\/relative minimum ?   The graph has a local minimum at , , or   These are local minima because if you imagine standing on the graph at those points, moving left or right will increase your height.  Said another way, there is a local minima because when you read the graph from left to right, these are the -values where the graph looks like .    At which values does have a absolute\/global maximum ?   The graph has a global maximum of at   These is a global maximum because if you imagine standing on the graph at those points, there is no way place you could to move to to increase your height .    At which values does have a absolute\/global minimum ?   The graph has a global minimum of at   These is a global maximum because if you imagine standing on the graph at those points, there is no way place you could to move to to decrease your height .    In the exercise above, there are three special kinds of points that mostly (but do not exactly) correspond to locations of maxima and minima:   The curve is horizontal at .  This is because at these points.    The curve is has a singularity at .  This is because at this points.    The curve is has an endpoint at and .       A function can only have a maxima or minima at if one of the following are true    is horizontal at . This happens when .     has a singularity at . This happens when .     is an endpoint of the height function .       The values of where or are called the critical points of . This is because finding these points is one of the most important steps when you are looking for the maxima and minima of the function .   Warning: Not every critical point is a maxima or minima. In , is a critical point of because , and so the function is horizontal at . However, is not a local maxima or minima, since you can increase your height by moving right and decrease it by moving left.  To be able to check if a point is indeed a maxima or minima, we need a more precise definition.    Let be a function which is continuous at .     has a local maxima at if the graph goes from increasing to decreasing at (the function looks like at ).     has a local minima at if the graph goes from decreasing to increasing at (the function looks like at ).     has an extrema at if there is either a maxima or minima at .        Suppose that is a differentiable function at     height is increasing ( ) at  if and only if the slope is positive     height is decreasing ( ) at  if and only if the slope is positive       In , the function is increasing on the interval  because  is positive on that interval.    Let     Find the critical points of .   Recall that the critical points of are the values where or .  To find when or , we must first find an equation for the derivative .   To find when , simply solve the equation Solve the equation by factoring. It is easier to factor equations when the highest power term has a factor of 1. To do this, multiply both sides of the equation by -1, simplifying, and factoring The only way this can happen is if either the first or second terms equal 0. In other words, solve   We have a singularity when . Looking at the graph of , it does not look like there are any singularities.  Looking at the function, the derivative is always defined. This confirms that this function does not have any singularities.    Use a calculator to find the local extrema for    Graphing the function we see     Looking at the graph, we can see that there is a local maxima at and a local minima at . We also know that there are no other locations where there might be a maxima or minima, even off the screen of the calculator.  In particular, this tells us that there are no absolute maxima or minima.    Use the first derivative to find the local extrema for . Find the intervals where is increasing and when it is decreasing.   We are asked to locate the maxima and minima without looking at the graph of the function.  The key idea is that we can use the derivative function to make a very rough sketch of the function by using .  We have already used to find all values of where or . To make our sketch plot these points on a number line .       Next, we must compute the derivative to the left and right of each of the points above. There are three intervals: to the left of -1, between -1 and 1, and to the right of 1. You can chose any number in those intervals.   left of -1     between -1 and 1     right of -1    Mark the magnitude of the derivative below the interval, and draw an or above the line to indicate the behavior of the function.       This sign chart is a very rough sketch of the function, but it is complete enough to show that there is a local minima at (due to the ) and that there is a local maxima at (due to the ).  It is also clear from the sign chart that the function is increasing on the interval between -1 and 1. In interval notation, it is increasing on the interval   The function is decreasing on two intervals: to the left of -1 and to the right of 1. In interval notation, is decreasing on the interval .     A Strategy for Finding Extrema  Let be any function which is continuous on an open interval. To find the local extrema,   Use the derivative function to find where and when .    Polynomials: factor to find the 0's.     Fractions:  is equal to zero if when and . is undefined when .       Plot these points on a number line. This cuts the real numbers into several intervals.  Use a closed dot for and an open circle for .    Compute on each of the intervals you have found above. Mark whether is or below the interval, and draw or above the interval.    Read off the answer to the question, using your sign chart as a very rough sketch of the function.        Let     Find the intervals where is increasing and decreasing..   First, we must find the critical points. In other words, find the such that or .  First, find an equation for the derivative , and factor it.   To find when , simply solve the equation Solve the equation by factoring. It is easier to factor equations when the highest power term has a factor of 1. To do this, factor out a from both terms The only way this can happen is if either the first or second terms equal 0. In other words, solve   We have a singularity when . Looking at the graph of , it does not look like there are any singularities.  Looking at the function, the derivative is always defined. This confirms that this function does not have any singularities.  To find when the function is increasing and decreasing without looking at the graph of the function, we must use the derivative function to make a very rough sketch of the function by using . We will do this by making the sign chart of .       Next, we must compute the derivative to the left and right of each of the points above. There are three intervals: to the left of 0, between 0 and 8, and to the right of 8. You can chose any number in those intervals.   left of 0     between 0 and 8     right of 8    Mark the magnitude of the derivative below the interval, and draw an or above the line to indicate the behavior of the function.       Using the sign chart, we an read off the behavior of the function. is increasing on the interval , and is decreasing on the interval   We can also see that has a local maxima at , but has no local minima (the local minima ).    Use your answers above to sketch the graph of .        Why would you want a sketch when you could just use a graphing calculator? In this case, trying to graph the function will give you the following image, which is harder to interpret, since it doesn't tell you what happens in the middle of the function, or off of the screen.       We now have a precise, repeatable strategy for finding maxima and minima. The following definition and theorem make this strategy precise.    The critical numbers of are the numbers such that    Both   is defined    And     either     or            The First Derivative Test   Suppose that is a critical number of a function .     If  goes from to at ( goes from to ) then  has a local maximum at .     If  goes from to at ( goes from to ) then  has a local minimum at .    If does not change sign at (if goes or ), then  does not have a local maximum or minimum at .      In some cases, we will have more knowledge about the derivative than we have about the height function. The key thing to notice is that we have been using the slope function  to teach us about the height function .    Suppose that is an uknown (or mystery) position function, with known derivative function     Find the intervals where is increasing and decreasing.   In this example, we are given a factored version of the derivative , so we do not need to use any of our rules.  Next, we must find the points where or . Recall that a fraction if and only if , and if and only if . We must therefore solve two equations.  For the first, Because for all , this can only happen if , which means when .  For the second, Plotting these on a number line, we get     Recall that we were given the derivative function, which we now use to check the sign of each interal. We can either use a calculator as before or we can do basic \"sign arithmetic\" in our head   Either way, we obtain     Reading off of the sign chart for , we see that the original (mystery) function is increasing on the intervals , and the original (mystery) function is decreasing on the interval .    Find the values of all relative extrema.   Using the sign chart for , we see that there is a local minima at , and there is no local maxima.   Aside: Note that the something very strange happens at . With a little more information about the original function, we would learn that is undefined at and therefore could not be an extrema regardless of the sign chart. However, these details are beyond the scope of this course, and won't come up in any of our examples.     Find all maxima and minima for the function    First, we must find an equation for . We are taking the derivative of a fraction, so we must use the quotient rule  Next, we must find all values of such that and . similarly Plotting these on the number line gives       Evaluating on each of these intervals gives     The function has a local maxima at and a local minima at   Note again that the orignal function is undefined ( ) at , so cannot be a max or a min regardless of the sign chart.   As we have seen, the steps in every max\/min problem are the same   Find an equation for (if you are not already given it)    Solve     Solve     Make the sign chart for     Read off the answer.       Finding Absolute Extrema  In this class, we focus on local maxima and minima because of their close connections to calculus and their applications to marginal profit. But in many cases, global (also called absolute) maxima and minima are often of much greater interest. To see why, we begin with one more example.    Suppose that is a total profit function.    Find the quantities where all local maximum and minimum profits occur.   First, find the marginal profit function   Next, find when or  This happens if and only if or , so these are the locations of the horizontal tangents.  On the other hand, because is a polynomial, it is always defined. Therfore, does not have any sigular points.  Making a sign chart as usual gives     According to this analysis, a local maximum of profit occurs at , and a local minimum occurs at .    If you were able to decide how many items to sell, should you sell 1 item, 3 items, 10 items, or 100 items?   The easiest way to answer this question is to compute the total profit from each of the number of items given: Clearly, if you are given these options you should sell 100 items and make a total profit of $940,910    Use your work above to sketch the total profit function. Use this graph to explain how to decide how many items you should sell.   Graphing total profit shows that although the function decreases between and , the function rapidly increases after and then proceeds to grow without bound. In other words, you should always sell as many items as possible.         The example above helps illustrate the way that some mathematical models oversimplify reality. Mathematically, the function can grow without bound.  In real life, however, there are always limits on the quanitites involved. In fact, there are only a finite number of atoms in the universe!   Real Life Restricts Quanitites   Let be anu function and let be any numbers.  The restriction of to the interval is the function that you get if you cut off the parts of the graph of the function that are less than and greater than .   The image below shows the result of restricting to the interval . The restricted function is shown as solid, and the parts of the function that were removed are shown as dotted.        Suppose that is a function restricted to the closed interval . This restriction of can have an absolute maxima or minima only at   one of the endpoints ( or )    a horiziontal tangent (a point where )    a singularity (a point where ).       That means that to find all of the absolute extrema for on a closed interval, it sufficies to find the three kinds of possible locations listed above, and then to compare the height of at each of these points.   Finding Absolute Extrema  Suppose you are given a height function . To find the absolute maximum height and minimum height of on the interval ,   Find the derivative (slope) function     Find all critical points where (horizontal tangents) or (singluar points).    Find the height of the function at each of the critical points     Find the height of the function at the two endpoints (find and ).     The above computation will give you things like , , . If were the largest of all the values, it would be the absolute maximum profit, and it would occur at quanitity If were the least of all the values, it would be the absolute minimum profit, and it would occur at quanitity .     Let     Find the absolute maximum and minimum profit for restricted to the interval    In , we already found that the critical numbers for are and   If we were to graph the function on the restricted domain, and to label the critical points, we would have     From our picture, it looks like the point at will give us the largest profit, and the points at and will give us the same smallest profit  To confirm this, we evaluate the original , total profit function at these four points:   This confirms that on this interval, an absolute maximum proift of $30 occurs when , and that an absolute mininmum profit of $10 occurs when either or .    Find the absolute maximum and minimum profit for restricted to the interval    In , we already found that the critical numbers for are and   If we were to graph the function on the restricted domain, and to label the critical points, we would discover that the critical number is not in our restricted domain, so we must leave it out.     From our picture, it looks like the point at will give us the largest profit. It is not entirely clear which points will give us the same smallest profit  Therefore this, we evaluate the original , total profit function at these three points:   We now see that on this interval, an absolute maximum proift of $14 occurs when , and that an absolute mininmum profit of $10 occurs when .      Maxima, Minima, and Change Graphs  Why are the techniques in this chapter important for the study of economics and business?   Beautiful Fact  The total profit function has a local maximum or minimum at the quantity  if and only if the marginal profit function goes between and at .  Recall that the derivative and change function are closely related:    Total profit is increasing when the change in profit is positive      Total profit is decreasing when the change in profit is negative    This means we can illustrate our method for finding maxima and minima using total and change graphs.   Recall that the graph on the left gives the total profit from selling a certain number of units, while the graph on the right shows the change in profit due to each unit.     In the graph above right, the change in profit goes from positive to negative at . That means that the total profit has a maximum at units. This matches our graph of total profit in the graph above left exactly.     In the graph above right, the change in profit goes from negative to positive at . That means that the total profit has a minimum at units. This also matches exactly our graph of total profit, above left.           Use your knowledge of calculus to make a rough sketch of the derivative of profit.          Use the graph you are given to fill in the table defining and     Describe the maxima and minima for the profit function      "
},
{
  "id": "explore_introducemaxmin",
  "level": "2",
  "url": "ch-maxmin.html#explore_introducemaxmin",
  "type": "Exploration",
  "number": "14.1",
  "title": "",
  "body": "  The example below shows a cross section of a path through a set of hills in the forest. In other words, the height of the trail at mile marker is give by .         At which values does have a local\/relative maximum ?   The graph has local maxima at and , because has   These are local maxima because if you imagine standing on the graph at those points, moving left or right will decrease your height.  Said another way, there is a local maxima because when you read the graph from left to right, these are the -values where the graph looks like .    At which values does have a local\/relative minimum ?   The graph has a local minimum at , , or   These are local minima because if you imagine standing on the graph at those points, moving left or right will increase your height.  Said another way, there is a local minima because when you read the graph from left to right, these are the -values where the graph looks like .    At which values does have a absolute\/global maximum ?   The graph has a global maximum of at   These is a global maximum because if you imagine standing on the graph at those points, there is no way place you could to move to to increase your height .    At which values does have a absolute\/global minimum ?   The graph has a global minimum of at   These is a global maximum because if you imagine standing on the graph at those points, there is no way place you could to move to to decrease your height .   "
},
{
  "id": "thm-maxminonlyat",
  "level": "2",
  "url": "ch-maxmin.html#thm-maxminonlyat",
  "type": "Theorem",
  "number": "14.2",
  "title": "",
  "body": "  A function can only have a maxima or minima at if one of the following are true    is horizontal at . This happens when .     has a singularity at . This happens when .     is an endpoint of the height function .      "
},
{
  "id": "sec_understandingextrema-9",
  "level": "2",
  "url": "ch-maxmin.html#sec_understandingextrema-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical points "
},
{
  "id": "def-localmaximin",
  "level": "2",
  "url": "ch-maxmin.html#def-localmaximin",
  "type": "Definition",
  "number": "14.3",
  "title": "",
  "body": "  Let be a function which is continuous at .     has a local maxima at if the graph goes from increasing to decreasing at (the function looks like at ).     has a local minima at if the graph goes from decreasing to increasing at (the function looks like at ).     has an extrema at if there is either a maxima or minima at .     "
},
{
  "id": "thm-increasingfunction",
  "level": "2",
  "url": "ch-maxmin.html#thm-increasingfunction",
  "type": "Theorem",
  "number": "14.4",
  "title": "",
  "body": "  Suppose that is a differentiable function at     height is increasing ( ) at  if and only if the slope is positive     height is decreasing ( ) at  if and only if the slope is positive      "
},
{
  "id": "ex_maxminexample1",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample1",
  "type": "Exploration",
  "number": "14.2",
  "title": "",
  "body": "  Let     Find the critical points of .   Recall that the critical points of are the values where or .  To find when or , we must first find an equation for the derivative .   To find when , simply solve the equation Solve the equation by factoring. It is easier to factor equations when the highest power term has a factor of 1. To do this, multiply both sides of the equation by -1, simplifying, and factoring The only way this can happen is if either the first or second terms equal 0. In other words, solve   We have a singularity when . Looking at the graph of , it does not look like there are any singularities.  Looking at the function, the derivative is always defined. This confirms that this function does not have any singularities.    Use a calculator to find the local extrema for    Graphing the function we see     Looking at the graph, we can see that there is a local maxima at and a local minima at . We also know that there are no other locations where there might be a maxima or minima, even off the screen of the calculator.  In particular, this tells us that there are no absolute maxima or minima.    Use the first derivative to find the local extrema for . Find the intervals where is increasing and when it is decreasing.   We are asked to locate the maxima and minima without looking at the graph of the function.  The key idea is that we can use the derivative function to make a very rough sketch of the function by using .  We have already used to find all values of where or . To make our sketch plot these points on a number line .       Next, we must compute the derivative to the left and right of each of the points above. There are three intervals: to the left of -1, between -1 and 1, and to the right of 1. You can chose any number in those intervals.   left of -1     between -1 and 1     right of -1    Mark the magnitude of the derivative below the interval, and draw an or above the line to indicate the behavior of the function.       This sign chart is a very rough sketch of the function, but it is complete enough to show that there is a local minima at (due to the ) and that there is a local maxima at (due to the ).  It is also clear from the sign chart that the function is increasing on the interval between -1 and 1. In interval notation, it is increasing on the interval   The function is decreasing on two intervals: to the left of -1 and to the right of 1. In interval notation, is decreasing on the interval .   "
},
{
  "id": "ex_maxminexample2",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample2",
  "type": "Exploration",
  "number": "14.3",
  "title": "",
  "body": "  Let     Find the intervals where is increasing and decreasing..   First, we must find the critical points. In other words, find the such that or .  First, find an equation for the derivative , and factor it.   To find when , simply solve the equation Solve the equation by factoring. It is easier to factor equations when the highest power term has a factor of 1. To do this, factor out a from both terms The only way this can happen is if either the first or second terms equal 0. In other words, solve   We have a singularity when . Looking at the graph of , it does not look like there are any singularities.  Looking at the function, the derivative is always defined. This confirms that this function does not have any singularities.  To find when the function is increasing and decreasing without looking at the graph of the function, we must use the derivative function to make a very rough sketch of the function by using . We will do this by making the sign chart of .       Next, we must compute the derivative to the left and right of each of the points above. There are three intervals: to the left of 0, between 0 and 8, and to the right of 8. You can chose any number in those intervals.   left of 0     between 0 and 8     right of 8    Mark the magnitude of the derivative below the interval, and draw an or above the line to indicate the behavior of the function.       Using the sign chart, we an read off the behavior of the function. is increasing on the interval , and is decreasing on the interval   We can also see that has a local maxima at , but has no local minima (the local minima ).    Use your answers above to sketch the graph of .        Why would you want a sketch when you could just use a graphing calculator? In this case, trying to graph the function will give you the following image, which is harder to interpret, since it doesn't tell you what happens in the middle of the function, or off of the screen.      "
},
{
  "id": "def-criticalpoints",
  "level": "2",
  "url": "ch-maxmin.html#def-criticalpoints",
  "type": "Definition",
  "number": "14.5",
  "title": "",
  "body": "  The critical numbers of are the numbers such that    Both   is defined    And     either     or          "
},
{
  "id": "thm-firstderivativetest",
  "level": "2",
  "url": "ch-maxmin.html#thm-firstderivativetest",
  "type": "Theorem",
  "number": "14.6",
  "title": "The First Derivative Test.",
  "body": " The First Derivative Test   Suppose that is a critical number of a function .     If  goes from to at ( goes from to ) then  has a local maximum at .     If  goes from to at ( goes from to ) then  has a local minimum at .    If does not change sign at (if goes or ), then  does not have a local maximum or minimum at .     "
},
{
  "id": "ex_maxminexample3",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample3",
  "type": "Exploration",
  "number": "14.4",
  "title": "",
  "body": "  Suppose that is an uknown (or mystery) position function, with known derivative function     Find the intervals where is increasing and decreasing.   In this example, we are given a factored version of the derivative , so we do not need to use any of our rules.  Next, we must find the points where or . Recall that a fraction if and only if , and if and only if . We must therefore solve two equations.  For the first, Because for all , this can only happen if , which means when .  For the second, Plotting these on a number line, we get     Recall that we were given the derivative function, which we now use to check the sign of each interal. We can either use a calculator as before or we can do basic \"sign arithmetic\" in our head   Either way, we obtain     Reading off of the sign chart for , we see that the original (mystery) function is increasing on the intervals , and the original (mystery) function is decreasing on the interval .    Find the values of all relative extrema.   Using the sign chart for , we see that there is a local minima at , and there is no local maxima.   Aside: Note that the something very strange happens at . With a little more information about the original function, we would learn that is undefined at and therefore could not be an extrema regardless of the sign chart. However, these details are beyond the scope of this course, and won't come up in any of our examples.   "
},
{
  "id": "ex_maxminexample4",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample4",
  "type": "Checkpoint",
  "number": "14.7",
  "title": "",
  "body": " Find all maxima and minima for the function    First, we must find an equation for . We are taking the derivative of a fraction, so we must use the quotient rule  Next, we must find all values of such that and . similarly Plotting these on the number line gives       Evaluating on each of these intervals gives     The function has a local maxima at and a local minima at   Note again that the orignal function is undefined ( ) at , so cannot be a max or a min regardless of the sign chart.  "
},
{
  "id": "ex_maxminexample5",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample5",
  "type": "Exploration",
  "number": "14.5",
  "title": "",
  "body": "  Suppose that is a total profit function.    Find the quantities where all local maximum and minimum profits occur.   First, find the marginal profit function   Next, find when or  This happens if and only if or , so these are the locations of the horizontal tangents.  On the other hand, because is a polynomial, it is always defined. Therfore, does not have any sigular points.  Making a sign chart as usual gives     According to this analysis, a local maximum of profit occurs at , and a local minimum occurs at .    If you were able to decide how many items to sell, should you sell 1 item, 3 items, 10 items, or 100 items?   The easiest way to answer this question is to compute the total profit from each of the number of items given: Clearly, if you are given these options you should sell 100 items and make a total profit of $940,910    Use your work above to sketch the total profit function. Use this graph to explain how to decide how many items you should sell.   Graphing total profit shows that although the function decreases between and , the function rapidly increases after and then proceeds to grow without bound. In other words, you should always sell as many items as possible.        "
},
{
  "id": "def-restrictfunction",
  "level": "2",
  "url": "ch-maxmin.html#def-restrictfunction",
  "type": "Definition",
  "number": "14.8",
  "title": "Real Life Restricts Quanitites.",
  "body": " Real Life Restricts Quanitites   Let be anu function and let be any numbers.  The restriction of to the interval is the function that you get if you cut off the parts of the graph of the function that are less than and greater than .   The image below shows the result of restricting to the interval . The restricted function is shown as solid, and the parts of the function that were removed are shown as dotted.     "
},
{
  "id": "thm-absoluteextrema",
  "level": "2",
  "url": "ch-maxmin.html#thm-absoluteextrema",
  "type": "Theorem",
  "number": "14.9",
  "title": "",
  "body": "  Suppose that is a function restricted to the closed interval . This restriction of can have an absolute maxima or minima only at   one of the endpoints ( or )    a horiziontal tangent (a point where )    a singularity (a point where ).      "
},
{
  "id": "assemblage-absolutemaxmin-3",
  "level": "2",
  "url": "ch-maxmin.html#assemblage-absolutemaxmin-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absolute maximum absolute minimum "
},
{
  "id": "ex_maxminexample6",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminexample6",
  "type": "Exploration",
  "number": "14.6",
  "title": "",
  "body": "  Let     Find the absolute maximum and minimum profit for restricted to the interval    In , we already found that the critical numbers for are and   If we were to graph the function on the restricted domain, and to label the critical points, we would have     From our picture, it looks like the point at will give us the largest profit, and the points at and will give us the same smallest profit  To confirm this, we evaluate the original , total profit function at these four points:   This confirms that on this interval, an absolute maximum proift of $30 occurs when , and that an absolute mininmum profit of $10 occurs when either or .    Find the absolute maximum and minimum profit for restricted to the interval    In , we already found that the critical numbers for are and   If we were to graph the function on the restricted domain, and to label the critical points, we would discover that the critical number is not in our restricted domain, so we must leave it out.     From our picture, it looks like the point at will give us the largest profit. It is not entirely clear which points will give us the same smallest profit  Therefore this, we evaluate the original , total profit function at these three points:   We now see that on this interval, an absolute maximum proift of $14 occurs when , and that an absolute mininmum profit of $10 occurs when .   "
},
{
  "id": "sec_maximaminimaandchangegraphs-3-3",
  "level": "2",
  "url": "ch-maxmin.html#sec_maximaminimaandchangegraphs-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Total profit is increasing change in profit is positive Total profit is decreasing change in profit is negative "
},
{
  "id": "sec_maximaminimaandchangegraphs-6",
  "level": "2",
  "url": "ch-maxmin.html#sec_maximaminimaandchangegraphs-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change in profit from positive to negative total maximum "
},
{
  "id": "sec_maximaminimaandchangegraphs-8",
  "level": "2",
  "url": "ch-maxmin.html#sec_maximaminimaandchangegraphs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change in profit from negative to positive total minimum "
},
{
  "id": "ex_maxminchangegraphs",
  "level": "2",
  "url": "ch-maxmin.html#ex_maxminchangegraphs",
  "type": "Exploration",
  "number": "14.7",
  "title": "",
  "body": "         Use your knowledge of calculus to make a rough sketch of the derivative of profit.          Use the graph you are given to fill in the table defining and     Describe the maxima and minima for the profit function    "
},
{
  "id": "ch-secondderivatives",
  "level": "1",
  "url": "ch-secondderivatives.html",
  "type": "Chapter",
  "number": "15",
  "title": "Dimishing Returns and Changing Rates",
  "body": " Dimishing Returns and Changing Rates       The Second Derivative  Recall that if is total profit, then it's slope function is used to approximate the profit from the next item.  The concept of diminishing returns plays an important role in economics.      To the left of the point of diminishing returns, the slope is increasing .  That means that each item contributes more and more to the total profit. In other words, returns are accelerating .    To the right of the point of diminishing returns, the slope is decreasing .  That means that each item contributes less and less to the total profit. In other words, returns are decellerating . At first, the items increase the profit, but by less and less. Eventually, the items cause the profit to decrease.     Most descriptions in economics of diminishing returns are very wordy, and somewhat vague. To make this concept precise, we need an additional mathematical concept.    Suppose that is a differentiable function. The second derivative of , written , is a function that gives the slope of . In symbols, In practice, find the second derivative by finding the derivative of the derivative.    In physics,   If position    then velocity    and acceleration.       Suppose that .    Find the marginal profit from items #10, #11, and #12.   The marginal profit function is  The marginal profit function is equal to . This tells us how much the next item contributes to the total profit. Notice that the 10th, 11th, and 12th items all increase the total profit. However, they contribute less and less to the total profit. In fact, the addional profit is decreasing by $0.20 every additional item.    Find    We have already found .  We can now find the second derivative This tells us that the unit profit is decreasing by $0.20 $\/item for each additional item sold.      Let is the position function. Find the acceleration .    We must take the derivative twice. You can find this derivative as written using the quotient rule. You can also rewrite the derivative as and use the chain rule.  We will use the quotient rule    We can now take the derivative the second time, also using the quotient rule      Understanding Acceleration  A physical perspective provides one of the most straightforward ways to think about the connection between position, velocity, and acceleration. To make things concrete, suppose that you are driving on a highway, and that     If your mile marker at time     then is your velocity at time     and your acceleration at time . This tells us how fast the velocity is changing.   In other words,   Positive acceleration means that velocity is increasing . This happens when you put your foot on the gas, as long as the car is in drive.   Negative acceleration means that your velocity is decreasing . This happens when you put your foot on the break, as long as you are moving forward.     Suppose that your velocity is given by the following table     0  1  2  3  4  5     60  65  85  30  10  0       On what interval is your acceleration positive? Justify your answer   Positive acceleration means increasing velocity. The velocity increases between and (the velocity increases from 60 to 65 to 85).  That means that acceleration is positive between and , which corresponds to the interval     On what interval is your acceleration negative? Justify your answer   Negative acceleration means decreasing velocity. The velocity decreases between and (the velocity increases from 85 to 30, to 10, to 0).  That means that acceleration is negative between and , which corresponds to the interval .     Finding Maximum and Minimum Velocity  The above examples show that the velocity function has a maxmium or minimum value when the acceleration goes from to (for a maximum velocity ) or from to (for a minimum velocity ).     Concavity and Graphs  In , we used the derivative function to give a very rough sketch of a height function . However, this sketch is only a partial description of the original function.  For example, the following graph is more than just the sketch    In particular, the graph first curves up, then curves down, and then curves up again.    The term concave means \"curved like a bowl.\" In our context, there are two kinds of bowls: ones that open up, and ones that open down. Graphically, you can tell if a curve is concave up by putting eyes over the curve, and seeing if it is or       Concave Up  The curve opens up      The slope is increasing      Because is increasing, the second derivative is positive .    Concave Down  The curve opens down      The slope is decreasing      Because is decreasing, the second derivative is negative .    We can summarize this as the following result.    Suppose that is a function with second derivative .    is concave up on an interval if and only if the second derivative on that interval.     is concave down on an interval if and only if the second derivative on that interval.       Something interesting happens when concavity changes. Suppose the bell curve below represents the number of people ill with a new illness. In the bell curve below, the curve starts out concave up (CU), becomes concave down (CD), and ends concave up (CU).   The curve is bent at the two transitions.   At the first \"bending point,\" the number of new cases continues to rise. However, the daily change in cases (i.e. the slope ) stops getting bigger and starts getting smaller.  In other words, because the second derivative goes from to , the fastest daily change in cases occurs at the first bend in the curve.    At the second \"bending point,\" the number of new cases continues to decrease. However, the daily change in cases (i.e. the slope ) starts to decrease less rapidly.   This is an important mathematical feature, but \"bending point\" does not a mathematical term. The word inflect means to bend, to change pitch, or to alter noticeably.    Suppose that is a function with second derivative . We say that has an inflection point at  if and only if  changes concavity at .  In other words, has an inflection point at if goes between and at .     To Find Intervals of Concavity     Find an equation for .  If you are given an equation for , take the derivative twice. If you are given an equation for , take the derivative once. If you are given an equation for , no derivative rules are needed.    Find all such that .    Find all such that     Make a sign chart for     Read off your answer. If , then is . If , then is .        Let be a function that gives the height of a mountain.    Find where is concave up, where it is concave down, and find all inflection points.   To find concavity and inflection points, we must work with the second derivative . First, we must find .    Next, find when by solving Because is a polynomial, it is defined on all . In other words, there are no that make   Next, make a sign chart for as before, checking whether is positive or negative on each interval.   Using our graph, we see that the function is concave up on the interval , it is concave down on the interval , and has a point of inflection at .    Find all local maxima and minima.   To find maxima and minima, we must work with the first derivative . We have already found that .  Next, we must find when by solving the equation  if and only if or .  Because is a polynomial, it is defined for all . In other words, there are no places where .  We now make a sign chart for as usual.   The function has a local maximum at , and a local minimum at .      Suppose that is an unknown (mystery) function with known acceleration function     Find where the original function is concave up or down.   You are given the formula for the derivative , so you do not need to do any calculus. Recall that for fractions, if and only if , and if and only if   To find when , solve the equation which happens when or .  To find when , solve the equation which happens when   Using these values, we can make the sign chart as before     Using the sign chart, we see that the original\/mystery function is concave up on the interval . is concave down on the interval .  There are inflection points (the curve bends) at and .    We can combine all of the techinques we have used in the past section into a single problem.    Let .    Find all maxima and minima for .     if and only if  if or .   is a polynomial so there are no values where .    has a local maximum at , and a local mininmum at .    Find all intervals of concavity for .     when  when or    is a polynomial, so it is always defined. Making the sign chart for gives.   The original function is concave up on the interal . The function is concave down on the interval .      The Second Derivative and Change Graphs  So far, we've seen that if is a function that represents a total amount of something, then the derivative function tells us how fast that total is changing.  We have also seen that simply computing the change function gives a nice discrete analog of the derivative.  We have recently begun studying the second derivative. Recall that tells us how fast the slope of our function is changing.  As it turns out, we can get a discrete analog of the second derivative by computing the change in . We might call the change in the change function , since it involves finding two different changes.               day ( )  0  1  2  3  4  5  6  7  8  9  10                   N\/A               N\/A  N\/A                What is the change in value due to the 2nd, 4th, and 6th items?    When is the function changing the fastest and slowest?    Which items contribute the maximum value? Which items contribute the minimum value?    How fast is the value changing between items 1 and 2? What about between items 2 and 3?    Fill in the remainder of the table above.     Exercise: Let be a function that describes the total profit as a function of the number of units to be sold.        day ( )  0  1  2  3  4  5  6  7  8  9  10                   N\/A               N\/A  N\/A                Fill in the table above describing the total profit , the change in profit , and the change in the change of profit . Then sketch graphs of all three functions.    For what intervals of is the change in profit  increasing ? For what intervals of is decreasing?    When is changing the fastest? How is this related to ?     Exercise: Let be a function that describes the total profit as a function of the number of units to be sold.         day ( )  0  1  2  3  4  5              N\/A          N\/A  N\/A           Fill in the table above describing the total profit , the change in profit , and the change in the change of profit . Then sketch graphs of all three functions.    For what intervals of is the change in profit  increasing ? For what intervals of is decreasing?    What does the fact that is constant tell us about the graph of ? What does this say about the relationship between the total profit function and the various possible numbers of items that you might intend to sell?     "
},
{
  "id": "sec-secondderivative-3",
  "level": "2",
  "url": "ch-secondderivatives.html#sec-secondderivative-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diminishing returns "
},
{
  "id": "def-secondderivative",
  "level": "2",
  "url": "ch-secondderivatives.html#def-secondderivative",
  "type": "Definition",
  "number": "15.1",
  "title": "",
  "body": "  Suppose that is a differentiable function. The second derivative of , written , is a function that gives the slope of . In symbols, In practice, find the second derivative by finding the derivative of the derivative.   "
},
{
  "id": "ex_secondderivative_profit",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_secondderivative_profit",
  "type": "Exploration",
  "number": "15.1",
  "title": "",
  "body": "  Suppose that .    Find the marginal profit from items #10, #11, and #12.   The marginal profit function is  The marginal profit function is equal to . This tells us how much the next item contributes to the total profit. Notice that the 10th, 11th, and 12th items all increase the total profit. However, they contribute less and less to the total profit. In fact, the addional profit is decreasing by $0.20 every additional item.    Find    We have already found .  We can now find the second derivative This tells us that the unit profit is decreasing by $0.20 $\/item for each additional item sold.   "
},
{
  "id": "ex_secondderivativeposition",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_secondderivativeposition",
  "type": "Exploration",
  "number": "15.2",
  "title": "",
  "body": "  Let is the position function. Find the acceleration .    We must take the derivative twice. You can find this derivative as written using the quotient rule. You can also rewrite the derivative as and use the chain rule.  We will use the quotient rule    We can now take the derivative the second time, also using the quotient rule    "
},
{
  "id": "ex_accfromveltable",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_accfromveltable",
  "type": "Exploration",
  "number": "15.3",
  "title": "",
  "body": "  Suppose that your velocity is given by the following table     0  1  2  3  4  5     60  65  85  30  10  0       On what interval is your acceleration positive? Justify your answer   Positive acceleration means increasing velocity. The velocity increases between and (the velocity increases from 60 to 65 to 85).  That means that acceleration is positive between and , which corresponds to the interval     On what interval is your acceleration negative? Justify your answer   Negative acceleration means decreasing velocity. The velocity decreases between and (the velocity increases from 85 to 30, to 10, to 0).  That means that acceleration is negative between and , which corresponds to the interval .   "
},
{
  "id": "sec-secondderivative-11",
  "level": "2",
  "url": "ch-secondderivatives.html#sec-secondderivative-11",
  "type": "Example",
  "number": "15.2",
  "title": "Finding Maximum and Minimum Velocity.",
  "body": " Finding Maximum and Minimum Velocity  The above examples show that the velocity function has a maxmium or minimum value when the acceleration goes from to (for a maximum velocity ) or from to (for a minimum velocity ).  "
},
{
  "id": "def-concave",
  "level": "2",
  "url": "ch-secondderivatives.html#def-concave",
  "type": "Definition",
  "number": "15.3",
  "title": "",
  "body": "  The term concave means \"curved like a bowl.\" In our context, there are two kinds of bowls: ones that open up, and ones that open down. Graphically, you can tell if a curve is concave up by putting eyes over the curve, and seeing if it is or    "
},
{
  "id": "thm-testingconcavity",
  "level": "2",
  "url": "ch-secondderivatives.html#thm-testingconcavity",
  "type": "Theorem",
  "number": "15.4",
  "title": "",
  "body": "  Suppose that is a function with second derivative .    is concave up on an interval if and only if the second derivative on that interval.     is concave down on an interval if and only if the second derivative on that interval.      "
},
{
  "id": "sec-concavity-8",
  "level": "2",
  "url": "ch-secondderivatives.html#sec-concavity-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inflect "
},
{
  "id": "def-inflection",
  "level": "2",
  "url": "ch-secondderivatives.html#def-inflection",
  "type": "Definition",
  "number": "15.5",
  "title": "",
  "body": "  Suppose that is a function with second derivative . We say that has an inflection point at  if and only if  changes concavity at .  In other words, has an inflection point at if goes between and at .   "
},
{
  "id": "ex_concavity1",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_concavity1",
  "type": "Exploration",
  "number": "15.4",
  "title": "",
  "body": "  Let be a function that gives the height of a mountain.    Find where is concave up, where it is concave down, and find all inflection points.   To find concavity and inflection points, we must work with the second derivative . First, we must find .    Next, find when by solving Because is a polynomial, it is defined on all . In other words, there are no that make   Next, make a sign chart for as before, checking whether is positive or negative on each interval.   Using our graph, we see that the function is concave up on the interval , it is concave down on the interval , and has a point of inflection at .    Find all local maxima and minima.   To find maxima and minima, we must work with the first derivative . We have already found that .  Next, we must find when by solving the equation  if and only if or .  Because is a polynomial, it is defined for all . In other words, there are no places where .  We now make a sign chart for as usual.   The function has a local maximum at , and a local minimum at .   "
},
{
  "id": "ex_concavity2_mystery",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_concavity2_mystery",
  "type": "Exploration",
  "number": "15.5",
  "title": "",
  "body": "  Suppose that is an unknown (mystery) function with known acceleration function     Find where the original function is concave up or down.   You are given the formula for the derivative , so you do not need to do any calculus. Recall that for fractions, if and only if , and if and only if   To find when , solve the equation which happens when or .  To find when , solve the equation which happens when   Using these values, we can make the sign chart as before     Using the sign chart, we see that the original\/mystery function is concave up on the interval . is concave down on the interval .  There are inflection points (the curve bends) at and .   "
},
{
  "id": "ex_concavity3",
  "level": "2",
  "url": "ch-secondderivatives.html#ex_concavity3",
  "type": "Exploration",
  "number": "15.6",
  "title": "",
  "body": "  Let .    Find all maxima and minima for .     if and only if  if or .   is a polynomial so there are no values where .    has a local maximum at , and a local mininmum at .    Find all intervals of concavity for .     when  when or    is a polynomial, so it is always defined. Making the sign chart for gives.   The original function is concave up on the interal . The function is concave down on the interval .   "
},
{
  "id": "sec_seconderivativeconcavityandchange-6",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-6",
  "type": "Exploration",
  "number": "15.7",
  "title": "",
  "body": "        "
},
{
  "id": "sec_seconderivativeconcavityandchange-7",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-7",
  "type": "Table",
  "number": "15.6",
  "title": "",
  "body": "    day ( )  0  1  2  3  4  5  6  7  8  9  10                   N\/A               N\/A  N\/A             "
},
{
  "id": "sec_seconderivativeconcavityandchange-9",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise: "
},
{
  "id": "sec_seconderivativeconcavityandchange-11",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-11",
  "type": "Table",
  "number": "15.7",
  "title": "",
  "body": "   day ( )  0  1  2  3  4  5  6  7  8  9  10                   N\/A               N\/A  N\/A             "
},
{
  "id": "sec_seconderivativeconcavityandchange-12",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change increasing "
},
{
  "id": "sec_seconderivativeconcavityandchange-13",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercise: "
},
{
  "id": "sec_seconderivativeconcavityandchange-15",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-15",
  "type": "Table",
  "number": "15.8",
  "title": "",
  "body": "    day ( )  0  1  2  3  4  5              N\/A          N\/A  N\/A        "
},
{
  "id": "sec_seconderivativeconcavityandchange-16",
  "level": "2",
  "url": "ch-secondderivatives.html#sec_seconderivativeconcavityandchange-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change increasing "
},
{
  "id": "ch_antiderivatives",
  "level": "1",
  "url": "ch_antiderivatives.html",
  "type": "Chapter",
  "number": "16",
  "title": "Antiderivatives",
  "body": " Antiderivatives   Undoing Derivatives  In , we developed tools which let us turn a position funciton into a slope function by taking the derivative.  But sometimes, we are given the slope function, such as the \"mystery function\" examples in as in .  In other words, sometimes gives the slope of some other function. In this case, we want to know what the function was before taking the derivative.    We say that is an antiderivative of if   The prefix \"ante\" means \"before.\" So if is what you have after the derivative, is what you have before (ante) the derivative.    We will see several methods for finding antiderivaitves. The first and most foundational is we will call guess, check, correct (GCC).   Finding antiderivatives using GCC   Let . Find an antiderivative for    We want to find a function whose derivative is .   Guess 1   Guess: The derivative of any power function is a power function. So our first guess might as well be something like .   Check:  Taking the derivative reduces the power by one, so if we want to end up with , we must start out with a term.    Guess 2:   Guess: Now let's try guessing    Check:  We now have the correct power, but the wrong coefficient. To fix our guess, we should start out with a coefficient that will cancel out the coefficient of .    Guess 3:   Guess:     Check:  That is the function we wanted after the derivative. Therefore is the ante derivative.     Therefore is an antiderivative of     Let . Find an antiderivative for .   This is similar the last example, so your first guess might be the right one, but it is also OK to take a few guesses.  A general strategy is first to get the power of the antiderivative, and then get the coefficient.   Guess 1   Guess:     Check:      Guess 2   Guess:     Check:     Therefore is an antiderivative of     Let for some constant power . Find an antiderivative of .   We could do a multi-step guess-check-correct (GCC) strategy, or we could notice the patterin in the above examples:   Increase the power by one    Divide by the new power      Guess:   Check:    Therefore, is an antiderivative of     Let . Find an antiderivative of .   We want to have after taking a derivative.  Look at the . Make a guess, check it, and correct as needed.   Guess:     Check:     Important: For technical reasons beyond the scope of this course, we actually need to place absolute values around the input to   Therefore is an antiderivative of .    Let . Find an antiderivative of    We want to have after taking a derivative.  Look at the . Make a guess, check it, and correct as needed.   Guess:     Check:    Therefore is an antiderivative of .    Find the antiderivative of .   We proceed by Guess, Check, Correct. There is no \"correct\" order of guesses, but once you get enough practice you will usually be able to get the right answer on your first guess.   Guess 1:   Guess:     Check:    The derivative was zero because there was no term at all.    Guess 2:   Guess:     Check:    An antiderivative of is        Why do we keep asking for an antiderivative, instead of asking for the antiderivative?   Every has multiple antiderivatives  Consider the function . There are many functions whose derivatives are :   Following this pattern, notice that if is one antiderivative of f(x) , then is also an antiderivative.   We have seen that for any , is an antiderivative of . Are there any other antiderivatives of ? Fortunately, there are not.    If you find one antiderivative to , then all other antiderivatives have the form for some constant number .  We call the general antiderivative of , abbreviated the antiderivative of .    This gives us two kinds of antiderivative questions, based on .   Find an antiderivative  Pick a specific number for the     Find the antiderivative  Use a letter for the to emphasize that any number works.          If , the general antiderivative of is     The general antiderivative of is     The general antiderivative of is     Suppose that is a constant number. The general antiderivative of is .       You can find many antiderivatives using Guess, Check, Correct , and working very carefully.    Find the antiderivative of    We know that the antiderivative of is . This gives us the following guess for the antiderivative of :   Guess:  .   Check:    We have seen that is an antiderivative of . The antiderivative is     Find the antiderivative of    To find the antiderivative of , there are three steps   Find an antiderivative of     Multiply the antiderivative of by 7    Add to get the antiderivative.     This means that if , the antiderivative is     Find the antiderivative of    This function is the sum of three terms. Fortunately, the derivative of the sum is the sum of the derivatives. That means that we can separately find the antiderivative of each term.  From before,   An antiderivative of is     An antiderivative of is     An antiderivative of is      Putting these together, the antiderivative of is equal to     Once you get some practice, you should get a good intuition for how to take antiderivatives \"term by term\" when dealing with sums and constant coefficients. We can also make this precise, as in the following theorem.       Suppose that one antiderivative of is and that is a constant number. Then one antiderivative of is given by .    Suppose that one antiderivative of is and that one antiderivaitve of is . Then one antiderivative of is given by .         Indefinite Integrals  In the previous section, we developed a very intuitive approach to finding antiderivatives. In many situations, this will be the most efficient techinque to use.  In this section, we will introduce a new notation for antiderivatives. This notation will make it easier to precisely state our anti-derivative formulas. Eventually, this notation will also connect to one of the most important applications of antiderivatives.   Indefinite Integral Notation   If the general antiderivative of is , then we write and say that the indefinite integral of is   For now, treat the expression as an abbreviation for the sentence take the antiderivative ( ) of with respect to the variable ( ) .     Indefinite Integral Formula List     If ,       If is a constant,     If is a constant, then          Compute .   We are asked to take the antiderivative of . We could do that using our methods from before (including guess\/check\/correct) to say that the antiderivative is   Because , we can also use the indefinite integral formula  In this example, the notation is the only difference between guess\/check\/correct and notation. In more complex examples, notation will be much more helpful.    Compute .   It is extremely hard to guess anything close to the antideriative of the function . We also don't have any antiderivaitve formulas that relate to this situation. Fortunately, we can rewrite the function as . It is now possible, but still difficult, to guess the right antiderivative.  Using indefinite integral notation, we can proceed more directly Because , we can use the indefinite integral formula      Compute .   Again, we can either find the antiderivative of as before using our guess\/check\/correct approach, or we can use our indefinite integral formulas.     We now have two different ways of describing the same concepts and techniques: antiderivatives and indefinite integrals. You can answer these questions using either approach.    Let     Compute using indefinite integral rules.    For the first integral, because the exponent is , we cannot use the power rule. Instead, we must rewrite it as a fraction . For the second integral, we do not have a rule for square roots, so we must rewrite it as a power      Find the antiderivative of .   We can also find the antiderivative of term-by-term. Then the antiderivative is Notice that this is exactly the same answer, and even the exact same computations as in computing . The only difference between antiderivatives and indefinite integrals is the notation.      Compute            Applying Antiderivatives  Recall from ,  If position   then velocity   and acceleration.      Measuring position is hard, measuring acceleration is easier  It is actually very hard to measure position directly. Although GPS is widely used, the system itself is incredibly complex. From Wikipedia ,   GPS ... is a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force. It ... provides geolocation ... anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.    Special and general relativity predicted that the clocks on GPS satellites, as observed by those on Earth, run 38 microseconds faster per day than those on the Earth. The design of GPS corrects for this difference; because without doing so, GPS calculated positions would accumulate errors of up to 10 kilometers per day (6 mi\/d).   On the other hand, it is much simpler to measure acceleration directly, and most modern electronics such as cell phones have built in self-contained accelerometers. By working backwards from acceleration to velocity and then to position , it is possible to use a sensor that measures to model your position .  For example, Wikipedia observes that Some pedometers use an accelerometer to more accurately measure the number of steps taken and distance traveled than a mechanical sensor can provide.      Suppose that gives your velocity in miles per hour, as a function of the time in hours.    Find the antiderivative of . What does this tell you about your position as a function of time?    The antiderivative of is Your position function is one of the antiderivatives of your velocity. Notice that from your velocity only, we do not know what the constant is. This prevents navigation based on velocity only, since knowing your position \"plus or minus several thousand miles\" is not very useful.    Suppose you also know that . Find your exact position as a function of .   Your position function is one of the antiderivatives of your velocity. We have already found that the (general) antiderivative of is We are now given an additional piece of information: that , which says that your position at time hours was 5 miles. Plugging into our equation for and setting this equal to gives Putting the above information together, we can conclude that This gives your exact position at every time.    To work from acceleration to position, we need to take the antiderivative twice. If you have two additional pieces of information, you can use acceleration to find an exact equation for position .    Suppose that gives your acceleration in miles per hour per hour, as a function of the time in hours.    Find an equation for using only the equation for .   You are given that . The finding the antiderivative of gives We must find the antiderivative again.  First, note that the second term has exponent , so we cannot use the power rule, and must use . Second, note that although it is unknown, is a constant. Third, we must use a new variable for the unknown constant, since we have already used .  Finding the antiderivaitve again gives Without knowing more, all we can say about the position function is that it has the form for some unknown constants     Suppose that you also know that your velocity at time 1 is 4 miles per hour (that ) and that your position at time 1 is 6 miles (that ). Find an exact equation for your position function .   We are given that .  The finding the antiderivative of gives We are also given that . Plugging into the above equation gives Plugging this into our equation for gives   Finding the antiderivative again gives We are also given that . Plugging into the above equation gives Plugging this into our equation for gives      Total Cost is an antiderivative of Marginal Cost  Recall that if is a total (cumulative) cost function, then the marginal cost function is a good approximation of the individual cost of the next item only .  In , we saw how to use the total function to find the change function .  If we are instead given the change function , we can use antiderivatives to recover the original total cost .     Suppose that a product has marginal cost function and the total cost of making 1 item is $200.    Find the total cost function .   We are given that   Finding the (general) antiderivative gives total cost function We are also told that 1 item costs $200, which says . Plugging 1 into the equation above gives Plugging this into the total cost function gives us that the total cost of items is     Find the total cost of manufacturing 100 items.   We have already found that the total cost function is .  The cost of manufacturing items 1 to 100 is given by The total cost is $18,0375.41     Understanding notation (Part I)  To understand the meaning of notation, let's think of the meaning of cumulative and marginal cost.  We have already seen that if   marginal cost = item cost and    total cost = , then     for some constant .   Note: we have switched notation here to avoid confusion. In this case, since refers to a function, we use a lower case to denote our unknown constant.     Suppose you want to find the cost of items 10 through 100 only. There are two ways to find this   By adding up up the item costs of items 10 to 100.  Because approximates the cost of the next item, this is approximated by computing     By subtracting finding the total cost of items 1-9 from the total cost of items 1-100.    Condensing this notation, we get The art of approximating well with calculus is the subject of several courses (including analysis and numerical analysis ).  For our purposes here, it is enough to say that 99 and 100 are \"approximately equal,\" as are 9 and 10, so we can really say   If you further simplify the word \"Sum\" to just the first letter , you get which looks remarkably similar to   This similarity is not accidental. In fact, this is the entire reason we use the symbol for indefinite integrals and antiderivatives.    "
},
{
  "id": "def-antiderivative",
  "level": "2",
  "url": "ch_antiderivatives.html#def-antiderivative",
  "type": "Definition",
  "number": "16.1",
  "title": "",
  "body": "  We say that is an antiderivative of if   The prefix \"ante\" means \"before.\" So if is what you have after the derivative, is what you have before (ante) the derivative.   "
},
{
  "id": "ex_antiderivative_gcc",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_antiderivative_gcc",
  "type": "Exploration",
  "number": "16.1",
  "title": "Finding antiderivatives using GCC.",
  "body": " Finding antiderivatives using GCC   Let . Find an antiderivative for    We want to find a function whose derivative is .   Guess 1   Guess: The derivative of any power function is a power function. So our first guess might as well be something like .   Check:  Taking the derivative reduces the power by one, so if we want to end up with , we must start out with a term.    Guess 2:   Guess: Now let's try guessing    Check:  We now have the correct power, but the wrong coefficient. To fix our guess, we should start out with a coefficient that will cancel out the coefficient of .    Guess 3:   Guess:     Check:  That is the function we wanted after the derivative. Therefore is the ante derivative.     Therefore is an antiderivative of     Let . Find an antiderivative for .   This is similar the last example, so your first guess might be the right one, but it is also OK to take a few guesses.  A general strategy is first to get the power of the antiderivative, and then get the coefficient.   Guess 1   Guess:     Check:      Guess 2   Guess:     Check:     Therefore is an antiderivative of     Let for some constant power . Find an antiderivative of .   We could do a multi-step guess-check-correct (GCC) strategy, or we could notice the patterin in the above examples:   Increase the power by one    Divide by the new power      Guess:   Check:    Therefore, is an antiderivative of     Let . Find an antiderivative of .   We want to have after taking a derivative.  Look at the . Make a guess, check it, and correct as needed.   Guess:     Check:     Important: For technical reasons beyond the scope of this course, we actually need to place absolute values around the input to   Therefore is an antiderivative of .    Let . Find an antiderivative of    We want to have after taking a derivative.  Look at the . Make a guess, check it, and correct as needed.   Guess:     Check:    Therefore is an antiderivative of .    Find the antiderivative of .   We proceed by Guess, Check, Correct. There is no \"correct\" order of guesses, but once you get enough practice you will usually be able to get the right answer on your first guess.   Guess 1:   Guess:     Check:    The derivative was zero because there was no term at all.    Guess 2:   Guess:     Check:    An antiderivative of is       "
},
{
  "id": "thm-generalantiderivative",
  "level": "2",
  "url": "ch_antiderivatives.html#thm-generalantiderivative",
  "type": "Theorem",
  "number": "16.2",
  "title": "",
  "body": "  If you find one antiderivative to , then all other antiderivatives have the form for some constant number .  We call the general antiderivative of , abbreviated the antiderivative of .   "
},
{
  "id": "def-generalantiderivative_x2",
  "level": "2",
  "url": "ch_antiderivatives.html#def-generalantiderivative_x2",
  "type": "Definition",
  "number": "16.3",
  "title": "",
  "body": "     If , the general antiderivative of is     The general antiderivative of is     The general antiderivative of is     Suppose that is a constant number. The general antiderivative of is .      "
},
{
  "id": "ex_antiderivative1",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_antiderivative1",
  "type": "Exploration",
  "number": "16.2",
  "title": "",
  "body": "  Find the antiderivative of    We know that the antiderivative of is . This gives us the following guess for the antiderivative of :   Guess:  .   Check:    We have seen that is an antiderivative of . The antiderivative is     Find the antiderivative of    To find the antiderivative of , there are three steps   Find an antiderivative of     Multiply the antiderivative of by 7    Add to get the antiderivative.     This means that if , the antiderivative is     Find the antiderivative of    This function is the sum of three terms. Fortunately, the derivative of the sum is the sum of the derivatives. That means that we can separately find the antiderivative of each term.  From before,   An antiderivative of is     An antiderivative of is     An antiderivative of is      Putting these together, the antiderivative of is equal to    "
},
{
  "id": "thm-antiderivativeofcombos",
  "level": "2",
  "url": "ch_antiderivatives.html#thm-antiderivativeofcombos",
  "type": "Theorem",
  "number": "16.4",
  "title": "",
  "body": "     Suppose that one antiderivative of is and that is a constant number. Then one antiderivative of is given by .    Suppose that one antiderivative of is and that one antiderivaitve of is . Then one antiderivative of is given by .      "
},
{
  "id": "def-indefiniteintegralnotation",
  "level": "2",
  "url": "ch_antiderivatives.html#def-indefiniteintegralnotation",
  "type": "Definition",
  "number": "16.5",
  "title": "Indefinite Integral Notation.",
  "body": " Indefinite Integral Notation   If the general antiderivative of is , then we write and say that the indefinite integral of is   For now, treat the expression as an abbreviation for the sentence take the antiderivative ( ) of with respect to the variable ( ) .   "
},
{
  "id": "ex_indefiniteintegral1",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_indefiniteintegral1",
  "type": "Exploration",
  "number": "16.3",
  "title": "",
  "body": "  Compute .   We are asked to take the antiderivative of . We could do that using our methods from before (including guess\/check\/correct) to say that the antiderivative is   Because , we can also use the indefinite integral formula  In this example, the notation is the only difference between guess\/check\/correct and notation. In more complex examples, notation will be much more helpful.    Compute .   It is extremely hard to guess anything close to the antideriative of the function . We also don't have any antiderivaitve formulas that relate to this situation. Fortunately, we can rewrite the function as . It is now possible, but still difficult, to guess the right antiderivative.  Using indefinite integral notation, we can proceed more directly Because , we can use the indefinite integral formula      Compute .   Again, we can either find the antiderivative of as before using our guess\/check\/correct approach, or we can use our indefinite integral formulas.    "
},
{
  "id": "ex_indefiniteintegral2",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_indefiniteintegral2",
  "type": "Exploration",
  "number": "16.4",
  "title": "",
  "body": "  Let     Compute using indefinite integral rules.    For the first integral, because the exponent is , we cannot use the power rule. Instead, we must rewrite it as a fraction . For the second integral, we do not have a rule for square roots, so we must rewrite it as a power      Find the antiderivative of .   We can also find the antiderivative of term-by-term. Then the antiderivative is Notice that this is exactly the same answer, and even the exact same computations as in computing . The only difference between antiderivatives and indefinite integrals is the notation.   "
},
{
  "id": "ex_indefiniteintegral3",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_indefiniteintegral3",
  "type": "Exploration",
  "number": "16.5",
  "title": "",
  "body": "  Compute         "
},
{
  "id": "sec-applyingantiderivatives-3",
  "level": "2",
  "url": "ch_antiderivatives.html#sec-applyingantiderivatives-3",
  "type": "Application",
  "number": "16.6",
  "title": "Measuring position is hard, measuring acceleration is easier.",
  "body": " Measuring position is hard, measuring acceleration is easier  It is actually very hard to measure position directly. Although GPS is widely used, the system itself is incredibly complex. From Wikipedia ,   GPS ... is a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force. It ... provides geolocation ... anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites.    Special and general relativity predicted that the clocks on GPS satellites, as observed by those on Earth, run 38 microseconds faster per day than those on the Earth. The design of GPS corrects for this difference; because without doing so, GPS calculated positions would accumulate errors of up to 10 kilometers per day (6 mi\/d).   On the other hand, it is much simpler to measure acceleration directly, and most modern electronics such as cell phones have built in self-contained accelerometers. By working backwards from acceleration to velocity and then to position , it is possible to use a sensor that measures to model your position .  For example, Wikipedia observes that Some pedometers use an accelerometer to more accurately measure the number of steps taken and distance traveled than a mechanical sensor can provide.   "
},
{
  "id": "ex_antideriv_specific1",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_antideriv_specific1",
  "type": "Exploration",
  "number": "16.6",
  "title": "",
  "body": "  Suppose that gives your velocity in miles per hour, as a function of the time in hours.    Find the antiderivative of . What does this tell you about your position as a function of time?    The antiderivative of is Your position function is one of the antiderivatives of your velocity. Notice that from your velocity only, we do not know what the constant is. This prevents navigation based on velocity only, since knowing your position \"plus or minus several thousand miles\" is not very useful.    Suppose you also know that . Find your exact position as a function of .   Your position function is one of the antiderivatives of your velocity. We have already found that the (general) antiderivative of is We are now given an additional piece of information: that , which says that your position at time hours was 5 miles. Plugging into our equation for and setting this equal to gives Putting the above information together, we can conclude that This gives your exact position at every time.   "
},
{
  "id": "ex_antideriv_specific2",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_antideriv_specific2",
  "type": "Exploration",
  "number": "16.7",
  "title": "",
  "body": "  Suppose that gives your acceleration in miles per hour per hour, as a function of the time in hours.    Find an equation for using only the equation for .   You are given that . The finding the antiderivative of gives We must find the antiderivative again.  First, note that the second term has exponent , so we cannot use the power rule, and must use . Second, note that although it is unknown, is a constant. Third, we must use a new variable for the unknown constant, since we have already used .  Finding the antiderivaitve again gives Without knowing more, all we can say about the position function is that it has the form for some unknown constants     Suppose that you also know that your velocity at time 1 is 4 miles per hour (that ) and that your position at time 1 is 6 miles (that ). Find an exact equation for your position function .   We are given that .  The finding the antiderivative of gives We are also given that . Plugging into the above equation gives Plugging this into our equation for gives   Finding the antiderivative again gives We are also given that . Plugging into the above equation gives Plugging this into our equation for gives    "
},
{
  "id": "ex_antideriv_cost",
  "level": "2",
  "url": "ch_antiderivatives.html#ex_antideriv_cost",
  "type": "Exploration",
  "number": "16.8",
  "title": "",
  "body": "  Suppose that a product has marginal cost function and the total cost of making 1 item is $200.    Find the total cost function .   We are given that   Finding the (general) antiderivative gives total cost function We are also told that 1 item costs $200, which says . Plugging 1 into the equation above gives Plugging this into the total cost function gives us that the total cost of items is     Find the total cost of manufacturing 100 items.   We have already found that the total cost function is .  The cost of manufacturing items 1 to 100 is given by The total cost is $18,0375.41   "
},
{
  "id": "insight_understandingintnotatino",
  "level": "2",
  "url": "ch_antiderivatives.html#insight_understandingintnotatino",
  "type": "Application",
  "number": "16.7",
  "title": "Understanding <span class=\"process-math\">\\(\\int\\)<\/span> notation (Part I).",
  "body": " Understanding notation (Part I)  To understand the meaning of notation, let's think of the meaning of cumulative and marginal cost.  We have already seen that if   marginal cost = item cost and    total cost = , then     for some constant .   Note: we have switched notation here to avoid confusion. In this case, since refers to a function, we use a lower case to denote our unknown constant.     Suppose you want to find the cost of items 10 through 100 only. There are two ways to find this   By adding up up the item costs of items 10 to 100.  Because approximates the cost of the next item, this is approximated by computing     By subtracting finding the total cost of items 1-9 from the total cost of items 1-100.    Condensing this notation, we get The art of approximating well with calculus is the subject of several courses (including analysis and numerical analysis ).  For our purposes here, it is enough to say that 99 and 100 are \"approximately equal,\" as are 9 and 10, so we can really say   If you further simplify the word \"Sum\" to just the first letter , you get which looks remarkably similar to   This similarity is not accidental. In fact, this is the entire reason we use the symbol for indefinite integrals and antiderivatives.  "
},
{
  "id": "ch_introducingarea",
  "level": "1",
  "url": "ch_introducingarea.html",
  "type": "Chapter",
  "number": "17",
  "title": "Understanding Areas",
  "body": " Understanding Areas   Indefinite Integrals  Recall from that We called this the indefinite integral of .  In , we saw that this notation arises from the connection between marginal cost and item cost, and the fact that summing the intem cost over a range gives you the change in total cost.  In this section, we will study this and related applications. We begin with the following definition.    Suppose that is any antiderivative of , and that are constant numbers. Then we define the expression on the right is often abbreviated       Suppose that is a marginal cost function.    Evaluate    To compute the integral we must first find an antidervivative of. It is not difficult to see that one antiderivative of is .  By , we can now compute Using a calculator, you can compute separately We can now find the definite integral     What is the economic meaning of the expression ?   Recall that where is the total cost of 100 items, and is the total cost of 10 items.  That means that is the cost of items numbered 11 through 100.    Use an indefinite integral to find the exact exact cost of the 100th item only.   This question requires concepts and computations from . Take a moment to refresh your memory of this section.  In that section, to find the exact cost of the 100th item only, we need a total cost function .  Then is the cumulative cost of items 0-100, and is the cumulative cost of items 0-99.  That means that   We have already found that the cumulative cost function is Using this function we can compute     The next exploration explores what happens if we leave the function we are integrating the same, but change the limits of integration.    Compute    One antiderivative of is We can now use      Compute    One antiderivative of is We can now use      We have seen that integrals play an important role in connecting marginal and total cost functions.  But that is not the only, or even the most, important application of the derivative. The next is often called the most important theorem in calculus .    Suppose that is a height function, and that is an antiderivative of   Then the net area between and the -axis over the interval is equal to     In , we will discuss the exact meaning and intricacies of the phrase the net area between and the axis on the interval  . For now, the following illustration should suffice to show its general meaning.     We will talk about why this theorem is true in . For now, we will focus on computations and some preliminary applications.    Let describe the height of a mountain.  Find the net area between and the -axis over the interval .   By , this means that we must compute One antiderivative of is  Graphically, we have computed the area of the shaded region below:       Find the net area between and the -axis between and .   By , this means that we must compute One antiderivative of is  Graphically, we have computed the area of the shaded region below:         Understanding Geometrically of Area  In this course, our primary applications have come from macroeconomics, accounting and finance, and management. But the tools of calculus apply to a much broader set of applications.  For example, suppose that you are selling a plot of land enclosed between a stream and a road. From comparable recent sales, you know that the value of the land is $12,800,000 $ per square mile. You want to know how much your land is worth. You already know that . To get a numerical value, you need to be able to compute the area enclosed .     For triangles and squares, computing area is easy.   The area of a triangle is     The area of a rectangle is    For other shapes, computing area is much more complex, and often requires more powerful mathematical tools. Translating our real estate question into mathematical language gives the following picture:     In this new language,   The river is modeled by the function .    The road is modeled by the -axis.    The lot lines are represented by the lines and    In this langage, we want the area enclosed between and the on the interval .  We have already learned in that But here, since we do not have an equation for the function, we must compute the area directly using geometry.    Let be defined by the graph below       Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a triangle with base and height .  This region has height        Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a rectangle with base and height .  This region has area        Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a trapeziod .  There is a formula for the area of a trapezoid, but it is easier and more flexible to just break up the shaded region into two parts: a triangle and a rectangle.   The triangular piece has height and base . Thus, the trianglar piece has area      The rectangular piece has height and base . Thus, the rectangular piece has area     Therefore, the area of the entire enclosed region is        We have now seen several examples that help explain what it means to talk about area enclosed between a function and the -axis. But what does net area mean? To explore this, we need to switch to a new metaphor.  In the image below, suppose that is the height of land at position , and that the is the water level .     There are two parts of this graph   When is positive , then the ground is above the water. In this case, dry land is the region enclosed between and the -axis  In this case, we say that encloses positive net area .    When is negative , then the water is above the ground. In this case water is the region enclosed between and the -axis  In this case, we say that encloses negative net area .   More precisely, we make the following definition    Suppose that you are given any function , and two values . Let represent the region enclosed between and the -axis on the interval     The absolute area of the region is the area you treat the region as a geometric figure, and ignore the calculus setting of the question.    If the region is entirely above the -axis, then the region has positive net area equal to its absolute area.    If the region is entirely below the -axis, the region has negative net area equal to the negation of its absoulte area.    If the region is sometimes above and sometimes below the -axis, you must divide it into separate components, find their net area, and then add them together.       This definition is wordy, but fairly simple to apply in practice.    Suppose that is given by the graph below. In addition to the function, the absolute areas of several regions are indicated.       Find    Between and , the function is entirely above the -axis. That means that the net area of the region that it encloses is positive .  We are given that the absolute area of this first region is 1.8. It follows that     Find    Between and , the function is entirely below the -axis. That means that the net area of the region that it encloses is negative .  We are given that the absolute area of this second region is 3.4. It follows that     Find     crosses the axis between and . To find the net area enclosed on this interval, we must divide the function into the region between , where is entirely positive, and the region , where is entirely negative. We can then compute       Let be defined by the following graph       Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area is a triangle with base and height . The region enclosed is above the -axis so it has positive net area. Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area is triangle with base and height . The region enclosed is above the -axis so it has positive net area. Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area can be divided into three regions:   A triangle with base ( ) and height  above the -axis.    A triangle with base ( ) and height  below the -axis.    A rectangle with base ( ) and height  below the -axis.   Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area can be divided into five regions:   A triangle with base ( ) and height  above the -axis.    A triangle with base ( ) and height  below the -axis.    A rectangle with base ( ) and height  below the -axis.    A triangle with base ( ) and hieght  below the -axis    A triangle with base ( ) and height  above the -axis   Putting this together,      Understanding notation (Part II)  So far, we have seen the notation in two very different contexts: antiderivatives and geometric area. But why are these concepts connected?  We have already seen the foundational idea: given a complex area we have sliced it into small regions , where we can find the area of each slice more easily.  Suppose you are given any curved function an enclosed area you want to compute as below.     Slicing the shaded region into thin, vertical strips gives the image below on the left.     Notice that if the function is continuous (doesn't jump) and if the strips are thin enough, each strip will approximately be a rectangle with height and base . This is illustrated in the image above on the right.   The area of one strip will be approximately .    The area of the whole region is approximately the Sum of all slices from to . Mathematically, this is written To emphasize that the slices are very thin, we replace the blocky with a smooth , and we summarize the word \"Sum\" with the symbol          Area, Antiderivatives, and Graphs of Change   The Fundamental Theorem of Calculus (FTC)   Suppose that is any continuous function, and that is any antiderivative of . Then the net area enclosed between and the -axis on the interval is given by      In other words, antiderivatives give net area , and net area gives antiderivatives . Given the many connections between derivatives and concepts in economic and business, this becomes a powerful set of tools.     The derivative of total cost is the marginal cost .  Therefore, the total cost is an antiderivative of marginal (item) cost .   It follows that the area under marginal (item) cost gives change in total cost.    Let give the value of a stock on day . Then the derivative of value tells you how fast the value is changing on each day.  Therefore, the value function is an antiderivative of the change in value function .   It follows that the area under the change in value function cost gives the change in actual value.     This line of reasoning extends to any and all graphs of rates of change.    The graph of the daily change (in $\/day) in the price of a certain stock is given below.       Find the change in stock price between days 1 and 5.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 1  Between day 1 and 2, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 1 and 2.    Day 2  Between day 2 and 3, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 2 and 3.    Day 3 & 4  Between day 3 and 5, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 3 and 5.   Putting it together, the change in value between day 1 and 5 equals        Find the change in stock price between days 1 and 7.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 1  Between day 1 and 2, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 1 and 2.    Day 2  Between day 2 and 3, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 2 and 3.    Day 3 & 4  Between day 3 and 5, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 3 and 5.    Day 5  Between day 5 and 6, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 5 and 6.    Day 6  Between day 6 and 7, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 6 and 7.   Putting it together, the change in value between day 1 and 7 equals        Find the change in stock price between days 5 and 8.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 5  Between day 5 and 6, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 5 and 6.    Day 6  Between day 6 and 7, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 6 and 7.    Day 7  Between day 7 and 8, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 7 and 8.   Putting it together, the change in value between day 5 and 8 equals        Suppose the stock price on day 1 was $10. Find the stock price at day 5.   We have already seen that the value of the stock changes by $+2 between days 1 and 5. If the value on day 1 was $10, then the value on day 5 is $10+(+2) = $12.       Suppose the stock price on day 1 was $10. Find the stock price at day 7.   We have already seen that the value of the stock changes by $-3 between days 1 and 7. If the value on day 1 was $10, then the value on day 5 is $10+(-3) = $7.        "
},
{
  "id": "def-indefiniteintegral",
  "level": "2",
  "url": "ch_introducingarea.html#def-indefiniteintegral",
  "type": "Definition",
  "number": "17.1",
  "title": "",
  "body": "  Suppose that is any antiderivative of , and that are constant numbers. Then we define the expression on the right is often abbreviated    "
},
{
  "id": "ex_definiteintegral1",
  "level": "2",
  "url": "ch_introducingarea.html#ex_definiteintegral1",
  "type": "Exploration",
  "number": "17.1",
  "title": "",
  "body": "  Suppose that is a marginal cost function.    Evaluate    To compute the integral we must first find an antidervivative of. It is not difficult to see that one antiderivative of is .  By , we can now compute Using a calculator, you can compute separately We can now find the definite integral     What is the economic meaning of the expression ?   Recall that where is the total cost of 100 items, and is the total cost of 10 items.  That means that is the cost of items numbered 11 through 100.    Use an indefinite integral to find the exact exact cost of the 100th item only.   This question requires concepts and computations from . Take a moment to refresh your memory of this section.  In that section, to find the exact cost of the 100th item only, we need a total cost function .  Then is the cumulative cost of items 0-100, and is the cumulative cost of items 0-99.  That means that   We have already found that the cumulative cost function is Using this function we can compute    "
},
{
  "id": "ex_definiteintegral2",
  "level": "2",
  "url": "ch_introducingarea.html#ex_definiteintegral2",
  "type": "Exploration",
  "number": "17.2",
  "title": "",
  "body": "  Compute    One antiderivative of is We can now use      Compute    One antiderivative of is We can now use     "
},
{
  "id": "thm-earlyFTC",
  "level": "2",
  "url": "ch_introducingarea.html#thm-earlyFTC",
  "type": "Theorem",
  "number": "17.2",
  "title": "",
  "body": "  Suppose that is a height function, and that is an antiderivative of   Then the net area between and the -axis over the interval is equal to    "
},
{
  "id": "ex_area1",
  "level": "2",
  "url": "ch_introducingarea.html#ex_area1",
  "type": "Exploration",
  "number": "17.3",
  "title": "",
  "body": "  Let describe the height of a mountain.  Find the net area between and the -axis over the interval .   By , this means that we must compute One antiderivative of is  Graphically, we have computed the area of the shaded region below:       Find the net area between and the -axis between and .   By , this means that we must compute One antiderivative of is  Graphically, we have computed the area of the shaded region below:      "
},
{
  "id": "ex_graphicalarea1",
  "level": "2",
  "url": "ch_introducingarea.html#ex_graphicalarea1",
  "type": "Exploration",
  "number": "17.4",
  "title": "",
  "body": "  Let be defined by the graph below       Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a triangle with base and height .  This region has height        Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a rectangle with base and height .  This region has area        Compute the net area between and the -axis on the interval    The first step is to identify and shade the region described. Moving between and , the area region enclosed on the top by and the bottom by the -axis is a trapeziod .  There is a formula for the area of a trapezoid, but it is easier and more flexible to just break up the shaded region into two parts: a triangle and a rectangle.   The triangular piece has height and base . Thus, the trianglar piece has area      The rectangular piece has height and base . Thus, the rectangular piece has area     Therefore, the area of the entire enclosed region is       "
},
{
  "id": "sec_geometricarea-13",
  "level": "2",
  "url": "ch_introducingarea.html#sec_geometricarea-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive net area negative net area "
},
{
  "id": "def-absolutenetarea",
  "level": "2",
  "url": "ch_introducingarea.html#def-absolutenetarea",
  "type": "Definition",
  "number": "17.3",
  "title": "",
  "body": "  Suppose that you are given any function , and two values . Let represent the region enclosed between and the -axis on the interval     The absolute area of the region is the area you treat the region as a geometric figure, and ignore the calculus setting of the question.    If the region is entirely above the -axis, then the region has positive net area equal to its absolute area.    If the region is entirely below the -axis, the region has negative net area equal to the negation of its absoulte area.    If the region is sometimes above and sometimes below the -axis, you must divide it into separate components, find their net area, and then add them together.      "
},
{
  "id": "ex_graphicalarea2",
  "level": "2",
  "url": "ch_introducingarea.html#ex_graphicalarea2",
  "type": "Exploration",
  "number": "17.5",
  "title": "",
  "body": "  Suppose that is given by the graph below. In addition to the function, the absolute areas of several regions are indicated.       Find    Between and , the function is entirely above the -axis. That means that the net area of the region that it encloses is positive .  We are given that the absolute area of this first region is 1.8. It follows that     Find    Between and , the function is entirely below the -axis. That means that the net area of the region that it encloses is negative .  We are given that the absolute area of this second region is 3.4. It follows that     Find     crosses the axis between and . To find the net area enclosed on this interval, we must divide the function into the region between , where is entirely positive, and the region , where is entirely negative. We can then compute    "
},
{
  "id": "ex_graphicalarea3",
  "level": "2",
  "url": "ch_introducingarea.html#ex_graphicalarea3",
  "type": "Exploration",
  "number": "17.6",
  "title": "",
  "body": "  Let be defined by the following graph       Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area is a triangle with base and height . The region enclosed is above the -axis so it has positive net area. Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area is triangle with base and height . The region enclosed is above the -axis so it has positive net area. Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area can be divided into three regions:   A triangle with base ( ) and height  above the -axis.    A triangle with base ( ) and height  below the -axis.    A rectangle with base ( ) and height  below the -axis.   Putting this together,     Find    We want to find the area enclosed between the curve and the -axis.  First, shade the area enclosed by following the curve, and drawing lines toward the -axis. Then, identify the part of the enclosed area that corresponds to as in the following image.     The shaded area can be divided into five regions:   A triangle with base ( ) and height  above the -axis.    A triangle with base ( ) and height  below the -axis.    A rectangle with base ( ) and height  below the -axis.    A triangle with base ( ) and hieght  below the -axis    A triangle with base ( ) and height  above the -axis   Putting this together,    "
},
{
  "id": "sec_geometricarea-18",
  "level": "2",
  "url": "ch_introducingarea.html#sec_geometricarea-18",
  "type": "Application",
  "number": "17.4",
  "title": "Understanding <span class=\"process-math\">\\(\\int\\)<\/span> notation (Part II).",
  "body": " Understanding notation (Part II)  So far, we have seen the notation in two very different contexts: antiderivatives and geometric area. But why are these concepts connected?  We have already seen the foundational idea: given a complex area we have sliced it into small regions , where we can find the area of each slice more easily.  Suppose you are given any curved function an enclosed area you want to compute as below.     Slicing the shaded region into thin, vertical strips gives the image below on the left.     Notice that if the function is continuous (doesn't jump) and if the strips are thin enough, each strip will approximately be a rectangle with height and base . This is illustrated in the image above on the right.   The area of one strip will be approximately .    The area of the whole region is approximately the Sum of all slices from to . Mathematically, this is written To emphasize that the slices are very thin, we replace the blocky with a smooth , and we summarize the word \"Sum\" with the symbol       "
},
{
  "id": "thm-FTC",
  "level": "2",
  "url": "ch_introducingarea.html#thm-FTC",
  "type": "Theorem",
  "number": "17.5",
  "title": "The Fundamental Theorem of Calculus (FTC).",
  "body": " The Fundamental Theorem of Calculus (FTC)   Suppose that is any continuous function, and that is any antiderivative of . Then the net area enclosed between and the -axis on the interval is given by    "
},
{
  "id": "ex_ftc_dailychange",
  "level": "2",
  "url": "ch_introducingarea.html#ex_ftc_dailychange",
  "type": "Exploration",
  "number": "17.7",
  "title": "",
  "body": "  The graph of the daily change (in $\/day) in the price of a certain stock is given below.       Find the change in stock price between days 1 and 5.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 1  Between day 1 and 2, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 1 and 2.    Day 2  Between day 2 and 3, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 2 and 3.    Day 3 & 4  Between day 3 and 5, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 3 and 5.   Putting it together, the change in value between day 1 and 5 equals        Find the change in stock price between days 1 and 7.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 1  Between day 1 and 2, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 1 and 2.    Day 2  Between day 2 and 3, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 2 and 3.    Day 3 & 4  Between day 3 and 5, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 3 and 5.    Day 5  Between day 5 and 6, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 5 and 6.    Day 6  Between day 6 and 7, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 6 and 7.   Putting it together, the change in value between day 1 and 7 equals        Find the change in stock price between days 5 and 8.   Recall that the total value is the antiderivative of the change in value function . By , the area under is equal to the net change in . Looking at the graph of , we see   Day 5  Between day 5 and 6, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 5 and 6.    Day 6  Between day 6 and 7, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 6 and 7.    Day 7  Between day 7 and 8, the area enclosed by is a rectangle with height and base . That means the value increases by $ between day 7 and 8.   Putting it together, the change in value between day 5 and 8 equals        Suppose the stock price on day 1 was $10. Find the stock price at day 5.   We have already seen that the value of the stock changes by $+2 between days 1 and 5. If the value on day 1 was $10, then the value on day 5 is $10+(+2) = $12.       Suppose the stock price on day 1 was $10. Find the stock price at day 7.   We have already seen that the value of the stock changes by $-3 between days 1 and 7. If the value on day 1 was $10, then the value on day 5 is $10+(-3) = $7.      "
},
{
  "id": "algebrareview",
  "level": "1",
  "url": "algebrareview.html",
  "type": "Appendix",
  "number": "A",
  "title": "Algebra Review",
  "body": " Algebra Review   Laws of Algebra   Distributing and FOIL-ing  Distribute to all terms: The best way to remember this is by drawing arcs from to and      FOIL the expression:   The best way to remember this formula is by drawing arcs from and to and .       Understanding FOIL-ing  The mathematical expression for simplifying can look a bit mysterious. To understand why it looks the way it does, it is helpful to remember the connection between multiplication and area.  For example, if you have a rectangle of side lengths and , then the rectangle has area . Visually, we have the following picture.     Suppose instead we increase the lengths of the sides to and . Let's see how this changes our area.     The area given by has four regions, each with their own area   The same mathematical pattern occurs when you have variables in your side lenghts. Suppose you have a rectangle with one side and another side . Then the area of the rectangle still has four regions     Adding up the areas of those regions gives us the same thing as FOIL-ing Simplifying that down we get Of course, with practice, it is faster and easier to learn to use the formula for FOIL-ing than would be to go through the area derivation each time.     Use the laws of algebra listed above to simplify the following expressions completely.        We must distribute the 5 to every term of the expression         We must distribute a to each term         We must foil the expression using the formula with , , , and . In other words, we have         We must foil the expression using the formula with , , , and . In other words, we have         Squaring an expression means multipling it by itself twice. In other words,         We must use order of operations to decide which operation to perform first. Remember that PEMDAS (parentheses, exponents, multiplcation\/division, addition\/subtraction) tells us which operations attach more \"strongly\", and must be performed first.   Here, the parentheses group the expression into two parts: with and .    Exponentiation is stronger than multiplication, so we must first square . As in the previous problem, we have     Now, we can distribute to each term.        Factor the following expression as much as possible    First, factor each term in the expression. There is a 3 in each term, so we can factor it out. There are no remaining common terms, so we are done factoring.    Factor the following expression as much as possible    We want to write as an expression of the form  We want to pick to get the right hand side to equal . There are three terms to consider   We need , so set . Plugging that into our factored form, we get     We need the third term to be . Factoring gives . We must divide the factors , , between .    To pick exact values for , recall that we need . Setting and , we can confirm as desired.   Putting it together, we get     Factor the following expression as much as possible    First, factor each term in the expression. There are three occurances of in each term, so we can factor them out. There are no remaining common terms, so we are done factoring.     Laws of Fractions   Suppose that                                   Use the laws of algebra listed above to simplify the following expressions completely.             Simplify          Laws of Exponents   Let in the following.                                      Fractions which do NOT simplify easily  Doesn't simplify at all:   Must find a common denomiator before you can combine terms:     Exponents and Products that do NOT simplify easily  Doesn't simplify at all:   You must FOIL to simplify:      Intervals and Graphs   Interval Notation  When using interval notation to represent sets, square brackets include the endpoint and parentheses exclude the endpoint. Multiple intervals can be combined using (or U).     represents the numbers such that .        represents the numbers such that .        represents the numbers such that either   or  .         Graphs of Common Functions                "
},
{
  "id": "sec_algebralaw-3",
  "level": "2",
  "url": "algebrareview.html#sec_algebralaw-3",
  "type": "Example",
  "number": "A.1",
  "title": "Understanding FOIL-ing.",
  "body": " Understanding FOIL-ing  The mathematical expression for simplifying can look a bit mysterious. To understand why it looks the way it does, it is helpful to remember the connection between multiplication and area.  For example, if you have a rectangle of side lengths and , then the rectangle has area . Visually, we have the following picture.     Suppose instead we increase the lengths of the sides to and . Let's see how this changes our area.     The area given by has four regions, each with their own area   The same mathematical pattern occurs when you have variables in your side lenghts. Suppose you have a rectangle with one side and another side . Then the area of the rectangle still has four regions     Adding up the areas of those regions gives us the same thing as FOIL-ing Simplifying that down we get Of course, with practice, it is faster and easier to learn to use the formula for FOIL-ing than would be to go through the area derivation each time.  "
},
{
  "id": "ex-review-distributefactor",
  "level": "2",
  "url": "algebrareview.html#ex-review-distributefactor",
  "type": "Exploration",
  "number": "A.1",
  "title": "",
  "body": "  Use the laws of algebra listed above to simplify the following expressions completely.        We must distribute the 5 to every term of the expression         We must distribute a to each term         We must foil the expression using the formula with , , , and . In other words, we have         We must foil the expression using the formula with , , , and . In other words, we have         Squaring an expression means multipling it by itself twice. In other words,         We must use order of operations to decide which operation to perform first. Remember that PEMDAS (parentheses, exponents, multiplcation\/division, addition\/subtraction) tells us which operations attach more \"strongly\", and must be performed first.   Here, the parentheses group the expression into two parts: with and .    Exponentiation is stronger than multiplication, so we must first square . As in the previous problem, we have     Now, we can distribute to each term.        Factor the following expression as much as possible    First, factor each term in the expression. There is a 3 in each term, so we can factor it out. There are no remaining common terms, so we are done factoring.    Factor the following expression as much as possible    We want to write as an expression of the form  We want to pick to get the right hand side to equal . There are three terms to consider   We need , so set . Plugging that into our factored form, we get     We need the third term to be . Factoring gives . We must divide the factors , , between .    To pick exact values for , recall that we need . Setting and , we can confirm as desired.   Putting it together, we get     Factor the following expression as much as possible    First, factor each term in the expression. There are three occurances of in each term, so we can factor them out. There are no remaining common terms, so we are done factoring.   "
},
{
  "id": "fraction-arithmetic",
  "level": "2",
  "url": "algebrareview.html#fraction-arithmetic",
  "type": "Axiom",
  "number": "A.2",
  "title": "Laws of Fractions.",
  "body": " Laws of Fractions   Suppose that                                "
},
{
  "id": "ex-review-fractionlaws",
  "level": "2",
  "url": "algebrareview.html#ex-review-fractionlaws",
  "type": "Exploration",
  "number": "A.2",
  "title": "",
  "body": "  Use the laws of algebra listed above to simplify the following expressions completely.             Simplify        "
},
{
  "id": "exponential-arithmetic",
  "level": "2",
  "url": "algebrareview.html#exponential-arithmetic",
  "type": "Axiom",
  "number": "A.3",
  "title": "Laws of Exponents.",
  "body": " Laws of Exponents   Let in the following.                                    "
},
{
  "id": "fractions-which-do-not-simplify-easily",
  "level": "2",
  "url": "algebrareview.html#fractions-which-do-not-simplify-easily",
  "type": "Example",
  "number": "A.4",
  "title": "Fractions which do NOT simplify easily.",
  "body": " Fractions which do NOT simplify easily  Doesn't simplify at all:   Must find a common denomiator before you can combine terms:   "
},
{
  "id": "exponents-and-products-that-do-not-simplify-easily",
  "level": "2",
  "url": "algebrareview.html#exponents-and-products-that-do-not-simplify-easily",
  "type": "Example",
  "number": "A.5",
  "title": "Exponents and Products that do NOT simplify easily.",
  "body": " Exponents and Products that do NOT simplify easily  Doesn't simplify at all:   You must FOIL to simplify:   "
},
{
  "id": "meta_backmatter-3",
  "level": "1",
  "url": "meta_backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
