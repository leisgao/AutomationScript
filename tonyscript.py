# Python program to demonstrate
# Conversion of JSON data to
# dictionary


# importing the module
import json

def addelement(element, elements):
	if element not in elements:
		elements.append(element)
# Opening JSON file
with open('TB-12_questions.json') as json_file:
	data = json.load(json_file)

	info = {}
	elements = []
	camelcased = {'tableName' : 'tableName', 'Form Code' : "formCode", 'Passage Code' : "passageCode", 'Problem Set Number' : "problemSetNumber", 'Subject' : "subject", 'Calculator' : "calculator", 'Category' : "category", 'Question Number' : "questionNumber", 'Question' : "question", 'Choices' : "choices", 'Answer' : "answer", 'Solution' : "solution", 'Test' : "test", 'Difficulty' : "difficulty", 'Diagram' : "diagram", 'Choices Align' : "choicesAlign", 'Multiple Question' : "multipleQuestion", 'Diagram Post Text' : "diagramPostText", 'Diagram Pre Text' : "diagramPreText", "Percent Correct" : "percent_correct"}

	

	for i in range(len(data)):
	# for i in range(1):
		# print("File ", i, " number of elements: ", len(data[0]))
		currentquestion = {'tableName' : "null", 'Form Code' : "null", 'Passage Code' : "null", 'Question Number' : "null", 'Problem Set Number' : "null", 'Test' : "null", 'Subject' : "null", 'Category' : "null", 'Difficulty' : "null", 'Question' : "null", 'Choices' : "null", 'Answer' : "null", 'Solution' : "null", 'Diagram' : "null", 'Choices Align' : "null", 'Calculator' : "null", 'Multiple Question' : "null", 'Diagram Post Text' : "null", 'Diagram Pre Text' : "null", "Percent Correct" : "null"}
		concated = []
		for j in range(len(data[i])):
			if len(data[i][j]) != 1: # Four data types that are singular elements in their list: {'Words in Context': 1, 'Command of Evidence': 1, 'No Calculator': 1, 'Calculator': 1}, sets value to null
				# currentquestion[data[i][j][0]] = None
				# addelement(data[i][j][0], elements)
				# addelement(data[i][j][0], elements)
				if data[i][j][0] in currentquestion.keys():
					currentquestion[data[i][j][0]] = data[i][j][1]
				# print(j, " storing: ", data[i][j][0], " as ", data[i][j][1])
			else:
				if data[i][j][0] == "Calculator":
					currentquestion[data[i][j][0]] = True


		# current question information should be updated here
		currentquestion["tableName"] = currentquestion["Form Code"].replace("-", "")
		for i in currentquestion.keys():
			string1 = "let {title} = {vars}".format(title = camelcased[i], vars = currentquestion[i])
			concated.append(string1)
		#gets file name from the current question information dictionary
		titles = {"Reading" : "r", "Writing and Language" : "w"} 
		if currentquestion["Subject"] == "Mathematics":
			if currentquestion["Calculator"] == True:
				newtitle = "mc"
			else:
				newtitle = "m"
		else:
			newtitle = titles[currentquestion["Subject"]]

		filename = str(newtitle + "-" + currentquestion["Question Number"] + ".js")
		#open and read the file after the appending:
		f = open(filename, "w")
		f.write("\n".join(concated))
		f.close()
			
			
