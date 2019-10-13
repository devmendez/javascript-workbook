// List the steps the app needs to do
The first stack will contain four blocks each one bigger than the next, stacked like a pyramid. The point of the game is to rearrange the stacks onto another stack moving each block into the same order never placing a larger block onto a smaller block.

1. Write code that will move a block
   -use .pop to remove block from the start stack
   -use .push to add block to the end stack

2. Write code that will allow a legal or valid move, else will return invalid move
   -write if statement to declare that blocks can start or end on any stack from a-c
   -declare variables for the start and end
   -declare variables for moving from one stack and moving to another stack
   -if block being moved from one stack is larger than the block being moved to, declare it "invalid"
   -if block being moved from one stack is smaller than the block being moved to, declare it "valid"

3. Write code that will check for a win
   -determine if there are four blocks on one stack (end stack is different from the start stack)

4. Add unit tests
