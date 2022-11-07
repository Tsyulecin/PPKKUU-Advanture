var startEvent = {
	'first-event': {
		id: "first-event",
		title: "欢迎来到PPKKUU",
		desc: "今天是你来到ppkkuu的第一天，你分配到的宿舍是: 98号楼552宿舍1号床, 你选择",
		logs: "欢迎来到PPKKUU",
		optionList: [
			{
				id: "restInDormitory",
				title: "在宿舍玩手机",
				desc: "搬行李太重啦，还是在宿舍歇会吧！",
				logs: "你在宿舍歇了一会。",
				eventList: [
					'Day1-restInDormitory'
				]
			},
			{
				id: "playOutside",
				title: "出去走走",
				desc: "第一天当然是出去走走啦！",
				logs: "你选择逛逛校园。",
				eventList: [
					'Day1-playOutside'
				]
			}
		]
	},
	'Day1-restInDormitory': {
		id: "Day1-restInDormitory",
		title: "宿舍小憩",
		desc: "搬行李太重啦，还是在宿舍歇会吧！这时候，随着门外一阵喧闹，看来你就要见到你的新舍友了，你觉得他是",
		logs: "遇见新舍友。",
		optionList: [
			{
				id: "introvert",
				title: "内向的人",
				desc: "你觉得他是个内向的人。",
				logs: "你觉得他是个内向的人。",
				eventList: [
					'roommate-introvert'
				]
			},
			{
				id: "extrovert",
				title: "外向的人",
				desc: "你觉得他是个外向的人。",
				logs: "你觉得他是个外向的人。",
				eventList: [
					'roommate-extrovert'
				]
			}
		]
	},
	'roommate-introvert': {
		id: "roommate-introvert",
		title: "舍友见面",
		desc: "学校统一发的三件套大礼包，收拾的平平整整。几套运动服，大多是阿迪耐克迪卡侬优衣库的，没有太夸张前卫的设计。桌上摆了一套洗漱用品，一个有点磕磕碰碰的水杯，新生入学手册和几本书，才上课。最后他摆上了一个黑色台灯开灯坐下，开始看那本入学手册。你选择：",
		logs: "你的舍友和你简单打了个招呼，坐到了你的对铺3号床，然后开始收拾自己的行李。",
		optionList: [
			{
				id: "chat",
				title: "主动攀谈",
				desc: "聊天！聊天！",
				logs: "你决定去加个微信，顺便和他闲聊一会。",
				eventList: [
					'roommate-chatting'
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["friendship3"],
						value: [1]
					}
				}
				]
			},
			{
				id: "socialphobia",
				title: "我是社恐",
				desc: "我是社恐。",
				logs: "我是社恐。",
				eventList: [
				]
			}
		]
	},
	'roommate-chatting': {
		id: "roommate-chatting",
		title: "",
		desc: "你决定去加个微信，顺便和他闲聊一会。你知道了他是竞赛保送生，刚刚正在研究“树洞”“bbs”“选课网”“赛艇”都是什么东西，你听着不明觉厉，也一块在树洞里吃瓜，过了一会你们就各自去吃饭了。",
		logs: "",
		optionList: [
			{
				id: "",
				title: "不错",
				desc: "",
				logs: "",
				eventList: [
				]
			}
		]
	},
	'roommate-extrovert': {
		id: "roommate-extrovert",
		title: "舍友见面",
		desc: "好自来熟的人！而且好多行李！一进门他就给了你一个热情的问候，一边在4号位拆他的行李一边和你攀谈，居然真的有人能用声音填满房间，什么人形大喇叭！“行李搬进来也太费劲了，真希望宿舍里配个电梯”，“你家是哪里啊，你们今年高考blabla”，“我从家里拿了好多零食你要不要来点”（既然抱怨行李重就不要在里面装这么多零食啊），你选择",
		logs: "你的舍友向你分享零食。",
		optionList: [
			{
				id: "roommate-noSnack",
				title: "不了谢谢",
				desc: "还是算了",
				logs: "你拒绝了他。",
				eventList: [
					''
				]
			},
			{
				id: "roommate-snack",
				title: "恭敬不如从命",
				desc: "白嫖零食！",
				logs: "你欣然接受了他的分享。",
				eventList: [
					'roommate-luggaging'
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["friendship4"],
						value: [1]
					}
				}
				]
			}
		]
	},
	'roommate-luggaging': {
		id: "roommate-luggaging",
		title: "收拾行李的舍友",
		desc: "他是上铺，来回爬上爬下收拾行李，虽然没有主动要求你，你决定：",
		logs: "",
		optionList: [
			{
				id: "help",
				title: "主动帮忙",
				desc: "主动帮忙",
				logs: "",
				eventList: [
					'roommate-help'
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["friendship4"],
						value: [1]
					}
				}
				]
			},
			{
				id: "notHelp",
				title: "我也很累啊算了吧",
				desc: "我也很累啊算了吧",
				logs: "",
				eventList: [
					
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["friendship4"],
						value: [-1]
					}
				}
				]
			}
		]
	},
	'roommate-help': {
		id: "roommate-help",
		title: "主动帮忙",
		desc: "你帮他把被褥递上去，这样他就不用一遍遍下来了，“帮大忙了谢谢！”，他感激地加了你的微信约你去吃饭，来到家园食堂你们认真扫ppkkuu二维码的时候不知道为什么旁边的高年级学生用慈祥的眼光看着你们（笑）",
		logs: "",
		optionList: [
		]
	},
	'Day1-playOutside': {
		id: "Day1-playOutside",
		title: "出去走走",
		desc: "第一天当然是出去走走啦！但由于高高德德地图的缺德导航，你很快迷路了，这时候你选择",
		logs: "你迷路了",
		optionList: [
			{
				id: "askVolunteer",
				title: "问问志愿者",
				desc: "问问志愿者",
				logs: "你向志愿者提出求助",
				eventList: [
					'Day1-askVolunteer'
				]
			},
			{
				id: "askPasserby",
				title: "问问路过的同学",
				desc: "问问路过的同学",
				logs: "路过的同学帮你找到了路，你回到了宿舍",
				eventList: [
					''
				]
			},
			{
				id: "wander",
				title: "自己瞎转",
				desc: "自己瞎转",
				logs: "你自己瞎转",
				eventList: [
					'Day1-wandering'
				]
			}
		]
	},
	'Day1-askVolunteer': {
		id: "Day1-askVolunteer",
		title: "问问志愿者",
		desc: "你看到了附近的志愿者，她告诉你你现在在的位置是29楼，并贴心的询问你是否需要她帮忙带路一小段回宿舍，你看了眼时间，决定：",
		logs: "对方询问你是否需要带路。",
		optionList: [
			{
				id: "haveLunch",
				title: "算了，去吃饭",
				desc: "干饭人，干饭魂！",
				logs: "你前去吃饭。",
				eventList: [
					'Day1-haveLunch'
				]
			},
			{
				id: "goWithHer",
				title: "好耶",
				desc: "好耶！",
				logs: "",
				eventList: [
					'Day1-goWithVolunteer'
				]
			}
		]
	},
	'Day1-goWithVolunteer': {
		id: "Day1-goWithVolunteer",
		title: "一路闲聊",
		desc: "她带你穿过拥挤的人群，一路上你们闲聊，她提到自己做志愿者是出于想认识朋友，有趣和想帮助他人，鼓励你在大学里找到自己适合的道路，好好享受四年的青春。",
		logs: "你跟随学姐闲聊了一路。",
		optionList: [
			{
				id: "",
				title: "或许，以后还有机会遇到她吗？",
				desc: "",
				logs: "",
				eventList: [
					''
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["love1"],
						value: [1]
					}
				}
				]
			}
		]
	},
	'Day1-haveLunch': {
		id: "Day1-haveLunch",
		title: "家园吃饭",
		desc: "这时你忽然看到了熟悉的身影，ta是",
		logs: "你婉拒了好心的学姐，前往距离最近的家园食堂吃饭。",
		optionList: [
			{
				id: "classmate",
				title: "老同学",
				desc: "",
				logs: "",
				eventList: [
					'Day1-lunch-classmate'
				]
			},
			{
				id: "roommate",
				title: "今天新认识的舍友",
				desc: "",
				logs: "",
				eventList: [
					'Day1-lunch-roommate'
				]
			}
		]
	},
	'Day1-lunch-classmate': {
		id: "Day1-lunch-classmate",
		title: "老同学",
		desc: "竟然是高中同班同学！正打算过去约饭却忽然发现他正在和一起考上ppkkuu的女朋友卿卿我我，你感到有一丝尴尬于是只好打了个招呼就自己去吃饭了",
		logs: "",
		optionList: [
			{
				id: "",
				title: "好吧",
				desc: "",
				logs: "",
				eventList: [
					''
				]
			}
		]
	},
	'Day1-lunch-roommate': {
		id: "Day1-lunch-roommate",
		title: "新认识的舍友",
		desc: "是你同宿舍2号床的新舍友，不知道什么时候已经收拾好宿舍了，没注意和他对上了视线。虽然这里并不是宝O梦世界（），但是对视之后也逃不掉了，虽然尴尬不知道说什么你还是和他一起去吃饭了。虽然尴尬，聊过之后你感觉他其实是个不错的人，没有太强的个人特色但也很好相处。",
		logs: "",
		optionList: [
			{
				id: "",
				title: "不错",
				desc: "",
				logs: "",
				eventList: [
				],
				functionList: [
				{
					type: "itemAdd",
					info: {
						name: ["friendship2"],
						value: [1]
					}
				}
				]
			}
		]
	}
}
