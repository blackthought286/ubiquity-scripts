CmdUtils.CreateCommand({
	name: "scribd", 
	takes: {command: noun_arb_text},
	description: "Searches Scribd.com",
	preview: function(pblock, cmd){
		pblock.innerHTML = "You are searching for: " + cmd.text;
	},
	execute: function(cmd){
		var search = cmd.text;
                var newCmd = search.replace(/\s+/g, "+");
		var url = "http://www.scribd.com/search/search?query=" + newCmd + "&x=0&y=0";
		//openUrl(url);
                Utils.openUrlInBrowser(url);
	}
});