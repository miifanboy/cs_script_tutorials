import { Instance, CSPlayerPawn } from "cs_script/point_script";

function getLookVector(ang)
{
	var pitch = ang.pitch * Math.PI / 180;
	var yaw = ang.yaw * Math.PI / 180;
	
	var x = Math.cos(pitch) * Math.cos(yaw);
	var y = Math.cos(pitch)* Math.sin(yaw);
	var z = -Math.sin(pitch);
	
	return {x: x, y: y, z: z}
}
Instance.OnGrenadeBounce((event) => {
	var owner = event.projectile.GetOwner();
	var plr_pwn;
	if(owner instanceof CSPlayerPawn)
	{
		plr_pwn = owner;
	}

	var plr_pos = plr_pwn.GetEyePosition();
	var plr_ang = plr_pwn.GetEyeAngles();

	var dirVec = getLookVector(plr_ang);

	var start = {x: plr_pos.x + dirVec.x*50,y: plr_pos.y + dirVec.y*50,z: plr_pos.z + dirVec.z*50};

	var end = {x: plr_pos.x + dirVec.x*3000,y: plr_pos.y + dirVec.y*3000,z: plr_pos.z + dirVec.z*3000};

	var trace = {start: start, end: end, ignorePlayers: false};

	var res = Instance.TraceLine(trace);

	if(res.didHit)
	{
		var nadePos = event.projectile.GetAbsOrigin();
		var vel_vec = {x: (res.end.x-nadePos.x)*3, y: (res.end.y-nadePos.y)*3,z: (res.end.z-nadePos.z)*3};

		event.projectile.Teleport({velocity: vel_vec});

	}
})


Instance.SetThink(()=>{
	
	Instance.SetNextThink(Instance.GetGameTime());
})

Instance.SetNextThink(Instance.GetGameTime());
