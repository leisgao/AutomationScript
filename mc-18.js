let tableName = TB12
let formCode = TB-12
let passageCode = 
let questionNumber = 18
let problemSetNumber = 4
let test = SAT
let subject = Mathematics
let category = Problem Solving and Data Analysis/Two-variable data: models and scatterplots
let difficulty = 3
let question = In the morning, the battery level on Anna’s cell phone was low, so she began charging it. She then stopped charging her phone and went to a park with her cell phone, during which time the battery level decreased. She returned home, began charging her phone again, and then stopped charging her phone again and went to the library. The battery level of Anna’s cell phone during the 12~hours from the morning to when she was at the library is shown in the graph above. For how many total hours during the 12‑hour period was Anna’s cell phone being charged?
let choices = 2,3,5,6
let answer = C
let solution = The cell phone is being charged when the graph shows that the battery level is increasing. The battery level increases from 0~hours to 2~hours and then again from 6~hours to 9~hours. Thus, the total time the phone was being charged is $2+3=5$~hours.
let diagram = \begin {tikzpicture} \begin {axis}[height=6cm, title={Cell-Phone Battery Level}, xlabel={Time (hours)}, ylabel={Battery level \\ (percent of capacity)}, ylabel style={align=flush center}, xmin=0, xmax=12, xtick={0,2,...,12}, minor xtick={0,1,...,12}, minor tick style={draw}, ymin=0, ymax=100, ytick={0,10,...,100}, xminorgrids, ymajorgrids ] \addplot coordinates {(0,25) (2,55) (6,32) (9,77) (12,53) }; \end {axis} \end {tikzpicture}
let choicesAlign = null
let calculator = True
let multipleQuestion = null
let diagramPostText = null
let diagramPreText = null
let percent_correct = null