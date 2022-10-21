let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 27
let problemSetNumber = 4
let test = SAT
let subject = Mathematics
let category = Additional Topics in Math/Area and volume
let difficulty = 4
let question = A plastic sheet with a side of length 4~centimeters is cut into 8~congruent right triangles to use as faces in an 8‑sided game-board piece as shown in the figure above. What is the surface area of the piece, in square centimeters?
let choices = 8,12,16,32
let answer = C
let solution = The area of the piece is equal to the sum of the areas of the 8~triangles. Each triangle is a \RTAngles {30}~right triangle with a hypotenuse of length 4~centimeters. We can fill in the lengths of the legs as shown in the following figure. \par \begin {center} \begin {tikzpicture} \coordinate (A) at (0,0); \coordinate (B) at (60:4); \coordinate (C) at (B|-A); \RightAngle {A,C,B} \draw (A) -- (B) -- (C) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \Ang {60}} \LabelSegment [above left](A,B){4} \LabelSegment [below](A,C){2} \LabelSegment [right](B,C){$2\sqrt {3}$} \end {tikzpicture} \end {center} \par The area of each triangle is thus~$\frac {1}{2}(2)\left (2\sqrt {3}\right )=2\sqrt {3}$. Since there are 8~triangles, the total area is~$8\left (2\sqrt {3}\right )=16\sqrt {3}$.
let diagram = \begin {tikzpicture}[scale=1.5] \coordinate (A) at (0,0); \coordinate (B) at (0:2); \coordinate (C) at (60:2); \coordinate (D) at (120:2); \coordinate (E) at (180:2); \coordinate (F) at ($(2,0) + (60:2)$); \draw (E) -- (B) -- (F) -- (D) -- cycle; \draw [dashed] (D) -- (A) -- (C) -- (B) (D) |- (A) (A) |- (D) (C) |- (B) (B) |- (C); \LabelSegment [above left](D,E){4} \LabelAngle [pos=0.45](A,E,D){\ \ \Ang {60}} \coordinate (r-a) at (D|-E); \RightAngle {D,r-a,E} \end {tikzpicture}
let choicesAlign = M[r]<{\sqrt {3}}
let calculator = True
let multipleQuestion = null
let diagramPostText = null
let diagramPreText = null
let percent_correct = null