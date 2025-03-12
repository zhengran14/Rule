var routerIP = "192.168.50.1";
var DNS1 = "202.106.195.68";
var DNS2 = "202.106.46.151";
// var DNS1 = "223.5.5.5";
// var DNS2 = "114.114.114.114";


// 自定义规则配置
const customRules = [
  "RULE-SET,MyDirect,DIRECT",
  "RULE-SET,MyProxy,Proxy",
  "RULE-SET,MyReject,REJECT",
  "RULE-SET,MyAI,AI",
  "RULE-SET,Direct,DIRECT",
  "RULE-SET,Advertising_Classical,广告过滤",
  "RULE-SET,Download,DIRECT",
  "RULE-SET,PrivateTracker,DIRECT",
  "RULE-SET,ZhihuAds,广告过滤",
  "RULE-SET,ChinaMax_Classical,DIRECT",
  "RULE-SET,Apple_Classical,DIRECT",
  "RULE-SET,Bing,DIRECT",
  "RULE-SET,OpenAI,AI",
  "RULE-SET,Copilot,AI",
  "RULE-SET,Microsoft,DIRECT",
  "RULE-SET,GitHub,Proxy",
  "RULE-SET,Google,Proxy",
  "RULE-SET,Adobe,香港选择",
  "RULE-SET,QuickConnect,DIRECT",
  "RULE-SET,Synology,DIRECT",
  "RULE-SET,SteamCN,DIRECT",
  "RULE-SET,GameDownloadCN,DIRECT",
  "RULE-SET,Steam,Proxy",
  "RULE-SET,Docker,Proxy",
  "RULE-SET,ChinaDNS,DIRECT",
  "RULE-SET,DNS,DIRECT",
  "RULE-SET,EA,Proxy",
  "RULE-SET,Ubisoft,Proxy",
  "RULE-SET,2KGames,Proxy",
  "RULE-SET,Gog,Proxy",
  "RULE-SET,GlobalMedia_Classical,Proxy",
  "RULE-SET,Global_Classical,Proxy",
  "RULE-SET,Lan,DIRECT",
  "GEOIP,LAN,DIRECT",
  "GEOIP,CN,DIRECT"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 600,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "max-failed-times": 3,
  "hidden": false
};
// 自定义代理组配置
const customDefaultProxyGroups = {
  ...groupBaseOption,
  "type": "url-test",
  "tolerance": 50,
  "include-all": true,
  "lazy": false,
};
const customProxyGroups = [
  {
    ...groupBaseOption,
    "name": "Proxy",
    "type": "select",
    "proxies": ["香港选择", "美国选择", "日本选择", "新加坡选择", "DIRECT"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
  },
  {
    ...customDefaultProxyGroups,
    "name": "香港选择",
    // "type": "fallback",
    // "proxies": ["香港自动"],
    "interval": 300,
    "include-all": true,
    "filter": "香港",
    "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
    "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
  },
  {
    ...customDefaultProxyGroups,
    "name": "美国选择",
    // "type": "fallback",
    // "proxies": ["美国自动"],
    "interval": 300,
    "include-all": true,
    "filter": "美国",
    "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
    "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
  },
  {
    ...customDefaultProxyGroups,
    "name": "日本选择",
    // "type": "fallback",
    "interval": 300,
    "include-all": true,
    "filter": "日本",
    "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
    "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
  },
  {
    ...customDefaultProxyGroups,
    "name": "新加坡选择",
    "interval": 300,
    "include-all": true,
    "filter": "新加坡",
    "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
    "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
  },
  {
    ...groupBaseOption,
    "name": "AI",
    "type": "select",
    "proxies": ["美国选择", "新加坡选择", "香港选择", "日本选择", "Proxy", "DIRECT"],
    "include-all": true,
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
  },
  // {
  //   ...customDefaultProxyGroups,
  //   "name": "香港自动",
  //   "filter": "香港",
  //   "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
  //   "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
  // },
  // {
  //   ...customDefaultProxyGroups,
  //   "name": "美国自动",
  //   "filter": "美国",
  //   "exclude-filter": "1\.5|0\.1x|[^.][3-9]x",
  //   "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
  // },
  {
    ...groupBaseOption,
    "name": "广告过滤",
    "type": "select",
    "proxies": ["REJECT", "DIRECT"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
  },
  {
    ...groupBaseOption,
    "name": "漏网之鱼",
    "type": "select",
    "proxies": ["DIRECT", "Proxy"],
    "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
  }
];
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 自定义规则集配置
// https://github.com/Loyalsoldier/clash-rules
// https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Clash
const customRuleProviders = {
  // "": {
  //   ...ruleProviderCommon,
  //   "behavior": "classical",
  //   "url": "",
  //   "path": "./ruleset/.yaml",
  // },
  "Lan": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Lan/Lan.yaml",
    "path": "./ruleset/Lan.yaml",
  },
  "Direct": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Direct/Direct.yaml",
    "path": "./ruleset/Direct.yaml",
  },
  "Advertising_Classical": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Advertising/Advertising_Classical.yaml",
    "path": "./ruleset/Advertising_Classical.yaml",
  },
  "Download": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Download/Download.yaml",
    "path": "./ruleset/Download.yaml",
  },
  "PrivateTracker": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/PrivateTracker/PrivateTracker.yaml",
    "path": "./ruleset/PrivateTracker.yaml",
  },
  "ZhihuAds": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ZhihuAds/ZhihuAds.yaml",
    "path": "./ruleset/ZhihuAds.yaml",
  },
  "ChinaMax_Classical": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMax/ChinaMax_Classical.yaml",
    "path": "./ruleset/ChinaMax_Classical.yaml",
  },
  "Apple_Classical": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple_Classical.yaml",
    "path": "./ruleset/Apple_Classical.yaml",
  },
  "Bing": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Bing/Bing.yaml",
    "path": "./ruleset/Bing.yaml",
  },
  "OpenAI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/OpenAI.yaml",
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml",
    "path": "./ruleset/Microsoft.yaml",
  },
  "GitHub": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml",
    "path": "./ruleset/GitHub.yaml",
  },
  "Google": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml",
    "path": "./ruleset/Google.yaml",
  },
  "Adobe": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Adobe/Adobe.yaml",
    "path": "./ruleset/Adobe.yaml",
  },
  "QuickConnect": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/QuickConnect/QuickConnect.yaml",
    "path": "./ruleset/QuickConnect.yaml",
  },
  "Synology": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Synology/Synology.yaml",
    "path": "./ruleset/Synology.yaml",
  },
  "SteamCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/SteamCN/SteamCN.yaml",
    "path": "./ruleset/SteamCN.yaml",
  },
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Steam/Steam.yaml",
    "path": "./ruleset/Steam.yaml",
  },
  "GameDownloadCN": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Game/GameDownloadCN/GameDownloadCN.yaml",
    "path": "./ruleset/GameDownloadCN.yaml",
  },
  "Copilot": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Copilot/Copilot.yaml",
    "path": "./ruleset/Copilot.yaml",
  },
  "Docker": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Docker/Docker.yaml",
    "path": "./ruleset/Docker.yaml",
  },
  "ChinaDNS": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaDNS/ChinaDNS.yaml",
    "path": "./ruleset/ChinaDNS.yaml",
  },
  "DNS": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/DNS/DNS.yaml",
    "path": "./ruleset/DNS.yaml",
  },
  "EA": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/EA/EA.yaml",
    "path": "./ruleset/EA.yaml",
  },
  "Ubisoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Ubisoft/Ubisoft.yaml",
    "path": "./ruleset/Ubisoft.yaml",
  },
  "2KGames": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/2KGames/2KGames.yaml",
    "path": "./ruleset/2KGames.yaml",
  },
  "Gog": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gog/Gog.yaml",
    "path": "./ruleset/Gog.yaml",
  },
  "GlobalMedia_Classical": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GlobalMedia/GlobalMedia_Classical.yaml",
    "path": "./ruleset/GlobalMedia_Classical.yaml",
  },
  "Global_Classical": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Global/Global_Classical.yaml",
    "path": "./ruleset/Global_Classical.yaml",
  },
  "MyReject": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/zhengran14/Rule@main/MyReject.yaml",
    "path": "./ruleset/MyReject.yaml",
  },
  "MyProxy": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/zhengran14/Rule@main/MyProxy.yaml",
    "path": "./ruleset/MyProxy.yaml",
  },
  "MyDirect": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/zhengran14/Rule@main/MyDirect.yaml",
    "path": "./ruleset/MyDirect.yaml",
  },
  "MyAI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/zhengran14/Rule@main/MyAI.yaml",
    "path": "./ruleset/MyAI.yaml",
  },
}

const excludeProxyGroup = ["Proxy", "Auto", "♻️自动选择", "🔯故障转移", "Final"];
const otherProxyGroup1 = ["Proxies"];
const otherProxyGroup2 = ["Microsoft", "Apple", "Bilibili"];
const otherProxyGroup3 = ["OpenAI"];
const otherProxyGroup4 = ["PayPal"];

// 程序入口
function main(config, profileName) {
  // config["proxy-groups"] = config["proxy-groups"]
  //   .filter(group => {
  //     if ("name" in group) {
  //       // 如果需要排除的组名，返回 false，表示移除该元素
  //       if (excludeProxyGroup.includes(group["name"])) {
  //         return false;
  //       }
  //       if (otherProxyGroup1.includes(group["name"])) {
  //         Object.assign(group, {
  //           ...groupBaseOption,
  //           "name": group["name"],
  //           "type": "select",
  //           "proxies": ["Proxy", "DIRECT"]
  //         });
  //       }
  //       else if (otherProxyGroup2.includes(group["name"])) {
  //         Object.assign(group, {
  //           ...groupBaseOption,
  //           "name": group["name"],
  //           "type": "select",
  //           "proxies": ["DIRECT", "Proxy"]
  //         });
  //       }
  //       else if (otherProxyGroup3.includes(group["name"])) {
  //         Object.assign(group, {
  //           ...groupBaseOption,
  //           "name": group["name"],
  //           "type": "select",
  //           "proxies": ["AI"]
  //         });
  //       }
  //       else if (otherProxyGroup4.includes(group["name"])) {
  //         Object.assign(group, {
  //           ...groupBaseOption,
  //           "name": group["name"],
  //           "type": "select",
  //           "proxies": ["美国选择", "Proxy"]
  //         });
  //       }
  //     }

  //     // 默认保留该元素
  //     return true;
  //   });
  config["proxy-groups"] = [];

  // config["proxy-groups"].unshift({
  //   ...customDefaultProxyGroups,
  //   "name": "Proxy"
  // });
  config["proxy-groups"].unshift(...customProxyGroups);

  config["rule-providers"] = customRuleProviders;
  config["rules"] = [];
  config["rules"].unshift(...customRules);
  // for (let i in config["rules"]) {
  //   if (config["rules"][i].startsWith("MATCH")) {
  //     config["rules"][i] = "MATCH,漏网之鱼";
  //   }
  // }
  config["rules"].push("MATCH,漏网之鱼");

  config["dns"]["enable"] = true;
  config["dns"]["use-system-hosts"] = true;
  config["dns"]["enhanced-mode"] = "fake-ip";
  config["dns"]["fake-ip-filter"] = [
    "rrabbit.xyz",
    "+.rrabbit.xyz",
    "p.com",
    "d.com",
    "proxy.com",
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ];
  config["dns"]["default-nameserver"] = [routerIP, DNS1, DNS2];
  if (!("nameserver" in config["dns"])) {
    config["dns"]["nameserver"] = [];
  }
  for (let i in config["dns"]["nameserver"]) {
    if (config["dns"]["nameserver"][i] in config["dns"]["default-nameserver"]) {
      config["dns"]["nameserver"].splice(i, 1);
    }
  }
  config["dns"]["nameserver"].unshift(...config["dns"]["default-nameserver"]);
  if (!("nameserver-policy" in config["dns"])) {
    config["dns"]["nameserver-policy"] = {};
  }
  config["dns"]["nameserver-policy"]["rrabbit.xyz"] = routerIP;
  config["dns"]["nameserver-policy"]["+.rrabbit.xyz"] = routerIP;
  config["dns"]["nameserver-policy"]["xiaoya.host"] = routerIP;
  config["dns"]["nameserver-policy"]["d.com"] = routerIP;

  // 返回修改后的配置
  return config;
}
