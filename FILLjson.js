function FillData()
{ 	
	var jsonfile = document.getElementById('jsonfile').files[0]; // Get File Name from file tag
	var reader = new FileReader(); // Use FileReader to Read File
	reader.onload = function() // When reading is done, Get Data
				{	json = JSON.parse(reader.result);
					alert(JSON.stringify(json)); }
	reader.readAsText(jsonfile); // Pass FileName & Read as Text data
	
	prompt = json['prompt']
	Data = json['data']
	for (code in Data)
	{	itemname = Data[code]['name']
		itemdata = Data[code]['itemdata']
		itemPrompt=''
		for (itTag in itemdata)
		{	itemPrompt+=' - '+itemdata[itTag]
			document.getElementById(itTag).value = itemdata[itTag]
		}
		if (prompt == '1')
			//alert('\n '+itemname+' : ' +itemPrompt+'\n')
			console.log('\n '+itemname+' : ' +itemPrompt+'\n')	
	}
}