import { CSPlayerPawn, Instance } from "cs_script/point_script";


var keys = {};
Instance.OnScriptInput("K_P",(data)=>{


	if(data.caller instanceof CSPlayerPawn)
	{

		var slot = data.caller.GetPlayerController().GetPlayerSlot();

		keys[slot] ||= {};
		keys[slot]["K"] ||= {};
		keys[slot]["K"]["pressed"] = 1;
		keys[slot]["K"]["start"] = Instance.GetGameTime();
		keys[slot]["K"]["time"] = 0;
		//Instance.DebugScreenText("Pressed",10,10,0.5,{r: 255,g:0,b:0});
	}
	
})

Instance.OnScriptInput("K_R",(data)=>{


	if(data.caller instanceof CSPlayerPawn)
	{

		var slot = data.caller.GetPlayerController().GetPlayerSlot();

		keys[slot]["K"]["pressed"] = 0;
		keys[slot]["K"]["time"] = Instance.GetGameTime() - keys[slot]["K"]["start"];
		//Instance.DebugScreenText("Released",10,10,0.5,{r: 255,g:0,b:0});
	}
	
})
function OnK(slot)
{
	keys[slot]["K"]["time"] = Instance.GetGameTime() - keys[slot]["K"]["start"];
	var player = Instance.GetPlayerController(parseInt(slot));
	Instance.DebugScreenText(`  ${player.GetPlayerName()} is holding K for ${keys[slot]["K"]["time"]} seconds.`,10,10,0.01,{r: 255,g:0,b:0});
}
function InputManager()
{
	for(const slot in keys)
	{
		if(keys[slot]["K"]["pressed"])
		{
			OnK(slot);
		}
	}

}
Instance.SetThink(()=>{
	
	InputManager();


	Instance.SetNextThink(Instance.GetGameTime());
})

Instance.SetNextThink(Instance.GetGameTime());
