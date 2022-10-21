let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 9
let problemSetNumber = 3
let test = SAT
let subject = Mathematics
let category = Additional Topics in Math/Lines, angles, and triangles
let difficulty = 4
let question = In the figure above, point~$C$ lies on~\Segment [bar]{AE}, and~$\Segment {AB}=\Segment {AC}=\Segment {CE}=\Segment {DE}$. The measure of~$\angle CAB$ is~\Ang {36}, and \Segment [bar]{BC} and~\Segment [bar]{DE} are parallel. What is the measure of~$\angle CDE$?
let choices = 18,36,54,72
let answer = C
let solution = Since~$\Segment {AB}=\Segment {AC}=\Segment {CE}=\Segment {DE}$, the marked segments in the following figure are congruent. \par \begin {center} \begin {tikzpicture} \coordinate [label=below right:$E$] (E) at (0,0); \coordinate [label=above:$D$] (D) at (108:3); \coordinate [label=below:$C$] (C) at (-3,0); \coordinate [label=below left:$A$] (A) at ($(C)+(-3,0)$); \coordinate [label=above:$B$] (B) at ($(A)+(36:3)$); \draw (E) -- (D) -- (C) -- (B) -- (A) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \ \ \Ang {36}} \MarkSegment [|](A,B) \MarkSegment [|](A,C) \MarkSegment [|](C,E) \MarkSegment [|](D,E) \end {tikzpicture} \end {center} \par We know that \Segment [bar]{BC} and~\Segment [bar]{DE} are parallel, so the marked angles in the following figure are congruent. \par \begin {center} \begin {tikzpicture} \coordinate [label=below right:$E$] (E) at (0,0); \coordinate [label=above:$D$] (D) at (108:3); \coordinate [label=below:$C$] (C) at (-3,0); \coordinate [label=below left:$A$] (A) at ($(C)+(-3,0)$); \coordinate [label=above:$B$] (B) at ($(A)+(36:3)$); \draw (E) -- (D) -- (C) -- (B) -- (A) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \ \ \Ang {36}} \MarkSegment [|](A,B) \MarkSegment [|](A,C) \MarkSegment [|](C,E) \MarkSegment [|](D,E) \MarkAngle [mark={|}](D,E,C) \MarkAngle [mark={|}](B,C,A) \end {tikzpicture} \end {center} \par The congruent segments indicate that both of these triangles are isosceles. The pairs of congruent angles in the isosceles triangles are marked in the following figure. \par \begin {center} \begin {tikzpicture} \coordinate [label=below right:$E$] (E) at (0,0); \coordinate [label=above:$D$] (D) at (108:3); \coordinate [label=below:$C$] (C) at (-3,0); \coordinate [label=below left:$A$] (A) at ($(C)+(-3,0)$); \coordinate [label=above:$B$] (B) at ($(A)+(36:3)$); \draw (E) -- (D) -- (C) -- (B) -- (A) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \ \ \Ang {36}} \MarkSegment [|](A,B) \MarkSegment [|](A,C) \MarkSegment [|](C,E) \MarkSegment [|](D,E) \MarkAngle [mark={|}](D,E,C) \MarkAngle [mark={|}](B,C,A) \MarkAngle [mark={|}](A,B,C) \MarkAngle [mark={||}](C,D,E) \MarkAngle [mark={||}](E,C,D) \end {tikzpicture} \end {center} \par All the information given in the question is now marked in the figure, and we can being to find the measure of angle~$CDE$. Start with triangle~$ABC$. The measure of angle~$CAB$ is~\Ang {36}, so the measures of the two congruent angles are equal to~$\frac {\Ang {180}-\Ang {36}}{2} = \Ang {72}$. Angle~$DEC$ is congruent to angle~$BCA$, so we now have the following figure. \par \begin {center} \begin {tikzpicture} \coordinate [label=below right:$E$] (E) at (0,0); \coordinate [label=above:$D$] (D) at (108:3); \coordinate [label=below:$C$] (C) at (-3,0); \coordinate [label=below left:$A$] (A) at ($(C)+(-3,0)$); \coordinate [label=above:$B$] (B) at ($(A)+(36:3)$); \draw (E) -- (D) -- (C) -- (B) -- (A) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \ \ \Ang {36}} \MarkSegment [|](A,B) \MarkSegment [|](A,C) \MarkSegment [|](C,E) \MarkSegment [|](D,E) \LabelAngle [pos=0.45](D,E,C){\Ang {72}\ \ } \LabelAngle [pos=0.5](B,C,A){\Ang {72}} \LabelAngle [pos=0.45](A,B,C){\Ang {72}\ \ } \MarkAngle [mark={||}](C,D,E) \MarkAngle [mark={||}](E,C,D) \end {tikzpicture} \end {center} \par Now we work on on triangle~$CDE$. Since the measure of angle~$DEC$ is~\Ang {72}, the measures of the two congruent angles are~$\frac {\ang {180}-\Ang {72}}{2} = \Ang {54}$. Thus, the measure of angle~$CDE$ is~\Ang {54}, so choice~\TextChoice {3} is correct.
let diagram = \begin {tikzpicture} \coordinate [label=below right:$E$] (E) at (0,0); \coordinate [label=above:$D$] (D) at (108:3); \coordinate [label=below:$C$] (C) at (-3,0); \coordinate [label=below left:$A$] (A) at ($(C)+(-3,0)$); \coordinate [label=above:$B$] (B) at ($(A)+(36:3)$); \draw (E) -- (D) -- (C) -- (B) -- (A) -- cycle; \LabelAngle [pos=0.5](C,A,B){\ \ \ \ \Ang {36}} \end {tikzpicture}
let choicesAlign = r<{\degree }
let calculator = null
let multipleQuestion = null
let diagramPostText = null
let diagramPreText = null
let percent_correct = null