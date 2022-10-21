let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 25
let problemSetNumber = 4
let test = SAT
let subject = Mathematics
let category = Problem Solving and Data Analysis/Two-variable data: models and scatterplots
let difficulty = 5
let question = Another student in the school spent 15.5~hours completing homework in the last week. If the amount of time this student spent completing homework in the last week is greater than the amount predicted by the line of best fit, what is the greatest number of classes the student can be taking?
let choices = 3,4,5,6
let answer = B
let solution = A student who spent 15.5~hours completing homework in the last week spent more time than predicted by the line of best fit for students taking 4 or fewer classes and less time than predicted by the line of best fit for students taking 5 or more classes. \par \begin {center} \begin {tikzpicture} \begin {axis}[width=6cm, height=5.5cm, axis line style={->}, xmin=2, xmax=6.5, xtick={2,...,6}, ymin=5, ymax=27, ytick={5,10,...,25}, minor ytick={5,...,25}, minor tick style={draw}, set end axis labels={$x$}{$y$}, clip=false, xlabel={Number of classes}, ylabel={Time spent completing \\ homework (hours)}, ylabel style={align=flush center}, xmajorgrids ] \AddPlotAndRegression {3 & 14.45 \\ 3 & 6.40 \\ 3 & 11.85 \\ 3 & 10.56 \\ 4 & 12.82 \\ 4 & 13.58 \\ 4 & 15.60 \\ 4 & 12.86 \\ 4 & 10.03 \\ 5 & 20.31 \\ 5 & 15.51 \\ 5 & 14.61 \\ 5 & 12.29 \\ 5 & 18.16 \\ 5 & 13.63 \\ 6 & 20.11 \\ 6 & 23.18 \\ 6 & 21.76 \\ 6 & 24.48 \\ 6 & 21.15 \\ } \addplot [domain=2:6.5] {15.5}; \end {axis} \end {tikzpicture} \end {center} \par Thus, the student can be taking at most 4~classes.
let diagram = \begin {tikzpicture} \begin {axis}[width=6cm, height=5.5cm, axis line style={->}, xmin=2, xmax=6.5, xtick={2,...,6}, ymin=5, ymax=27, ytick={5,10,...,25}, minor ytick={5,...,25}, minor tick style={draw}, set end axis labels={$x$}{$y$}, clip=false, xlabel={Number of classes}, ylabel={Time spent completing \\ homework (hours)}, ylabel style={align=flush center} ] \AddPlotAndRegression {3 & 14.45 \\ 3 & 6.40 \\ 3 & 11.85 \\ 3 & 10.56 \\ 4 & 12.82 \\ 4 & 13.58 \\ 4 & 15.60 \\ 4 & 12.86 \\ 4 & 10.03 \\ 5 & 20.31 \\ 5 & 15.51 \\ 5 & 14.61 \\ 5 & 12.29 \\ 5 & 18.16 \\ 5 & 13.63 \\ 6 & 20.11 \\ 6 & 23.18 \\ 6 & 21.76 \\ 6 & 24.48 \\ 6 & 21.15 \\ } \end {axis} \end {tikzpicture}
let choicesAlign = null
let calculator = True
let multipleQuestion = information
let diagramPostText = null
let diagramPreText = A principal surveyed 20~randomly selected students about the number of hours they spent completing homework in the last week and the total number of classes they are taking. The results are shown, along with the line of best fit, in the scatterplot below.
let percent_correct = null