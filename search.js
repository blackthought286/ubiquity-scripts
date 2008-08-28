CmdUtils.CreateCommand({
	name: "scribd", 
	icon: "http://scribd.com/favicon.ico",
	author: {name: "Everett Bryant", email: "blackthought286@gmail.com"},
	takes: {command: noun_arb_text},
	description: "Searches Scribd.com for papers and articles",
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