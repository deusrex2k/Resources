/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

//var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];
//var lcarsmenu = {type:'wrapper', class:'main', flex:'h', flexC:'v', children:[{ type:"wrapper", version:"column", flex:"v", children:[ { type:"elbow", version:"top-left", color:LCARS.colorGen(uiColors), class:"step-three" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/switches", label:"Refresh" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/events", label:"Events" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/batteries", label:"Batteries" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/contact-sensors", label:"Contact Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/energy-meters", label:"Energy Meters" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/lights", label:"Lights" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/motion-sensors", label:"Motion Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/presence-sensors", label:"Presence Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/relative-humidity-sensors", label:"Relative Humidity Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/switches", label:"Switches" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/temperature-sensors", label:"Temperature Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), flexC:"v" } ] }]}
//var hPBG = {type:'wrapper', flex:'h', class:'button-wrap', children:[{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},{type:'button', color:LCARS.colorGen(uiColors), version:'pill'},{type:'button', color:LCARS.colorGen(uiColors), version:'pill', label:'Docs', state:'blink', href:'https://github.com/Aricwithana/LCARS-SDK/wiki'}]};


//UI Framing.  Uses the Arrive event to trigger the Viewport scaling.

//Main Content Area
        var mCA = {type:'wrapper', class:'main', flex:'h', flexC:'v', children:[

			{type:'column', flexC:'h', flex:'v', children:[
				//Top Bars Group
				{type:'row', flex:'h', class:'frame', children:[
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), version:'small'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), flexC:'h'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)}
				]},
				//Header Pill Button Group inserted below, this is just a placeholder
				{type:'wrapper', flex:'h', class:'button-wrap', children:[]},


				//Main Content Wrapper
				{type:'wrapper', class:'content', flexC:'v', style:' overflow:auto;'}
        	]}
		]};


var hCA = {type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexC:'h', children:[

		//Header
        {type:'row', version:'header', flex:'h', children:[

			//Elbow & Button
            {type:'column', flex:'v', children:[
                {type:'button', color:LCARS.colorGen(uiColors), size:'step-two'},
                {type:'elbow', version:'bottom-left', color:LCARS.colorGen(uiColors), flexC:'v'}
            ]},

			{type:'wrapper', flexC:'h', flex:'v', children:[

				//Header Content Area
				{type:'wrapper', version:'content', flexC:'v', children:[

					//Header Title
					{type:'title', text:'USS RIDGEWOOD'},

				]},

				//Header Bottom Bars
				{type:'row', version:'frame', flex:'h', children:[
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors), flexC:'h'},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)},
					{type:'bar', color:LCARS.colorGen(uiColors)}
				]}
			]}

        ]}]};





var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', arrive:function(){$(this).viewport('zoom', {width:1920, height:1080});}, children:[]};

mCA.children[0].children[1]=hPBG
lcarsmenu.children[1]=mCA
hCA.children[1]=lcarsmenu
nemesisUI.children[0]=hCA


$(document).on('ready', function(){
	$(nemesisUI).createObject({appendTo:'body'});
});

