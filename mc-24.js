let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 24
let problemSetNumber = 4
let test = SAT
let subject = Mathematics
let category = Heart of Algebra/Linear functions
let difficulty = 4
let question = A gardener is planting flowers in circular rings around a sculpture, starting with the innermost ring. Each ring after the first has 4~more flowers than the previous ring, and the first two rings are shown in the figure above. Which of the following represents the number of flowers in the $r$th~ring?
let choices = 4r, 4(r+1), 4(r+2), 8r+4
let answer = B
let solution = We can count in the figure that the first ring has 8~flowers. Since each successive ring has 4~more flowers, the $r$th ring has $8+4(r-1)$~flowers. This expression is equivalent to~$4(r+1)$, so choice~\TextChoice {2} is correct. \par Alternatively, when~$r=1$, the number of flowers is~8, so we can plug in 1 for~$r$ into the answer choices, eliminating all but the correct answer.
let diagram = \begin {tikzpicture} \coordinate (O) at (0,0); \draw [fill=black!20] (O) circle (0.8); \node at (O) {sculpture}; \foreach \j in {1,...,8} {\coordinate (r1-\j ) at ($({360/8*\j }:1.1)$); \Point {r1-\j } } \draw [thin] (O) circle (1.4); \foreach \j in {1,...,12} {\coordinate (r2-\j ) at ($({360/12*\j }:1.7)$); \Point {r2-\j } } \draw [thin] (O) circle (2.0); \end {tikzpicture}
let choicesAlign = M
let calculator = True
let multipleQuestion = null
let diagramPostText = null
let diagramPreText = null
let percent_correct = null