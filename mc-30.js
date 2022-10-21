let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 30
let problemSetNumber = 4
let test = SAT
let subject = Mathematics
let category = Additional Topics in Math/Area and volume
let difficulty = 5
let question = A rectangular piece of paper with two sides of length $x$~inches has a white front side and gray back side. The paper was folded along the dotted line, creating one white triangle and one gray triangle as shown in the figure above. If the area of the white triangle is 18~square inches, what is the area of the gray triangle, in square inches?
let choices = 36,54,72,90
let answer = B
let solution = The resulting figure includes two \RTAngles {30}~right triangles. Using the lengths marked in the figure on the right, we can express the areas of both triangles in terms of~$x$. The two triangles are separated and the areas are calculated in the following figures. \par \begin {center} \begin {tikzpicture}[baseline={(label.base)}] \coordinate (A) at (0:3); \coordinate (B) at (60:3); \coordinate (C) at (120:3); \coordinate (D) at (180:3); \coordinate (X) at (intersection of A--C and B--D); \draw (A) -- (B) -- (X) -- cycle; \LabelAngle [pos=1.1](B,A,C){\Ang {30}} \LabelSegment [above right](A,B){$x$} \LabelSegment [above left](X,B){$\frac {x}{\sqrt {3}}$} \LabelSegment [below left](X,A){$\frac {2x}{\sqrt {3}}$} \RightAngle {A,B,X} \node [below=1.5\baselineskip ] (label) at (current bounding box.south) {$\text {Area} = \frac {1}{2}(x)\left (\frac {x}{\sqrt {3}}\right ) = \frac {x^2}{2\sqrt {3}}$}; \end {tikzpicture}\hfill \begin {tikzpicture}[baseline={(label.base)}] \coordinate (A) at (0:3); \coordinate (B) at (60:3); \coordinate (C) at (120:3); \coordinate (D) at (180:3); \draw [fill=black!30] (A) -- (C) -- (D) -- cycle; \LabelAngle [pos=1](C,A,D){\Ang {30}} \LabelSegment [above left](C,D){$x$} \LabelSegment [above right](A,C){$x\sqrt {3}$} \LabelSegment [below](A,D){$2x$} \RightAngle {A,C,D} \node [below=1.5\baselineskip ] (label) at (current bounding box.south) {$\text {Area} = \frac {1}{2}(x)\left (x\sqrt {3}\right ) = \frac {x^2\sqrt {3}}{2}$}; \end {tikzpicture} \end {center} \par We are given that the area of the white triangle is 18~square inches, so~$\frac {x^2}{2\sqrt {3}}=18$. Multiply both sides by~$2\sqrt {3}$ to get~$x^2=36\sqrt {3}$. Plug this value into the expression for the area of the gray triangle to get~$\frac {x^2\sqrt {3}}{2}=\frac {36\sqrt {3}\left (\sqrt {3}\right )}{2}=54$. Choice~\TextChoice {2} is correct.
let diagram = \begin {tikzpicture}[scale=0.6, baseline={(A)}] \coordinate (A) at (0:3); \coordinate (B) at (60:3); \coordinate (C) at (180:3); \coordinate (D) at (240:3); \draw (A) -- (B) -- (C) -- (D) -- cycle; \draw [dashed] (A) -- (C); \LabelAngle [pos=0.75](C,A,D){\Ang {30}} \LabelSegment [above right](A,B){$x$} \LabelSegment [below left](C,D){$x$} \end {tikzpicture}\hfill \begin {tikzpicture}[scale=0.6, baseline={(A)}] \coordinate (A) at (0:3); \coordinate (B) at (60:3); \coordinate (C) at (120:3); \coordinate (D) at (180:3); \draw (A) -- (B) -- (D); \draw [fill=black!30] (A) -- (C) -- (D) -- cycle; \LabelAngle [pos=1.1](B,A,C){\Ang {30}} \LabelAngle [pos=1](C,A,D){\Ang {30}} \LabelSegment [above right](A,B){$x$} \LabelSegment [above left](C,D){$x$} \end {tikzpicture}
let choicesAlign = null
let calculator = True
let multipleQuestion = null
let diagramPostText = null
let diagramPreText = null
let percent_correct = null