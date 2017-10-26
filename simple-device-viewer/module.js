/** LCARS SDK 16323.311
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to http://www.lcarssdk.org.
**/

var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];

//Template for the Bracket Element
var bracket = {type:'wrapper', class:'sdk bracket typeA', children:[
		{type:'wrapper', class:'content'},
		{type:'elbow', version:'top-left', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},
		{type:'elbow', version:'top-right', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},
		{type:'elbow', version:'bottom-left', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},
		{type:'elbow', version:'bottom-right', size:'small', color:LCARS.colorGen(uiColors), children:[{type:'bar'}], noEvent:true},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors), children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors), children:[{type:'bar', color:'bg-white'}]},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}
		]},
		{type:'column', flex:'v', children:[
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)},
			{type:'bar', flexC:'v', color:LCARS.colorGen(uiColors)}
		]}
	]
};

//UI Framing.  Uses the Arrive event to trigger the Viewport scaling.
//var lcarsmenu ={ type:"wrapper", version:"column", flex:"v", children:[ { type:"elbow", version:"top-left", color:LCARS.colorGen(uiColors), class:"step-three" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/switches", label:"Refresh" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/events", label:"Events" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/batteries", label:"Batteries" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/contact-sensors", label:"Contact Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/energy-meters", label:"Energy Meters" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/lights", label:"Lights" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/motion-sensors", label:"Motion Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/presence-sensors", label:"Presence Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/relative-humidity-sensors", label:"Relative Humidity Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/switches", label:"Switches" }, { type:"button", color:LCARS.colorGen(uiColors), href:"https://graph-na02-useast1.api.smartthings.com:443/api/token/7bcf8507-9677-44e8-ba0d-e8be68362692/smartapps/installations/0f21a8d4-c50f-4394-80f1-b6c8a2efe15d/dashboard/temperature-sensors", label:"Temperature Sensors" }, { type:"button", color:LCARS.colorGen(uiColors), flexC:"v" } ] }
var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', arrive:function(){$(this).viewport('zoom', {width:1920, height:1080});}, children:[]};

nemesisUI.children[0]=lcarsmenu
$(document).on('ready', function(){
	$(nemesisUI).createObject({appendTo:'body'});
});

