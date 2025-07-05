summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.1"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.2"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.3"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.4"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.5"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.6"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.7"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.8"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.9"}]',Tags:["Heroes.Randomized"]}
summon minecraft:marker ~ ~ ~ {CustomName:'[{"text":"Power.10"}]',Tags:["Heroes.Randomized"]}

execute as @e[tag=Heroes.Randomized,sort=random,limit=1] run tag @s add Heroes.Power

execute if entity @e[name=Power.1,tag=Heroes.Power] run tag @s add Heroes.NaturalPower
execute if entity @e[name=Power.1,tag=Heroes.Power] run tag @s add Heroes.Power.Randomize



kill @e[tag=Heroes.Randomized]
tag @s add Heroes.Addonpack

