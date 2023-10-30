async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

typeSentence("Hey, over here!", "a")



function scripting(){

    document.getElementById("titlePage").innerHTML = "Scripting";
    document.getElementById("description").innerHTML = 'Im scripter since 3 years and I have experience in almost all areas of scripting. Some of my past work is a <a href="https://gyazo.com/806f29873a0bd5f6bec61a0593e6c7fa" target="_blank">sword system</a> and a <a href="https://www.roblox.com/games/8240522536/Pets-Inventario" target="_blank">pet system</a>. I code fluent in Python, Javascript, and Lua.'
    document.getElementById("basic").innerHTML = "- Basic Script: 400 Robux / 3$";
    document.getElementById("medium").innerHTML = "- Medium Script: 800 Robux / 7$";
    document.getElementById("advanced").innerHTML = "- Advanced Script: 1k+ Robux / 10$+";
    document.getElementById("system").innerHTML = "- Entire Game System: 3k+ Robux / 15$+";

}

function discordBots(){

    document.getElementById("titlePage").innerHTML = "Discord Bots";
    document.getElementById("description").innerHTML = 'Im a discord bot programmer since 1 year and I code mostly fun and utility bots. One of my past projects is <a href="https://discord.com/oauth2/authorize?client_id=949313644833947779&scope=bot&permissions=8" target="_blank">Rocket Bot (not finished)</a>, a multi-purpose bot.';
    document.getElementById("basic").innerHTML = "- Basic Support Bot: 700 Robux / 5$";
    document.getElementById("medium").innerHTML = "- Custom Server Bot: 1.2k+ Robux / 10$+";
    document.getElementById("advanced").innerHTML = "";
    document.getElementById("system").innerHTML = "";

}

function discordServers(){

    document.getElementById("titlePage").innerHTML = "Discord Servers";
    document.getElementById("description").innerHTML = "I manage discord servers since 2 years and I can create your dreams discord server. My servers includes economy, moderation, custom bots (see Discord Bots page) and more. After I finish the server I will NOT be part of the staff.";
    document.getElementById("basic").innerHTML = "- Basic Youtuber Server: 600 Robux / 5$";
    document.getElementById("medium").innerHTML = "- Medium Community Server: 1k Robux / 10$";
    document.getElementById("advanced").innerHTML = "- Large Community Server: 1.5k+ Robux / 12$+";
    document.getElementById("system").innerHTML = "";

}

function translation(){

    document.getElementById("titlePage").innerHTML = "Translation";
    document.getElementById("description").innerHTML = "I speak English since some years and I can translate your game from spanish to english or english to spanish. Spanish is my main language.";
    document.getElementById("basic").innerHTML = "- Translation: 600+ Robux (depending on how big the game is) / 5$";
    document.getElementById("medium").innerHTML = "";
    document.getElementById("advanced").innerHTML = "";
    document.getElementById("system").innerHTML = "";

}
