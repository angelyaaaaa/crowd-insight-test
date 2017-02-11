$(function(){
	localData = function(chartType, date){
		switch(parseInt(chartType)){
			case 0:
			case 5:
				var thisObject = this;
				this.hasInfo = true,
				this.x = date,
				this.y = 0,
				this.size = 1;
				(function(){			
					switch(date){
						case "2016-03-16":
						thisObject.sentiment = [109, 29, 42];
						thisObject.bar = [
							{number: 19, rank: 1, word: "智慧", sentiment: 1},
							{number: 17, rank: 2, word: "喜歡", sentiment: 1},
							{number: 15, rank: 3, word: "經驗", sentiment: 1},
							{number: 14, rank: 4, word: "喜歡的", sentiment: 1},
							{number: 13, rank: 5, word: "發展", sentiment: 1},
							{number: 15, rank: 1, word: "沒有", sentiment: 0},
							{number: 13, rank: 2, word: "吝嗇", sentiment: 0},
							{number: 13, rank: 3, word: "不是", sentiment: 0},
							{number: 11, rank: 4, word: "問題", sentiment: 0},
							{number: 8, rank: 5, word: "不知", sentiment: 0}
						];
						break;
						case "2016-03-17":
						thisObject.sentiment = [136, 25, 29];
						thisObject.bar = [
							{number: 23, rank: 1, word: "開發", sentiment: 1},
							{number: 22, rank: 2, word: "成為", sentiment: 1},
							{number: 21, rank: 3, word: "喜歡", sentiment: 1},
							{number: 16, rank: 4, word: "智慧", sentiment: 1},
							{number: 16, rank: 5, word: "發展", sentiment: 1},
							{number: 16, rank: 1, word: "問題", sentiment: 0},
							{number: 15, rank: 2, word: "沒有", sentiment: 0},
							{number: 13, rank: 3, word: "吝嗇", sentiment: 0},
							{number: 12, rank: 4, word: "利用", sentiment: 0},
							{number: 11, rank: 5, word: "不是", sentiment: 0}
						];
						break;
						case "2016-03-18":
						thisObject.sentiment = [121, 38, 42];
						thisObject.bar = [
							{number: 17, rank: 1, word: "成為", sentiment: 1},
							{number: 16, rank: 2, word: "智慧", sentiment: 1},
							{number: 16, rank: 3, word: "喜歡", sentiment: 1},
							{number: 15, rank: 4, word: "知道", sentiment: 1},
							{number: 12, rank: 5, word: "喜歡的", sentiment: 1},
							{number: 12, rank: 2, word: "沒有", sentiment: 0},
							{number: 14, rank: 1, word: "不是", sentiment: 0},
							{number: 12, rank: 3, word: "吝嗇", sentiment: 0},
							{number: 10, rank: 4, word: "問題", sentiment: 0},
							{number: 7, rank: 5, word: "不能", sentiment: 0}
						];
						break;
						case "2016-03-19":
						thisObject.sentiment = [72, 28, 31];
						thisObject.bar = [
							{number: 12, rank: 1, word: "重要", sentiment: 1},
							{number: 11, rank: 2, word: "知道", sentiment: 1},
							{number: 11, rank: 3, word: "喜歡", sentiment: 1},
							{number: 10, rank: 4, word: "成為", sentiment: 1},
							{number: 10, rank: 5, word: "經驗", sentiment: 1},
							{number: 14, rank: 1, word: "問題", sentiment: 0},
							{number: 14, rank: 2, word: "不是", sentiment: 0},
							{number: 11, rank: 3, word: "沒有", sentiment: 0},
							{number: 8, rank: 4, word: "不能", sentiment: 0},
							{number: 7, rank: 5, word: "不斷", sentiment: 0}
						];
						break;
						case "2016-03-20":
						thisObject.sentiment = [80, 25, 27];
						thisObject.bar = [
							{number: 13, rank: 1, word: "知道", sentiment: 1},
							{number: 11, rank: 2, word: "機會", sentiment: 1},
							{number: 11, rank: 3, word: "發展", sentiment: 1},
							{number: 9, rank: 4, word: "智慧", sentiment: 1},
							{number: 9, rank: 5, word: "成為", sentiment: 1},
							{number: 16, rank: 1, word: "沒有", sentiment: 0},
							{number: 11, rank: 2, word: "不是", sentiment: 0},
							{number: 10, rank: 3, word: "問題", sentiment: 0},
							{number: 8, rank: 4, word: "不會", sentiment: 0},
							{number: 6, rank: 5, word: "不可", sentiment: 0}
						];
						break;
						case "2016-03-21":
						thisObject.sentiment = [100, 28, 41];
						thisObject.bar = [
							{number: 16, rank: 1, word: "智慧", sentiment: 1},
							{number: 15, rank: 2, word: "發展", sentiment: 1},
							{number: 14, rank: 3, word: "知道", sentiment: 1},
							{number: 11, rank: 4, word: "喜歡", sentiment: 1},
							{number: 10, rank: 5, word: "成為", sentiment: 1},
							{number: 16, rank: 1, word: "沒有", sentiment: 0},
							{number: 16, rank: 2, word: "不是", sentiment: 0},
							{number: 14, rank: 3, word: "不會", sentiment: 0},
							{number: 8, rank: 4, word: "問題", sentiment: 0},
							{number: 7, rank: 5, word: "利用", sentiment: 0}
						];
						break;
						case "2016-03-22":
						thisObject.sentiment = [134, 29, 33];
						thisObject.bar = [
							{number: 23, rank: 1, word: "喜歡", sentiment: 1},
							{number: 21, rank: 2, word: "開發", sentiment: 1},
							{number: 18, rank: 3, word: "智慧", sentiment: 1},
							{number: 17, rank: 4, word: "成為", sentiment: 1},
							{number: 15, rank: 5, word: "喜歡的", sentiment: 1},
							{number: 14, rank: 1, word: "沒有", sentiment: 0},
							{number: 14, rank: 2, word: "吝嗇", sentiment: 0},
							{number: 11, rank: 3, word: "不是", sentiment: 0},
							{number: 10, rank: 4, word: "問題", sentiment: 0},
							{number: 8, rank: 5, word: "不知", sentiment: 0}
						];
						break;
						case "2016-03-23":
						thisObject.sentiment = [90,21,28];
						thisObject.bar = [
							{"number":16,"rank":1,"word":"成為","sentiment":1},
							{"number":14,"rank":2,"word":"知道","sentiment":1},
							{"number":10,"rank":3,"word":"重要","sentiment":1},
							{"number":9,"rank":4,"word":"進行","sentiment":1},
							{"number":9,"rank":5,"word":"喜歡","sentiment":1},
							{"number":13,"rank":1,"word":"不是","sentiment":0},
							{"number":12,"rank":2,"word":"沒有","sentiment":0},
							{"number":8,"rank":3,"word":"無法","sentiment":0},
							{"number":6,"rank":4,"word":"利用","sentiment":0},
							{"number":6,"rank":5,"word":"不會","sentiment":0}
						];
						break;
						case "2016-03-24":
						this.hasInfo = false,
						thisObject.sentiment = [];
						thisObject.bar = [];
						break;
						
					}		
				})();		
			
			break;				
			case 1:
				switch(date){
				case "2016-03-16":
					this.media = [
						{
						  "id": "media-1",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 7,
						  "articles": [
							{
							  "name": "台灣的創業環境到底好不好？日前，一篇外國網友針對台灣創業環境的討論串在網路上引發爭議，而在美國接受高等教育並擁有豐富工作經驗的連續創業家貝克菜也撰文反擊。",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154035775939284"
							},
							{
							  "name": "三比零。",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154035173529284"
							},
							{
							  "name": "一年一度結合互動科技、電影、音樂的盛會SXSW（South by South West），前日在美國德州奧斯丁盛大展開，由互動科技主題開啟活動盛事，而今年不僅是SXSW第30屆，也是美國總統歐巴馬首度蒞臨參與，談論現代政府怎麼看待、應用科技，來改善社會問題。",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154034651794284"
							},
							{
							  "name": "「喜歡程式設計的小孩都是活在自己的世界裡面的」，安迪·魯賓說，「但如果你做的是 R2D2 機器人，它會帶你走出自己的世界。」十五歲的時候，熱愛《星際大戰》的魯賓親手做了一個 R2D2 機器人，還寫了程式讓它滾到了弟弟的房間裡。",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154030671024284"
							},
							{
							  "name": "「企業到一定程度時，決定不做比決定做還重要！做很容易，現在網路發達，大家知道很多模式，什麼都可以做，但是有些事要忍，不可能什麼都做，要有足夠的資源和時間。」",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154030723454284"
							},
							{
							  "name": "還要把自己逼得多緊？深呼吸一下吧！美國史丹佛大學減壓科技實驗室（Calming Technology Lab）經過七年研發，設計了這款 Spire，可以夾在皮帶、內衣上，幫你偵測呼吸、心跳的感測器。透過內建的壓力指數分析，能夠紀錄、並且提醒你是否應該放鬆心情。這....根本是上班族必備物阿~",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154030685094284"
							},
							{
							  "name": "新創公司Cruise Automation成立至今3年，其主要技術是透過導入感應器與運算技術，將某些車型的汽車轉化為自駕車。這3年以來，Cruise Automation曾獲得Spark Capital、Founder Collective等投資1880萬美元，公司市值約9千萬美元。",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154034103659284"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 6,
						  "articles": [
							{
							  "name": "【SmartM 本週電商大事】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946514395396438"
							},
							{
							  "name": "【 4種方法幫你建立真正的「鐵粉軍團」】",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/945867785461099"
							},
							{
							  "name": "【跨境電商沒你想的那麼難】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/945878575460020"
							},
							{
							  "name": "【進入電商戰國時代，用快閃店創造線下體驗】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/945863268794884"
							},
							{
							  "name": "【創業不只靠熱血！翻轉遊戲規則的社會企業】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/945876502126894"
							},
							{
							  "name": "【行銷影片總是不夠吸引人嗎？4項建議讓你更加上鏡】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/945864238794787"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": -1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "網大新課出爐報你知【聽財報說故事】",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1062583967120925"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 10,
						  "articles": [
							{
							  "name": "「我認為隨著人工智慧時代的到來，這是可能的。但目前人工智慧的能力還太有限，距離這個可能性還太遠。我估計，再過 10 年這個問題會成為可能。」",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254431286566"
							},
							{
							  "name": "電梯行銷經常被創業者拿來作為對於風險創投、天使投資人進行簡報的方式，這種方式可以考驗創業者是否可以在有限的時間內將重點表達出來，而投資人也可藉由這些有限的內容來衡量創業家的點子、團隊以及能力究竟如何。",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254379606566"
							},
							{
							  "name": "以目前 Google Fiber 對外提供高達 1Gbps (1000Mbps) 下載速度表現， Google 預計未來能進一步提升至 1000 倍，也就是高達 1Tbps下載速度，大約可在 7 毫秒左右完成下載一部數位電影檔案。",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254403096566"
							},
							{
							  "name": "補充一個小知識讓大家幻想破滅一下： ",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153257334466566"
							},
							{
							  "name": "「在我做軟體工程師時，有很多開會的時間，我寧願拿去寫程式。開會浪費了我不少時間。但我並未意識到，工程師其實在等待測試和 build 完成上，也浪費了不少時間。」",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254433611566"
							},
							{
							  "name": "研究人員還發現「用戶指紋」採集技術還可以識別用戶的機器。經由在瀏覽器執行消耗 CPU 資源的 Javascript ，攻擊者可以記錄下執行任務所需的時間（每台機器的執行時間都不一樣進從而成為機器的指紋），然後利用這個訊息探查使用 Tor 上網的究竟是哪台機器。",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153255992961566"
							},
							{
							  "name": "一個對於小 BABY 來說也是簡單的動作，機器人要練習 80 萬次。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153255968351566"
							},
							{
							  "name": "None",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153257431511566"
							},
							{
							  "name": "從公司的角度講，面試的根本目的是找到「能夠做好工作」的人，而「高學歷」，「演算法好」，「基礎好」，「有經驗」這些都是表象而不是根本，它們並不能直接和「做好工作」劃上等號。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254394141566"
							},
							{
							  "name": "在金融的領域，每個人都需要學習會計，因為會計是金融的語言，但並不是每個人都要成為會計師。在一個科技創業團隊，程式是共通的語言，不是每個人都要成為開發者，但每個人都要學習共通的語言。",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153254376076566"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "\"...無論是最初輟學加入早期的 Google、還是從總部飛回百廢待興的 Google 中國，Tiger 說他挺相信和堅持的一點是—— 在人生重要的時間節點和選擇上，不妨拋開別人眼中的應該和最好，去擁抱更多的不確定性，跟著自己的感覺走...\"",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153850464550491"
							},
							{
							  "name": "#每日精選英文新聞 如果不要把 Rich 翻譯成「有錢」，而是翻譯成「富足」，那麼這篇文章中，有好多個一針見血的點：",
							  "ranking": 2,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153849973815491"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "貓奴們，你的主人找你喔～",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1159785120721540"
							},
							{
							  "name": "當了媽咪後，出門不一定認真穿搭自己，卻最喜歡幫寶寶打扮這些了😂",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1159663510733701"
							},
							{
							  "name": "好想立刻去 🌸🌸🌸",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1159545404078845"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 9,
						  "articles": [
							{
							  "name": "工欲善其事，必先利其器",
							  "ranking": 8,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982669309561"
							},
							{
							  "name": "來自藝術家的攝影作品，融入於背景的人像...讓你第一句冒出來的對白是？！",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982663619561"
							},
							{
							  "name": "曾經當紅的遊戲角色...",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982695659561"
							},
							{
							  "name": "來自 Wenhengju Design 的設計",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982677469561"
							},
							{
							  "name": "大家有懂嗎？",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982671749561"
							},
							{
							  "name": "學著定義＋",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982704399561"
							},
							{
							  "name": "【 關於惡搞 】",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982690449561"
							},
							{
							  "name": "溫暖的迷你路標 // ",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982698539561"
							},
							{
							  "name": "該不會看著看著，就天亮了吧...",
							  "ranking": 9,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153982046944561"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "週六夜晚，來學習中國企業「華為」如何從默默無名走向國際？",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1289452841081305"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 11,
						  "articles": [
							{
							  "name": "頭昏不開車也不要網購…",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979288078832032"
							},
							{
							  "name": "老闆我說你帥都是真心的啊！！！",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978999475527559"
							},
							{
							  "name": "哈哈哈XD 這個很有梗",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978689482225225"
							},
							{
							  "name": "KOF14的人物越來越多了~",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706"
							},
							{
							  "name": "這一款超適合養會發光的小魚的！！",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978650865562420"
							},
							{
							  "name": "適合在這種天氣腳又很癢的車友們…",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100"
							},
							{
							  "name": "聲音地圖目前收錄的聲音資料已將近5,700個，遍及台灣本島與外島地區，從地圖看來絕大多數的音效收錄在台灣北部.. 這件事情真的太酷了！",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978687908892049"
							},
							{
							  "name": "小編不是蘋果迷！",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978690098891830"
							},
							{
							  "name": "有預訂 HTC VIVE 虛擬實境裝置的朋友，要配哪台桌機比較好呢？就拼 ASUS 電競電腦 G20CB-0041A670GXT 如何？不囉唆看規格：",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978541152240058"
							},
							{
							  "name": "小白有這種主人真是太幸福了…",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979268368834003"
							},
							{
							  "name": "變異LOGO有的變得更好看了耶～",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979231388837701"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 7,
						  "articles": [
							{
							  "name": "微軟想用這款工具幫你從 Evernote 轉投 OneNote",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949238345168209"
							},
							{
							  "name": "是否夠 Pro？iPad Pro 一個月使用心得",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949404265151617"
							},
							{
							  "name": "【台灣 α7 系列攝影展比賽成果展正式開展】",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949396245152419"
							},
							{
							  "name": "AlphaGo 再勝一局，3-0 領先李世石",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949338518491525"
							},
							{
							  "name": "真的。 \u003d\u003d*",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949506435141400"
							},
							{
							  "name": "老任的首款手遊《Miitomo》將於下週在日本上線",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949307335161310"
							},
							{
							  "name": "Adobe 又在為 Flash 的「致命漏洞」發補丁了",
							  "ranking": 7,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/949178611840849"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "比特幣只是數位貨幣，但它採用的區塊鏈技術卻能作為新一代的多中心化資料庫，解決傳統分散式資料庫的同步問題，結合P2P網路顛覆過去的資料傳遞與儲存方式。",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/811471208979292"
							},
							{
							  "name": "微軟家ERP終於也登上了Azure",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/811726815620398"
							},
							{
							  "name": "IP網路應用持續走紅，然而光纖通道網路規格推陳出新與商品化，也並未因此停滯。",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/811190205674059"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【直播里程碑】學長姐直播大成功！感謝 200 位學長姐的無私分享！ ",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1005379702840919"
							},
							{
							  "name": "【專欄文章】大學面試技巧大公開！讓你在申請者中脫穎而出",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1005376832841206"
							},
							{
							  "name": "【IOH 講座公告】有任務的學習，我在政大財管感受的國際化衝擊！",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1004871552891734"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.16666666666666666,
						  "count": 14,
						  "articles": [
							{
							  "name": "如果手機能夠支援這種格式，16GB的手機就可以撐更久了！",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153607506270674"
							},
							{
							  "name": "蜘蛛人到底有多少件制服？",
							  "ranking": 14,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153604536005674"
							},
							{
							  "name": "圍棋界的獨孤求敗已經出現了...",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608302520674"
							},
							{
							  "name": "皇室戰爭到了中國被山寨成「全民三國大戰」....野豬騎士變張飛！",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153609065750674"
							},
							{
							  "name": "iPhone 6s vs Galaxy S7機身大PK！到底誰勝出呢？",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153599077605674"
							},
							{
							  "name": "長期以來可以免費自動上傳Flickr的工具突然宣佈要付費，這導致外媒Wired罕見的呼籲網友放棄Flickr，他們講的有沒有道理呢？",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608530115674"
							},
							{
							  "name": "不用暴力破解，甚至連鍵盤都不需要，僅用「磁場」來推算關鍵密碼...",
							  "ranking": 12,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153603528580674"
							},
							{
							  "name": "今年 CES 發表以來廣受關注的 Nikon D5 以及 D500 在今天公布了售價，這兩台頗受期待的 FX 與 DX 旗艦自即日開始預購，D5 將於 3 月 24 日上市，D500 則將在四月底上市。",
							  "ranking": 13,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153606860630674"
							},
							{
							  "name": "不久前發表，才在 CP+ 第一次亮相的 Sony「G Master」鏡頭也在3/10抵台了，不但展出了 85mm F1.4、24-70mm F2.8 兩款 GM 鏡，也進一步公佈台灣售價。不過上市日期仍未定，且仍未展出大光圈望遠鏡頭 70-200 F2.8 GM。",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608006785674"
							},
							{
							  "name": "李師傅的背水一戰現在直播中！",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153607099525674"
							},
							{
							  "name": "NVIDIA 新推出的 GeForce 900MX 系列，新增配備 GDDR5 記憶體選項，此即便處理器已經普遍整併內顯，平價筆電還是經常能見到配備入門等級獨立顯示晶片，這讓顯示晶片廠商有了改朝換代的動力",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608625050674"
							},
							{
							  "name": "在昨日 Canon 又發表了入門級的 DSLR 機種 1300D（Rebel T6），可說是 1200D 的後繼機，預估 Kit 組售價兩萬內搞定!",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608619425674"
							},
							{
							  "name": "到底關掉背景的應用程式會不會讓手機更省電？來聽聽蘋果的官方答覆吧！",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608587435674"
							},
							{
							  "name": "iPhone 7傳聞將會推出雙鏡頭，但是這個雙鏡頭與之前其它廠商推出的雙鏡頭作用不大一樣，根據這份專利文件，它可以玩的功能可能出乎你的意料之外！",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153608543095674"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.2857142857142857,
						  "count": 15,
						  "articles": [
							{
							  "name": "台灣目前雖然有大型會展品牌，但展館面積太小也是一項缺點，台灣該如何結合展會發揚台灣現有產業優勢？MWC 2016 是否有我們能學習的？",
							  "ranking": 15,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/995701217149795"
							},
							{
							  "name": "中國房地產是否會步上30年前東京的後塵？！",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996156700437580"
							},
							{
							  "name": "生物科技的進展，往能控制單一細胞等級邁進",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996229553763628"
							},
							{
							  "name": "透過說故事、詩、電影片段激發哲學議題的討論，幫助孩子設定和提出問題，開展建設性對話，產生思辯。根據 EEF 研究顯示 15 歲青少年測驗得到高分的有 63%，相比弱勢學生只有 37%。要拉近教育鴻溝，現在愈來愈多老師們相信哲學可以扮演重要角色。",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996146057105311"
							},
							{
							  "name": "AlphaGo 臺灣團隊成員黃世傑的説明很清楚，李世乭仍然是值得尊敬的棋手。是今天第三戰前不錯的幕後説明。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996178670435383"
							},
							{
							  "name": "日食與月食的出現總是引起許多人注意，現在 NASA 讓你用衛星的視角，從外太空看日全食。",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996141617105755"
							},
							{
							  "name": "輸了就翻臉，果然是韓國人 .... ",
							  "ranking": 14,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996117637108153"
							},
							{
							  "name": "為了減少資源的浪費，將空調商品個人化看來會是個不錯的趨勢，不過要能實際投入市場，還需要不少時間。",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996143053772278"
							},
							{
							  "name": "iPhone 新專利中發現，未來 iPhone 的 Home 鍵可能將採取液態金屬設計，增加耐用度。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996140630439187"
							},
							{
							  "name": "記住 2016 年 3 月 12 日，這天是電腦正式超越人腦的起點。",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996261000427150"
							},
							{
							  "name": "uber如果想成爲可靠的長期運輸系統，安全性、客戶服務的議題無法回避。",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996157197104197"
							},
							{
							  "name": "英國政府準備在 2016 年底前測試無人自駕貨車車隊，不過，當像貨車駕駛這種吃重的工作逐漸被科技取代，是否會沿生更多問題也值得深思。",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996148147105102"
							},
							{
							  "name": "每次出國回來身上總是一堆零錢嗎？TravelerBox 幫你把這些零錢存進帳戶裡，還可以直接用來儲值 Paypal 或 Skype 帳戶。",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996140147105902"
							},
							{
							  "name": "工作外流，貧富懸殊不止發生在美國，全球普遍存在這一痛苦。 川普能是美國這個問題的解藥嗎 ？",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996171583769425"
							},
							{
							  "name": "果然書到用時方恨少，就差那一點點",
							  "ranking": 13,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/996140200439230"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": -1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "有人說，台灣人天天在提設計，街上的建築卻是醜得要命。或許你也曾經抱怨過街上糟糕的市容？但這位建築師卻說：她在台北的建築裡看到了另一種美。",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1078750695478840"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 7,
						  "articles": [
							{
							  "name": "安迪·魯賓（Andy Rubin，1963 -），Android 系統的創造者，也是早期智慧型手機 Sidekick 的創造者。",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/952998928109564"
							},
							{
							  "name": "許多人覺得意圖「開後門」侵犯Apple用戶「自由」的FBI，根本就是圖謀不軌的「老大哥」（Big Brother）。這樣說來，Apple應該在這個爭議上立於不敗對吧？事情恐怕沒那麼簡單。經調查結果顯示，比半數還多一點點的美國人其實認為Apple應該協助FBI。",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/952996161443174"
							},
							{
							  "name": "友達光電前總經理陳來助，從科技業轉戰食品品牌微熱山丘，2015年創業成立天來創新生活產業，投入難以定義的「新生活產業」，要跨界整合科技、健康及服務業。在經歷不斷跨界歸零後，他從專業經理人變成創業者，巧妙結合科技業的營運管理和科學效率、食品業的品牌經驗，另有一番體會。",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/952995158109941"
							},
							{
							  "name": "「在 1982 年，整個美國看不到設計的景象，每當討論到設計領域時，每個人都會變成傻瓜，功能大於形式，這句話已經成為糟糕設計的藉口。好的設計改善人們真正的生活，人們需要被情感而不是理性所說服。」",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/952997834776340"
							},
							{
							  "name": "靠著 3 個 app，去年創造 23 億美金營收（約台幣 756 億），9 億美金（約台幣 296 億）獲利，繼憤怒鳥之母 Rovio 後，芬蘭再度藉著手機遊戲寫下驚嘆號，這家公司是 SuperCell，你的手機中可能就裝有它所開發最紅的「部落衝突」。",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/953000858109371"
							},
							{
							  "name": "[內文] 退學創業真的不能讓你成為下一個賈伯斯。很多被誤導的人認為，只要他們能擺脫僵硬化的教育，就能創辦下一個蘋果公司。但說真的，輟學讓你成為一個億萬富翁的可能性很低。",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/953000251442765"
							},
							{
							  "name": "兩個月前才宣佈旗下「玩美彩妝」App下載數破億的「玩美移動」，11日又宣佈旗下四個App「玩美彩妝」、「玩美相機」、「玩美甲」和「玩美圈」總下載數也突破兩億！",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/952994431443347"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 25,
						  "articles": [
							{
							  "name": "如果你是一隻動物，會是什麼？",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034051799950892"
							},
							{
							  "name": "「我個人很喜歡行動付款，但是台灣的法條跟規範，限制了小型電子商務公司發展，政府並不相信我們可以提供確實的安全保障。」",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034551476567591"
							},
							{
							  "name": "科技總是會取代舊有工作，但也產生新的工作機會，這也是為何有些論點認為不用為機器取代人力感到恐慌的原因。",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034805346542204"
							},
							{
							  "name": "人腦比不上電腦，那人類到底要何去何從？",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034803679875704"
							},
							{
							  "name": "電顫琴、Bass、大鼓、低音吉他、鈸…這麼多樂器一次全包了，有沒有看過這麼邊打小鋼珠還這麼專業的一人樂隊！",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034802309875841"
							},
							{
							  "name": "沒有技術背景不是你錯，但如果你不想辦法加強知識，那就別怪工程師把你的話當耳邊風！",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034572576565481"
							},
							{
							  "name": "Fintech變革潮流越洋而來，才剛在台灣落地，卻面臨苦苦掙扎一線生機的窘況，是法律束縛？還是金融業的腦袋還在停機？",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034683806554358"
							},
							{
							  "name": "已經三月了！2016 第一季，各位創業者你們過得好嗎？",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034571919898880"
							},
							{
							  "name": "英文遇到顏色真的會詞窮......",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034051603284245"
							},
							{
							  "name": "從各個角度談起來，台灣的創業環境充滿天時、地利、人和的絕佳條件，正適合培育剛起步的創業家打造一方天地。",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1035128226509916"
							},
							{
							  "name": "【FinTech 商機台灣必須搶下！技術人才在其中可有舞台？】",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034550646567674"
							},
							{
							  "name": "各位小資女小資男，Google 小哥的省錢方式，或許你我也可以看齊！（不過在臺北要租這麼大的車位，好像就抵掉租房的錢... ...）",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034801593209246"
							},
							{
							  "name": "謠言製造者、沒問題先生、隱性情侶......",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034052563284149"
							},
							{
							  "name": "蔡英文說：「年輕人不要害怕與政府溝通！跟政府溝通不要在乎溫良恭儉讓，而且可以放大音量。政府一次沒聽到可以說第二次，第二次沒聽到，第三次可以拍桌子，讓政府注意到你。但是，也不要第一次就拍桌子。」XDDD",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034802606542478"
							},
							{
							  "name": "「為什麼創業？」",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034805163208889"
							},
							{
							  "name": "群眾募資在台灣已經不是一個新鮮名詞，但它又是怎麼不知不覺進入我們的生活？",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034803929875679"
							},
							{
							  "name": "不開始寫 Code，想再多都是枉然！",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034570993232306"
							},
							{
							  "name": "在作出開除的決定前，我總是存有疑慮，是否是自己管理能力不足，導致這個員工出現問題，是否我提升自己的管理技巧，就不會出現這樣的問題 ... ..",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034803823209023"
							},
							{
							  "name": "在職場上如何披荊斬棘獲得成功？賈伯斯靠著「專注、拒絕」兩個關鍵點，把蘋果轉型成影響世界的重要企業。",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034806699875402"
							},
							{
							  "name": "Benz：生日快樂，不過我是老大",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034802816542457"
							},
							{
							  "name": "難道除了我大家都在過爽日子？",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034052613284144"
							},
							{
							  "name": "在人生重要的時間節點和選擇上，不妨拋開別人眼中的應該和最好，去擁抱更多的不確定性，跟著自己的感覺走，看到的人生風景反而更多。",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034803369875735"
							},
							{
							  "name": "有四個 bar 可以調整比例，排列組合下來可以喝到上百種的啤酒吧ＸＤ",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034051669950905"
							},
							{
							  "name": "是累積了十年經驗的資深工程師，或只是待了十年的資深菜鳥？",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034803523209053"
							},
							{
							  "name": "「有人誤以為進入 Facebook 的都是才華橫溢的工程師，但其實他們是一群用 Windows XP 寫 PHP 的人。說他們是駭客幾乎跟罵人差不多。」",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034805076542231"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "「給毛孩子的愛永遠都不嫌遲，就算生命只剩下最後的七天。」",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1278031575546162"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "創新創業激勵計畫",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【創新。浮濫】",
							  "ranking": 2,
							  "src": "創新創業激勵計畫",
							  "url": "https://www.facebook.com/498486833520105/posts/1005928206109296"
							},
							{
							  "name": "【創業。辛酸】",
							  "ranking": 1,
							  "src": "創新創業激勵計畫",
							  "url": "https://www.facebook.com/498486833520105/posts/1005930479442402"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "TEDx SINGAPORE",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "Wonderful and humorous #TED2016 talk by the Prime Minister of Bhutan",
							  "ranking": 1,
							  "src": "TEDx SINGAPORE",
							  "url": "https://www.facebook.com/27675774958/posts/10150680879934959"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【03/13-03/19活動預報】",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1523176194644514"
							},
							{
							  "name": "有時候急著把紙摺半，對準一摺卻發現歪的離譜嗎？",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1522888101339990"
							}
						  ]
						}
					];
				break;
				case "2016-03-17":
					this.media = [
												{
						  "id": "media-1",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 7,
						  "articles": [
							{
							  "name": "【質感生活浪潮襲來 ，文創商機有多大？以Pinkoi增資為例】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948308161883728"
							},
							{
							  "name": "【虛擬現實+人工智能+傳統行業，一個新的時代正在到來】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946496482064896"
							},
							{
							  "name": "【行銷人，你也掉入了程序化購買的這三大迷思嗎?】",
							  "ranking": 7,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946494502065094"
							},
							{
							  "name": "【「立即購買」鍵為何還無法轉化成社群消費力？】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948287478552463"
							},
							{
							  "name": "【東南亞，奢侈品電商的下一個新藍海】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948200458561165"
							},
							{
							  "name": "【運用大數據前，公司可能面臨的5個挑戰】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946495962064948"
							},
							{
							  "name": "【客戶管理關係 V.S.客戶關係管理，哪個更好？】",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948303928550818"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.16666666666666666,
						  "count": 15,
						  "articles": [
							{
							  "name": "由於這場失利，AlphaGo 得以正式進入世界職業圍棋選手排名，因為按照世界職業圍棋排名網站 GoRatings.org 的算法，如果一名選手從未落敗，就不會進入排名統計。 這次對戰的韓國選手李世乭則排名第五，第一名為中國棋士柯潔。",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263143511566"
							},
							{
							  "name": "AI 眼中的世界是什麼模樣？「一棵樹爬上了一塊木頭。一隻大鳥坐在山頭。一輛自行車斜靠在另一輛自行車上。」這個 iPhone app 會利用神經網路技術，把鏡頭中的畫面形容給你聽，有的時候平鋪直述，有的時候卻又天馬行空。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263269621566"
							},
							{
							  "name": "現世界排名第一的中國圍棋選手柯潔九段在微博上發表言論，公然約戰 AlphaGo，柯潔在微博寫道：「來吧！管你是阿法狗還是阿法貓！我柯潔在棋上什麼大風大浪沒見過？讓風暴再來的猛烈點吧！」",
							  "ranking": 14,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566"
							},
							{
							  "name": "Google 無人車專案負責人 Chris Urmson 說，在這個計畫中常碰到各種奇怪的狀況，包括裸體的路人翻過引擎蓋、婦人在路上趕鴨，還有道路大積雪⋯⋯",
							  "ranking": 13,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262641666566"
							},
							{
							  "name": "以前交友網站在大家心目中，是個真實性不高、有詐騙可能的危險之地，但現在相關軟體儼然成為大家最喜歡的 app 之列。究竟交友 app 是如何「由黑轉紅」的？創業者又在其中獲得哪些啟示呢？",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263541176566"
							},
							{
							  "name": "簡永松受過不良少年感化教育、坐過 6 年多的政治牢，曾是司法系統的常客、金管會的頭痛人物，但他也是台灣身懷最多金融專利的發明家、年營收 5 千萬元的金融創新公司老闆，早在 2000 年，就開始用網路辦標會、老人互助保險，甚至今年還要做第一家 P2P 借貸公司。",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263424431566"
							},
							{
							  "name": "自月球之後，人類也終於要開始實現「登陸火星」？NASA 宣布他們已完成航向火星太空船的引擎測試，將在 2018 年進行首次飛行測試。若能成功，屆時將會搭載六位太空人完成人類夢想！",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263492336566"
							},
							{
							  "name": "再遲鈍的人應該都感受到了：時代的巨輪再次快速轉動，從前以文字、圖像為主的媒體傳播方式，已經隨著「移動設備的普及（搭配高清攝影功能）」、「4G 的用戶越來越多」，逐漸轉變為「影音為主」的傳播方式，各大平台，也都將旗下資源賭在這一塊。對於廣告主、或公司的品牌行銷負責人而言，這個領域就在極短的時間內，變成了一個「看起來很複雜、懂的人很少、但是大家都知道很重要」的東西。究竟想搶攻影音市場，該從何下手呢？",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263017096566"
							},
							{
							  "name": "【智威湯遜廣告】徵 後端開發工程師",
							  "ranking": 12,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262759326566"
							},
							{
							  "name": "Nokia 3310 的真傳？",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263206051566"
							},
							{
							  "name": "李世乭選了機率很小的一步，很可能導致 AlphaGo 在正確率很高的演算法上出現意外，導致出錯。如果這項猜測成立，人類就可能找到每盤都能打敗 AlphaGo 的策略。而 Google 公司，將需要很長的時間來修正這個「缺陷」。",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262808191566"
							},
							{
							  "name": "這種材料可以按比例擴展，從奈米等級至公尺等級，可用於製造手術支架，適用災難營救的輕便彈出式氣墊等。此外，該材料還可以用於「動態建築」或者變形汽車。",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262845936566"
							},
							{
							  "name": "一位 iPhone 使用者寄信問蘋果執行長 Tim Cook，滑掉最近使用的程式到底能不能省電，換到了軟體工程副總 Craig Federighi 親自解答：清掉那些程式，並不會比較省電。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263242606566"
							},
							{
							  "name": "超過 80% 的參與者以及 85% 的參與小組都明確地說「在以後的緊急事件中，我們將會相信機器人」。就算機器人故障，反覆地在同一個地方旋轉，並且身上的燈也熄滅了，五人中的四個人在機器人出現故障的情況下仍然跟隨了引導機器人。（另一個人則自己找到了出口。）四人中有三個說不管怎樣都相信機器人，並有兩人表示在以後的緊急情況中仍然會遵循機器人的指引。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153262701966566"
							},
							{
							  "name": "就在大家以為我們將看到比分改寫為 4:0 的時候，李世乭在中腹下出一子。對此中國圍棋高手古力表示：「這是李世乭的神之一手。」這一步出現之後，前方直播室的韓國記者甚至直接開懷大笑。",
							  "ranking": 15,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153261965436566"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "創業臺灣 育成家族~",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "哈哈哈~ 感覺有很深的怨念呀!!!祝大家白色情人節快樂~",
							  "ranking": 1,
							  "src": "創業臺灣 育成家族~",
							  "url": "https://www.facebook.com/252546844768979/posts/1134120643278257"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "誰說上新聞要錢!?",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1133369090015649"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "猜猜是平面還是 3D 的？http://pinkoi.me/1pG5L74",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1161768357189883"
							},
							{
							  "name": "「MaryWil」是從 Mary 跟 Wilson 這一黑一橘的小流浪貓的名字組合而來；他們貪吃膽小又愛撒嬌，卻能帶給人勇氣，也因此誕生了品牌 MaryWil。",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1161710467195672"
							},
							{
							  "name": "參加小遊戲，就有機會贏得 NT$200 禮物卡喔！",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1161758350524217"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 8,
						  "articles": [
							{
							  "name": "究竟是時勢造就英雄，",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988633064561"
							},
							{
							  "name": "Wow*",
							  "ranking": 8,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988191239561"
							},
							{
							  "name": "將四季意象轉化為pattern呈現的書封設計～",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988427924561"
							},
							{
							  "name": "看它的顏色 變! 變! 變!",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988635879561"
							},
							{
							  "name": "【刮出身高的刻度，彩色的長高喜悅】",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988537874561"
							},
							{
							  "name": "出門在外，如果真的非要買一瓶罐裝水，就買環保一點點的紙盒包裝吧！這是美國一間公司推出的新「紙盒」包裝水。",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988415894561"
							},
							{
							  "name": "他藉由攝影 ///",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988708384561"
							},
							{
							  "name": "【大自然的奧妙】",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153988830639561"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6363636363636364,
						  "count": 13,
						  "articles": [
							{
							  "name": "棋王與Google人工智慧的第四戰，人類終於扳回一城，恭喜李世石，同時也恭喜拿下三勝的Google AlphaGo團隊。明天是最後一戰，有興趣的別錯過喔!",
							  "ranking": 7,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812736562186090"
							},
							{
							  "name": "Android用戶收到含有連結的色情簡訊或電子郵件真的要小心，木馬會假冒App的Google Play付款頁面取得你的帳號密碼等資料。駭客也會假冒你手機上的網路銀行程式登入頁面，竊取你的網銀帳號密碼。",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812749865518093"
							},
							{
							  "name": "雲端儲存、軟體定義儲存對傳統企業儲存市場的影響不容小看。",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812737082186038"
							},
							{
							  "name": "Visual Studio支援R語言了!",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812797232180023"
							},
							{
							  "name": "比特幣近來負面消息不斷，內部社群缺乏共識，交易變慢，現在微軟的線上商店也不再接受比特幣。",
							  "ranking": 9,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812735278852885"
							},
							{
							  "name": "「臺灣資訊安全大會」是臺灣最大規模的資安會議，報名人數超過3,500人，不論是大會主講嘉賓或是分場議程規畫，幾乎場場爆滿；也與駭客社群HITCON合作專屬議程。",
							  "ranking": 13,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812496418876771"
							},
							{
							  "name": "普華永道（PwC）分析中國能在新一波金融科技浪潮上快速竄起並搶得先機的2大關鍵因素:",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812779318848481"
							},
							{
							  "name": "Google推出出門到店買東西，用說的付帳",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812922642167482"
							},
							{
							  "name": "英特爾投資部門近來投資了許多新創事業，例如物聯網、穿戴裝置、無人機、大資料等等，如果出售部份資產，恐對這些新創業者帶來不小的影響。",
							  "ranking": 8,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812735732186173"
							},
							{
							  "name": "孟加拉央行發生的這起「網路搶案」，駭客潛伏在裡面已很久了，而且他們本來打算搶10億美元。",
							  "ranking": 11,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812733812186365"
							},
							{
							  "name": "Windows電腦棒真能闖出一片天？但還是期待何時能有搭載Come m處理器的版本推出，價格也希望能維持如此低就是",
							  "ranking": 12,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812605162199230"
							},
							{
							  "name": "微軟OneNote趁此機會推出OneNote匯入工具，大搶Evernote用戶。",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812738245519255"
							},
							{
							  "name": "媒體報導亞馬遜規劃推出開放的教材平台，讓學校及教師可以免費存取開放授權教材。",
							  "ranking": 10,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812734165519663"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【 IOH 文章分享】也許，出國一直是你的夢想！",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1006078056104417"
							},
							{
							  "name": "【講座公告】做自己生活的主人！那些心理系教我的事",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1006519376060285"
							},
							{
							  "name": "【講座公告】奮力充實自己，在英文系成為閃亮的一顆星！",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1006406959404860"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.42857142857142855,
						  "count": 9,
						  "articles": [
							{
							  "name": "每個人的耳道都是獨一無二的，戴上耳機就能辨識你的身分!",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618459260674"
							},
							{
							  "name": "現在聆聽音樂的管道相當多元，無線串流便是其中相當熱門的一種，多數音響仍以藍牙為主流，但歷數無線音訊技術，尚有Wi-Fi、DLNA及Apple的AirPlay等等，而YAMAHA這款Restio音響盡數納入其中，而獨家的MisicCast技術，則是奠基於Wi-Fi之上。",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618549025674"
							},
							{
							  "name": "看起來NexDock像是台筆電，但其實它是手機的擴充底座，將搭載Windows 10作業系統的手機連接上之後，馬上變成筆記型電腦！",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618870015674"
							},
							{
							  "name": "把輪胎變成四顆球，看起來好厲害的樣子！",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618864585674"
							},
							{
							  "name": "當網路賣家，也需要申請營業登記喔!",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618126435674"
							},
							{
							  "name": "這樣或許就能解決地球上的一大環保問題了！",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618866180674"
							},
							{
							  "name": "腕帶式心率偵測器不需要配戴心跳帶，用起來也十分方便，不過它們真的準確嗎？編輯部這次借到了 Apple、Samsung、Garmin、Asus、小米等五大品牌的智慧手環/手錶，用最簡易的測試方式來看看它們有沒有及格。",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618871330674"
							},
							{
							  "name": "物聯網這幾年談得火熱，不過「物聯網」究竟是什麼呢？是誰首先提出「物聯網」這個名字，又有哪些發展的關鍵呢？就讓我們一起來複習一下吧！",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618559995674"
							},
							{
							  "name": "小編狀態顯示為連不上....",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618297955674"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "經濟部",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "【240萬獎金 給夠標準的你】",
							  "ranking": 2,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1149928201714021"
							},
							{
							  "name": "【什麼？面膜也可以加熱！】",
							  "ranking": 1,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150019471704894"
							},
							{
							  "name": "土壤液化查詢系統，OPEN！",
							  "ranking": 3,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "你也喜歡圓圓滾滾的可愛企鵝嗎？事實上在過去數年間，企鵝的數量大量減少了90%左右，快進來一起關心這些可愛的小朋友！",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1079993818687861"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5384615384615384,
						  "count": 13,
						  "articles": [
							{
							  "name": "#首支人民幣基金  #總規模超過1億美元",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954554491287341"
							},
							{
							  "name": "[活動快訊] 由新加坡e27主辦的Echelon Top100台灣代表由異域科技Outland Inc. 的服務HelloWings」出線！",
							  "ranking": 8,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954520217957435"
							},
							{
							  "name": "#實用好工具 ",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954614531281337"
							},
							{
							  "name": "[台灣新創在福岡] 創業觀察第三發！",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954630131279777"
							},
							{
							  "name": "《紐約時報》走在變革的前沿。這個老牌媒體大膽地做出一個嘗試：用虛擬實境技術來「報導」新聞。這不是一個心血來潮的玩票或者噱頭。在體驗了之後，你甚至覺得「報導」這個詞都不一定對：你被放置在了一個場景裡，近距離看著新聞的主角、看著周圍的人，360°的聲音環繞——你就直接來到了新聞的現場。",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954540391288751"
							},
							{
							  "name": "#世紀對弈最後一戰就在明天",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954533977956059"
							},
							{
							  "name": "#好文回顧",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954553941287396"
							},
							{
							  "name": "「很多新公司都是這麼做的，在一個已經劃清楚界限，範疇，被清楚定義出來的市場中找到屬於自己的位置，往往身邊會存在一些固有的競爭者，而接下來就是在競爭壓力中突出重圍。但是我們的市場定位跟他們的不太一樣。儘管我們確實要面對一些直接競爭者，而且之前市場上同類型的工具層出不窮，但是我們並沒有將自己看作是『突圍者』，我們要做的是改變這個市場。」",
							  "ranking": 12,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954135647995892"
							},
							{
							  "name": "2015 年，金管會宣告為台灣的金融科技元年，簡永松卻早在 2000 年就成立網路金融公司，把民間標會搬到網路上。7 年前，他又成立喬安互助網，讓被商業保險拒保的老人家，透過網路投保按月繳費，死亡時就能領得一筆錢。",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954627471280043"
							},
							{
							  "name": "FOX Sports 與 NextVR 在歷經一年的測試，於 2016 年 2 月簽署為期 5 年的合作夥伴契約。據報導，FOX Sports 希望藉由與 NextVR 的合作關係，早期進入 VR 市場，以在電視頻道業者中取得領先地位。",
							  "ranking": 11,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954434077966049"
							},
							{
							  "name": "要讓專案獲得足夠曝光，接觸媒體是最不可低估，但卻最容易無法「做好做滿」的策略。縱使對外聯絡將遠比你想像中來得耗時，而且大部分寄出的信都會石沉大海，但若能規劃並執行完善，便可能發揮意想不到的成效。此外，媒體的關注不僅有助於轉換為集資成績，報導文章還有助於 SEO，因而為官網增加自然流量，為集資結束後的銷售市場舖好路。",
							  "ranking": 10,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954471891295601"
							},
							{
							  "name": "享譽全球的義大利高級珠寶品牌寶格麗（Bulgari）總裁Jean-Christophe Babin提到，在東南亞各國，有越來越多的人能夠負擔得起這樣的精品消費，例如越南、泰國和馬來西亞，總計有高達上千萬客群。這也是為什麼寶格麗在過去短短八個月的時間，在單一國家印尼就新開設了6間分店。而目前東南亞奢侈品電商市場最大的泰國，在2015年的銷售額達到25億美元。",
							  "ranking": 9,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954473097962147"
							},
							{
							  "name": "Q： 經營社群電商的難處是什麼？",
							  "ranking": 13,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954134624662661"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "【人生，將不再索然無味】",
							  "ranking": 2,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1279412192074767"
							},
							{
							  "name": "#白色情人節 卻沒有情人可以過嗎？",
							  "ranking": 3,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1279414678741185"
							},
							{
							  "name": "#情人節去死去死團必備 ：goo.gl/iEQe65",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1279584208724232"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5555555555555556,
						  "count": 13,
						  "articles": [
							{
							  "name": "【迷你變形金剛！】這個長1.7公分、重0.31克的「折紙機器人」可以負重本身兩倍重的物體，除了會爬，還會游泳。任務結束後可以在水中或丙酮自行解體。",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154043009204284"
							},
							{
							  "name": "一位西雅圖視覺設計師給自己立下一個目標：在 2016 年的每一天都發佈一款全新圖示，藉此探索各種風格及練習設計相關技術，並且全部開放使用者免費下載！",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042374814284"
							},
							{
							  "name": "虛擬實境正在改變世界，遊戲、電影甚至是成人內容......但除了這些，虛擬實境新聞可以讓你體驗更真實的東西──那些人類社會正在發生的事情！",
							  "ranking": 9,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042082214284"
							},
							{
							  "name": "心元資本今日宣布推出兩支新的投資基金，鎖定全世界及中國的初早期新創公司，分別推出7千萬美元規模的美元基金以及5千萬美元規模的人民幣基金，總規模為1.2億美元，三個月來已完成超過7千萬美元融資。心元資本同時也宣布成立上海全球總部。",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042216214284"
							},
							{
							  "name": "如果說Azure和Office 365是微軟自轉型以來發起的第一波攻勢，Windows 10和Surface是第二波攻勢，那麼接下來的數據平台就是第三波攻勢。",
							  "ranking": 13,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154041544159284"
							},
							{
							  "name": "【獅迷不用再羨慕猿迷！】統一獅球迷也有專屬的網路直播頻道啦！自3月23日起，全球棒球迷只要上Yahoo奇摩，透過電腦、平板或手機（包括行動版及Yahoo新聞App），就可收看2016年統一獅60場主場賽事網路直播，以後不用再羨慕Lamigo球迷囉！",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042585959284"
							},
							{
							  "name": "iPhone也要擺脫電源線束縛了？",
							  "ranking": 12,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154041591409284"
							},
							{
							  "name": "這10個技巧，你都會了嗎？",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042582014284"
							},
							{
							  "name": "南台大地震之後，大家開始注意到「土壤液化」這個問題，而今天「土壤液化潛勢區查詢系統」網站啟用，只要輸入地址，就可以知道自家土壤液化的潛勢區等級！（不過現在只有8個縣市可以查詢）。",
							  "ranking": 8,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042164454284"
							},
							{
							  "name": "Facebook工程師在2008年成長到150人以上就開始實施Bootcamp活動，新手到老手都要參加，為期6週，而這個活動可以讓Facebook成長時繼續維持它的工程師文化（或者說駭客文化），到底Facebook是如何做到的？",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154042548714284"
							},
							{
							  "name": "AlphaGo與棋王李世乭的世紀對弈最後一戰就在明天，今天是休兵日，先來了解一下AlphaGo的技術原理，以及背後涉及到的類神經網路以及深度學習技術。",
							  "ranking": 10,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154041869719284"
							},
							{
							  "name": "獵豹移動執行長傅盛對媒體指出，2016年最重要的趨勢是行動廣告 ",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154041896279284"
							},
							{
							  "name": "現在最紅的交友App是哪一個？走到街上問問那些青年男女，十之八九都會告訴你同一個答案：Tinder。",
							  "ranking": 11,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154041764069284"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【專利資訊分享——醫療器材租賃後勤支援系統】",
							  "ranking": 2,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1062549950457660"
							},
							{
							  "name": "【創業現場】",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1064170553628933"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "哈囉✋當工作感到疲憊、壓力大的時候，總會浮現想離職的念頭😩",
							  "ranking": 2,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1162594473752996"
							},
							{
							  "name": "#就業 #職業訓練 #畢業 #工作",
							  "ranking": 1,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1162718260407284"
							},
							{
							  "name": "哈囉👋員林聯合徵才活動來囉😄",
							  "ranking": 3,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1162447963767647"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "#每日精選英文新聞 AlphaGo 意外打敗棋王，讓人工智慧變成近期的熱門話題，很多人在探討它未來的應用。這裡有個非常實際的案例，一家每秒鐘幾百萬上下的大銀行，風險控管是極端重要的工作。過去，這個工作仰賴稽核部門數千位人員，建立各種內部規則來完成，不僅成本極高，也往往只能在事後才發現風險。在未來，這工作將越來越仰賴能主動學習的人工智慧。近期，摩根大通銀行跨出了第一步，開始運用大數據與演算法，去預測員工是否即將做出過度暴險的行為。",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153859684800491"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "人魚公主_成長的力量 by Adara \u0026 C. 鏤空飾品",
							  "ranking": 2,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1016745345058258"
							},
							{
							  "name": "簡單的食材得之不易， 艸木栽培 麥芽糖使用德國小麥、細心栽培，再混合台灣本土特級糯米，經過了五道嚴格的工序，用自然的食材搭配傳統的工法，孕育這最香醇的美味。",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1016810951718364"
							},
							{
							  "name": "[嘖嘖計畫人最新消息]  Ronmou Studio 皂雲計畫前進國際募資！特別送給台灣朋友限定禮物，寄送區為台灣的贊助者將能免費得到一個茸毛袋喔！(限贊助一個皂雲或以上者可獲贈乙個)",
							  "ranking": 3,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1016520918414034"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【 第13屆實習生招募】倒數一週！",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1291331017560154"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.1111111111111111,
						  "count": 12,
						  "articles": [
							{
							  "name": "優惠只剩最後3天\u003e\u003esmarturl.it/ebc502",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627"
							},
							{
							  "name": "小時候還沒玩過電視遊樂器之前，",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980416312052542"
							},
							{
							  "name": "它能夠在 15×15英尺的範圍內擊退蚊子，不用聞鱷魚蚊香的臭味，也不會散發異味！",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978692415558265"
							},
							{
							  "name": "每個人都談大數據，美國行為經濟學家丹表示，大數據跟青少年談性一樣，每個人都在談，每個人都以為別人在做，每個人都說自己有在做，每個人都不知道怎麼做....",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980319808728859"
							},
							{
							  "name": "評價六星的古蹟開放入住 不快點預訂阿捏甘丟？",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980670972027076"
							},
							{
							  "name": "好危險的實驗呀…不過在家也沒能力做吧…",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980652112028962"
							},
							{
							  "name": "雖然核心方面有著基礎的差異存在，理論規格 800 \u003e 600 \u003e 400 \u003e 200 ，不過考慮到實際層面包括軟體支援性、其它包括螢幕、相機、內部儲存等硬體配置，還有當地電信商的 4G 服務等，最終入門 800 機種與高階 600 機種、入門 600 機種與高階 400 機種在使用體驗卻是難分難解...",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980451868715653"
							},
							{
							  "name": "300M光纖上網300元起，1M只要1元起耶！（可以這樣算嗎XD）",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/979170428843797"
							},
							{
							  "name": "看起來應該是使用了骨傳導技術，不過 Sony 未來實驗室還是強調這是概念產品，恐怕不會太快變成市售商品",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980389002055273"
							},
							{
							  "name": "開賣當天在台北三創、台中三民兩個三星智慧館參加「超乎7待77驚喜GO」活動，就可以用 77 元的超低價購買待原價 2190 元的 無線閃充充電座。",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978694252224748"
							},
							{
							  "name": "呼，小編目前住家跟公司都沒有在紅色範圍就是了...",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980405265386980"
							},
							{
							  "name": "空大也能拿博士學位 ⋯",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980305038730336"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 6,
						  "articles": [
							{
							  "name": "擔心想玩的遊戲不會推出 VR 版本？在 VR 裡開電腦就能玩了",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950560048369372"
							},
							{
							  "name": "你懂的。",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950479368377440"
							},
							{
							  "name": "WD 要讓小小的 Raspberry Pi，擁有大大的 314GB 儲存空間",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950774958347881"
							},
							{
							  "name": "15 歲少年率隊奪得 World Drone Prix 無人機競速賽冠軍",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950598265032217"
							},
							{
							  "name": "Sony 在大陸推出「PS4 中國上市一週年紀念版套裝」",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950506121708098"
							},
							{
							  "name": "杜拜將推世界機器人運動大賽，項目包括游泳、跑步、摔角與賽車",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950476091711101"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "PunNode 科技創業新聞網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "None",
							  "ranking": 1,
							  "src": "PunNode 科技創業新聞網",
							  "url": "https://www.facebook.com/130757850468364/posts/467898566754289"
							}
						  ]
						},
						{
						  "id": "media-23",
						  "name": "群募貝果 - WeBackers",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "動物星球率先贊助早鳥回饋項目，在3月18日前贊助早鳥專案，即可獲得4月2日貓老爹台北見面會門票一張~~",
							  "ranking": 1,
							  "src": "群募貝果 - WeBackers",
							  "url": "https://www.facebook.com/563108293798349/posts/862267157215793"
							},
							{
							  "name": "DAWO 原木捲尺是利用老屋留下的木窗及木樑，希望使用者握住捲尺時，能感受到木紋的肌理與手心的溫度，也能心存感恩的珍惜地球資源。",
							  "ranking": 3,
							  "src": "群募貝果 - WeBackers",
							  "url": "https://www.facebook.com/563108293798349/posts/862203837222125"
							},
							{
							  "name": "白色情人節，放閃有理??",
							  "ranking": 2,
							  "src": "群募貝果 - WeBackers",
							  "url": "https://www.facebook.com/563108293798349/posts/862221310553711"
							}
						  ]
						},
						{
						  "id": "media-24",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.45454545454545453,
						  "count": 12,
						  "articles": [
							{
							  "name": "女生們終於可以為貪睡找更多的理由，喔不是，是理論支持了😍",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997599366959980"
							},
							{
							  "name": "從 AlphaGo 上我們已經可以看到 Google 的技術能力，就在我們驚嘆人工智慧發展快速的同時，會不會其失去掌控的速度也超越我們想像？",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997454730307777"
							},
							{
							  "name": "這樣的功能對於穿戴式裝置來說確實很重要，但偵測準確度要很高才行阿。",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997485710304679"
							},
							{
							  "name": "到底恐怖分子看中哪一點，Nokia 手機竟成為他們在選擇炸彈遙控裝置的最佳選擇？",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997502773636306"
							},
							{
							  "name": "AlphaGo 能有這樣的成果非一朝一夕所能完成的，畢竟若沒有一定的勝算把握或許 Google 也不會發出戰帖。",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997508670302383"
							},
							{
							  "name": "台積電前景樂觀，強勁的走勢帶動股價與市值雙雙刷新紀錄，創下歷史新高！",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633"
							},
							{
							  "name": "此次 AlphaGo 和李世乭的對弈，不只是人工智慧發展的里程碑，也讓人們深刻體會到，那個我們覺得遙遠的未來已經到來。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805"
							},
							{
							  "name": "就算是歐巴馬表態，蘋果也不見得會願意退一步吧？",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997297160323534"
							},
							{
							  "name": "每天擁有龐大道路駕駛練習量的 Google 無人駕駛車，想必就算是路上奇怪的行徑，它也已經見怪不怪了吧！",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997507970302453"
							},
							{
							  "name": "雖然在尚未獲得蘋果證實前，一切的可能都只能視為傳言，不過從專利文件中還是可以看出些端倪。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997391920314058"
							},
							{
							  "name": "AlphaGo 不會是想得到排名所以故意輸的吧？",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752"
							},
							{
							  "name": "為了力抗紅潮，三星也曾傳出想入股夏普 1 代廠，不過現在這個想法也未能如願...",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997427460310504"
							}
						  ]
						},
						{
						  "id": "media-25",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.45454545454545453,
						  "count": 27,
						  "articles": [
							{
							  "name": "終於被發明出來了！（不知道荼毒了多少無辜的魚......",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036422649713807"
							},
							{
							  "name": "用對方法，科技進步才真正能解決全人類的問題。",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036435829712489"
							},
							{
							  "name": "沒有技術背景不是你錯，但如果你不想辦法加強知識，那就別怪工程師把你的話當耳邊風！",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034572826565456"
							},
							{
							  "name": "雖然說即使住家就在高潛勢地區也未必代表會有危險，但提早了解狀況，就能夠事先預防與補強。公告中午12點才開放，但已經有眼尖的民眾找出網址囉（內附連結）",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036403189715753"
							},
							{
							  "name": "是他們不懂得欣賞（飄走～",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034544159901656"
							},
							{
							  "name": "新創事業就是人少錢少雜事多，用錢找外包來幫自己省點力是個不錯的方法。但這成本和效益要如何安排，才是真正把錢花在刀口上呢？",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036642269691845"
							},
							{
							  "name": "技術創新請注意：商業簡報不是研討會，技術真的不是大家想聽的重點",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036312129724859"
							},
							{
							  "name": "你找到工作背後的 Why 了嗎？",
							  "ranking": 27,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034543876568351"
							},
							{
							  "name": "你做車，我也做車！你做智慧助手，我也做智慧助手！",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036567259699346"
							},
							{
							  "name": "其實把「寫程式」這三個字換成任何工作，都可以說得通",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036567936365945"
							},
							{
							  "name": "工程師們，大家常用的Python、Java名字來源是什麼你知道嗎？別看這些程式語言發明人好像很偉大，他們在取名的時候，有時候可是亂搞笑一把的ＸＤＤＤ",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036537399702332"
							},
							{
							  "name": "上完前菜後20-30分鐘再拿到主餐的客人，比起10-20分鐘拿到的客人，增加60%追加甜點的機率。一旦能找出關聯性，就能在 APP 設定自動提示服務生，在正確的時間上菜，讓餐廳營收輕鬆最佳化。",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036523023037103"
							},
							{
							  "name": "【台灣銀行要變狼，才能創新】",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036422333047172"
							},
							{
							  "name": "創業有這麼好賺的？還可以環球走透透欸",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036723726350366"
							},
							{
							  "name": "今天中午公開查詢系統，沒多久就網站大當機。但是開放查詢之後，有人管民眾懂不懂、會不會嗎？",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036552976367441"
							},
							{
							  "name": "假如你有信心在 Google 主頁上變出點新花樣的話，你就是Google實習生了！",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036394923049913"
							},
							{
							  "name": "目前全球投入區塊鏈技術開發的金額已高達 10 億美金，台灣才正在起步，進行區塊鏈應用等相關議題的研究，如果說傳統金融機構業者們或是金管會正在思考該如何跟上國際 Bank3.0 趨勢，是否也該開始了解區塊鏈了呢？",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036543816368357"
							},
							{
							  "name": "看看這些能夠振奮人心的短講，幫助你在生活、職場找到一盞明燈！",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036529636369775"
							},
							{
							  "name": "正當我們期智慧手錶在 2016 年能更進一步的時候，智慧手錶卻集體沉默了，在 2016 年的 MWC 大會上幾乎沒有露面。難道，智慧手錶就這樣死了？",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036486919707380"
							},
							{
							  "name": "不開始寫 Code，想再多都是枉然！",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1034571173232288"
							},
							{
							  "name": "下圍棋是一回事，但是星海這項電競運動，在全世界有為數眾多的玩家，各位是否有覺得自己被威脅到了呢？",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036424793046926"
							},
							{
							  "name": "【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036568113032594"
							},
							{
							  "name": "光纖就已經是令人羨慕的網速了，還可以在哪個環節提升傳輸的速度呢？",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036498523039553"
							},
							{
							  "name": "無敵神算！Google也要跨行變算命大仙了～",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036642826358456"
							},
							{
							  "name": "每一次到Ikea買椅子、櫃子都是一場惡夢，因為我真的不會組裝（掩面....）",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036546296368109"
							},
							{
							  "name": "【橘子學院第九期課程報名中】",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036511536371585"
							}
						  ]
						},
						{
						  "id": "media-26",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 5,
						  "articles": [
							{
							  "name": "這種寒流天圍著女友幫你織的圍巾好暖好滿足嗎？",
							  "ranking": 4,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524079084554225"
							},
							{
							  "name": "今晚沒有人送你禮物嗎？沒關係，自己在家上網買個禮物送給自己吧！（怎麼覺得眼角濕濕的）讓熱騰騰的 Raspberry Pi 3 溫暖你的心～",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524153477880119"
							},
							{
							  "name": "今晚又是一個情人夜，約好伴的你應該也訂好餐廳了吧？",
							  "ranking": 5,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524067561222044"
							},
							{
							  "name": "手作巧克力最高？！有了這台巧克力 3D 列印機，不需要把廚房炸掉也可以自製巧克力。",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524081254554008"
							},
							{
							  "name": "大家醒醒！今天才不是什麼一年有幾百次的情人節呢，是一年只有一次的圓周率（π，音 pi）日啊！",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524087531220047"
							}
						  ]
						}

					];
				break;
				case "2016-03-18":
					this.media = [
												{
						  "id": "media-1",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6363636363636364,
						  "count": 14,
						  "articles": [
							{
							  "name": "程式語言都是怎麼命名的？雖然大部分的名稱是根據「這種語言是什麼」來命名，不過這裡也有幾個近似胡鬧的例子。XD",
							  "ranking": 9,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044980464284"
							},
							{
							  "name": "微軟：我們決定訓練人工智慧玩Minecraft XD",
							  "ranking": 8,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045141854284"
							},
							{
							  "name": "「如果一家新創透過股權群募取得早期的資金，他幾乎可以跟真正的風險資本家說再見了。」",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045425974284"
							},
							{
							  "name": "今年初，好市多和家樂福的電商網站悄悄上線，加上大潤發和愛買，台灣的四大量販業者都已經正式進入電商的時代。然而愛買跟其他業者不同的是採取和電商平台合作而非自建官網的策略，發展三年多來，電商營收已佔整體營收5％，去年電商營收更成長六成。",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045437214284"
							},
							{
							  "name": "「台北市東明社區已經發包給中華電信與宏碁共同合作，打造智慧社區，未來三年總共要發包六個智慧社區，總計有六千戶的市民有機會參與這些實驗。近期，台北市政府也將與交通局合作，將台北車站打造為智慧車站，整合安全、防災等各項資訊整合應用。」",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045417144284"
							},
							{
							  "name": "【決賽就在今天！】本文作者林守德，為台灣大學資訊工程學系教授，文章為其針對第529期《自然》期刊中一篇關於AlphaGo的論文，所作的讀後感分享。",
							  "ranking": 13,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044616074284"
							},
							{
							  "name": "你覺得AlphaGo vs. 李世乭最後一戰誰會勝出？",
							  "ranking": 11,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044858894284"
							},
							{
							  "name": "人機世紀對決終於畫下尾聲！Google人工智慧AlphaGo與南韓棋王李世乭的圍棋對弈今日進行到第五局，由AlphaGo再添一勝，5局賽局最終比數為4：1。",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045348254284"
							},
							{
							  "name": "要做旅遊行程版的Agoda！旅遊電商平台KKday宣布獲得1.4億台幣（450萬美元）A輪融資，由之初創投領投，九易資本跟投。",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045442524284"
							},
							{
							  "name": "情人節、聖誕夜……這些日子，好像都在提醒沒伴的你，一個人有多孤單。過去，如果你想為自己找個伴，除了在平日生活中張大雙眼、豎起雷達，也許還得勤跑聯誼或到交友網站頻頻更新個人檔案和日記。",
							  "ranking": 12,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044730269284"
							},
							{
							  "name": "「我們的行動革命還遠遠沒有結束。」矽谷知名創投Fred Wilson說。已開發國家的革命即將完成，那麼第二次行動革命的機遇在哪呢？",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045554064284"
							},
							{
							  "name": "【#數位時代大調查】「無論你處在哪個行業和領域，如果不想被顛覆，那就馬上行動。」數位行銷的核心競爭力已經從現在比拼創意的「外功」逐漸深入到數據管理和內部轉型的「內功」，身為數位行銷人，你跟你公司的內功到甚麼程度呢？",
							  "ranking": 10,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044913679284"
							},
							{
							  "name": "東芝已和中國家電大廠美的集團進入最終協商階段，擬將冰箱、洗衣機等白色家電事業出售給美的集團，出售額預估為數百億日圓。",
							  "ranking": 14,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154044493099284"
							},
							{
							  "name": "BeFunkey 是一個免費、快速、易用，但也功能豐富的線上修圖工具，不用註冊登入，還有各種特效功能！趕快來看看↓↓↓",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154045262859284"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 7,
						  "articles": [
							{
							  "name": "【馬來西亞線上消費者樣貌 ：年輕女性是主力】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948882445159633"
							},
							{
							  "name": "【#SmartM電子商務學院》把握既有優勢，麗嬰房由實體通路轉型電子商務的３大策略】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948851988496012"
							},
							{
							  "name": "【社群媒體心理學，五個小撇步，讓你的文章出類拔萃】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949002978480913"
							},
							{
							  "name": "【「手機開店」，讓開運風水商品賣得嚇嚇叫】",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949003248480886"
							},
							{
							  "name": "【只想避開店員騷擾的行動購物時代，客服也要虛實整合】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949127315135146"
							},
							{
							  "name": "【獲1.4億新台幣A輪投資，進軍東南亞》旅遊電商KKday，將「服務型電商」推向全球的4大要訣】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949125528468658"
							},
							{
							  "name": "【從認同到消費，電商粉絲團原來可以這樣做！】",
							  "ranking": 7,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946500162064528"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【台東百萬低利創業貸款 前2年可不還本】",
							  "ranking": 2,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1064895663556422"
							},
							{
							  "name": "【新創企業大募集】",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1064919106887411"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 17,
						  "articles": [
							{
							  "name": "GDC遊戲開發者大會還沒開幕，眾所矚目的 VR 三大廠紛紛預告遊戲、平台和售價，究竟這三台裝置分別有何優勢呢？",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265654591566"
							},
							{
							  "name": "【肯力行網科技】徵 Web Application Developer",
							  "ranking": 14,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153264984621566"
							},
							{
							  "name": "Google 除了有推不倒的 Atlas、會下圍棋的 AlphaGo ，現在還發表了會自己練習手眼協調的機械手臂！",
							  "ranking": 16,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263906516566"
							},
							{
							  "name": "趨勢科技今日公佈 2016 年的目標與資安預測，認為綁架電腦的勒索程式，將進化成竊取機密換贖金的新型態網路犯罪模式，而且各類企業，不論大小都可能是受害的高危險族群。",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265964101566"
							},
							{
							  "name": "「基本上無人機就是一台「飛行的電腦」，就如你我的手機、平板或電腦，是有心人士虎視眈眈的綁架對象，甚或，能夠變成『自走砲』般的污染源，飛經之處，所有聯網裝置無一倖免⋯⋯」",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265651066566"
							},
							{
							  "name": "最近超級高鐵 Hyperloop 的 CEO 發表一段影片，說明將在列車車窗加上 AR ，利用乘客愛盯著車窗看的特性，將廣告資訊融合窗外風景，達到最有效的行銷效果。",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153263921076566"
							},
							{
							  "name": "雖然第四戰李世乭逆轉勝，賽後發言好像也找到了 AlphaGo 的弱點，不過在最後一戰仍舊是不敵人工智慧 AlphaGo，這場世紀級的人機圍棋系列戰也以 4：1 畫下句點。",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566"
							},
							{
							  "name": "【舊文】",
							  "ranking": 12,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265154511566"
							},
							{
							  "name": "任天堂近期流出掌機新專利，能透過鏡頭和紅外線感測玩家的動作並用於遊戲當中，外界猜測可能會在下一代掌機看到這項技術。",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153264993791566"
							},
							{
							  "name": "自動駕駛汽車方便又安全，許多車商也開始在車內加入部分自動駕駛功能，不過資安專家警告，許多車商並無足夠的軟體安全防護，若被駭客惡意入侵系統，可能會造成事故。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153264942286566"
							},
							{
							  "name": "人機圍棋最終戰今天中午 12 點開打！大家覺得是第四場「抓到 AlphGo 漏洞」的李世乭會贏，還是「開場直落三」的 AlphaGo 勝出呢？（內有第五場直播連結）",
							  "ranking": 17,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153264872061566"
							},
							{
							  "name": "BLE 根據需要提供的短資料，然後關閉連接線路。這是藍芽 LE 實現低耗能的原因之一。 相比于常規藍芽的傳統配對方法，BLE裝置僅在需要收發資訊時進行連結。",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153266130706566"
							},
							{
							  "name": "各位 UX 設計師，從今天起又多了一個好選擇，以圖像處理套裝軟體聞名的 Adobe，推出了新的 Adobe Experience Design—— 又稱「Adobe XD」。",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265446396566"
							},
							{
							  "name": "今天 Google 的人工智慧 AlphaGo 在系列最終戰中，贏了韓國圍棋九段棋士李世乭，並以總戰績 4：1 贏得系列戰，跌破眾人眼鏡。AI 究竟會怎麼發展呢？來看看創造 Android 系統，總是領先世界一步的 Andy Rubin 在 WIRED 的專訪中，表達了他對機器人的熱情，並且大談他眼中，萬物皆 AI 的未來。",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265665096566"
							},
							{
							  "name": "日本教授石黑浩致力於開發超擬真的機器人，這次發表會上，他的「分身」也親臨現場，而且還能和主持人對答如流、接梗講笑話。你覺得擬真的機器人看起來是更親切還是更恐怖呢？",
							  "ranking": 13,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153264857121566"
							},
							{
							  "name": "Xbox 主管今日宣佈在 Xbox Live 平台上將開放和其他主機與 PC 的連線，外界推測「其他主機」指的，應該就是銷量近 3800 萬台，3 倍於 Xbox 的 PS4。",
							  "ranking": 15,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265036826566"
							},
							{
							  "name": "一樣以旅遊為主題，但從單純販賣機票飯店，轉變為提供在地深度行程，給人難忘旅行體驗的 KKday 今天宣布募得 1.46 億台幣 A 輪投資。不僅如此，他們去年還以每月營 30% 的驚人速度成長，並立志成為東南亞最大的「深度旅遊」網路平台。",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265740431566"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 4,
						  "articles": [
							{
							  "name": "#確定開課",
							  "ranking": 4,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1133913719961186"
							},
							{
							  "name": "【FB小編養成班】網友瘋狂按讚與分享的社群發文技法",
							  "ranking": 2,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1134090713276820"
							},
							{
							  "name": "轉換會計準則 企業可推延適用",
							  "ranking": 3,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1133957596623465"
							},
							{
							  "name": "【確定開課】非財務人員對財會應有的認識",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1134096693276222"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "早安☀粉絲們對在職訓練有興趣嗎？那你千萬不能錯過以下課程喔👇",
							  "ranking": 3,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1163166030362507"
							},
							{
							  "name": "《賈中哥求職陷阱停看聽》",
							  "ranking": 1,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096"
							},
							{
							  "name": "參加活動去\u003e\u003ehttps://goo.gl/Jc48jL",
							  "ranking": 2,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1163286250350485"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "AppWorks 很榮幸能夠領投 KKday 的 A 輪融資，支持台灣少見、已經有兩個 IPO 的國寶級網路創業家陳明明。",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153863478155491"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "人魚公主_成長的力量 by Adara \u0026 C. 鏤空飾品",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1017395154993277"
							},
							{
							  "name": "[嘖嘖最新計畫] 守護純真的童年~讓孩子收藏一隻專屬自己的搖馬椅",
							  "ranking": 2,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1017286905004102"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.2,
						  "count": 6,
						  "articles": [
							{
							  "name": "美國藝術家 Sarah Buckley 用刺繡一針一線慢慢上色的方式，將旅行途中看見的美麗景象重現在素色的亞麻布上。不管是漫漫黃沙的沙漠，還是海島上悠閒的度假風光，都能在直徑三公分的圓形刺繡墜飾上完整呈現。",
							  "ranking": 5,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1162418150458237"
							},
							{
							  "name": "【會員 Will 的開箱照】",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1162441827122536"
							},
							{
							  "name": "【 Yizistore 的插畫手稿公開！】",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1161756090524443"
							},
							{
							  "name": "（不想起床，所以正在想還有哪個請假理由還沒用過）",
							  "ranking": 6,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1161763117190407"
							},
							{
							  "name": "【 選擇困難症 】",
							  "ranking": 4,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1162568567109862"
							},
							{
							  "name": "OUNCE magazine 玩食誌 是一本結合美食、設計、旅遊的美食指南：以城市為單位介紹各國美食及文化，並分享當地人私藏的口袋名單。從內容編輯到選紙、印刷均講求質感，跳脫既定的傳統雜誌印象。內容以 100% 純手繪設計為主，少量文字、大量圖片讓讀者記錄自己的玩食經驗。紙材堅持使用厚質牛皮紙，觸感有如歐洲麵包坊常用的紙袋，就連包裝繩也是選擇捆綁咖啡的原色麻繩或進口的烘焙用棉繩。就算人在台灣，也讓你如同周遊世界。",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1162438603789525"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 8,
						  "articles": [
							{
							  "name": "第一次成本最低的電影得獎，",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991640249561"
							},
							{
							  "name": "對「油品」總是失手嘛？",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991541499561"
							},
							{
							  "name": "有時候欣賞好看的室內設計或建築可以讓我們對理想的居住環境有更多認知呢！",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991251314561"
							},
							{
							  "name": "一朵花，也能這樣欣賞喔？！",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991711584561"
							},
							{
							  "name": "雖然只是兩個字，",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991679134561"
							},
							{
							  "name": "看完後~只想說...",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991724694561"
							},
							{
							  "name": "農夫的背影，也是很吸引人的！背著一籃用心種的菜，走吧～",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153991161429561"
							},
							{
							  "name": "早安！今天就用「紙杯做的七龍珠動畫」來集一下可以和工作對打的龜派氣功波吧！！",
							  "ranking": 8,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153990883589561"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": -1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "成為投資者認可估值超過10億美元的新創「獨角獸」，未來就能一帆風順了嗎？",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1292075454152377"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.23076923076923078,
						  "count": 19,
						  "articles": [
							{
							  "name": "現在買2個不限顏色就打88折喔\u003e\u003esmarturl.it/jaybirdx2white",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981191701975003"
							},
							{
							  "name": "水電工愈來愈優雅了…",
							  "ranking": 13,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350"
							},
							{
							  "name": "拿計算機來玩遊戲，",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981256215301885"
							},
							{
							  "name": "同時具備藍牙與 2.4Ghz 連結的無線滑鼠 ⋯",
							  "ranking": 14,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981115941982579"
							},
							{
							  "name": "欠電的朋友應該會喜歡這顆人間凶器的，而且除了雙 QC 2.0 輸出，它也支援 18W 的 QC 2.0 充電器充電哩",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981177111976462"
							},
							{
							  "name": "羅技強調這把鍵盤的機械軸是自行開發的，感覺上貌似不能相容 Alps 與 Cherry 的鍵帽啊...",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981212605306246"
							},
							{
							  "name": "傳說中的投影片製作冠軍強調他們在 VR Ready 設備有高達 83% 的市占率，感謝 PS4",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981227471971426"
							},
							{
							  "name": "反過來看，就是當你發現日本人對你說這篇文章的話時，就是在拒絕你的意思⋯",
							  "ranking": 16,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981071041987069"
							},
							{
							  "name": "難怪在跑步的時候排氣 都有加速的感覺…(誤)",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981139621980211"
							},
							{
							  "name": "去年我們寫過的文章介紹過百靈 Series 9 有多麼神奇（看評測\u003e\u003ehttp://smarturl.it/nqvgv6 ），現在好東西賣場也上架了這款 CT3CC CT 冰感科技的電動刮鬍刀。",
							  "ranking": 17,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980674335360073"
							},
							{
							  "name": "臉書是我最好的朋友 lol",
							  "ranking": 19,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/978694865558020"
							},
							{
							  "name": "不管是經由紙本還是行動裝置，每個人每天都有機會接觸大量文字，",
							  "ranking": 15,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980378205389686"
							},
							{
							  "name": "難道這孩子是快打旋風界的澤北榮治嗎...?",
							  "ranking": 18,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/980471998713640"
							},
							{
							  "name": "高通放眼 Snapdragon 820 的 Adreno 530 的高效能以及支援 Vulkan API ，希望藉此作為開發工具基礎加速行動 VR 與 AR 的發展",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981201438640696"
							},
							{
							  "name": "免開電腦也可以使用，要說有多方便就有多方便 ! 聽說，價格也滿漂亮的 !",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818"
							},
							{
							  "name": "這是小編國小的回憶啊啊啊！",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981191498641690"
							},
							{
							  "name": "這是一場賽局理論，假設人們不會租滿 25 個月！",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981192148641625"
							},
							{
							  "name": "None",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981310078629832"
							},
							{
							  "name": "看著這些小花嗶嗶啵啵的跳出來其實還滿療癒的…",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981115271982646"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 14,
						  "articles": [
							{
							  "name": "微軟希望你用 Hololens 這樣來講故事",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951477971610913"
							},
							{
							  "name": "人機大戰最終局李世石告負，AlphaGo 以總比分 4-1 勝出",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781"
							},
							{
							  "name": "Samsung 的這款實驗性耳機可能會成為 Gear VR 的好拍檔",
							  "ranking": 7,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951388821619828"
							},
							{
							  "name": "Android N Preview 動手玩，小綠人補完計劃",
							  "ranking": 11,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951291091629601"
							},
							{
							  "name": "六個小機器人，竟可以拉動 1.3 公噸重的車！",
							  "ranking": 13,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951232068302170"
							},
							{
							  "name": "微軟拼了！Xbox One 將能和 PC 及「其它平台」聯網對戰",
							  "ranking": 14,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/950890568336320"
							},
							{
							  "name": "WhatsApp 語音通話功能據報將增設加密保護",
							  "ranking": 10,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951333848291992"
							},
							{
							  "name": "Philips 新推出的 Hue 燈具能幫助入睡",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951424501616260"
							},
							{
							  "name": "Google 的新基地設計比較像是有未來感的露營區呢",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951448881613822"
							},
							{
							  "name": "ExoMars 順利升空，下一站火星",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951510898274287"
							},
							{
							  "name": "Skype for Web 現在可以打給手機和市話",
							  "ranking": 12,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951257874966256"
							},
							{
							  "name": "Razor 推出新款 Blade 筆電，換上更輕薄設計",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951615928263784"
							},
							{
							  "name": "行動裝置也要能 VR 直播了，360fly 的攝影機將可搶先玩到",
							  "ranking": 9,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951353104956733"
							},
							{
							  "name": "雙輸出快充！ZenPower Ultra 行動電源在台開賣",
							  "ranking": 8,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951370644954979"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "PunNode 科技創業新聞網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "None",
							  "ranking": 1,
							  "src": "PunNode 科技創業新聞網",
							  "url": "https://www.facebook.com/130757850468364/posts/468344793376333"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6363636363636364,
						  "count": 14,
						  "articles": [
							{
							  "name": "商用等級的事件記錄管理系統大多是外商的天下，但這幾年也有國產廠商推出產品，由安碁資訊（Acer eDC）推出的SAFE 3就是一例。",
							  "ranking": 14,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/812339778892435"
							},
							{
							  "name": "現在起網頁版Skype也可撥打市話、行動電話了，而且可以在Skype的對話中直接顯示YouTube內容。",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813444485448631"
							},
							{
							  "name": "3月21日開始，台灣大用戶使用NFC手機者，可向台灣大申請更換NFC SIM卡，並向23家金融機構申請手機信用卡/金融卡服務了。",
							  "ranking": 7,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813429488783464"
							},
							{
							  "name": "現在Google Apps的單一簽入功能也支援Slack、Facebook at Work、Office 365、Panorama9、Box等更多的第三方服務了。",
							  "ranking": 13,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813287175464362"
							},
							{
							  "name": "微軟澄清先前公告不再接受比特幣是不小心放上去的錯誤訊息，他們還是會接受比特幣的，真的讓比特幣用戶虛驚一場。",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813434552116291"
							},
							{
							  "name": "手殘打錯字難免發生，但如果想去netflix.com看個影片卻不小心打成netflix.om就要小心了。駭客已註冊300多個仿冒知名網站的.om惡意網站，Youku、Youtube、Amazon、Adobe、Agoda都被仿冒。",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813483745444705"
							},
							{
							  "name": "今天微軟Azure首席架構師和翟神對談，翟神認為，從應用層來看，3∼5年後，雲端服務戰場上，只有微軟能和AWS抗衡，Google將不是對手",
							  "ranking": 8,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813408782118868"
							},
							{
							  "name": "目前微軟團隊先用人工智慧來訓練角色如何爬山，說不定以後遊戲角色不需要人為操作，就能以最聰明的方式自己打魔王了。",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813454035447676"
							},
							{
							  "name": "大家知道明年英國什麼職位最夯嗎？",
							  "ranking": 9,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813378695455210"
							},
							{
							  "name": "AlphaGo與棋王的對決引起世人對人工智慧發展的高度關注，南韓政府也打算全力發展人工智慧，趕上歐美、日本及中國的發展。",
							  "ranking": 12,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813297132130033"
							},
							{
							  "name": "有了高通的加入相信將加速Android手機上的VR應用發展。",
							  "ranking": 11,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813310708795342"
							},
							{
							  "name": "當颶風、地震來襲時，Twitter、Facebook不只能用來報平安，也可透過大資料分析，作為政府評估災害範圍、損害程度的輔助工具。",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813466025446477"
							},
							{
							  "name": "未來Xbox One可能有機會和PS4的玩家同場較勁。",
							  "ranking": 10,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813323182127428"
							},
							{
							  "name": "為期長達一周的世紀圍棋人機爭霸戰今天終於畫下句點了！",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813444795448600"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 4,
						  "articles": [
							{
							  "name": "【 IOH 友好活動分享】2016 台灣 MBA 高峰論壇，早鳥票開賣啦！",
							  "ranking": 4,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007085746003648"
							},
							{
							  "name": "【政大懶人包】10 個問題讓你認識政治大學",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465"
							},
							{
							  "name": "【講座公告】Sharing is Magic! 電機系教我的開源精神",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007173669328189"
							},
							{
							  "name": "【 IOH 文章分享】哈佛啟示錄：現在教育出了什麼問題？",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007185802660309"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 12,
						  "articles": [
							{
							  "name": "大自然真是奇妙，你永遠不知道扔出去的紙飛機會飛向哪裡！",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621219995674"
							},
							{
							  "name": "老虎還挺會喬角度的....",
							  "ranking": 12,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620310295674"
							},
							{
							  "name": "前提是你先得把桌上的東西清乾淨.....",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620750170674"
							},
							{
							  "name": "咦？沒有雙鏡頭？",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621222240674"
							},
							{
							  "name": "許多VR眼鏡都陸續開賣了，各種機型的價格也都陸續公布，有些走在科技前面的朋友，已經開始認真考慮要買一台來研究，或是一些一般消費者也開始研究這個科技。問題來了，如果你真的準備買一台VR裝置，那麼到底該買哪一台？這些裝置又有什麼不同呢？市場上已經有一些我們可以選購到的 VR 設備，推薦你把這篇內容看完。",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621042665674"
							},
							{
							  "name": "蘋果連晶片的錢都不想讓別人賺？",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620867310674"
							},
							{
							  "name": "這個重大新功能就是群組通話，最多可以和 200 個人同時語音通話，和單對單通話一樣完全免費。",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618700870674"
							},
							{
							  "name": "充兩次電，一年就過去了...",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620973380674"
							},
							{
							  "name": "Intel 於 IDF 2015，首度揭露 Mini-STX 平台計畫，訴求點是尺寸比 Mini-ITX 小 29％，仍然可以安裝 LGA 腳位桌上型處理器，並且提供比 UCFF 更充裕的連接埠。不過 Intel 並非一開始就敲定設計規範，而是與主機板、機殼等協力廠商多次協調修改後才定案，只是最近一次修改結果有點令人意外。",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621226750674"
							},
							{
							  "name": "《T小編愛敗家》",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621478690674"
							},
							{
							  "name": "這個價格...比台北到台中還便宜啊！",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620496510674"
							},
							{
							  "name": "小米創辦人雷軍也曾經提及過這件事：「我也很奇怪，怎麼一天到晚都有人說我做電動車？幾個月前才搞清楚，的確是有一家公司在背後推動，而這家公司居然叫「雷軍電動」。」",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621225690674"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "經濟部",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 5,
						  "articles": [
							{
							  "name": "全球景氣疲弱，怎麼拚出口？",
							  "ranking": 3,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150787114961463"
							},
							{
							  "name": "【我家在土壤液化高度潛勢區！怎麼辦？】",
							  "ranking": 5,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150670041639837"
							},
							{
							  "name": "電價費率審議會會後記者會",
							  "ranking": 2,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086"
							},
							{
							  "name": "【直播預告】",
							  "ranking": 4,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150760114964163"
							},
							{
							  "name": "【連3降】4月電價將降9.56%，每度電價從2.8181元調為2.5488元。經濟部今日召開電價費率審議會議，決定上半年電價往下調降。",
							  "ranking": 1,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1150833798290128"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.45454545454545453,
						  "count": 12,
						  "articles": [
							{
							  "name": "不過列車速度這麼快，風景速度應該會調慢吧...？",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998225140230736"
							},
							{
							  "name": "【#最新】人機對決最終比數 4 : 1",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307"
							},
							{
							  "name": "在 Android 陣營中，Sony 智慧型手機不僅平均售價高出同業 2 倍之多，利潤也位居冠軍。有了第一，那麼最後一名是...？",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998010126918904"
							},
							{
							  "name": "搖搖欲墜的超微終於找到一線生機，不只如此，在 VR 領域擴展速度更是快速。",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997964843590099"
							},
							{
							  "name": "雖然「自拍」感覺不太牢靠，不過這或許會成為相對安全的支付方式。",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998186350234615"
							},
							{
							  "name": "Bloomberg 報導，知情人士透露 Intel 正與瑞銀集團合作，尋找對 Intel Capital 資產有興趣的潛在買家，這筆資產包含的公司跨越全球。",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998058430247407"
							},
							{
							  "name": "除了相機效果外，IHS 更解析了「Galaxy S7」的成本，大家知道其中最貴的零件是哪一個嗎？",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998176600235590"
							},
							{
							  "name": "雖然 AlphaGo 與李世乭的對戰還沒結束，不過它的下一步也相當令人期待。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997931293593454"
							},
							{
							  "name": "台積電 7 奈米 FinFET 製程技術又有新斬獲，透過此次合作雙方客戶在各種不同效能產品上皆能使用業界最低功耗的架構。",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998164570236793"
							},
							{
							  "name": "相信大家發現自己家就位在土壤液化的紅色高潛勢區的那一刻，第一個浮現的問題就是：那要怎麼辦？",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998183603568223"
							},
							{
							  "name": "Google 這次行銷真的頗成功，不僅是圍棋愛好者，連一般人都投入高度關注。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997994773587106"
							},
							{
							  "name": "在 iPhone 全面改用自行設計的 A 系列處理器後，日前又傳出 Apple 將進一步自行設計整合無線晶片",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/997618800291370"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "一對印尼姐妹花因為一個瘋狂的想法：「為什麼我們一定得等到長大才能成為重要的人物？我們現在就想做些什麼！」而開始尋找解決周遭問題的辦法。而因為把握這些關鍵，他們做到了。",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1080706018616641"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 13,
						  "articles": [
							{
							  "name": "吳勝良認為，網路已成為實體通路未來提供服務的重要環節，在帶領企業轉型的過程中，必須在不同階段要給予不一樣的養分，才能讓企業順暢轉型。吳勝良分享，主要可以分為三個不同的階段。首先，在電子商務發展初期，要給予獨立的發展空間，才能很快地讓電子商務通路從無到有。第二，當電子商務形成了一定規模的時候，要開始整合、串聯現有資源，讓電子商務的營運更穩定，才能夠讓第一階段打下的基礎更扎實。第三，必須要善用、結合實體通路的資源，做到更好的虛實整合。",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955067931235997"
							},
							{
							  "name": "貨到付款而且只需要你的電子郵件和地址！這是一家來自瑞典斯德哥爾摩，估值 600 億美金的金融支付獨角獸 Klarna 最新宣傳的付款方式。我們報導過極簡化的第三方支付工具，瑞典Klarna跨出歐洲，收入和利潤都大幅增長，他們的理念是，讓你跳過輸入信用卡和認證的繁瑣過程，買東西後，你可以選擇馬上付錢，或是 14 天之後貨到付款，發票會隨貨附上，降低沒收到貨的風險。",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955101517899305"
							},
							{
							  "name": "#實用好工具 ",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955235117885945"
							},
							{
							  "name": "台灣人最愛網路直播內容：綜藝、運動",
							  "ranking": 11,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955065514569572"
							},
							{
							  "name": "[活動訊息]Share 移動互聯網大革命：回歸初心，以用戶為出發點",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955068221235968"
							},
							{
							  "name": "「儘管手機讓交友變得更方便，但是回頭看過去20年，改變的其實只有雙方最初相識的媒介，人與人之間的交往始終細膩複雜，再厲害的演算法也派不上用場。」昨天是白色情人節，趁這個機會一起深入回顧台灣的主流交友軟體趨勢，以及未來的潛在商機。",
							  "ranking": 10,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955110841231706"
							},
							{
							  "name": "[人機對決，alphago又贏了！]",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955280787881378"
							},
							{
							  "name": "KKday在2014年才成立，2015年1月網站正式上線：從剛開站時有1千個行程，現在有5千個行程，目標年底網站上要有1萬個體驗行程。開站第一個月營業額約10萬，第三個月破百萬，月成長率約30-40％，2016年1月單月營收超過3千萬。粉絲團在半年內從7萬人成長到23萬人，台灣網站Alexa排名進到468名。",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955284277881029"
							},
							{
							  "name": "根據東方線上E-ICP資料庫 2014~2015年的調查資料，在民眾最近一年去過的遊樂場所中，去過目前知名三大文創園區（松菸文創園區、華山藝文特區、駁二藝術特區）的人數就成長了五成，而最近3個月去過文創園區與創意市集的消費者，從2014~2015年更成長了八成以上，顯示民眾已逐漸將文創園區與創意市集納入日常休閒活動的選項之一。",
							  "ranking": 13,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/954627891280001"
							},
							{
							  "name": "加密近來已經成為了行業內的一大熱門話題，這主要是因為蘋果與美國司法部之間展開了針鋒相對的爭辯。美國司法部一直在試圖強迫蘋果破解加州槍擊案嫌犯使用的iPhone手機。不過，報導稱Facebook與其他科技公司在加密上的努力要早於蘋果一事。",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955117387897718"
							},
							{
							  "name": "iiiNNO 共同創辦人David Kuo的日本創業觀察出爐：「從日本福岡看亞洲 – 台灣優勢及建議」，以下是給想要進入日本市場的國際團隊的建議：",
							  "ranking": 8,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955071937902263"
							},
							{
							  "name": "Facebook工程師在2008年成長到150人以上就開始實施Bootcamp活動，新手到老手都要參加，為期6週，這個Bootcamp活動可以讓Facebook成長時繼續維持Facebook的工程師文化（我會比較喜歡用駭客文化），FB的工程執行長Vlad Fedorov說這個活動非常成功，他告訴記者說，如果他要出去開新創公司，他也會複製這個活動。",
							  "ranking": 9,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955066911236099"
							},
							{
							  "name": "從事工業設計多年，擁有豐富的產品設計及量產經驗的Roolen\u0026Veryfast創辦人陳奕彰（Jimi）利用自身豐富的產品開發經驗與團隊建立了一個電商平台，提供製造商產品開發、設計與行銷販售等服務，提高廠商營業額。",
							  "ranking": 12,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955064737902983"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 30,
						  "articles": [
							{
							  "name": "為了要跨海賣房，連美國房仲都下載好微信來跨海賣房了。這也難怪中國就算用網路長城把自己封起來，Google和Facebook這些科技巨頭還是千方百計要主動敲開這扇市場大門了",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037261779629894"
							},
							{
							  "name": "只求網頁操作順暢可是很多台灣企業都做不到，請愛用Google新工具Risizer幫你把關",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037149566307782"
							},
							{
							  "name": "這問題好像腦筋急轉彎唷ＸＤ",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037228362966569"
							},
							{
							  "name": "喜歡自助行的捧油們，想要把KKday這5000種體驗都玩遍的人請舉手～～～",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037374716285267"
							},
							{
							  "name": "他不是忙到沒時間花錢。",
							  "ranking": 27,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037079072981498"
							},
							{
							  "name": "孩子的學習不能等！",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037442279611844"
							},
							{
							  "name": "沒效率的會可不可以少開（我知道不可能不開。）",
							  "ranking": 30,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036424376380301"
							},
							{
							  "name": "有人問你公司價值多少時，你應該不會傻傻跟他說你們家產品「價格」都賣多少吧？",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036537946368944"
							},
							{
							  "name": "八項科幻迷最引頸期待的交通工具有哪些？「瞬間移動」、「太空旅遊」一定入榜啦！不過這些到底有沒有可能成真呢？",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037316079624464"
							},
							{
							  "name": "用戶資料會被政府看透的科技服務誰敢用？不只蘋果怕，Google、Facebook…矽谷幾乎每間公司都怕。",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037227699633302"
							},
							{
							  "name": "學生創業情境模擬：大家約在咖啡廳討論出點子了，接下來就去徵夥伴、找資金吧～",
							  "ranking": 29,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037077899648282"
							},
							{
							  "name": "臺北 Google 開發者社群共同發起人、資深安卓 Coder 一天三小時、每週兩個晚上，共八堂課。帶你由淺入深進入 Coding 的世界，Code 出改變世界的可能性～",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037186776304061"
							},
							{
							  "name": "UIUX總是搞不清楚？13張圖，讓你立刻擁有基本知識！",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037113972978008"
							},
							{
							  "name": "趨勢科技分享年度計畫重點，其中之一就是資安軟體人才的培育。",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037311139624958"
							},
							{
							  "name": "孩童教育無價！BBC 今年 10 月要小六生用「Micro：bit」不用錢學 Coding！",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037229976299741"
							},
							{
							  "name": "經濟部工業局與台北市電腦公會將在 3 月 23 日舉辦智慧應用 Open API 論壇，並且開放免費報名。想要讓業務一飛沖天的中小企業者，該如何以智慧應用創造商機？那你就不能錯過這場精彩論壇！",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037184102970995"
							},
							{
							  "name": "【國際金融創新大船啟航，台灣見賢思齊】",
							  "ranking": 28,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036523039703768"
							},
							{
							  "name": "網站數據就是金庫！數據分析工具首推 Google Analytics！",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036544616368277"
							},
							{
							  "name": "網路新創需要哪種人才？便宜？耐操？高學歷？",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037189642970441"
							},
							{
							  "name": "大學時手機都要裝查理鈴聲啊！（完全暴露年紀來著）",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037162366306502"
							},
							{
							  "name": "產品做完了以後，PM 就可以鬆口氣了嗎？",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037283089627763"
							},
							{
							  "name": "加班是員工覺得大家目標一致很有幹勁的加班，還是相關負責人覺得應該加班？",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037229339633138"
							},
							{
							  "name": "超短碼看起來很威，但當你的同事要花更多時間來弄懂這個被複雜化的簡單模組時，可能會比較想扭斷你的脖子",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037227959633276"
							},
							{
							  "name": "FB才是新一代的大神，在大神面前，你毫無祕密，根本就等於全裸無處可藏。",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037135696309169"
							},
							{
							  "name": "不只 Google，YouTube 大神也受我一拜吧～",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036424473046958"
							},
							{
							  "name": "銀行想深化Fintech體質，比培養一個分行經理還重要的是，找到一個科技行動領導人，跟....",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036594439696628"
							},
							{
							  "name": "有些說法用「闖空門」來形容愛奇藝來台拓點，但實際情況應該這樣說：眼睜睜看著愛奇藝闖進門，卻沒有法規和單位可以攔住它",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037131772976228"
							},
							{
							  "name": "五局對弈終結，Alphago在這場電腦對決人腦的戰爭取得4:1的勝利。證明自己的強大之後，Alphago下一步又打算做些什麼呢？（希望不要是稱霸世界之類的啊）",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037382792951126"
							},
							{
							  "name": "自己的零用錢自己賺，能夠從小就當理財家不簡單啦！",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037161882973217"
							},
							{
							  "name": "搞不清楚哪款機型比較舒服？",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037109492978456"
							}
						  ]
						},
						{
						  "id": "media-23",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "#育幼院孩子要的不是同情而是_________",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1280238185325501"
							},
							{
							  "name": "【印表機也是要戴口罩的！】",
							  "ranking": 2,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1280145888668064"
							}
						  ]
						},
						{
						  "id": "media-24",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 4,
						  "articles": [
							{
							  "name": "【南方創客基地】",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524402644521869"
							},
							{
							  "name": "「雖然嘴上說過程最重要，但是得個獎肯定更佳愉悅吧。」",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524475891181211"
							},
							{
							  "name": "我接、我接、我接接接！",
							  "ranking": 4,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524340437861423"
							},
							{
							  "name": "中彰投分署/青年職涯發展中心的創客列車巡迴服務這次來到了位於大肚山腰的東海大學，由ArkLab 多旋翼工坊 - Open Skyler指導無人機的操作與應用。",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524401014522032"
							}
						  ]
						}

					];
				break;
				case "2016-03-19":
					this.media = [
												{
						  "id": "media-1",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.75,
						  "count": 8,
						  "articles": [
							{
							  "name": "【提升顧客保留率，三大電商龍頭教你如何黏住客戶！】",
							  "ranking": 7,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949497701764774"
							},
							{
							  "name": "【「京東全球購」來台招商，搶食中國1兆人民幣電商大餅】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949713611743183"
							},
							{
							  "name": "【#SmartM電子商務學院】選擇電商平台時須考量的要素",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/946441965403681"
							},
							{
							  "name": "【優化電商客服，3步驟贏得死忠顧客】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949562088425002"
							},
							{
							  "name": "#SmartM每週專題》SmartM電子商務學院，老品牌的華麗O2O轉型",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949534088427802"
							},
							{
							  "name": "【想來越南經營必須非常有耐心！】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948864575161420"
							},
							{
							  "name": "【SmartM超級好講師最終八強，課程精華首度曝光】",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949732288407982"
							},
							{
							  "name": "【掌握3個臉書廣告受眾的設定技巧，一口氣提昇成效！】",
							  "ranking": 8,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948861625161715"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 16,
						  "articles": [
							{
							  "name": "外界似乎總認為成人產業是推動先驅科技的主要動力之一，不過事實上，Naughty America 資訊長表示，業界對 VR 普遍還是持保留態度，頭盔硬體商也不太願意跟他們扯上關係。",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267643876566"
							},
							{
							  "name": "Google 地圖近期更新，結合 Uber 叫車服務，查好路線以後，可以直接看到 Uber 的預估車資並訂車。",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267385956566"
							},
							{
							  "name": "【NextDrive 聯齊科技】徵 Cloud Software Engineer",
							  "ranking": 14,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267180871566"
							},
							{
							  "name": "Sony 今天公布 PS VR 在美售價為 399 美金（約 13200 元台幣），比 HTC Vive、Oculus Rift 都便宜許多，但這個價格卻沒有附控制手把和感應鏡頭，也引起美國網友一陣吐槽。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267714236566"
							},
							{
							  "name": "在考慮用 App 交個朋友嗎？主打戀愛交友的 App「拍拖 Paktor」今天在台發表「速速揪」實體揪團、O2O 送禮等新功能，讓情意跨越虛擬網路，直接送至心上人手中，或是直接與他/她來場主題約會。",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153268022671566"
							},
							{
							  "name": "因應愈來愈大的手機螢幕，Google 的 Material Design 規範現在要求將選單放在底部，而非頂端或隱藏起來，此舉也讓 Android 和 iOS app 的排版設計愈來愈相像了。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267537826566"
							},
							{
							  "name": "蟑螂生命力強、能攀牆、鑽洞，壓也壓不壞，這些了不起的特性，讓科學家們對牠愛不釋手。要打造地表最強機器人，何不從「小強」開始？",
							  "ranking": 16,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153266339971566"
							},
							{
							  "name": "革命尚未成功！行動革命現在看來已經大勢底定，不過智慧裝置數量漸增的開發中國家，還有第二波革命的可能，考量到當地的生活有許多不便仍需克服，這次爆發的，將不再是娛樂產業。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267303726566"
							},
							{
							  "name": "當初蘋果的創辦人史蒂夫賈伯斯和 IBM 處處針鋒相對，現在為了借重 IBM 在商業市場的力量，新執行長提姆庫克竟與之合作，而這兩家文化大不同的公司又會撞出什麼火花呢？",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153265674741566"
							},
							{
							  "name": "以富質感之設計文創商品著稱，根植台灣的電商平台「Pinkoi」今天宣布將加強開拓海外市場，並入股日本電商 iichi ，將攜手日方進軍國際新市場！（先前已與 Pinkoi 再次確認並更正資訊）",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267935671566"
							},
							{
							  "name": "俄羅斯的搜尋引擎龍頭 Yandex 日前控告 Android 內建 Google Apps 為壟斷市佔之舉成立，Google 不服，進而上訴，然而法院最終還是裁決 Google 不得在手機內建相關軟體。",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267410641566"
							},
							{
							  "name": "【Inside 硬塞的網路趨勢觀察】徵 INSIDE 網站編輯",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267687666566"
							},
							{
							  "name": "Google 利用先前串流載入 app 的技術，宣佈推出免下載試玩遊戲的功能，使用者只要搜尋該遊戲便會看到「試玩」的廣告，不用下載就可以直接開始遊戲，預估將對廣告產業造成龐大的衝擊。",
							  "ranking": 12,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267164226566"
							},
							{
							  "name": "Instagram 宣布更改演算法，將會參考時間、關聯性等指標，將最熱門的結果排在頂端，未來 Instagram 貼文也要開始騙讚了嗎？",
							  "ranking": 13,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267251326566"
							},
							{
							  "name": "「公司成功融資，你也有一支強大的團隊、清晰的使命目標以及被市場驗證過的商業模式，但公司還是以失敗告終，媒體紛紛報導你尷尬的失敗⋯⋯」別擔心，你並不孤單，這裡有 9 家殞落的創業新星，讓它們的創辦人告訴你，失敗之後到底學到了什麼寶貴的一課。",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267922431566"
							},
							{
							  "name": "Google 發表了新行銷工具套裝 Googel Analytics 360 ，它取代了舊有的 Analytics Premium，整合平台彙整、視覺化圖表分析和標籤管理等工具，還能匯入第三方資訊，要用一組工具滿足你所有的需求。",
							  "ranking": 15,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153267149926566"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "《Make》國際中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "錄音帶也可以用來刮盤！真是太酷了：Ｄ",
							  "ranking": 2,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1162156930475204"
							},
							{
							  "name": "【新刊快訊】",
							  "ranking": 1,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1162160770474820"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "#超過8成文案都這樣操縱你的情緒",
							  "ranking": 2,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1134683226550902"
							},
							{
							  "name": "想從網路走入國際，該如何找到潛在客戶？",
							  "ranking": 3,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1134495556569669"
							},
							{
							  "name": "3月份台中課程",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1134772833208608"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 5,
						  "articles": [
							{
							  "name": "為了你，被壓扁我也願意。http://pinkoi.me/1U6Zu1l",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958"
							},
							{
							  "name": "喜歡以緩慢的速度觀看世界，設計師 畫畫還不夠，所以旅行-張真輔 ",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163315577035161"
							},
							{
							  "name": "小編出外景！今天有消息要公佈給大家哦，敬請期待 ：）",
							  "ranking": 4,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163150860384966"
							},
							{
							  "name": "日本設計師鈴木萌子（名字好可愛）的 Instagram 大公開！",
							  "ranking": 5,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1162523817114337"
							},
							{
							  "name": "「職人精神」，聽來剛毅且硬派，實則細膩而溫暖。把手作工藝當作畢生的習作，來自各創作領域的日本職人齊聚，將他們眼中的美好，藉由雙手溫度傳遞到你的生命裡。",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163349147031804"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 7,
						  "articles": [
							{
							  "name": "來說說，你看見的【東／西】方特色在哪兒呢？！",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153995002709561"
							},
							{
							  "name": "這是來自於日本的傳統工藝 //",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153995000064561"
							},
							{
							  "name": "下班後，來一點奇幻的吧！",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153995154009561"
							},
							{
							  "name": "大家來說說，",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153994228249561"
							},
							{
							  "name": "相當討喜的賀卡~",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153994578699561"
							},
							{
							  "name": "當每天匆匆流逝的日子變成一抹抹色彩、一條條紋路",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153994566764561"
							},
							{
							  "name": "大面積的 討論／分享 牆顯然已成為少不了的必備囉~!!",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153994377134561"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 15,
						  "articles": [
							{
							  "name": "Google整合資料分析、消費者動向分析、行銷等6項工具的行銷套裝服務Analytics 360 Suite。",
							  "ranking": 8,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813984068728006"
							},
							{
							  "name": "密碼真的是對人類的記憶是一項大挑戰，簡單易記怕被破解，太複雜又怕忘了，以自拍完成交易付款驗證或許是個好方法。",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814015272058219"
							},
							{
							  "name": "2020年的新創公司人才，需要什麼樣的能力？",
							  "ranking": 11,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813920082067738"
							},
							{
							  "name": "物聯網時代下，個人或伴侶間使用的性玩具也會成為駭客侵犯隱私的目標。",
							  "ranking": 12,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813919068734506"
							},
							{
							  "name": "小範圍的精準天氣預測加上感測器在農場的資料分析決策，可以提高農場作物耕種的品質及生產效率。",
							  "ranking": 10,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813924835400596"
							},
							{
							  "name": "微軟Windows裝置上以後將少了Here地圖可以選擇。",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814010262058720"
							},
							{
							  "name": "怕你一人不夠買，讓你建立眾多分身大採購的概念",
							  "ranking": 14,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813709125422167"
							},
							{
							  "name": "全球首次OpenStack應用黑客松提案人Michael Jenkins宣布活動即將在這週五晚上開跑，開發主題是未來城市，未來這個黑客松活動模式將推廣到全球",
							  "ranking": 9,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813983815394698"
							},
							{
							  "name": "現在發現Chromebook漏洞的獎金提高到10萬美元，有請高手出場。",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814052632054483"
							},
							{
							  "name": "AMD近來對VR市場的動作頻頻，不僅發表支援VR要價近5萬元台幣的高階顯示卡，還要推出VR內容消費平台，與遊戲商合作培育人才。",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814056688720744"
							},
							{
							  "name": "Google對於推動HTTPS真的有心，Gmail、Google Drive都已接近100%。",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814008318725581"
							},
							{
							  "name": "PlayStation VR將在10月登場，屆時會有多款PS VR遊戲一起推出，399美元的售價相當於再買一台PS 4主機，不知這價格大家接受嗎？",
							  "ranking": 13,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813900348736378"
							},
							{
							  "name": "Adobe設計工具再推新款，這次是UI設計工具",
							  "ranking": 15,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/813708138755599"
							},
							{
							  "name": "台灣的共乘服務應該可以使用Uber。",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814047552054991"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "【IOH 文章分享】學費太貴，美國也吹起歐洲留學風",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007874482591441"
							},
							{
							  "name": "【講座公告】在暨大資工研究所燃燒你對程式的滿腔熱血！",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007862315925991"
							},
							{
							  "name": "【IOH 文章分享】培養獨立思考，建立解決困難的能力！",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1007743235937899"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.8,
						  "count": 13,
						  "articles": [
							{
							  "name": "夠硬派，就要來自己做手搖字幕機啦！",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623824870674"
							},
							{
							  "name": "看主角騎馬打仗，從頭砍人砍到尾的電影會好看嗎？....（歪頭沈思）",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623629310674"
							},
							{
							  "name": "原來是大家誤會了...",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623197630674"
							},
							{
							  "name": "雖然名稱是XD，打字打起來好像在開玩笑，但是這可是專業的設計軟體，而且還免費下載呢！......XD",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623817100674"
							},
							{
							  "name": "ARM與台積公司共同宣佈一項為期多年的協議，雙方將針對 7奈米 FinFET 製程技術進行合作，包括支援未來低功耗、高效能運算系統單晶片（ SoC ）的設計解決方案。",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623365685674"
							},
							{
							  "name": "猜猜看他這次能不能撐過10回？",
							  "ranking": 13,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153621846805674"
							},
							{
							  "name": "這個可充電手機殼，應該比蘋果的那一個官方手機殼好看些吧！",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623073855674"
							},
							{
							  "name": "這個價格....加上主機的價錢，可能是三大方案中小編唯一可以考慮入手的一個VR方案了！",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623141605674"
							},
							{
							  "name": "AMD 推出 Radeon Fury 系列顯示卡之後，搭載雙晶片設計的產品訊息不斷傳出，針對 VR 內容製作應用設計的產品早一步搶先登場。AMD 甫發表 Radeon Pro Duo，聚焦在用於打造高階 VR 內容創作平台，亦適合包括教育、醫療、遊戲、娛樂等諸多應用。",
							  "ranking": 12,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153622842205674"
							},
							{
							  "name": "Galaxy S7 / S7 edge 不是完美，軟體的水平還是很有改善的空間。不過硬體方面絕對是現時頂級，設計吸引、物料高級，螢幕、相機、效能、電量全都很令人滿意。其中以 S7 edge 特別吸引，主要是因為彎曲螢幕實在夠炫。大部分評測都同意這兩台是現在最好的 Android 手機。",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618703305674"
							},
							{
							  "name": "先前曾報導過的華碩超大行動電源 ZenPower Ultra 公布台灣售價了！20,100mAh 的超大容量售價 2,990 元，現在購買還可以用 299 的價格加購 18W 快充變壓器。",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623533530674"
							},
							{
							  "name": "你認得出來這是在哪裡嗎？",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623751630674"
							},
							{
							  "name": "雖然真正的上手價格是高了許多，但是還是比其它VR眼鏡可以玩的「大全套」價格要便宜啊！",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623814320674"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "經濟部",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【娘子快來看！我把咖啡渣(ㄓㄚ)變衣服了】",
							  "ranking": 1,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1151577088215799"
							},
							{
							  "name": "【建立自由化信心的第一步】",
							  "ranking": 2,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1151537148219793"
							},
							{
							  "name": "台灣人愛吃藥，藥物的進出口也很可觀！",
							  "ranking": 3,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1151447991562042"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "當你在看房子的時候，你考慮的還是房子的「功能」嗎？德國建築師舍人（Ole Scheeren）告訴你，你該想像的是你能在房子裡產生的「故事」...。",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1081404201880156"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 14,
						  "articles": [
							{
							  "name": "最近一段時間，可能受宏觀融資環境的影響，很多做按需訂購的公司的日子都不太好過。印度的打車應用 Ola 已經在不久前關閉了旗下的送餐業務。有機食品配送公司 Good Eggs 也已經關閉了好幾個城市的外賣業務。不過，也有例外。",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955927544483369"
							},
							{
							  "name": "兄弟倆一開始只在FB經營以台灣傳統道教文化為訴求的粉絲團，以「免費無償提供資訊」的理念來服務廣大用戶，現已累積龐大30萬名粉絲。很多粉絲也常私訊詢問哪裡可以買到相關產品，於是，「財神小舖」品牌正式誕生。他們的經營理念是：人生要有財神的「態度」，他們力圖改變的，是人們的觀念，給大家有一種求財的正確觀念，幫助有需求的人。",
							  "ranking": 10,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955796764496447"
							},
							{
							  "name": "蘇夏蔚表示，之所以選擇和Yahoo奇摩超級商城合作，主要是為了考慮客源的拓展。「Yahoo超級商城的用戶年齡層較Go Happy的年齡層平均低五歲。」這五歲的差距也展現在對行動電商的需求上。蘇夏蔚表示，雖然在Yahoo奇摩超級商城才剛開幕六個月，來自行動端的流量已達到40％，對比Go Happy的25％來的高出許多。",
							  "ranking": 13,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955285051214285"
							},
							{
							  "name": "世界經濟論壇報告中提到：2015和2020的Top Skills中，洪士灝認為，和新創最有關係的三點，是解決複雜問題的能力（Complex Problem Solving）、第二是批判式的思考（Critical Thinking）及",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955928927816564"
							},
							{
							  "name": "2014 年募資創下天價近 2,800 多萬美金的 Glowforge 母公司，原先承諾在 2015 年 12 月出貨，現在他們保證今年六月一定讓首波贊助者拿到印表機，第二波也會在七到九月間到貨。 Glowforge 利用像髮絲般精細的雷射光線，不論是紙張、木頭、皮革、壓克力、織品、厚紙板等任何材質都可印製、切割、雷射，最高可以接受厚度 0.6 公分的物品。",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955820391160751"
							},
							{
							  "name": "AppWorks 今天正式宣布成立 AppWorks School，專注於新時代 i 人才教育，提供想加入網路與電商的熱血青年，一個與業界高度整合的訓練機構。而AppWorks School 的初期營運費用，將由 AppWorks 全額負擔。在未來則希望漸漸轉由人才介紹費來支持學校的營運。",
							  "ranking": 12,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955821234494000"
							},
							{
							  "name": "15日來台的微軟產品服務部門首席架構大師沃立奇‧霍曼（Ulrich Homann）指出：「2016至2017年間，物聯網的發展重點將聚焦在『可移動的物聯網』（IoMT），也就是在物聯網的既有基礎上，透過與各領域夥伴的合作，提供具備突破地理空間（Geospatial Capability）與通訊能力限制的Azure IoT解決方案。」",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955832117826245"
							},
							{
							  "name": "今晚就是第63場的創業小聚囉！想參加活動人卻不在台北？敬請密切注意我們的粉絲專頁：直播網址即將登場！",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955991544476969"
							},
							{
							  "name": "近日Shoppu公布調查報告，針對2016年馬來西亞消費者傾向進行分析，其中受訪者80%為20-30歲年輕人，72%為女性消費者，調查結果指出目前馬來西亞現在還是值得開發的電商市場處女地，因為還有25%的人口，相當於750萬人從未使用線上購物，以及馬來西亞人不愛線上分期付款的特性。以下是他們的幾點觀察：",
							  "ranking": 14,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955117177897739"
							},
							{
							  "name": "「下一個能夠使用智慧型手機的25億人口，其情況和之後會發展的故事，將會變得完全不同。這25億人中的大多數都將生活在全球開發中和非富裕的國家和地區，他們主要希望利用智慧手機獲取一些他們之前透過網頁服務或無網路情況下無法享受到的服務，其中包括金融服務、醫療服務、教育服務以及運輸服務等等。而這些東西要比瞭解你的朋友昨晚玩得如何開心或是使用faceswap要重要得多。」",
							  "ranking": 11,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955795734496550"
							},
							{
							  "name": "創業小聚直播中🎥為服務中南部以及無法到場的觀眾，創業小聚提供直播服務讓大家也能聽到現場精彩的分享內容！",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956023977807059"
							},
							{
							  "name": "越來越多的店家決定利用現今當紅的手機軟體Instagram作為品牌宣傳之平台，在過去，Instagram的動態依照時間軸排列，間接保證不會錯過任何一個動態，然而當用戶在Instagram追蹤的人愈來愈多的時候，他們也可能因為過多動態，而會錯過許多對用戶重要的動態消息。透過新的演算法，Instagram不僅表示能夠讓用戶最先看到自己在意的消息，所有的動態仍然會在動態牆上，只是以不同的順序排列。",
							  "ranking": 9,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955815184494605"
							},
							{
							  "name": "Google Analytics 360 Suite 包含六種應用工具，結合了原本的 Google Analytics Premium 及 Adometry，並整合數據分析及視覺化工具、A/B測試、標記管理工具等，預計成為數位行銷的新利器。",
							  "ranking": 8,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/955812767828180"
							},
							{
							  "name": "粉絲朋友們抱歉，剛剛的直播發生一～點點技術性的問題，",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956024764473647"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【光是102年4月，常駐人口僅462人的彰化台西村，就有4人罹癌】",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1281057391910247"
							},
							{
							  "name": "#媲美滴雞精製成的膠原蛋白飲",
							  "ranking": 2,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1280621248620528"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "TEDx SINGAPORE",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "From TED2016 last month. Don\u0027t delay watching this fab TED talk",
							  "ranking": 2,
							  "src": "TEDx SINGAPORE",
							  "url": "https://www.facebook.com/27675774958/posts/10150682624119959"
							},
							{
							  "name": "Musings of a tech mogul, interview with Singapore\u0027s Ong Peng Tsin",
							  "ranking": 1,
							  "src": "TEDx SINGAPORE",
							  "url": "https://www.facebook.com/27675774958/posts/10150682825994959"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.4666666666666667,
						  "count": 16,
						  "articles": [
							{
							  "name": "光看物聯網已經不夠！微軟表示，有鑑於在IoMT世代，來自於可移動裝置的數據將為交通、醫療、運動、氣象等產業帶來更多機會，從2016年起將進一步把物聯網應用擴展聚焦在「可移動的物聯網」（IoMT）。",
							  "ranking": 8,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048223164284"
							},
							{
							  "name": "「我研究AI，正在試著搞清楚宇宙是怎麼一回事。」這是創造出 AlphaGo 的 DeepMind 共同創辦人Demis Hassabis 的自我介紹。除了是神經科學家、電腦科學家，他還有另一個令人驚奇的身份：蟬聯過5屆世界冠軍的西洋棋神童。",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154049176104284"
							},
							{
							  "name": "「唯有建立無法摧毀的形象，才能使你的品牌成為人們生活的一部分。」——奧美創辦人 大衛·奧格威(David Ogilvy)",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048776349284"
							},
							{
							  "name": "「過去我們掛心每一個裝置都各自擁有獨立 App，難以整合，其實更需要思考蒐集來的資料如何和使用者產生長遠連結。當獨立 App 開發者、平台的生態系與使用者行為都已成熟，bots（軟體機器人） 絕對是現在與未來，提供有價值資訊的趨勢。」",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048460994284"
							},
							{
							  "name": "擁有這台 3D 印表機，製作所有日常生活想像得到的、意想不到的所有物品，都不再是高難度的挑戰！",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048466024284"
							},
							{
							  "name": "【越來越像Facebook？】如果你是Instagram的愛好者，那你一定很熟悉螢幕上依時間軸排列的照片動態，但這一切將被新的機制取代。",
							  "ranking": 12,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154047930319284"
							},
							{
							  "name": "寫作的人大概都體會過撞牆期的痛苦，不過現在，有一款「最危險的寫作應用程式」或許可以幫助你突破這道牆，因為它連讓你築起這道牆的時間都不給，你必須把品質先放一邊，唯一能做的事就是寫、寫，與不停地寫。",
							  "ranking": 14,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154047641664284"
							},
							{
							  "name": "設計商品購物網站Pinkoi去年獲得紅杉資本及GMO Ventures900萬美元（約2.97億台幣）投資後，積極向海外市場發展，今日宣布海外布局策略，將加速拓展日本、香港、泰國、美國和中國市場，預估2016年海外市場營收可成長2倍！而為了加速日本在地策略合作，Pinkoi還收購了日本手作職人電商平台iichi。",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048742109284"
							},
							{
							  "name": "「個人要如何發展，應該是看個人的資質和願景而定，只是說世界在變，大環境所重視的技能也在變，統計上的資料有其參考價值，但還須要多觀察實際的例子以及了解自己的特性。」",
							  "ranking": 13,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154047874244284"
							},
							{
							  "name": "「由於外賣行業激烈的競爭以及近期公司融資出現了問題，我們嘗試了所有的策略方案，直到最後一刻，但這些方案都以失敗而告終，所以公司最終決定關閉服務。」SpoonRocket 的共同創辦人 Steven Hsiao 今天向外界確認已經正式停業。",
							  "ranking": 10,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048190344284"
							},
							{
							  "name": "蘋果週二宣佈開放旗下的News App出版平台，讓個人及獨立出版商都可向News App提供內容！",
							  "ranking": 11,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048067979284"
							},
							{
							  "name": "Google 今日推出企業級數位行銷整合工具：Google Analytics 360 Suite，結合了原本的 Google Analytics Premium 及 Adometry，並整合數據分析及視覺化工具、A/B測試、標記管理工具等。",
							  "ranking": 15,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154047638319284"
							},
							{
							  "name": "今天，在北美召開的GDC大會上，Sony公佈了PS VR頭戴顯示器售價為399美元（約台幣13103元），預計10月上市。三大頭戴顯示器都正式發佈。",
							  "ranking": 16,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154047533944284"
							},
							{
							  "name": "中國第二大電商京東旗下以B2C自營和B2B2C第三方平台兩種模式營運的「京東全球購」，今天正式透過台灣電商代運營商FunCity方城市行銷在台灣招商。",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048671694284"
							},
							{
							  "name": "推出才兩年左右的時間，Slack 目前日活躍用戶已高達 230 萬。去年4月，Slack 的估值已達 28 億美元。在即將進行的新一輪融資中，估值最高或許有 40 億美元。Slack 為何能取得如此驚人的成長速度？而他們在早期都做了哪些工作為日後高速成長奠定了基礎呢？",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048431604284"
							},
							{
							  "name": "社群編輯們肯定都有這樣的困擾：在不同的社群上發佈圖片，往往都有不同的尺寸要求，無論是記住每個社群的圖片比例、還是一張一張裁成不同大小，都是件麻煩事。不過以後這些瑣碎的事情，你可以考慮交給Landscape，讓它一次幫你裁切各種比例！",
							  "ranking": 9,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154048238699284"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【創業現場】#英文報導",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1065453736833948"
							},
							{
							  "name": "105年度的主題班也可以報名囉，大家快來吧！http://learningup.sme.gov.tw/index.php?op\u003dcareer_class\u0026show\u003dclass2",
							  "ranking": 2,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1064899340222721"
							},
							{
							  "name": "[ #行政院青創基地]活動花絮 - 產品開發與實戰行銷系列活動#6 創業夥伴發表與聚會",
							  "ranking": 3,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1065392503506738"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "早安☀年後開始找工作的青年朋友們，還不知道適合的方向嗎😃？",
							  "ranking": 2,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1163881626957614"
							},
							{
							  "name": "\u003c\u003c職場順遂小秘訣\u003e\u003e",
							  "ranking": 1,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1164000356945741"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "為了幫助年輕人成為新時代網路公司需要的人才，也為了幫助 AppWorks Startups 找到更多優秀的人才加入，AppWorks 決定創辦 AppWorks School，專注於新時代 i 人才教育，提供想加入網路與電商的熱血青年，一個與業界高度整合的訓練機構。",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "[嘖嘖最新計畫] 守護純真的童年~讓孩子收藏一隻專屬自己的搖馬椅",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1018039381595521"
							},
							{
							  "name": "麥芽糖是五六年級孩童時期的甜蜜回憶，那個年代不知要撿多少破銅爛鐵，才能去跟資源回收的阿伯換得那一口的美好，如今卻漸漸地淡忘在我們的生活當中。那個讓人口水直流的畫面，令人難以忘懷。",
							  "ranking": 2,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1017955198270606"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【Start Up Taiwan創業聚會－3/30 新加坡創投家Alan kuan Hsu來台分享進軍東南亞市場秘訣】",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1293122550714334"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 20,
						  "articles": [
							{
							  "name": "帶一個去公司午睡用？",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981936241900549"
							},
							{
							  "name": "那麼，哪裡可以買得到呢？",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981296088631231"
							},
							{
							  "name": "攝影小教室經典文章回顧時間！",
							  "ranking": 15,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981750341919139"
							},
							{
							  "name": "如果攝影師出門不想帶太多東西的時候，這個真的很適合耶！",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981846598576180"
							},
							{
							  "name": "不只有外型特別，寫字畫畫都超順 ! 是說也好想跟廠商建議，可以真的拿來組裝傢俱嗎？(誤)",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981989771895196"
							},
							{
							  "name": "Razer 也推出它們的直播軟體，分為免費版以及提供更多功能的訂閱版本",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981277421966431"
							},
							{
							  "name": "PlayStation VR的價錢終於出來囉~",
							  "ranking": 14,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981752868585553"
							},
							{
							  "name": "有搭載 USB Type-C 的設備愈來愈多了，這時候來顆雙接頭（Type-C / 標準 USB）的隨身碟也是理所當然的事情吧～威寶這款還有 OTG 的功能喔！",
							  "ranking": 16,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981302788630561"
							},
							{
							  "name": "結果 X25 基本上就是 X20 Turbo ...",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981904625237044"
							},
							{
							  "name": "要養出優秀的歐吉桑想必也不是那麼容易的一件事（掩面）",
							  "ranking": 19,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981275965299910"
							},
							{
							  "name": "句句刺入我心中..老闆我想要加薪啊..",
							  "ranking": 13,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981196035307903"
							},
							{
							  "name": "缺點是募不到大鈔…",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578"
							},
							{
							  "name": "這個好像很不錯用哦～",
							  "ranking": 20,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981197548641085"
							},
							{
							  "name": "好喜歡這樣的港嚼呀…(最好外面再下點小雨)",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982028411891332"
							},
							{
							  "name": "聯發科: Helio X20 有三檔超強毆毆毆毆！",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981885098572330"
							},
							{
							  "name": "先前看過節目介紹豐田燃料電池車 Mirai 感覺超酷的，不過燃料電池的高壓氫氣生產成本還有儲存還是目前比較大的問題，豐田這次則結合風力發電希望將燃料電池技術導入堆高機哩",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981293688631471"
							},
							{
							  "name": "天啊天啊！有點想要啊！",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155"
							},
							{
							  "name": "這是真的嗎？哪時候有的啊？！",
							  "ranking": 17,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981194615308045"
							},
							{
							  "name": "AMD在今年的GDC遊戲者開發大會上，",
							  "ranking": 18,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981349121959261"
							},
							{
							  "name": "None",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981992281894945"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7777777777777778,
						  "count": 12,
						  "articles": [
							{
							  "name": "我們大家都討厭的 Facebook 貼文排序，就要登陸 Instagram 了",
							  "ranking": 8,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952026104889433"
							},
							{
							  "name": "最熟水性的 Android Wear 智慧錶 Nixon Mission 登場，可潛水 100 米",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952185474873496"
							},
							{
							  "name": "AMD 推出專為 VR 設計的 Radeon Pro Duo",
							  "ranking": 11,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951906351568075"
							},
							{
							  "name": "《戰爭機器 4》多人模式公測將於 4 月 18 日啟動",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952065951552115"
							},
							{
							  "name": "網頁版 Google Inbox 也有 Smart Reply 功能，回覆電郵更方便了",
							  "ranking": 10,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951968191561891"
							},
							{
							  "name": "Fossil 再推 7 款穿戴裝置，當然有 Android Wear 智慧錶",
							  "ranking": 9,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951997461558964"
							},
							{
							  "name": "《Minecraft》也將登陸 Gear VR",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952047874887256"
							},
							{
							  "name": "Google：使用加密連線的網絡流量超過 75%",
							  "ranking": 7,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952040521554658"
							},
							{
							  "name": "來了，來了，繼 Oculus Rift、HTC Vive 之後，Sony 也終於正式把其 VR 裝置 — PlayStation VR 的上市資訊公開了！可是這價錢可不是總成本啊～小編在內文為大家都計算好了，快進來看。",
							  "ranking": 12,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/951863111572399"
							},
							{
							  "name": "Sennheiser 為 VR 打造的 3D 音訊聽起來確實很自然",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952138684878175"
							},
							{
							  "name": "十核心 Helio X20「借殼」X25 登場，魅族 Pro 6 將獨家首發",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952114954880548"
							},
							{
							  "name": "這款 Apple Watch 錶帶可在你的心臟出問題時發出提醒",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952108441547866"
							}
						  ]
						},
						{
						  "id": "media-23",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 13,
						  "articles": [
							{
							  "name": "Minecraft 不僅可以引導小朋友寫程式，現在更可以用來訓練人工智慧，在這款可以發揮高度創造力的遊戲中，人工智慧會有什麼驚人的表現呢？",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998789926840924"
							},
							{
							  "name": "雖然日月光曾表示將不受公平會影響，不過公平會延長審查期限該案似乎也瀕臨破局。",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998752333511350"
							},
							{
							  "name": "環境問題一直充斥在我們的生活中，但大部分的人都不知道其中的影響比我們想像中還要深刻。",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998807383505845"
							},
							{
							  "name": "這個宣傳手法看起來頗成功的阿，只是不僅小米覺得很困擾，就連雷軍本人也表示常被誤會開始做電動車了...",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998792780173972"
							},
							{
							  "name": "操作與定價平易近人是 Sony PS VR 最大優勢，Oculus Rift 與 HTC VIVE 會如何因應勁敵的攻勢呢？",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998640076855909"
							},
							{
							  "name": "行動裝置也可以自由拖動視窗，這樣的功能對大家來說實用嗎？",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998794593507124"
							},
							{
							  "name": "【3/16 #GoogleDoodle 】",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998671533519430"
							},
							{
							  "name": "隨著夏普將收編在鴻海旗下，迫使 JDI 必須自救，加快結構改革，以藉此對抗來自南韓廠商的競爭。",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998781373508446"
							},
							{
							  "name": "受中國 LED 廠競爭影響，晶電已啟動史上最大規模減產。",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998598473526736"
							},
							{
							  "name": "資本市場的寒冬也衝擊網路新創公司，SpoonRocket會是個案嗎？",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998896500163600"
							},
							{
							  "name": "繼夏普爆出「或有負債」的財務隱憂之後，東芝也被發現有 7 件、涉及金額共 58 億日圓的造假數據。",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498"
							},
							{
							  "name": "經過昨天的最後一戰，AlphaGo 排名由世界第四，晉升為世界第二。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998682926851624"
							},
							{
							  "name": "台灣半導體兩大龍頭聯手，希望透過雙方的優勢來加強產品，攜手推進新世代的物聯網與穿戴式裝置市場",
							  "ranking": 13,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/998294873557096"
							}
						  ]
						},
						{
						  "id": "media-24",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 32,
						  "articles": [
							{
							  "name": "人生花在為工作賣命，值得嗎？",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037919512897454"
							},
							{
							  "name": "新加坡星展銀行先前就辦過加速器計畫，今年更是擴大舉辦，不僅邀請各國海外創投、打造新創園區，也與ALPHA Camp 合作，共同打造7個月長的加速器計畫！",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037987946223944"
							},
							{
							  "name": "資深 Androi 工程師認證：物聯網、車聯網 ... ... 多聯網時代，專門的應用開發團隊很重要！",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037927099563362"
							},
							{
							  "name": "翟神這次又說了什麼讓人只能點頭按讚的評論？",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037498882939517"
							},
							{
							  "name": "新創公司之所以被稱為新創公司 ，就是它有別人不會的「技術」，這是新創公司最重要的資產——但如果被偷了怎麼辦？公司就會因此倒閉嗎？",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036542353035170"
							},
							{
							  "name": "今後 UX 入門會越來越容易，設計師需要加強縱向的專業技能和發展橫向的相關知識，來提升自己。不然，在這人人都自稱是UX設計師的時代，你很快就被洗到沙灘上了！",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037938939562178"
							},
							{
							  "name": "Instagram 改了演算法，本來是以時間排列的照片，現在改為已受歡迎程度來決定哪些內容會先出現在用戶眼球。這代表什麼意思呢？Instagram 越來越積極地想討用戶歡心、製造互動，但用戶買不買帳還說不準。",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037867926235946"
							},
							{
							  "name": "親愛的，這個團隊把燈泡變成了紙張！",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037499829606089"
							},
							{
							  "name": "想讓你的產品更好，問問使用者的意見必不可少。但小心了，千萬別傻傻問出這三個問題 ... ...",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037497846272954"
							},
							{
							  "name": "追劇首選當然是要高清繁中字幕，台灣本土影音平台ChocoTV不僅完全符合以上需求，最近還一舉超越Netflix和愛奇藝，搶下Google Play影音下載第一名啦！",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037946962894709"
							},
							{
							  "name": "如果你沒有大神一般的意志力、洶湧的學習熱情，資深 Android 工程師真心一句話奉勸你：來上課學 Code 吧～",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037198449636227"
							},
							{
							  "name": "【企業主管才是最該搞懂網站數據的人】",
							  "ranking": 29,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1036547123034693"
							},
							{
							  "name": "主旨寫得好，投資人、面試官、老闆才想看！",
							  "ranking": 32,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037159649640107"
							},
							{
							  "name": "隨著賽局結束，人機大對決也劃下句點。AlphaGo 的挑戰成功不僅成為人工智慧發展史上重要的里程碑，更為機器學習技術奠下成功的基礎。接下來AlphaGo就要開始挑戰打星海啦！",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037930856229653"
							},
							{
							  "name": "她是女性、她是中年人，她也是面對未來彷徨不安的工程師。",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037499592939446"
							},
							{
							  "name": "區塊鏈根本成為金融業流行語，看看這些大企業都開始大舉投資徵才作研究，就希望能在趨勢中不落人後。",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037913752898030"
							},
							{
							  "name": "Facebook影音已經是行銷人必備的超級基本功，但是只要額外注意這些簡單的細節，傳播效果就還能再上一層樓！",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037965232892882"
							},
							{
							  "name": "繼歐美之後，中國也掀起一股學童 coding 風，不過他們更喪心病狂，竟要小朋友從幼兒園開始 code！",
							  "ranking": 31,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037496342939771"
							},
							{
							  "name": "意志力不夠，省錢自學 Coding 也沒用！",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037198906302848"
							},
							{
							  "name": "現在的工作你心甘情願做一輩子嗎？",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038036412885764"
							},
							{
							  "name": "科技一直在進步！現在又多了一項超讚超實用發明：把 CO2 變成酒～（不知道好不好喝 :P）",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037496506273088"
							},
							{
							  "name": "不僅具備優秀的硬體產業優勢，也是亞洲運用OpenStack的先驅，這都是OpenStack選定台灣作為初次黑客松舉辦地點的原因！",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038011472888258"
							},
							{
							  "name": "想探究政治、公民社會與科技如何完美互動？各種珍貴的國際經驗交流都在G0V Summit 2016！",
							  "ranking": 30,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037743616248377"
							},
							{
							  "name": "金融業現在最該了解的是：為什麼顧客開始從他們手上跳離，轉向跨界浪潮的、那些不是銀行本業者所開發的服務？",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037156642973741"
							},
							{
							  "name": "大家都在說行動支付會是未來趨勢，但是在台灣，說實在的，用戶就是不普及啊！",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037869066235832"
							},
							{
							  "name": "【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037499166272822"
							},
							{
							  "name": "各位創業菜鳥，商業提案不是顧著講自己需要什麼就好，這完全是在浪費對方時間欸！",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037946776228061"
							},
							{
							  "name": "跨境電商不是隨便喊喊就能成功，看看 Pinkoi 的海外經營經驗，說不定新的idea就藏在這些細節裡～",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038092526213486"
							},
							{
							  "name": "老是缺人的公司，到底是哪裡怪怪的？",
							  "ranking": 27,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037159789640093"
							},
							{
							  "name": "Google對能幫忙找漏洞的駭客一向慷慨大方，光是去年就送出200萬美金。不過Chromebook、Chrome和 Chrome OS的五萬美元獎金一直送不出去，讓Google決定繼續加碼！",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037865129569559"
							},
							{
							  "name": "為什麼有些App 特別令人上癮？",
							  "ranking": 28,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037754156247323"
							}
						  ]
						},
						{
						  "id": "media-25",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 4,
						  "articles": [
							{
							  "name": "「多功能工具什麼的我覺得沒什麼用處阿！」但當你的眼前有一瓶啤酒，但手邊卻只有一把指甲剪的時候你就會懂「TPT」的重要性了。",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524751964486937"
							},
							{
							  "name": "【南方創客基地】",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524413007854166"
							},
							{
							  "name": "【活動推薦】",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524412444520889"
							},
							{
							  "name": "請問各位死忠樂高迷們，你們都去哪裡搜刮最新、最多款式的樂高產品呢？",
							  "ranking": 4,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524671051161695"
							}
						  ]
						}

					];
				break;
				case "2016-03-20":
					this.media = [
												{
						  "id": "media-1",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 8,
						  "articles": [
							{
							  "name": "【台灣文創走出台灣， Pinkoi 2016 海外營收翻倍計畫】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950263151688229"
							},
							{
							  "name": "【行銷新顯學：客戶、流量的成長駭客來了！】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950248101689734"
							},
							{
							  "name": "【避免舊顧客流失的時機與策略】",
							  "ranking": 7,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950144091700135"
							},
							{
							  "name": "【文案美感巧思，讓臉書粉絲頁像展示櫃】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948876648493546"
							},
							{
							  "name": "【許景泰（SmartM世紀智庫創辦人）：舉辦「超級好講師」，打造人才培訓2.0平台】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950211595026718"
							},
							{
							  "name": "【#SmartM電子商務企業菁英班：企業菁英必修的5堂電子商務經營與策略課程】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950346601679884"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 17,
						  "articles": [
							{
							  "name": "相比于標準藍芽連接， BLE 可顯著降低裝置的能耗，同時提供常規藍芽的大部分連線性以及約一半的連接範圍（大約15米/50 英尺）。安裝電池的裝置如果使用藍芽LE，可在不充電或更換電池的情況下使用數年。",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270219491566"
							},
							{
							  "name": "號外！特斯拉正式進軍台灣，分公司通過審核啦！",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270632636566"
							},
							{
							  "name": "台灣創業學校 ALPHA Camp 受新加坡星展銀行邀請，在這次的前導加速器計畫合作，培育創業團隊與新創人才。",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269966561566"
							},
							{
							  "name": "新創加速器 AppWorks 要辦學，想為合作的新創團隊直接培養行動、數據分析進階人才，而且不收學費。但既有的新創網路相關教育組織卻對這樣的模式，提出了許多疑問。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270316891566"
							},
							{
							  "name": "受經濟疲軟及手機市場競爭情勢影響，年初至今三星已裁員近 2500 人，關閉了 3 家研發中心，並且是 18 年來首度調降研發預算。",
							  "ranking": 17,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269329116566"
							},
							{
							  "name": "日前體育署正式回應「電子競技不屬於體育運動」，引起不少人指責政府「還是把電競當小孩玩意」。但電競真該被視為一種「運動」嗎？來看看社會學與人類學的視角怎麼說。",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566"
							},
							{
							  "name": "三星在 SXSW 科技藝術節上，發表了一款原型耳機，不過它並不是普通的耳機，而是用電流刺激耳內神經，來克服 VR 造成的暈眩。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153268644916566"
							},
							{
							  "name": "大家還習慣 Facebook 新增的 5 種表情符號嗎？來看看 Facebook 首席設計師談他們在背後所下的苦工吧！",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566"
							},
							{
							  "name": "亞馬遜 AWS 公佈數據庫遷移服務，而且宣稱只要 10 分鐘就能幫你搬好，遷移費用視資料量而定，參考價格基本上是 3 美元 /TB。",
							  "ranking": 15,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269451746566"
							},
							{
							  "name": "「視訊會議軟體 Zoom，長期耕耘美國教育市場。最新報告指出，全美排名前 200 所大學，有超過 86% 的學校，透過 Zoom 進行遠距教學及相關應用。」",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269841301566"
							},
							{
							  "name": "隨著協作工具和職業媒合平台的發展，愈來愈多的企業選擇將工作外包給自由工作者，也有愈來愈多人選擇當一位自由工作者，這樣的未來已成不可避免的趨勢，企業和員工雙方該如何適應並解決新工作型態衍生的問題呢？",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269605856566"
							},
							{
							  "name": "微軟公佈了 HoloLens 合作專案 Actiongram，這款軟體充分利用 AR 和內建媒體庫，讓你可以與各種虛擬角色演對手戲。",
							  "ranking": 12,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269514331566"
							},
							{
							  "name": "Google 街景「登」上玉山囉！不僅如此，這次「街景」還結合了 VR 技術，使用者可透過 Cardboard 等 VR 裝置，身歷其境玉山與其他 600 個全台特色景點！",
							  "ranking": 13,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269604306566"
							},
							{
							  "name": "外出吃飯，常煩惱聚餐怎麼約嗎？OpenRice 調查外出聚餐的消費者行為，找出大家外食的煩惱，並針對聚餐推出飯局邀約功能，讓你喬時間、訂位一次搞定。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270211511566"
							},
							{
							  "name": "【奇步應用】徵 iOS App Developer",
							  "ranking": 14,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269346166566"
							},
							{
							  "name": "百度首席科學家吳恩達今天接受華爾街日報採訪，表示百度無人車近期就會在美國上路測試。這次之所以加入無人車戰場，也許就像百度 CEO 李彥宏曾表示的：「在國際上，中國方面誰負責在技術上去和其他國家公司同台競爭？我們必須要做這個事情。」",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269911576566"
							},
							{
							  "name": "你看過電影「回到未來」嗎？當中會自動繫鞋帶的 Nike Air Mag 是不是讓你印象深刻呢？雖然每年 Nike 都會拿出原型版娛樂一下粉絲，不過一直沒有大量販售計畫。而現在 Nike 正式宣佈，今年聖誕節你就可以買到這雙球鞋了。",
							  "ranking": 16,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153269397756566"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "《Make》國際中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.5,
						  "count": 4,
						  "articles": [
							{
							  "name": "【Maker Faire Taipei】",
							  "ranking": 2,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1163102993713931"
							},
							{
							  "name": "成本220美元的自製Arduino雷射雕刻機！來看看這位Maker是如何製作的吧～然後你可以到instructables上下載檔案，自己做做看：Ｄ",
							  "ranking": 3,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1162951317062432"
							},
							{
							  "name": "【Maker Faire Taipei 2016 參展通知公告】",
							  "ranking": 4,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1162865233737707"
							},
							{
							  "name": "擔心減法製造會浪費掉許多材料嗎？",
							  "ranking": 1,
							  "src": "《Make》國際中文版",
							  "url": "https://www.facebook.com/195312493826324/posts/1163077873716443"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "創業臺灣 育成家族~",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "教育部【大學校院創新創業扎根計畫】之「創業交流工作坊暨計畫說明會」開始報名囉!!",
							  "ranking": 1,
							  "src": "創業臺灣 育成家族~",
							  "url": "https://www.facebook.com/252546844768979/posts/1136206139736374"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "台灣品牌在大陸需要從零開始，中小型企業想搶進大陸內需市場，必須克服兩岸貿易所需的通關/檢驗/檢疫、金流、物流、商流等問題，雖然不好做、很辛苦，但現在不做，未來絕對沒機會!",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1135474476471777"
							},
							{
							  "name": "十幾年的老房子裝修成民宿、咖啡館，甚至是商務中心該注意哪些細節？設計上有哪些巧思？結合裝潢成本、定價分析以及稅務實務，完整的課程規劃，讓你的老屋來一場華麗變身！",
							  "ranking": 2,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1135236256495599"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 4,
						  "articles": [
							{
							  "name": "據日本氣象株式會社的預報，3/21 後東京、大阪、福岡等熱門賞櫻景點的櫻花將進入盛放期，已經購買機票的你，別錯過囉！",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163923703641015"
							},
							{
							  "name": "這是今天 Pinkoi 辦公室午餐喔！原來六十人份的 Pizza 長這樣...",
							  "ranking": 4,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1164039470296105"
							},
							{
							  "name": "採用玻璃材質自由地呈現天空、海洋、植物、動物給予的靈感，創作出繽紛奇趣的玻璃花器。工作室位在京都的 ガラス工房nazuna薺 設計師紀錄下她的工作花絮 \u003c3",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1164076576959061"
							},
							{
							  "name": "好銷魂的表情😂 ",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1163926356974083"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 7,
						  "articles": [
							{
							  "name": "溫泉相關的logo可以怎麼設計呢？！可以看看這個清新簡約的案例～",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153997136234561"
							},
							{
							  "name": "這材質，彈性的調整空間很大的說~",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153997784789561"
							},
							{
							  "name": "【好神奇】",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153994943384561"
							},
							{
							  "name": "可以「調溫度」的保溫瓶！！覺得生活用品的功能真的越來越細緻了！",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153997150004561"
							},
							{
							  "name": "這設計，讓大家有什麼同感呢？！",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153998174604561"
							},
							{
							  "name": "【 晚安，微影院 】",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153997726109561"
							},
							{
							  "name": "簡單的小卡，讓人擁有想像空間的設計巧思~",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153997720054561"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.45454545454545453,
						  "count": 13,
						  "articles": [
							{
							  "name": "OpenStack全球首次黑客松周末在臺北舉辦，還來得及報名～",
							  "ranking": 13,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814427595350320"
							},
							{
							  "name": "現在小型媒體、內容出版商及部落客也都可以使用News App來產製iPhone、iPad的內容了。",
							  "ranking": 10,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814640525329027"
							},
							{
							  "name": "AWS用戶有福了，目前可以移轉的資料庫包括Oracle、SQL Server、 MySQL、MariaDB、PostgreSQL等。",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814689531990793"
							},
							{
							  "name": "沒破解的iPhone、iPad很安全嗎？資安業者警告這個惡意程式偽裝成桌布程式，還曾成功上架到App Store。",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814714581988288"
							},
							{
							  "name": "知名的遠端遙控軟體TeamViewer大改版，推出Windows 10的專用App，以及ChromeBook(和Google Chrome瀏覽器)可用的擴充套件，而且也能支援遠端控制Android裝置喔!",
							  "ranking": 11,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814628675330212"
							},
							{
							  "name": "駭客攻擊的手法不斷翻新，資安業者發現駭客搶先註冊過期的廣告網域，透過知名網站散佈惡意廣告。",
							  "ranking": 7,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814665831993163"
							},
							{
							  "name": "蘋果在iPhone硬體元件供應鏈上的風險管理，記憶體、顯示器等都有兩三家的供應商提供，這個風險管理也推到iCloud後端的服務系統上。",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814697798656633"
							},
							{
							  "name": "Mozilla開發中的下一代瀏覽器引擎Servo將在6月首次技術展示，據說效能會更好更穩定。",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814676468658766"
							},
							{
							  "name": "今年5月後，對行動裝置較友善的網頁，在Google行動搜尋的排名可望再度提高。",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814683748658038"
							},
							{
							  "name": "韓國電信龍頭SK Telecom從今年起要在全韓國佈建LPWAN低功耗廣域網路，專供IoT服務使用，將成為韓國相關業者進軍測試、發展IoT應用的最佳舞台。",
							  "ranking": 9,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814657658660647"
							},
							{
							  "name": "透過郵件加密硬體閘道式設備，企業可以集中管控員工寄出的郵件是否需要加密，而對方使用者在收到信件後，需要輸入密碼才能檢視郵寄內容與附件，可增加郵件寄送的安全性。",
							  "ranking": 8,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814663495326730"
							},
							{
							  "name": "這項功能國外宣佈不久，台灣就在今天上線了，快去更新吧!",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814708471988899"
							},
							{
							  "name": "現在線上就能「登」玉山了。",
							  "ranking": 12,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814575988668814"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 4,
						  "articles": [
							{
							  "name": "【講座公告】從經濟到管理，跳舞女孩帶你認識東吳商學院！",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/991542760891280"
							},
							{
							  "name": "【學測申請時程表】備審資料準備得如何呢？也要開始多練習面試囉！",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1008319155880307"
							},
							{
							  "name": "【 IOH 友好活動分享】社企流四週年論壇，擁抱未來 Embrace Our Future！",
							  "ranking": 4,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1008299919215564"
							},
							{
							  "name": "【文章分享】沒有走錯路的人生",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1008327339212822"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.2727272727272727,
						  "count": 11,
						  "articles": [
							{
							  "name": "還記得之前常常被提到的那台相當於台幣兩萬元的小牛電動車嗎？他們的CEO已經從公司消失超過半年，最近才被證實是被中國公安抓去關了....",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153623812510674"
							},
							{
							  "name": "嗯....以後老闆在LINE上面訓人的時候可以訓的更起勁了嗎？",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626577745674"
							},
							{
							  "name": "運用原木材質打造耳機振膜可說是 JVC 的招牌技術，昨日 JVC 也發表了兩款木質振膜耳機，分別是 HA-SW01 與 HA-SW02，除了分享木質振膜技術的研發歷程之外，也邀請到了獨立樂團主唱鄭宜農演唱，給大家試聽木質震膜耳機的效果。",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153625530530674"
							},
							{
							  "name": "2016年日本Super GT賽季即將在4月初開跑，GOODSMILE RACING車隊日前公開展示新戰駒：Mercedes AMG GT3，參賽級別為GT300 class，且繼續採用頗受粉絲喜愛的「初音未來」痛車彩繪，讓這輛AMG GT3在賽車場上更加耀眼奪目。",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153625254780674"
							},
							{
							  "name": "想法雖然有意思，不過以台灣的法令來講，這應該還是不能使用吧？",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626936505674"
							},
							{
							  "name": "小米百貨公司又有新產品了，這次是運動跑鞋！",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626190935674"
							},
							{
							  "name": "聯發科的晶片越來越厲害，十核心都亮出來了!",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674"
							},
							{
							  "name": "不論是擦撞或是假車禍，只要發生交通事故按下這顆小按鈕，GaSafe W20 就會保留事故發生前後 20 秒的影像，並且鎖定檔案確保不被覆蓋，甚至是旅途中看到難得一見的美景也可以按下這顆按鈕即時紀錄畫面。",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626286405674"
							},
							{
							  "name": "小編隔壁的同事前一陣子默默的消失了幾天，現在小編才知道他去幹嘛了！",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626514395674"
							},
							{
							  "name": "原本曾經是微軟親密戰友的諾基亞，現在說它們沒辦法為Windows 10商店效力了，果然是沒有永遠的朋友....",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153626520850674"
							},
							{
							  "name": "這個Bug應該不久之後就會被修正了吧 XDD",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153618707835674"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "經濟部",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "【餐飲老店看過來！】",
							  "ranking": 2,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1152307178142790"
							},
							{
							  "name": "放榜囉！",
							  "ranking": 1,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176"
							},
							{
							  "name": "【土壤液化剋星】~底加啦！",
							  "ranking": 3,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1152217781485063"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "TEDxTaipei特派員今天去拜訪中央大學的陳永儀老師，老師很熱情的和我們分享她最近對「壓力」和「負面情緒控制」的相關研究。",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1082271691793407"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.8181818181818182,
						  "count": 12,
						  "articles": [
							{
							  "name": "影音分享網站 YouTube 擁有超過 10 億用戶，是全球最大網站之一，創辦人之一陳士駿（Steve Chen）透露，最初版本和網站名稱是設計給單身人士上傳影片，敘述自己想要尋覓的理想伴侶。Google 公司 2006 年以 16 億 5,000 萬美元收購 YouTube，這個影音網站如今已擁有超過 10 億用戶，意味約有 ⅓ 全球網路用戶瀏覽 YouTube。",
							  "ranking": 8,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956588371083953"
							},
							{
							  "name": "「台灣是最適合舉辦黑客松的地方。」常駐在台的OpenStack基金會社群經理Tom Fifield表示，自從公開台灣黑客松活動之後，OpenStack基金會已經收到來自瑞典、巴西、美國OpenStack社群的email，希望之後在其他國家也能比照辦理。Tom Fifield表示，基金會將會把相關文件記錄公開，未來將能提供給其他國家的社群使用。",
							  "ranking": 12,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956547727754684"
							},
							{
							  "name": "台灣當代的新創企業，應該站在前人的肩膀上，利用與其他企業共同開發、合作銷售的方式，切入市場。畢竟大多數時候，產品發明人未必是最佳銷售員。",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956838221058968"
							},
							{
							  "name": "拆解「跨境電商」，簡單說就是網路貿易商，也就是跨國進行網路銷售，是賺取各地差異化商品、差異化價格的生意，受到各國貿易規範影響。其中，最近一年因為中國放寬跨境電商規範的利多政策，再加上中國消費者對海外商品欲望增加，根據艾瑞諮詢數據，2016年中國跨境電商市場規模可達6.5兆人民幣，明年將再攀升到8兆人民幣，讓最近一年中國購物網站動作頻頻，京東、淘寶、天貓等一線大站紛紛來台招商。",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956841401058650"
							},
							{
							  "name": "成功融資 4000 萬美元，有一支強大的團隊、清晰的使命目標以及被市場驗證過的商業模式。但發展三年後，公司還是以失敗告終，媒體紛紛報導你尷尬的失敗。上面說的這些正是家政 O2O 鼻祖 Homejoy 的故事，這家公司已經於去年 7 月 31 日正式關閉。",
							  "ranking": 11,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956574011085389"
							},
							{
							  "name": "目前在企業公有雲市場獨占鰲頭的是 Amazon 經營的 AWS（Amazon Web Service），2015 年 AWS 創造 78 億美元營收，比前一年成長 69%（Forbes）。當我們談到雲端服務市場的經爭者，最適切的形容是：「Amazon 和其他」，儘管 Microsft 的 Azure 排名第二， Google、VMware 等也仍在競爭行列，但是要挑戰這家超級書商，還是難如登天。",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956685534407570"
							},
							{
							  "name": "京東是中國的第二大電商，也是中國境內最大的自營B2C電商（阿里巴巴旗下的天貓為B2B2C的平台形式），但去年推出的「京東全球購」則採用B2B自營和B2B2C第三方平台兩種模式經營。京東的服飾家居事業部大客戶部總經理韓聰表示，目前對外的招商，會將主力放在B2B2C第三方平台的模式。截至去年底，京東全球購上已經有250萬件商品。",
							  "ranking": 9,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956589307750526"
							},
							{
							  "name": "新加入的叫車服務包括：巴西的 99Taxis、印度的 Ola Cabs、英國與西班牙的 Hailo、德國與西班牙的 mytaxi 與英國的 Gett。此外，更新版的 Google 地圖還會顯示同一家叫車公司的不同車型服務，如 Uber 的尊榮優步或菁英優步等，並分別呈現不同車型的車輛等待時間與車資估算。",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956831944392929"
							},
							{
							  "name": "根據世界三大管理顧問公司之一的貝恩（Bain \u0026 Company）所做的報告：「提升5%的客戶保留率（Retention）可以讓業績增長25%到95%」可以看出留住舊客戶的重要性。而留住舊客戶最好的方式，莫過於培養他們的忠誠度。",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956710521071738"
							},
							{
							  "name": "繼昨天 AppWorks正式宣布成立 AppWorks School後，ALPHA Camp 也宣布他們的新合作計畫：受新加坡星展銀行（DBS）邀請，ALPHA Camp 將成為 HotSpot Pre Accelerator 2016 的獨家合作夥伴，聯手打造為期七個月、預期招募百位創業家的前導加速器計畫，分兩階段進行，入選最後階段的隊伍將獲得近台幣 60 萬元的創業資金，價值數百萬的新創服務，且免收任何股份。",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956709911071799"
							},
							{
							  "name": "投資者將估值超過10億美元的新創公司稱作「獨角獸」。在獲得獨角獸光環之後，還是有不少公司遭到同業瓜分市場，敵不過對手的低價策略，讓這些公司最後也只是曇花一現。而對科技公司而言，能夠維持長期優勢的關鍵就在於「網路效應」所帶來的壟斷性。",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956725191070271"
							},
							{
							  "name": "Pinkoi共同創辦人兼執行長顏君庭表示，過去半年來，海外市場成長快速，除了在新進設計師中，來自港、日、泰三地的設計師占60％以上，港、日、泰三地營業額更已占海外整體營業額的70％。今年除了會在第二季增加香港版網站之外，也會因應泰國的消費者習慣推出金流付款方式。",
							  "ranking": 10,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956587564417367"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 4,
						  "articles": [
							{
							  "name": "30 年過去了，你的思想卻停留在那個充滿歧視的年代？",
							  "ranking": 4,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1281935638489089"
							},
							{
							  "name": "#草根系藝術節又回來了 #讓整個市場都是我的藝術館",
							  "ranking": 2,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1282048601811126"
							},
							{
							  "name": "作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1282167141799272"
							},
							{
							  "name": "【因為你 值得他們的努力】",
							  "ranking": 3,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1282086391807347"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 16,
						  "articles": [
							{
							  "name": "專案永遠做不完、連上廁所的機會都沒有？在辦公室裡，常常太過專注，忘記起身舒展筋骨，更有時候專案想破頭，整個人縮在桌子前，日積月累脊椎側彎，居然變成 S 形，每天腰酸背痛......有以上困擾的人，或許你可以考慮 Darma智慧坐墊！",
							  "ranking": 9,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051288554284"
							},
							{
							  "name": "亞馬遜正式針對東京、新加坡、美國等地區，推出其資料庫遷移服務，該服務支援的資料庫包括MySQL、Oracle、MariaDB等。",
							  "ranking": 16,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154050699019284"
							},
							{
							  "name": "Facebook 大頭貼又有新花樣囉！要怎麼做，請看本文↓↓↓",
							  "ranking": 15,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154050833959284"
							},
							{
							  "name": "沒時間接小孩就靠它啦，還可以掌握孩子的行蹤！（但也不限定只有家人才可以組隊XD）",
							  "ranking": 11,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051281719284"
							},
							{
							  "name": "資誠企管顧問公司副董事長劉鏡清指出，對金融服務企業來說，區塊鏈提供前所未有的絕佳機會來進行企業轉型。然而，目前金融產業對區塊鏈的認識和應對能力仍處於較低的水準，恐怕會低估區塊鏈帶來的機會和可能產生的威脅，這一點令人擔憂。",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154052166884284"
							},
							{
							  "name": "「我們希望為台灣創造一個全新的物聯網國際品牌i.X.」創辦人之一黃重道語氣肯定地說。",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154017995474284"
							},
							{
							  "name": "先前 Google 行動版地圖在「開車」、「大眾運輸工具」及「步行」選項之外，整合了 Uber 服務成為「叫車」選項，讓已安裝 Uber app 的使用者，能直接在 Google 地圖上取得車輛等待時間與車資估算，並直接叫車，但往後，這個選項將不再獨厚 Uber 了。Google 地圖中將加入其他叫車服務公司，提供用戶更多元的叫車服務。",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051811464284"
							},
							{
							  "name": "「桶中之腦」實驗的標準內容是：一個被一出人體的大腦，放在連接維生系統的桶子中，精密的電腦系統傳送各種刺激，位這顆大腦建立感知。例如，讓它相信自己正漫步在邁阿密海灘上，眼前有著一排樹。",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051915789284"
							},
							{
							  "name": "之後要在Google Play下載遊戲前，你可以先試玩10分鐘！",
							  "ranking": 10,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051469404284"
							},
							{
							  "name": "Oculus Rift將在3月28日開始出貨預購商品，同時伴隨Rift上市的還有這30款遊戲！",
							  "ranking": 14,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154050901189284"
							},
							{
							  "name": "「香港用戶，在輸入地址寫城市與街道名稱的時候，第一個英文字母大寫的貸款者，比全都小寫或全都大寫的貸款者，還款率還高。」",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154052164589284"
							},
							{
							  "name": "還記得常常被拿來與Gogoro相比較的小牛電動車嗎？ 他們的CEO 李一男已經消失了幾個月，而前天有更進一步的消息，指出從去年 6 月開始，他就已經被拘留了。",
							  "ranking": 12,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154050984274284"
							},
							{
							  "name": "傳統的定點監控方法只能檢測城市之中特定位置的空氣品質，不見得能夠代表整個城市的狀況。像是台灣就有用無人機來監控，以得到比較詳細的數據的方式。不過，倫敦想出了新的辦法：讓最懂空氣的品質的鳥類來幫忙！",
							  "ranking": 8,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154051431134284"
							},
							{
							  "name": "懶得綁鞋帶的就靠它了！XD",
							  "ranking": 13,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154050972329284"
							},
							{
							  "name": "開發者注意囉！Google日前更新了Material Design設計指南，鼓勵開發者在App中加入底部導航功能，這也是目前常在iOS App中見到的設計，未來Android App可能有一部分會跟iOS App越來越像。",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154052116739284"
							},
							{
							  "name": "None",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/1577943305861979"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 5,
						  "articles": [
							{
							  "name": "3/29 So Fun新創小聚 媒你不行！",
							  "ranking": 5,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1065992643446724"
							},
							{
							  "name": "[#行政院青創基地] 諮詢時段 - 下週青創基地駐點業師預告",
							  "ranking": 4,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1066028473443141"
							},
							{
							  "name": "3秒就抓住客人的眼球，該怎麼做？",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1065983203447668"
							},
							{
							  "name": "[#行政院青創基地] 行政院長張善政來訪青創基地",
							  "ranking": 2,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1066202880092367"
							},
							{
							  "name": "想創業，卻不知道自己合不合適？剛創業，卻不清楚是否準備周全？",
							  "ranking": 3,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1064921183553870"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "大家晚安^^粉絲們想成為職場明日之星嗎🌟？",
							  "ranking": 1,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1164808110198299"
							},
							{
							  "name": "嗨👋賈中哥帶著中獎人來囉😁",
							  "ranking": 2,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1164767546869022"
							},
							{
							  "name": "哈囉👋員林聯合徵才活動來囉😄",
							  "ranking": 3,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1164620160217094"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "#每日精選英文新聞 這篇文章提出了一個觀點，讓我非常受到啟發。它探討發展人工智慧與電腦深度學習，除了突破人類科技的最前緣，同時間，由於 AI 的基礎是模仿人腦，培養他們的同時，也能協我們了解自己，這個長期以來，我們最不了解的東西。",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153867513575491"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "以契作保障花農生計，並確保無毒栽種的茉莉花能夠鮮採現萃成純露，不但是天然的護膚水，完整保留的茉莉香氣更透過人間魚的巧手縈繞在台灣各地，喚醒陳年的回憶也加深了與土地的連結。",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1018670468199079"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "夢想學校  實習生招募  倒數4天 ",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1293865860640003"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.14285714285714285,
						  "count": 19,
						  "articles": [
							{
							  "name": "看到影片裡可以一筆畫畫這麼圓真是太感動了…(廢話)",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025"
							},
							{
							  "name": "沒玩任天堂但莫名的想要呀…",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982570345170472"
							},
							{
							  "name": "「週週送狠大」漫畫版好可愛哦！",
							  "ranking": 13,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981960435231463"
							},
							{
							  "name": "這就是所謂的日式幽默嗎？",
							  "ranking": 16,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982423338518506"
							},
							{
							  "name": "T病毒的香水...",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805"
							},
							{
							  "name": "可以做雪酪、冰沙的 Panasonic 慢磨蔬果機（看評測：http://smarturl.it/9911xc），可說是自家煮食的最佳良伴。但好的慢磨機價格昂貴，好東西賣場特別談到原價 7,990 元，現在特價6,999元。打破七字頭的價格市場上絕對沒有，想要買的朋友不要錯過喔！ #好東西最便宜",
							  "ranking": 17,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981942285233278"
							},
							{
							  "name": "JVC去年在日本所發的木質振膜耳機，",
							  "ranking": 18,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982026388558201"
							},
							{
							  "name": "原來鯨魚肚長這樣呀…(離題)",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982350308525809"
							},
							{
							  "name": "我就覺得蘋果賭我們不會用這麼久啊啊 lol",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982626151831558"
							},
							{
							  "name": "「先求有，再求好」老實說這句話對很多求好心切的同仁來說簡直是要了他們的命，因為通常他們都自我要求很高，而且標準絕對遠高於上頭給下來的規格，所以老闆們一急了就會罵他們怎麼這麼慢...",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981971125230394"
							},
							{
							  "name": "全通路最划算還不買嗎\u003e\u003esmarturl.it/zebotrobot",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981937905233716"
							},
							{
							  "name": "把充電器、整線器跟手機座三合一的有趣概念,不過有點佔桌面空間就是",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982624715165035"
							},
							{
							  "name": "影片真的很驚人，果然只有日本人才做得出來...",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981990308561809"
							},
							{
							  "name": "None",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982687315158775"
							},
							{
							  "name": "新版本不僅硬體升級，比前一代價格更低，另外設計也與 Blade Stealth 看齊導入 Chroma 鍵盤與 Razer Core 外接 GPU 支援",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982148258546014"
							},
							{
							  "name": "想成為腳踏車界的紅色彗星嗎？",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982601078500732"
							},
							{
							  "name": "如果你一直遇到有人問你這種問題，就把這篇丟給對方看吧！",
							  "ranking": 15,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982461121848061"
							},
							{
							  "name": "華碩的 ZenPower 行動電源不但主打低價高 CP 值，款式也非常的多，幾乎各種場合的應用都有了。這次要和大家分享的是行動電源中的巨無霸 ZenPower Ultra。",
							  "ranking": 19,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/981971408563699"
							},
							{
							  "name": "要怎麼樣才能製作出爆紅的線上課程！魏老師的近距離課程觀察！",
							  "ranking": 14,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982084108552429"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 14,
						  "articles": [
							{
							  "name": "羅技發表 G610 Orion Red / Brown 遊戲機械鍵盤",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952870838138293"
							},
							{
							  "name": "Canon EOS 80D 月底抵港，定價 HK$8,480 起",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952955488129828"
							},
							{
							  "name": "你也能買的 Nike 自動綁鞋帶運動鞋將在年底發售",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952922351466475"
							},
							{
							  "name": "部分 iCloud 功能將由 Google 雲端平台運作",
							  "ranking": 9,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952807871477923"
							},
							{
							  "name": "Oppo R9、R9 Plus 攜手登場：依然以自拍、快充為賣點",
							  "ranking": 8,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952815344810509"
							},
							{
							  "name": "MSI 正式推出圓柱型的 Vortex Gaming PC",
							  "ranking": 14,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952664024825641"
							},
							{
							  "name": "Intel 的首款 Skull Canyon NUC 搭載了 Core i7 處理器",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953041481454562"
							},
							{
							  "name": "Moto 360 Sport 評測：保守的領跑者",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952884928136884"
							},
							{
							  "name": "BMW 的新一代 Project i 將專注於自動駕駛技術",
							  "ranking": 10,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952776491481061"
							},
							{
							  "name": "GDC 發佈短片緬懷任天堂已故社長岩田聰",
							  "ranking": 11,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952751861483524"
							},
							{
							  "name": "變清「靜」的 Honeywell 智慧淨化抗敏空氣清淨機來台灣了",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952864491472261"
							},
							{
							  "name": "Samsung 聯手 de Grisogono 推出奢華版 Gear S2",
							  "ranking": 7,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952830801475630"
							},
							{
							  "name": "Google 街景正式登上玉山！一起抓著小黃人去找小綠機器人吧",
							  "ranking": 13,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952692334822810"
							},
							{
							  "name": "Razer Core 外置式 GPU 定價釋出，四月起發貨",
							  "ranking": 12,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/952725544819489"
							}
						  ]
						},
						{
						  "id": "media-23",
						  "name": "群募貝果 - WeBackers",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "遊戲玩到滿滿感動，又超勵志是怎麼回事?",
							  "ranking": 1,
							  "src": "群募貝果 - WeBackers",
							  "url": "https://www.facebook.com/563108293798349/posts/864123190363523"
							}
						  ]
						},
						{
						  "id": "media-24",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 13,
						  "articles": [
							{
							  "name": "雖然並不直接是 iCloud 的問題，不過透過不那麼複雜的手法就能直接取得私密資訊，還是很可怕啊...",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999508460102404"
							},
							{
							  "name": "就算沒有體力登玉山也沒關係，Google 街景團隊已經將這個美景帶到你我眼前了。",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999511883435395"
							},
							{
							  "name": "瞄準 VR 與雙鏡頭智慧手機兩大極具潛力領域，X20 晶片是否能成功帶動聯發科營運動能？",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999485483438035"
							},
							{
							  "name": "這是一個誤打誤撞的概念嗎？",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999342340119016"
							},
							{
							  "name": "雖然日月光第二次收購矽品等同失敗，不過看來日月光未來應該也不會放棄，這場併購案不知要何時才能落幕...",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999504796769437"
							},
							{
							  "name": "雖然東芝才在 2015 年底將 CMOS 部門包含晶圓廠，一併賣給 Sony，不過這並不表示東芝放棄了半導體事業...",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999424450110805"
							},
							{
							  "name": "ARM 日前才宣布與台積電合作，現在外媒更猜測，台積電或許 2017 年就可提前生產一些 7 奈米晶片。",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673"
							},
							{
							  "name": "Nike 的自動綁帶鞋真的要來了！但並不是每一個人都能夠輕易買到這雙鞋，距離正式發售還有一點時間，大家應該還來得及準備。",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999454223441161"
							},
							{
							  "name": "若真的推出 256GB ，不知道它的定價會是多少？",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999249560128294"
							},
							{
							  "name": "Galaxy S7 的銷售數量如何可說是眾說紛紜，不過在正式銷售後應就能揭曉了吧",
							  "ranking": 13,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999215236798393"
							},
							{
							  "name": "Google 品牌價值超越三星，成爲全球第二。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999293653457218"
							},
							{
							  "name": "中國家電相繼崛起，反觀日本家電大廠一一出售旗下業務，這樣的對比也令人感嘆。",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999484036771513"
							},
							{
							  "name": "技術的進步，加上歐盟的互通性高，讓金融交易所這種屹立不搖的行業也開始進行整合，提高競爭力與獲利。",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999552270098023"
							}
						  ]
						},
						{
						  "id": "media-25",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.52,
						  "count": 30,
						  "articles": [
							{
							  "name": "動能發電的概念可以套用的範圍很廣呢～",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037159929640079"
							},
							{
							  "name": "數位化侵襲，不管你是創業家、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038638089492263"
							},
							{
							  "name": "唉唷～以後老闆說要線上開會，再也不能用「沒看到」當藉口惹～（誤XD）",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038688326153906"
							},
							{
							  "name": "如果義大利是 Javascript、北韓是 Awk，那台灣就是 … …？",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038656459490426"
							},
							{
							  "name": "UI 設計師要不要懂技術？廢話，當然要啊！不然怎麼把幻想變成現實？在實際產出之前設計師做的一切都是「美美的幻想」，還有可能不怎麼美，直到最後的產出才是真實。",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038601309495941"
							},
							{
							  "name": "想要衝網路開店，先問自己三個問題：",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037292952960110"
							},
							{
							  "name": "必須自立自強的節奏......",
							  "ranking": 29,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037917302897675"
							},
							{
							  "name": "Google 今日宣布被譽為台灣精神指標的玉山正式登上 Google 街景服務！全球網友今起將可透過 Google 街景服務平台觀賞海拔高度達 3,952 公尺的玉山、玉山北峰以及玉山圓峰壯麗景色。",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038537969502275"
							},
							{
							  "name": "數位金融創新要轉變的Mindset，真的不少阿～",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038747662814639"
							},
							{
							  "name": "自動綁鞋帶的秘密是鞋跟裡的傳感器，當它感應到有腳踩入時便會自動把鞋帶繫上。這對於許多打結苦手來講，根本福音～",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038632882826117"
							},
							{
							  "name": "想像這樣的未來：交通部門需要訂立最低噪音法規，否則太安靜了，行人會無法注意到來車。",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038551479500924"
							},
							{
							  "name": "Fintech變革潮流越洋而來，才剛在台灣落地，卻面臨苦苦掙扎一線生機的窘況，是法律束縛？還是金融業的腦袋還在停機？",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038507482838657"
							},
							{
							  "name": "為何看到Made in China的產品大家會皺眉頭？因為講求工藝的「工匠精神」從來都不在中國製造業的字典中。",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038497089506363"
							},
							{
							  "name": "「人生為大事而來，創業需要格局觀。」",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038723206150418"
							},
							{
							  "name": "拿筆記囉～",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038724492816956"
							},
							{
							  "name": "為什麼銀行業特別點名區塊鏈供應商？這對於技術與產業的未來發展影響如何？請看本文深度解析～",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038611352828270"
							},
							{
							  "name": "將孩子哄睡後，就是他的思考時間。",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038383292851076"
							},
							{
							  "name": "覺得羨慕、覺得想去、覺得想轉職ＸＤ",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038613122828093"
							},
							{
							  "name": "為什麼星巴克店員總是無法把名字寫對？",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038625656160173"
							},
							{
							  "name": "數據科學家為啥事「最夢幻工作」？這工作薪水很好又很酷，每天主要職責就是「預測未來」。但是否做數據科學家真的比做一個太空人，專業運動員或搖滾樂團主唱更好？",
							  "ranking": 28,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037961089559963"
							},
							{
							  "name": "【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038603449495727"
							},
							{
							  "name": "這豈不是要我出國度假去了嗎～",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038576089498463"
							},
							{
							  "name": "前陣子才看到Alphago在棋盤上大顯身手，不知道如果以後Alphago被運用在農業上，會種出什麼樣的田？",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038636429492429"
							},
							{
							  "name": "雖然應該是個取名上的巧合，但是看到「XD」就想跟著笑了～",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038460236176715"
							},
							{
							  "name": "\u003e\u003e\u003e 想報名安卓開發班的要快！今天 18:00 最後報名期限 \u003c\u003c\u003c",
							  "ranking": 27,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037201042969301"
							},
							{
							  "name": "為什麼 FinTech 在台灣跑得這麼慢？",
							  "ranking": 30,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037161442973261"
							},
							{
							  "name": "Google開始強調網路加密資料的重要性，目前77%的使用者資料受到加密保護。But！這些未加密的資料，高達95.5%來自 Android 設備",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038497142839691"
							},
							{
							  "name": "Facebook面試提示出了名的刁鑽，你如果答得出來根本就面試神人，明天就準備到臉書上班吧！",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038819492807456"
							},
							{
							  "name": "學程式原來可以不用死盯著螢幕，但一定要有顆玩樂的心～",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038552809500791"
							},
							{
							  "name": "【公司內部的流量不能算數啊！】",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037295686293170"
							}
						  ]
						},
						{
						  "id": "media-26",
						  "name": "創新創業激勵計畫",
						  "hasInfo": false,
						  "day": 0,
						  "score": -1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【創業。是非】",
							  "ranking": 1,
							  "src": "創新創業激勵計畫",
							  "url": "https://www.facebook.com/498486833520105/posts/1009349085767208"
							}
						  ]
						},
						{
						  "id": "media-27",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 5,
						  "articles": [
							{
							  "name": "【南方創客基地】",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524420264520107"
							},
							{
							  "name": "【#PM2點5空氣感測器系列第二篇】",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524742464487887"
							},
							{
							  "name": "「你今天吃中餐了嗎？」你今天是打算悠閒地坐在餐廳用餐、用最快速度扒完便當、還是根本沒空吃？",
							  "ranking": 4,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252"
							},
							{
							  "name": "【活動花絮】",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524418031186997"
							},
							{
							  "name": "【#做個工具人】",
							  "ranking": 5,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525033827792084"
							}
						  ]
						}

					];
				break;
				case "2016-03-21":
					this.media = [
												{
						  "id": "media-1",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 6,
						  "articles": [
							{
							  "name": "【RTB有用嗎？除了精準傳遞給對的人，用對的方式更重要】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948884065159471"
							},
							{
							  "name": "【產品力不能像煙火絢爛消逝，品牌要永續絕對需要行銷規劃】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948878615160016"
							},
							{
							  "name": "【中國跨境店商熱，「跨境電商體驗店」正蔓延】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950955351619009"
							},
							{
							  "name": "None",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/986859371433914"
							},
							{
							  "name": "【熱門貼文優先！Instagram 更改演算法】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950931438288067"
							},
							{
							  "name": "【五招妙用FB表情符號，跟粉絲搏感情】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950814868299724"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6,
						  "count": 15,
						  "articles": [
							{
							  "name": "隨著 AlphaGo 炫風席捲全球，人工智慧也成了大家朗朗上口的話題，現今在通訊軟體中崛起的軟體機器人，也就是會透過聊天幫你處理雜事的軟體，就是人工智慧服務的突破點之一。",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272763496566"
							},
							{
							  "name": "心臟移植常常供不應求，好不容易排到又容易產生排斥，為了解決這些問題，麻省總醫院和哈佛醫學院的科學家合作，在實驗室造出了會跳動的心臟。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272650511566"
							},
							{
							  "name": "好球，好球，三分球！臉書為了 NCAA 三月的籃球活動，推出投籃機小遊戲。你最高得幾分？",
							  "ranking": 14,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153271852126566"
							},
							{
							  "name": "今天，是太陽花運動 2 週年。回顧這場運動，不但一舉扭轉了台灣政治的局勢，從其中也正印證網路發揮它「改變世界」可能性的一面。",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153273010766566"
							},
							{
							  "name": "全世界「最受歡迎」依舊由 JavaScript 奪冠！Stack Overflow 公佈了今年的軟體開發者調查結果，其中有許多關於開發者/工程師的有趣數據。想知道世界上開發者的最新趨勢嗎？快來看看吧！",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272751081566"
							},
							{
							  "name": "有人曾試過向 Siri 說出「我被強姦」、「我正受到虐待」、「我被丈夫毆打」等類似求救的訊息嗎？",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566"
							},
							{
							  "name": "Google 與波士頓動力員工不合，加上 Atlas 測試影片發表後外界對機器人過於優異的性能傳出憂慮，可能會決定出售。",
							  "ranking": 15,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153271782866566"
							},
							{
							  "name": "身為蘋果創辦人之一的 Steve Wozniak 也是著名的科技評論家，最近他在美國大型討論區 Reddit 上回答網友的各式問題，除了肯定提姆庫克的努力，吐槽起 Apple Watch 也是正中紅心。",
							  "ranking": 13,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270891586566"
							},
							{
							  "name": "由於負擔不起高昂的電費，印度的科欽國際機場，幾年前便考慮利用機場內大片的閒置空間，鋪設太陽能板，現在已達成完全自給自足的狀態。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566"
							},
							{
							  "name": "這筆版權費將覆蓋 Spotify 從公司成立到 2017 年 1 月 30 日的所有爭議版權費（音樂產業所稱「拖欠」的費用）！",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272153886566"
							},
							{
							  "name": "AlphaGo 人工智慧的主要開發者黃士傑今天來到台灣 Google 總部，向大家分享 AlphaGo 對戰的原理與心得！",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272246231566"
							},
							{
							  "name": "「指紋跟普通的數字密碼、圖形密碼不一樣。後兩者被破解之後還能夠重新設定，但指紋這種與生俱來的資訊一旦被破解，那就注定這個人『被破解』了。」",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272455756566"
							},
							{
							  "name": "阿里巴巴除了投資 AR 公司 Magic Leap 之外，還宣佈成立了 VR 實驗室，更要在現在的購物平台上加入 VR 購物體驗。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153270925691566"
							},
							{
							  "name": "【Cofit Healthcare Inc. 群健科技】徵 Ruby on Rails Ninja",
							  "ranking": 12,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153271864656566"
							},
							{
							  "name": "「根據 Google 所做的調查，有超過八成的觀眾在廣告聯播網上看影片時，手機是拿直的。」大家也是其中之一嗎？",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153272937606566"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "創業臺灣 育成家族~",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【育成亮點企業案例】【仿生生醫有限公司】",
							  "ranking": 1,
							  "src": "創業臺灣 育成家族~",
							  "url": "https://www.facebook.com/252546844768979/posts/1134241983266123"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "想要投入網路行銷，卻沒有足夠的行銷預算？",
							  "ranking": 2,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1136185316400693"
							},
							{
							  "name": "【創業新聞】超夯！台東百萬低利創業貸款 前2年可不還本",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1136192449733313"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "大家有發現嗎？日本藝人渡邊直美這幾天在台北的小店出沒啦！繼前天的 in Blooom 印花樂，今天又到 琅茶 Wolf Tea 拜訪囉，這張喝茶照片簡直是棚拍等級了，好可愛！",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1165119466854772"
							},
							{
							  "name": "日本除了是賞櫻勝地外，還有其他也會讓人不禁大呼「卡哇依」的有趣小物喔，你喜歡哪一樣小物呢？？",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1164751036891615"
							},
							{
							  "name": "聽說這動物有一直有人默默喜歡，最近終於嚐到走紅滋味?",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 10,
						  "articles": [
							{
							  "name": "今天來聽聽 ///",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000946519561"
							},
							{
							  "name": "有時候，改變一點創作的方式～",
							  "ranking": 9,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000546024561"
							},
							{
							  "name": "三更半夜，相信大家需要一些靈感吧～",
							  "ranking": 10,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10153999202569561"
							},
							{
							  "name": "青春，不就是要這樣充滿陽光的歌唱，用設計和音樂來為下雨的週末夜帶來陽光和青春吧！",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154001455174561"
							},
							{
							  "name": "如果覺得創作常無法聚焦~",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000992404561"
							},
							{
							  "name": "來說說 // 第一眼看到這餐墊你的想法是？！",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000971324561"
							},
							{
							  "name": "夜長~ 夢  夢   夢    夢     夢.........",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000978099561"
							},
							{
							  "name": "超酷的呀~",
							  "ranking": 8,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000937379561"
							},
							{
							  "name": "鄉親啊，就是要同一塊土地上一起打拼，建立感情成為親朋好友的一家人，是不是呢？",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154001458299561"
							},
							{
							  "name": "賞心悅目的餐具，搭配色香味俱全的佳餚，",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154000966789561"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.14285714285714285,
						  "count": 10,
						  "articles": [
							{
							  "name": "看起來，為了不重蹈臺灣過去4G商轉落後的窘境，近年政府與產業界對於5G有了比較務實的作法",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815326485260431"
							},
							{
							  "name": "OpenStack執行長要來臺灣渡周末囉！",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815268505266229"
							},
							{
							  "name": "流量與效能是網站管理者平時最頭痛的事情，若是一般使用者也就罷了，最討厭的就是一些懷有特定目的的網站機器人程式，進到你的網站，把你辛辛苦苦建立的資料抓回去，然後用這些內容去作一些利於他們自己的事情。",
							  "ranking": 9,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814881521971594"
							},
							{
							  "name": "Docker還做不到的，我們想要提供，這是微軟雲端首席架構師首度來臺揭露Azure戰略時發下的豪語",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815321851927561"
							},
							{
							  "name": "企業內部的檔案，可能分別存放於多臺檔案伺服器、NAS，也有可能是SharePoint平臺中，Acronis Access Advanced能提供使用者存取這些檔案的單一窗口。",
							  "ranking": 10,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814629478663465"
							},
							{
							  "name": "全景照片、3D影片都不夠炫，現在微軟HoloLens眼鏡要給你一個全新呈現方式，3D全息影像App，透過這個App可以快速製作出結合真實和虛擬世界的3D影像影片",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815246981935048"
							},
							{
							  "name": "可是川普，你說當選後要取消給外籍人士的H-1B工作簽證欸？",
							  "ranking": 7,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815232998603113"
							},
							{
							  "name": "Amazon的聲控助理，也想要變成你的健身教練",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815297261930020"
							},
							{
							  "name": "效法臉書，Instagram也要按照關注程度來排序動態消息了",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815245628601850"
							},
							{
							  "name": "None",
							  "ranking": 8,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815217718604641"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 3,
						  "articles": [
							{
							  "name": "【講座公告】Phd 工時長、壓力大、薪水低，在台大網媒所的心路歷程",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009201342458755"
							},
							{
							  "name": "【台北醫學大學懶人包】10 個問題讓你認識台北醫學大學",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009207875791435"
							},
							{
							  "name": "【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009283732450516"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": -0.2,
						  "count": 12,
						  "articles": [
							{
							  "name": "雖然 Apple 以優良的客戶支援聞名，但每一台裝置總有其壽命。",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153620427425674"
							},
							{
							  "name": "T小編深夜獨家分享！！！",
							  "ranking": 12,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153627170335674"
							},
							{
							  "name": "特斯拉要來了嗎？這應該不是雷軍電動車事件的翻版吧！",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629253430674"
							},
							{
							  "name": "現在有許多裝置支援 microSD 記憶卡，其市場需求並不見得比 SD 來得小，然而礙於先天架構限制因素，容量與性能提升進度總是慢了點。再者 SDXC 容量已達 512GB，能夠推出超過 128GB 容量 microSDXC 的廠商卻仍然寥寥無幾，Patriot 新發表兩款 200GB 容量 microSDXC，自此終於有多一點的選擇。",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153627901665674"
							},
							{
							  "name": "小編真的以為「機車上放置物品詐騙」是真的耶....",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629259725674"
							},
							{
							  "name": "OPPO R9 不但延續 OPPO 一直以來主打的 VOOC 閃充技術，這回更加入了 1600 萬畫素的自拍前鏡頭！",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153628912610674"
							},
							{
							  "name": "LG上個月出的「模組化」手機LG G5引起很多人的意外以及關注，現在這款手機也即將要在台灣發表了！",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629063025674"
							},
							{
							  "name": "Intel 正式發布傳聞許久，產品開發代號 Skull Canyon，專為遊戲應用打造的全新 NUC 迷你電腦。配備高階 Core i7 行動處理器，內建整合 Iris Pro 內顯，更能透過 Thunderbolt 外接擴充桌上型顯示卡!",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153627904870674"
							},
							{
							  "name": "人機之戰過後，黃士傑回台灣啦！",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629285025674"
							},
							{
							  "name": "這下已經快分不出來日系品牌家電哪些是日本的，哪些是中國的了...",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153628700170674"
							},
							{
							  "name": "不知道這些鴿子心裡怎麼想？",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153627899600674"
							},
							{
							  "name": "每次iPhone快要推出的時候，網路上都會跑出一大堆所謂的「真機照」，這些「真機」真的是真機嗎？如果不是的話，又為什麼會看起來這麼真？這篇文章或許解答了部分的疑問！",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629263280674"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "經濟部",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【★看影片答題送好禮──土壤液化可怕嗎?!!】 活動開獎囉！",
							  "ranking": 1,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1153318491374992"
							},
							{
							  "name": "有人說，歐美講 Copyright，中國大陸講 Copy is right !?",
							  "ranking": 3,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1153081724732002"
							},
							{
							  "name": "快來看！大家搶破頭都在搶什麼？欲報從速！以免向隅~",
							  "ranking": 2,
							  "src": "經濟部",
							  "url": "https://www.facebook.com/335544036485779/posts/1153246484715526"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "快樂是可以學習的嗎？",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1082962635057646"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.8333333333333334,
						  "count": 12,
						  "articles": [
							{
							  "name": "由e27共同創辦人Thaddeus Jit Siong Koh主持，Echelon Asia Summit  新創競賽台灣站初選在本周一正式確定由Outland的廉價航空搜尋引擎Hellowings出線，代表台灣角逐Echelon Asia Summit總決賽。除了公布成果，本文也分別為大家介紹其他五組優秀的新創團隊，從3D列印科技平台、商情分析系統到借貸平台，可想見當時比賽之激烈。",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957597447649712"
							},
							{
							  "name": "募資成功了，上千筆的訂單才是挑戰的開始。",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957518504324273"
							},
							{
							  "name": "被評為「2015 十大物聯網創新公司」的物聯網平台 Particle 的共同創辦人兼執行長 Zach Supalla以知名的「棉花糖挑戰」解釋 Particle的成功經驗：「一路上我們除了提供服務，也和消費者一起成長，藉由從募資平台測試想法的可行性。過去單一小型製造業的服務對象較小，但進入 IoT、連上雲端後，規模會更龐大而且破碎，不斷產生新概念，你要認清這點，早點放上棉花糖，評估自己的狀況。」",
							  "ranking": 8,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957504107659046"
							},
							{
							  "name": "好團隊的組成與擴張關鍵字 – 推薦（referral）",
							  "ranking": 9,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/956842404391883"
							},
							{
							  "name": "除了登記核准成立「台灣特斯拉汽車有限公司」，他們也在人才招募網站以「台灣特斯拉汽車有限公司(籌備處)」開出職缺。特斯拉公司在亞洲市場已於中、港、日，成立分公司。而台灣早有不少電動車擁護者，直接從國外平行輸入特斯拉電動車。這次特斯拉重返台灣設立子公司，經營電動汽車銷售與維修服務，不僅將來可直接服務台灣的特斯拉電動車客戶，也將會給台灣的電動車市場帶來很大的影響。",
							  "ranking": 11,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957388854337238"
							},
							{
							  "name": "創業活動佈告▶▶▶【貝殼放大鏡，放大你的集資夢！】",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957536347655822"
							},
							{
							  "name": "來自新加坡大學的 Junhao Hu 受背痛所苦，於是研發 Darma 智慧坐墊，全黑而且前低後高的完美坐墊，看起來非常有滑板造型，前後分別有 6 個感應器，均勻分布在墊子裡，能根據壓力偵測你的坐姿，非常適合姿勢不良或筋骨緊繃的朋友。",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957526580990132"
							},
							{
							  "name": "2016第二屆ASIA BEAT由中國廈門接棒，以「風險投資與市場進入」為主題，從多種面向切入創投與資金兩大議題，除了從中國創投環境放眼至全球投資現況，亦從Fintech、IoT、VR/AR等不同領域看資金挹注現況與趨勢。",
							  "ranking": 12,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957356847673772"
							},
							{
							  "name": "這款稱作Miitomo的App，這是一款社群工具，讓用戶發佈動態、圖片、彼此評論、彼此「按讚」動態的App。即使社群平台市場已經有許多服務商湧入，任天堂還是認為，這款Miitomo有辦法擄獲用戶的心。而任天堂美國分部的總裁Reggie Fils-Aimé表示，他們已經開發好幾個使用元素，來讓使用者上癮，而如果能夠讓人上癮的平台，又能激發人們「分享」，這就有辦法殺出市場重圍，建立市場地位。",
							  "ranking": 10,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957442464331877"
							},
							{
							  "name": "#倒閉之後",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957531340989656"
							},
							{
							  "name": "目前，DeepMind團隊約有200人，其中有4位台灣成員，其他還有來自世界各地的人才，有法國、印度、英國、中國，這些人都非常的有自信，他們不怕、他們想要出去闖蕩，這種精神跟台灣人比較不一樣。「我們其實不弱，重點是要有信心能夠走出去，打出一片天！」",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957644824311641"
							},
							{
							  "name": "吳采頤選擇從大腦感知的角度去做聲音工程研究，成功將大腦對聲音的解碼功能還原，與三位來自台大電機的夥伴合作，於2014年創辦聲音科技公司 Ambidio。目前 Ambidio 已經獲得李嘉誠私人投資的維港投資、奧斯卡聲音後製公司Skywalker Sound等等的協助與支持。",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/957542790988511"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "「泰雅的孩子縱使用盡生命，也要將它留在故鄉。」 ─ 楊茂銀 （鐵木‧尤幹） 醫師",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1283315015017818"
							},
							{
							  "name": "【告 別 髒 馬 桶 ( ￣ 3￣)y▂ξ 】",
							  "ranking": 3,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1282821711733815"
							},
							{
							  "name": "#已經是更加勇敢的人",
							  "ranking": 2,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1282117218470931"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.16666666666666666,
						  "count": 16,
						  "articles": [
							{
							  "name": "很久沒談論產業動態的張明正，語氣透露出對台灣產業的擔心：「我們已經失去了雲端和大數據，接下來軟體要往人工智慧靠攏，人工智慧、軟體，這是這樣了！這比鴻海買夏普還重要100倍！」",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055852784284"
							},
							{
							  "name": "不管是攝影師、部落客、網站經營者或是社群分享時，都能用上的實用工具，Windows 與 Mac都可使用 ，想把大量照片壓上浮水印或縮圖，值得試試看免費的「 Picture Stamper 」。",
							  "ranking": 7,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055230604284"
							},
							{
							  "name": "【任天堂也要挑戰Facebook！】身為長期單機遊戲霸主的任天堂，日前推出旗下首款手機App，主打社群溝通，直接與Facebook等社群平台競爭市場。",
							  "ranking": 14,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054158704284"
							},
							{
							  "name": "週末到了，大家要開啟追劇模式了嗎？先來看看Netflix總部直擊！",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055506764284"
							},
							{
							  "name": "大家今天也連不上露天拍賣嗎？",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154056238904284"
							},
							{
							  "name": "程式設計問答網站Stack Overflow每年都會對使用者進行調查，了解開發者的組成、開發語言選擇等情況。而今年的調查結果已經出爐，其中不乏一些有趣的現象，像是：JavaScript仍然是最受歡迎的程式設計語言，而將近一半的開發者並沒有資訊工程的相關學位。",
							  "ranking": 13,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054434309284"
							},
							{
							  "name": "2011 年日本發生 311 大地震引發海嘯，衝擊福島核電場，反應爐遭到嚴重損毀，一些區域的輻射水準太高，即便是身穿防化服的人類也無法承受，估計整個事故現場完全清理需要長達 30 至 40 年的時間，而我們能仰賴的也只有這些機器人了......",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055322589284"
							},
							{
							  "name": "中國電商龍頭阿里巴巴也搶進VR虛擬實境產業！",
							  "ranking": 9,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054954269284"
							},
							{
							  "name": "「AlphaGo不是一個排除了人類的研究成果，它吸取了所有人類學習的結晶。」",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055800859284"
							},
							{
							  "name": "作為蘋果創辦人之一、但又因和賈伯斯鬧矛盾而離開蘋果的史蒂夫·沃茲尼克，一直都是科技界的「點評專家」。在昨天 Reddit 的 Ask Me Anything 欄目上， 他回答了關於庫克、蘋果大戰 FBI 等等的問題，而一直都很做自己的他，這次的回答也一貫的有個性。",
							  "ranking": 8,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055048404284"
							},
							{
							  "name": "前不久，Alphabet旗下子公司Google以及Boston Dynamics共同發表了一段影片，介紹了一台能維持平衡跋涉雪地、推也推不倒的機器人，展現了在機器人領域的成果，然而產品再酷也沒用，傳Alphabet正考慮出售Boston Dynamics。",
							  "ranking": 15,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054149604284"
							},
							{
							  "name": "🏀 《數位時代》編輯得了14分，大家最高得幾分？XD",
							  "ranking": 6,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055627499284"
							},
							{
							  "name": "上週LINE更新的群組語音通話功能，支援最多200人同時通話，而現在這項服務，台灣用戶也可以使用了！",
							  "ranking": 10,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054848254284"
							},
							{
							  "name": "國際知名電動車廠牌特斯拉 (Tesla Motors)，3月16日已登記核准成立「台灣特斯拉汽車有限公司」，也在人才招募網站以「台灣特斯拉汽車有限公司(籌備處)」開出職缺。",
							  "ranking": 16,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054012094284"
							},
							{
							  "name": "交友服務一向競爭激烈，各種App也都各有擁護者。在此挑選出7款近期最受關注的交友App，不只為你評比產品優劣，還找來匿名使用者現身說法，看看這些App如何影響他們的生活↓↓↓",
							  "ranking": 11,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054645174284"
							},
							{
							  "name": "電機電子工程師學會16日公布，根據一項針對1,903位科技玩家所做的線上調查，高達70%的受訪者相信最遲在2030年行動支付將會取代現鈔、信用卡成為主流。",
							  "ranking": 12,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154054545244284"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "【2016創新創業競賽報名中】",
							  "ranking": 2,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1066642953381693"
							},
							{
							  "name": "【創業現場】",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1066667193379269"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "嗨👋因為賈中哥昨天新光三越獎品誤植錯誤😓所以又重新帶著中獎人來囉😁",
							  "ranking": 1,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1165553426790434"
							},
							{
							  "name": "早安☀年後開始找工作的青年朋友們，是不是不知道適合的方向呢😃？",
							  "ranking": 3,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1165334226812354"
							},
							{
							  "name": "哈囉👋員林聯合徵才活動來囉😄",
							  "ranking": 2,
							  "src": "賈中哥JobGogo 勞動力發展署中彰投分署",
							  "url": "https://www.facebook.com/241247139221072/posts/1165502296795547"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "#每日精選英文新聞 Facebook 宣布要將有 8 億活躍用戶的 Messenger 開放為平台，讓開發者為她打造各式各樣的 Apps。但這些 Apps 不叫 Apps，而叫 Bots，也就是人工智慧機器人。因此，Messenger 的 App Store，會叫做 Bot Store。在未來，透過 Messenger，妳很有可能可以讓 Bots 替妳叫車、訂旅館、買東西、安排行程，甚至完成協商會議。對消費者而言，這代表更寫意的生活。對創業者而言，這代表，另一個大浪來了！",
							  "ranking": 2,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153870489055491"
							},
							{
							  "name": "\"...黃士傑在 Google 旗下的人工智慧公司 DeepMind 擔任資深研究員。DeepMind 目前員工約 200 多名，其中便有 4 名台灣人在裡面貢獻所長。裡面員工來自世界各地，大家都在技術、表現上有強烈的企圖心。這其實也給台灣人一個啟示，黃士傑說：「我們（台灣人）其實不弱，但就是要走出去。」...\"",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153871498270491"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "[嘖嘖最新計畫] \u003c\u003c 漂 流 森 林 \u003e\u003e拍攝募資計劃",
							  "ranking": 2,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1019354274797365"
							},
							{
							  "name": "Zu WATCH™ ｜ 輕鬆組裝變換 第一支多風格個人腕錶",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1019358644796928"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 17,
						  "articles": [
							{
							  "name": "大家期待已久的製麵機實做文來啦！！",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983306958430144"
							},
							{
							  "name": "可預期的是今年應該會有不少品牌、周邊設備商開始推廣 Thunderbolt 3 介面的 GPU 外接盒",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983368951757278"
							},
							{
							  "name": "AlphaGo 會不會變成天網？黃博士表示不可能啦！目前的人工智慧並無自主思考能力，請大家放心",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983306915096815"
							},
							{
							  "name": "寒冬中要爬起來真的超痛苦！有了這件就不怕啦！",
							  "ranking": 14,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983191301775043"
							},
							{
							  "name": "酷斃的產品～",
							  "ranking": 17,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982637348497105"
							},
							{
							  "name": "許多行銷人員表示，發EDM時最常碰到三個問題：如何增加開信率？如何避免信件進入垃圾郵件夾？什麼時間最適合發EDM？",
							  "ranking": 13,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982622308498609"
							},
							{
							  "name": "PSVR看來很對外國人的胃口，",
							  "ranking": 16,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598"
							},
							{
							  "name": "總結而言，「國際輻射防護委員會」第84號報告書建議：「低於100毫戈雷的胎兒劑量不應做為中止妊娠的理由」",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185"
							},
							{
							  "name": "重點是DIY的樂趣…這看起來滿好做的",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983132055114301"
							},
							{
							  "name": "你們覺得哪一支是最完美的手機?",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983368101757363"
							},
							{
							  "name": "實木音響就是有質感",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982638538496986"
							},
							{
							  "name": "就台灣來說，這可以當作艾克芮第一把試水溫的機械式鍵盤",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983367875090719"
							},
							{
							  "name": "牆上掛著一對無辜的大眼睛…",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983133381780835"
							},
							{
							  "name": "微軟鍵鼠組應該是微軟最長壽的組合了，價格合理又好用、配任何電腦都大方又好看。這次好東西賣場取得了 Microsoft 900無線鍵鼠組/USB (黑)，價格只要 1,199 元，絕對是網路市場最便宜，有興趣的朋友帶一組回去喔～ #好東西最便宜",
							  "ranking": 15,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/982653268495513"
							},
							{
							  "name": "不僅外在時尚有質感，內在也是大容量！防雨防雪都沒問題～",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983292671764906"
							},
							{
							  "name": "看起來實物跟專利示意圖挺相近的，",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983313488429491"
							},
							{
							  "name": "None",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983460915081415"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.875,
						  "count": 16,
						  "articles": [
							{
							  "name": "【小小祕技讓 iOS 也有專業的 RAW 編輯功能】",
							  "ranking": 12,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953450134747030"
							},
							{
							  "name": "Adobe Lightroom 推出預覽計劃，讓使用者搶先嚐鮮新功能（和當小白鼠）",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953757268049650"
							},
							{
							  "name": "完全沉浸在 PS VR 世界所需要的，Sony 都替你集齊了",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953734091385301"
							},
							{
							  "name": "Windows 10 應用程式將在夏季登陸 Xbox One",
							  "ranking": 9,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953522144739829"
							},
							{
							  "name": "這也是特效，那也是特效，死侍裡的電腦特效比你想像多更多",
							  "ranking": 14,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953405434751500"
							},
							{
							  "name": "Tesla 有望重回台灣？分公司再度成立、招兵買馬同步進行中",
							  "ranking": 11,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953497048075672"
							},
							{
							  "name": "Michael Kors 也推出自己的 Android Wear 手錶了",
							  "ranking": 7,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953568871401823"
							},
							{
							  "name": "現在你可以為 Google Docs 文件設下分享期限",
							  "ranking": 10,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953522104739833"
							},
							{
							  "name": "Tech21 火速為 S7 與 S7 Edge 帶來耐衝擊防護（動手玩）",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953691914722852"
							},
							{
							  "name": "我們在評測 Samsung Galaxy S7 Edge / S7 時，發現兩個處理器版本的續航力相差了一段距離。所以小編也特意借來了 Exynos 8890 版本的 S7 Edge 再作對比，看看同一款手機的兩個版本相差多少。想知道答案的話，就來看看更新後的文章，可能會影響你的買機決定啊！",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953631008062276"
							},
							{
							  "name": "Google DeepMind 資深研究員黃士傑博士介紹 AlphaGo 的背後系統",
							  "ranking": 13,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953418298083547"
							},
							{
							  "name": "微軟終於開始為老手機機種提供 Windows 10 Mobile 升級",
							  "ranking": 15,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953371231421587"
							},
							{
							  "name": "Alphabet 要賣 Boston Dynamics？",
							  "ranking": 6,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953602901398420"
							},
							{
							  "name": "能讓衣服保持「新鮮」的 LG Styler 智慧衣櫥登台",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953655121393198"
							},
							{
							  "name": "最新版本的 Windows 10 Preview 為 Edge 瀏覽器帶來插件功能",
							  "ranking": 8,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953541384737905"
							},
							{
							  "name": "百度計畫在美國測試自駕車，希望 2018 年實現商轉",
							  "ranking": 16,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/953060934785950"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "PunNode 科技創業新聞網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【創業現場】",
							  "ranking": 1,
							  "src": "PunNode 科技創業新聞網",
							  "url": "https://www.facebook.com/130757850468364/posts/469464533264359"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "群募貝果 - WeBackers",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "群募貝果與會員、粉絲們相遇相知的365個日子全紀錄，大公開！",
							  "ranking": 1,
							  "src": "群募貝果 - WeBackers",
							  "url": "https://www.facebook.com/563108293798349/posts/864635396978969"
							}
						  ]
						},
						{
						  "id": "media-23",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.1111111111111111,
						  "count": 12,
						  "articles": [
							{
							  "name": "若包裝盒照面屬實的話，這樣看來 4 吋iPhone 的耳機孔應該還會存在。",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000178280035422"
							},
							{
							  "name": "從三星 和 LG 近來大動作擴廠來看，不排除蘋果真有可能提早一年在 2017 年時導入 OLED。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999927690060481"
							},
							{
							  "name": "既然如此，英特爾搶蘋果單是為什麼？",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000073013379282"
							},
							{
							  "name": "特斯拉進來後，台灣的路況可以允許使用自動導航功能嗎？而如何推動普及和銷售或許也會是棘手的問題，不過至少它將正式來台營運了！",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000015256718391"
							},
							{
							  "name": "蘋果是 Imagination 的主要客戶，iPhone 賣不好被認為是 IT 重整的主要原因...",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999964213390162"
							},
							{
							  "name": "網路家庭旗下的露天拍賣自 18 號早上就呈現了無法連線的狀態，到晚間大致上已恢復連線，但也引發使用者的眾多抱怨",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000322380021012"
							},
							{
							  "name": "如果工程師真的來這招，FBI 恐怕也拿他們沒轍吧...",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000088620044388"
							},
							{
							  "name": "三星大動作縮手和瘦身，是為接下來可能的不景氣預做準備嗎？不過特別的是，其他記憶體大廠還是傾向擴張，尤在 3D NAND Flash 領域。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000001750053075"
							},
							{
							  "name": "VR 不僅是當前廠商關注的焦點，更可能是未來帶動晶片商成長動能的重要領域。",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000214483365135"
							},
							{
							  "name": "韓國人還真不服輸阿（攤手）",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361"
							},
							{
							  "name": "原本只是為了活動而推出的 Facebook 大頭貼濾鏡，卻引發意外的正面效果",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/999661126753804"
							},
							{
							  "name": "AlphaGo 表現驚人，讓不管是人工智慧或是圍棋都再度受到關注，資深媒體人陳文茜說 AlphaGo 是在短時間內記住並識破李世乭的棋譜，不過真的是這樣嗎？",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186"
							}
						  ]
						},
						{
						  "id": "media-24",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.4782608695652174,
						  "count": 27,
						  "articles": [
							{
							  "name": "討論創新時，好像只有自己腦筋一片空白一點想法也沒有？",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038864802802925"
							},
							{
							  "name": "數位化侵襲，不管你是創業家、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038641146158624"
							},
							{
							  "name": "台灣新創真的創新不足、沒有國際觀嗎？其實回頭想想，或許是國際化的點子在台灣很容易死掉，因為他根本無法在台灣收錢啊！！！",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039141192775286"
							},
							{
							  "name": "電商模式還能如何革新？",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039211676101571"
							},
							{
							  "name": "就是這個模們特、Right Now，Tesla 進軍台灣還大開職缺招人了。",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039104759445596"
							},
							{
							  "name": "他身兼全球前五大豪華遊艇製造公司老闆，一邊開了間15年都不賺錢的研發子公司，最後再將研發結果向台灣同業毫無保留的分享。",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039449756077763"
							},
							{
							  "name": "許多工程師都會順手寫點小程式來減輕工作負擔，有沒有可能來寫個程式來幫自己工作？",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039170692772336"
							},
							{
							  "name": "VR好像很紅，但是除了打電動以外還能怎麼用？",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039137749442297"
							},
							{
							  "name": "你的習慣最後會成為性格，最後決定了你的命運。",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039276079428464"
							},
							{
							  "name": "花錢買 4G 吃到飽真的有做到不降速嗎？ 有事沒事測一下*你家＊電信商的服務品質吧。",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039204592768946"
							},
							{
							  "name": "趁早發現，及早閃人，別眼睜睜看自己被公司Fire啊！",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039188176103921"
							},
							{
							  "name": "黃士傑表示：「我在師大學習的論文，成為我做出 AlphaGo 的基礎。」，並且表示，台灣人才其實很優秀，但缺乏信心，例如害怕英文不好無法與外籍人士溝通。",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039269322762473"
							},
							{
							  "name": "無人車雖然是個科技趨勢，但是現實路況問題那麼多，上路到底安不安全啊？",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039345242754881"
							},
							{
							  "name": "加班回家都想立刻睡倒，明天的事起床再說吧......",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038565896166149"
							},
							{
							  "name": "歐豬國、人口比香港還要少的國家，卻在 2013 年被《福布斯》雜誌評為「全球最適宜經商」的國家，也是歐洲最大的 FinTech 初創基地",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037910529565019"
							},
							{
							  "name": "日子一天一天過，進步一年也勝過在原地踏步十年。",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039418916080847"
							},
							{
							  "name": "數位貨幣可能會帶來國安等級的危機，為什麼？",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039227492766656"
							},
							{
							  "name": "每到繳稅季，創業者最想問的大概都是「我要怎麼少繳一點稅？」",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038012302888175"
							},
							{
							  "name": "【入手網站數據分析小秘書】",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037297129626359"
							},
							{
							  "name": "家居生活的一切加上感應器跟網路設備，就能被稱為物聯網了？",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038707482818657"
							},
							{
							  "name": "【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039348359421236"
							},
							{
							  "name": "90 趴以上的新創公司，散伙的原因只有一個：沒錢了。",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037294376293301"
							},
							{
							  "name": "人脈真的很重要～",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038565716166167"
							},
							{
							  "name": "不懂很可怕、每次都被工程師鄙視很心塞......如果你也因為「科技知識」匱乏，導致工作時常得吞下各種血淚的，請堅強點！看過來！",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039267282762677"
							},
							{
							  "name": "不只 Google，YouTube 大神也受我一拜吧～",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039105066112232"
							},
							{
							  "name": "從外銷紅回台灣，什麼技術扭一下就真空？",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038565989499473"
							}
						  ]
						},
						{
						  "id": "media-25",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "臺東除了能讓你泡溫泉看日出外，現在又多了新景點－「臺東 TTmaker 創客園區」和「臺東鐵花村聚落」。",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525473927748074"
							},
							{
							  "name": "【活動花絮】",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524423034519830"
							},
							{
							  "name": "這可不是虛擬實境版本的雲霄飛車，而是今年的杜拜世界無人機競技大賽（World Drone Prix）！",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525421297753337"
							}
						  ]
						}

					];
				break;
				case "2016-03-22":
					this.media = [
												{
						  "id": "media-1",
						  "name": "數位時代",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.5,
						  "count": 5,
						  "articles": [
							{
							  "name": "法國哲學家笛卡兒曾說「我思，故我在」，這句名言傳頌至今，或許改為「我拍，故我在」，更貼近現代人不愛思考、但一定要拍照的生活態度。美食上桌先拍照的習慣、手機拿高45度的自拍美學、衝浪板上裝GoPro的特殊視角，一幕幕豐富精彩的人生在臉書、Instagram上澎湃呈現。身旁的你我活在這樣一個自戀時代，也造就了攝影這門古老行業的新契機。",
							  "ranking": 4,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154056666759284"
							},
							{
							  "name": "FBI 跟 Apple 的戰火持續延燒！",
							  "ranking": 1,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154056708999284"
							},
							{
							  "name": "你看過這個「台灣聲音地圖」了嗎？",
							  "ranking": 2,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154056671684284"
							},
							{
							  "name": "亞馬遜（Amazon）推出的「Echo」裝置到底有多神奇？",
							  "ranking": 5,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154055906554284"
							},
							{
							  "name": "亞洲捲起自造者Maker風潮，賽博集團與柴火創客空間成立合資公司賽博柴火造物吧，由兩岸創客導師程天縱擔任董事長，推動亞洲創客教育市場事業，針對台灣推出創客教育三大計畫。",
							  "ranking": 3,
							  "src": "數位時代",
							  "url": "https://www.facebook.com/158495994283/posts/10154056273019284"
							}
						  ]
						},
						{
						  "id": "media-2",
						  "name": "SmartM 電子商務網",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.2,
						  "count": 6,
						  "articles": [
							{
							  "name": "【SmartM 本週電商大事】",
							  "ranking": 6,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/950946634953214"
							},
							{
							  "name": "【電子商務最容易忽視的風險！小心蟑螂就在你身邊】",
							  "ranking": 2,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949587958422415"
							},
							{
							  "name": "【不再「單打獨鬥」請粉絲當店主】",
							  "ranking": 1,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949593328421878"
							},
							{
							  "name": "【七招打造互動內容行銷，讓你的內容更有料】",
							  "ranking": 3,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/949584965089381"
							},
							{
							  "name": "【行動網站不優化，銷售永遠無法達陣】",
							  "ranking": 4,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948888731825671"
							},
							{
							  "name": "【誘發消費者的不理性購物行為，四面埋伏的網站內容網羅金雞母】",
							  "ranking": 5,
							  "src": "SmartM 電子商務網",
							  "url": "https://www.facebook.com/466100950104454/posts/948885008492710"
							}
						  ]
						},
						{
						  "id": "media-3",
						  "name": "創業圓夢 Start-up Hub",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "創業圓夢計畫－輔導企業介紹",
							  "ranking": 1,
							  "src": "創業圓夢 Start-up Hub",
							  "url": "https://www.facebook.com/235676103145053/posts/1057552894290699"
							}
						  ]
						},
						{
						  "id": "media-4",
						  "name": "Inside 硬塞的網路趨勢觀察",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 11,
						  "articles": [
							{
							  "name": "創立初期以建立品牌形象為主，不接錢多但會影響定位的案子",
							  "ranking": 3,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274490196566"
							},
							{
							  "name": "隨著公司的擴大，你的壓力不會減小，只會越來越大。就像下圖所示，你有更多正向的收穫，也有更多負面的波折。",
							  "ranking": 5,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274487226566"
							},
							{
							  "name": "我們都知道汽車產業的競爭非常激烈，那麼為什麼特斯拉可以得到其他汽車製造商的大力幫助呢？答案是：各大汽車公司主要是為了利用灣區的這家新創公司來對沖強制進行技術變革的風險。對於他們來說，從短期來看，生產少量的、無法獲得經濟利益的、符合政府對零排放汽車規定的汽車是一種苦惱，同時這樣做也可能帶來一種讓人不安的後果，那就是這些純電動汽車或許最終會受到歡迎。",
							  "ranking": 1,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153275227436566"
							},
							{
							  "name": "你所做的大部分努力都不會起到太大成效，請訴諸於數據，讓它幫你找出來你的工作中最能夠推動進展的內容，那1% 的工作，卻能產生巨大的影響力。利用數學和分析工具來進行量化評判。",
							  "ranking": 2,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153275336541566"
							},
							{
							  "name": "該系統在車頭部分安裝了感應器，在偵測到前方有汽車或行人，並可能發生碰撞時，會自動減速或停車。像許多高科技系統一樣，自動剎車系統在十多年前已經出現在豪華車上，比如賓士S級豪華轎車，但目前配備該系統的車輛售價普遍在4萬美元以上。",
							  "ranking": 10,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274402841566"
							},
							{
							  "name": "酒後開車前，先推文一下。",
							  "ranking": 11,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274362706566"
							},
							{
							  "name": "研究者發現，擁有六條腿的螞蟻在每次同步使用其三條腿的時候，可以產生巨大的合力。",
							  "ranking": 6,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274475456566"
							},
							{
							  "name": "在朴槿惠的講話中她提到：「人工智慧可以為人類社會的祝福，這是第四次工業革命。多虧了這次 AlphaGo 的衝擊，我們才能夠在為時已晚之前了解到人工智慧的重要性。」",
							  "ranking": 4,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566"
							},
							{
							  "name": "如果是小編，我還是會生氣。",
							  "ranking": 7,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274480391566"
							},
							{
							  "name": "【Inside 硬塞的網路趨勢觀察】徵 網站編輯",
							  "ranking": 9,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274418996566"
							},
							{
							  "name": "舊時代的產品銷售方式，差不多該結束了。而這些公司 ( 仰賴實體通路) 也大概剩下五年的壽命 -Giovannoni",
							  "ranking": 8,
							  "src": "Inside 硬塞的網路趨勢觀察",
							  "url": "https://www.facebook.com/159425621565/posts/10153274431271566"
							}
						  ]
						},
						{
						  "id": "media-5",
						  "name": "青創學院",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "今年度第一場 \"免費\" 的募資課程起跑囉",
							  "ranking": 1,
							  "src": "青創學院",
							  "url": "https://www.facebook.com/408006489218583/posts/1136584553027436"
							}
						  ]
						},
						{
						  "id": "media-6",
						  "name": "Mr.Jamie",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 2,
						  "articles": [
							{
							  "name": "#每日精選英文新聞 Facebook 等社群媒體普及，導致網路罷凌日益頻繁，這不是台灣獨有的社會現象。耶魯大學教授 David Brooks 在他的紐時專欄指出，人類社會的主流價值，正從 50 年來的個人主義、罪惡文化盛行，逐漸轉移到社群媒體所帶動的團塊主義、羞恥文化為主。他在北美大學校園，尤其觀察到學生們在這個新世界裡，明顯的行為差異。這篇文章同時點出團塊文化的背後機理，以及常見的行為模式。",
							  "ranking": 2,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153873860495491"
							},
							{
							  "name": "\"...22歲那一年，江振誠踏入人生第二個家鄉，法國。在語言不通又人生地不熟的地方，跟隨著米其林三星主廚Jacques and Laurent Pourcel兄弟，開啟他在米其林三星餐廳Le Jardin des Sens的學習經驗。",
							  "ranking": 1,
							  "src": "Mr.Jamie",
							  "url": "https://www.facebook.com/150738220490/posts/10153874059955491"
							}
						  ]
						},
						{
						  "id": "media-7",
						  "name": "嘖嘖 zeczec",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "[嘖嘖最新計畫]  張穆庭 《2016》流行鋼琴演奏專輯製作發行計畫",
							  "ranking": 1,
							  "src": "嘖嘖 zeczec",
							  "url": "https://www.facebook.com/197008103698657/posts/1020044231395036"
							}
						  ]
						},
						{
						  "id": "media-8",
						  "name": "Pinkoi",
						  "hasInfo": false,
						  "day": 0,
						  "score": -1.0,
						  "count": 4,
						  "articles": [
							{
							  "name": "大家猜猜這些手繪小山們原本是什麼東西呢？",
							  "ranking": 3,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1164999870200065"
							},
							{
							  "name": "不為了誰，只打扮自己想要的模樣。",
							  "ranking": 1,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1164892583544127"
							},
							{
							  "name": "看起來扁扁的 MaryWil 馬卡龍色後背包，其實能夠裝下不少東西喔，上學、實習、去咖啡店寫報告，背這樣出門剛剛好！",
							  "ranking": 2,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1165154946851224"
							},
							{
							  "name": "在 Pinkoi 辦公室裡藏身著許多小影迷，有人甚至一年要看將近百部電影。你也是這種對電影如數家珍的殿堂級影癡嗎？",
							  "ranking": 4,
							  "src": "Pinkoi",
							  "url": "https://www.facebook.com/108929339140462/posts/1165115440188508"
							}
						  ]
						},
						{
						  "id": "media-9",
						  "name": "ㄇㄞˋ點子/ 靈感品物",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 8,
						  "articles": [
							{
							  "name": "欣賞好看的空間與識別設計的時間到囉～週末，大家有沒有什麼推薦的質感地點呢？",
							  "ranking": 6,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003824259561"
							},
							{
							  "name": "［ 讓消費者留戀的產品之美 ］",
							  "ranking": 1,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003821444561"
							},
							{
							  "name": "這個互動的設計也太強，刷卡捐款都刷得很開心啊～",
							  "ranking": 8,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154002556074561"
							},
							{
							  "name": "你要知道規則才能打破他們。",
							  "ranking": 4,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003837089561"
							},
							{
							  "name": "早安，週末 /// 早安，大家",
							  "ranking": 7,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003800799561"
							},
							{
							  "name": "不只是色筆，還有磁吸作用！",
							  "ranking": 5,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003842604561"
							},
							{
							  "name": "《100種無聊病症》",
							  "ranking": 2,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003805944561"
							},
							{
							  "name": "// 蜷川實花",
							  "ranking": 3,
							  "src": "ㄇㄞˋ點子/ 靈感品物",
							  "url": "https://www.facebook.com/139467854560/posts/10154003906094561"
							}
						  ]
						},
						{
						  "id": "media-10",
						  "name": "王文華的夢想學校",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "你正在創業嗎？ ",
							  "ranking": 1,
							  "src": "王文華的夢想學校",
							  "url": "https://www.facebook.com/117821821577752/posts/1296132813746641"
							}
						  ]
						},
						{
						  "id": "media-11",
						  "name": "癮科技",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.3333333333333333,
						  "count": 15,
						  "articles": [
							{
							  "name": "就算不拿來當筆也是很好的擺飾",
							  "ranking": 7,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983922728368567"
							},
							{
							  "name": "所謂的旗艦處理器，多半是要有領先市場需求的硬體規劃，聯發科確實在多核設計有特殊之處，但相較之下 GPU 的規劃、 LTE 支援就顯得保守，加上他們無法決定客戶將處理器用在怎樣的產品，去年原本想藉 X10 跨入旗艦級領域，卻仍停留在被當成比 615 家族超值的選擇...",
							  "ranking": 14,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983459685081538"
							},
							{
							  "name": "如果沒有好好保養電池的話，可能不用一年電池健康度就會降到7成以下，但要如何得知電池健康度，以前得JB後從 Cydia 裝 App 來看，現在只要透過 App Store 的 Battery Life 不用 JB 就能取得電池的健康度資訊",
							  "ranking": 15,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983366491757524"
							},
							{
							  "name": "這才是極致的黑呀…",
							  "ranking": 10,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983961798364660"
							},
							{
							  "name": "iPhone 7就是將 iPhone 6s 和 Galaxy S7 edge 摻成撒尿牛丸的概念？！",
							  "ranking": 3,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983368445090662"
							},
							{
							  "name": "什麼 DS Video 4K 即時轉檔、 DS Note 自建筆記雲端，其實對 Synology NAS 來說都只是一片小蛋糕而已～",
							  "ranking": 6,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983981765029330"
							},
							{
							  "name": "這兩天有空的朋友不妨到三創現場看看喔～",
							  "ranking": 13,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983478905079616"
							},
							{
							  "name": "難道\"菱格紋\"有種特殊的魔力？…",
							  "ranking": 9,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983975791696594"
							},
							{
							  "name": "去年賣超好的睡眠耳機，很多人反應如果是無線的使用上會更好，所以...這不就來了嗎！！\u003e\u003esmarturl.it/sleepphoneswls",
							  "ranking": 1,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983325538428286"
							},
							{
							  "name": "看到這就想到當初 Sony 伺服器被駭的事件，想來當初他們應該很後悔沒把保安做好把 ⋯",
							  "ranking": 8,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983981235029383"
							},
							{
							  "name": "我們都知道奶油不宜多吃，但沒有奶油的人生多無趣呀！垃圾食物與內容農場文章及八卦新聞一樣，吃多有害健康，卻偶爾需要它們來當作樂子",
							  "ranking": 5,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983363085091198"
							},
							{
							  "name": "最近 正義聯盟《蝙蝠俠大戰超人》的電影要上映～",
							  "ranking": 2,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983315795095927"
							},
							{
							  "name": "Capcom進軍完時尚界又要跨足食品界～",
							  "ranking": 4,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/984127461681427"
							},
							{
							  "name": "這實在太孤單了 ⋯ 比起先前壞朋友愛推坑賣的烤肉爐，這用起來實在有點淡淡的哀傷",
							  "ranking": 11,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983938995033607"
							},
							{
							  "name": "SanDisk 這款產品滿有趣的，除了是一般的隨身碟外，還帶有WiFi機能，可以讓手機或平板透過 WiFi 讀取裡面的資料，最高還可以同時三部設備播放影片，也可以當手機和平板的照片、影片備份裝置，買一支隨時放在包包裡備用都相當適合呢！",
							  "ranking": 12,
							  "src": "癮科技",
							  "url": "https://www.facebook.com/108887732538742/posts/983580865069420"
							}
						  ]
						},
						{
						  "id": "media-12",
						  "name": "Engadget 中文版",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 5,
						  "articles": [
							{
							  "name": "Bang \u0026 Olufsen 的電視產品日後將外判予 LG",
							  "ranking": 1,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/954476601311050"
							},
							{
							  "name": "聯想管理層重組，Motorola 總裁退位，之後誰來摔手機啊！？",
							  "ranking": 2,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/954357634656280"
							},
							{
							  "name": "Edge 插件不夠？微軟想把 Chrome 的拿來用耶",
							  "ranking": 3,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/954295974662446"
							},
							{
							  "name": "據報 Sony 正開發適用於 4K 遊戲的「PlayStation4.5」",
							  "ranking": 4,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/954224278002949"
							},
							{
							  "name": "Samsung 想要邀請 Galaxy 裝置的用戶測試新的音樂播放器",
							  "ranking": 5,
							  "src": "Engadget 中文版",
							  "url": "https://www.facebook.com/161283787297006/posts/954126561346054"
							}
						  ]
						},
						{
						  "id": "media-13",
						  "name": "iThome",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 7,
						  "articles": [
							{
							  "name": "對於小型辦公室與SOHO族，又擁有少數PoE供電設備，符合這種需求的8個GbE埠的網路交換器，Netgear GS308P是少數來自歐美廠商的產品，價格在同樣PoE與GbE埠數的網路交換器中並不算貴，而且由於機身相當小巧，因此更加容易部署。",
							  "ranking": 7,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/814635105329569"
							},
							{
							  "name": "「面對全球Fintech衝擊，最危險的不是銀行，而是保險、證券。」",
							  "ranking": 2,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815810945211985"
							},
							{
							  "name": "全球首次OpenStack黑客松開跑了",
							  "ranking": 3,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815773965215683"
							},
							{
							  "name": "美國知名開發者問答論壇Stack Overflow今年蒐集了來自全球173個國家，近6萬份開發者問卷完成了2016年開發者調查報告！",
							  "ranking": 1,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815940318532381"
							},
							{
							  "name": "3月就遭通報有漏洞，但鼎新7月才成立產品漏洞修補小組",
							  "ranking": 6,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815694705223609"
							},
							{
							  "name": "More then 300 developers join this Hackathon, even OpenStack Fondation CEO Jonathan Bryce will come to Taipei to join this hackathon,too. ",
							  "ranking": 4,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815773691882377"
							},
							{
							  "name": "Kubernetes 強悍改版，擴充力提高400％，最高3萬Container在單一叢集。",
							  "ranking": 5,
							  "src": "iThome",
							  "url": "https://www.facebook.com/352329718226779/posts/815706231889123"
							}
						  ]
						},
						{
						  "id": "media-14",
						  "name": "IOH Innovation Open House",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6666666666666666,
						  "count": 6,
						  "articles": [
							{
							  "name": "【 IOH 文章分享】關於選擇，我們為何害孩子如此茫然？",
							  "ranking": 6,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1008605425851680"
							},
							{
							  "name": "【IOH 文章分享】將學業、工作融入生活，盡情享受！",
							  "ranking": 1,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009960955716127"
							},
							{
							  "name": "【講座公告】高醫醫學，尋找聖光背後的意義！",
							  "ranking": 4,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1008955792483310"
							},
							{
							  "name": "【講座公告】機會靠自己製造！在倫敦，我學會放手一搏",
							  "ranking": 2,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009987512380138"
							},
							{
							  "name": "【講座公告】熱情，可以廢寢忘食！成為和社會對話的創作者",
							  "ranking": 3,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009913192387570"
							},
							{
							  "name": "【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！",
							  "ranking": 5,
							  "src": "IOH Innovation Open House",
							  "url": "https://www.facebook.com/438699959508899/posts/1009378392441050"
							}
						  ]
						},
						{
						  "id": "media-15",
						  "name": "T客邦的臉書基地",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 12,
						  "articles": [
							{
							  "name": "有些東西，感覺變得為了VR而VR了....",
							  "ranking": 12,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153629267145674"
							},
							{
							  "name": "對Apple使用者來說，Magic Mouce與Keyboard的耗電程度應該是相當有感，如果是拿來當工作機使用，大約一個月就要換一次電池。新推出的二代週邊Magic Mouse 2則可完全重複充電使用，背面取消了AA電池蓋，取而代之的是Lightning充電埠。",
							  "ranking": 11,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153630837965674"
							},
							{
							  "name": "遠遠看過去，應該是覺得你被FBI盯上了吧！",
							  "ranking": 1,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631805480674"
							},
							{
							  "name": "滿滿的洋蔥....",
							  "ranking": 2,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631804710674"
							},
							{
							  "name": "GeForce GTX 750 Ti 一度是最強的免插輔助電源顯示卡，然而已經推出 2 年，性能表現不再亮眼。最近低調冒出頭的 GeForce GTX 950，新增 TDP 由 90W 調降至 75W 版本，有望成為取代 GeForce GTX 750 Ti 存在價值的熱門產品。除了 Asus 搶先發表外，MSI 也跟進推出 2 款相對應產品，上市時程規劃值得留意。",
							  "ranking": 10,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153630839770674"
							},
							{
							  "name": "【T 好康】發表出國上網神器「Givemefi M1」力挺宣言好禮送給你",
							  "ranking": 5,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631751920674"
							},
							{
							  "name": "在特定情況下，就算你是沒有越獄的iOS也有可能會中木馬，比方說用了非iTunes的軟體來安裝App。",
							  "ranking": 6,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631654925674"
							},
							{
							  "name": "原來真的有電磁砲啊？那麼...變形金剛呢？",
							  "ranking": 3,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631790525674"
							},
							{
							  "name": "是哪裡來的異常流量呢？感覺內情似乎...",
							  "ranking": 9,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674"
							},
							{
							  "name": "高階無線路由器的速度不斷往上攀升，但市井小民多數的期望只要性能穩、訊號強便已足夠，Tenda AC15的出現便是立基於此，採用了評價不錯且相容度高的博通雙核心晶片，並內建256MB DDR3記憶體，在多工環境下將效能的影響減至最低。",
							  "ranking": 7,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631440550674"
							},
							{
							  "name": "當平板、手機變成閱讀裝置後，漫畫的呈現形式也慢慢改變成符合手機閱讀的形式，這就是俗稱的「條漫」。",
							  "ranking": 8,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631362080674"
							},
							{
							  "name": "連茅場都出現了啊！你不得不相信我們真的有機會進入《刀劍神域》的世界(能不能出來就不知道了...)",
							  "ranking": 4,
							  "src": "T客邦的臉書基地",
							  "url": "https://www.facebook.com/161676900673/posts/10153631783850674"
							}
						  ]
						},
						{
						  "id": "media-16",
						  "name": "Technews 科技新報",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.14285714285714285,
						  "count": 15,
						  "articles": [
							{
							  "name": "這款背心不僅能偵測周遭環境，就連認人的工作也難不倒它。",
							  "ranking": 7,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000664736653443"
							},
							{
							  "name": "在人工智慧越來越厲害的未來，我們可以如何努力保有自己的競爭力呢？",
							  "ranking": 3,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000665889986661"
							},
							{
							  "name": "實驗發現，用皮膚細胞打造的心臟細胞能成功的像人體內的心臟依樣收縮，未來心臟移植或許就不需苦苦等待了。",
							  "ranking": 9,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000656683320915"
							},
							{
							  "name": "的確，用 VR 看恐怖片比起在電影院看還要可怕啊...",
							  "ranking": 8,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306"
							},
							{
							  "name": "然而這樣的技術若成功應用，未來喇叭本身效果強不強大，或許也沒那麼重要了。",
							  "ranking": 10,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000651059988144"
							},
							{
							  "name": "究竟是銀行把關太鬆散，還是他太厲害？",
							  "ranking": 15,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000601979993052"
							},
							{
							  "name": "在PM 2.5超過300的北京慢跑，臉書爲了進中國真是用心良苦。",
							  "ranking": 13,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000676853318898"
							},
							{
							  "name": "爲了對抗皺紋，",
							  "ranking": 1,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000741939979056"
							},
							{
							  "name": "NAND Flash 究竟是如何運作的？市場上常聽到的 SLC、MLC 又是什麼？科技新報帶大家來認識一下！",
							  "ranking": 4,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000686273317956"
							},
							{
							  "name": "負利率如果成爲未來幾年的常態，",
							  "ranking": 6,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000888993297684"
							},
							{
							  "name": "原油供給過剩的情況到底有多嚴重？ 數字上似乎對不起來。",
							  "ranking": 11,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000739626645954"
							},
							{
							  "name": "這樣看來不管是哪家 VR ，成功運作前都要花費一筆不小的費用阿。",
							  "ranking": 14,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128"
							},
							{
							  "name": "這是商務人士必備的功能吧，不過這樣的趨勢未來勢必會越來越普及。",
							  "ranking": 2,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000666166653300"
							},
							{
							  "name": "蘋果修改後的形式，不僅讓廣告不會妨礙閱讀，點擊率更大幅增加，這樣的改變對與廣告主來說應該是相當樂見的吧。",
							  "ranking": 12,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000649219988328"
							},
							{
							  "name": "儘管這細菌再厲害，其分解的速度也趕不上人們製造垃圾的速度吧。",
							  "ranking": 5,
							  "src": "Technews 科技新報",
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725"
							}
						  ]
						},
						{
						  "id": "media-17",
						  "name": "TEDxTaipei",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "大家都知道最近圍棋「人機大戰」的Alphago來自Google的子公司之一，但你可知道Google一直投入許多資源在研發超前時代的未來科技，他們又是如何做到的？",
							  "ranking": 1,
							  "src": "TEDxTaipei",
							  "url": "https://www.facebook.com/109056135781639/posts/1083702671650309"
							}
						  ]
						},
						{
						  "id": "media-18",
						  "name": "創業小聚 Meet Startup",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.7142857142857143,
						  "count": 7,
						  "articles": [
							{
							  "name": "#獨立思考",
							  "ranking": 1,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958169884259135"
							},
							{
							  "name": "#人工智慧 #跨領域人才",
							  "ranking": 6,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958116894264434"
							},
							{
							  "name": "#創客 #Maker #程天縱",
							  "ranking": 4,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958118667597590"
							},
							{
							  "name": "#香港第一隻科技獨角獸",
							  "ranking": 7,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958115574264566"
							},
							{
							  "name": "2016 ASIA BEAT Xiamen 在18日落幕，這次有來自18國共92組新創團隊角逐路演大賽（路演即Roadshow），其中12組來自中國、日本、台灣、新加坡的新創團隊進入決賽。最後由來自中國的App資料分析服務「蟬大師」拿下冠軍，贏得10,000美元獎金。",
							  "ranking": 5,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958171330925657"
							},
							{
							  "name": "#獨角獸 #網路效應",
							  "ranking": 2,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958128497596607"
							},
							{
							  "name": "＃商務溝通 #職場溝通",
							  "ranking": 3,
							  "src": "創業小聚 Meet Startup",
							  "url": "https://www.facebook.com/101512403258225/posts/958163480926442"
							}
						  ]
						},
						{
						  "id": "media-19",
						  "name": "TechOrange",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.6521739130434783,
						  "count": 26,
						  "articles": [
							{
							  "name": "終於被發明出來了！（不知道荼毒了多少無辜的魚......",
							  "ranking": 14,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038574519498620"
							},
							{
							  "name": "數位化侵襲，不管你是創業家、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。",
							  "ranking": 8,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039274419428630"
							},
							{
							  "name": "– 排除不重要資訊抓住 10% 真正重要的內容，觀眾秒懂不是問題",
							  "ranking": 12,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038644796158259"
							},
							{
							  "name": "只求網頁操作順暢可是很多台灣企業都做不到，請愛用Google新工具Risizer幫你把關",
							  "ranking": 15,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039781529377919"
							},
							{
							  "name": "就是這個模們特、Right Now，Tesla 進軍台灣還大開職缺招人了。",
							  "ranking": 19,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039809142708491"
							},
							{
							  "name": "FB才是新一代的大神，在大神面前，你毫無祕密：你的喜好、你的互動、你的IP位置…你根本無處可藏。",
							  "ranking": 11,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039815132707892"
							},
							{
							  "name": "許多工程師都會順手寫點小程式來減輕工作負擔，有沒有可能來寫個程式來幫自己工作？",
							  "ranking": 9,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039813919374680"
							},
							{
							  "name": "這是專屬工程師的驅蟲法～討厭的bug快走開！",
							  "ranking": 10,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039815362707869"
							},
							{
							  "name": "一個用戶資料會被政府看透的科技服務誰敢用？不只蘋果怕，Google、Facebook…矽谷每間公司都怕。",
							  "ranking": 4,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039995389356533"
							},
							{
							  "name": "你找到無聊工作背後的 Why 了嗎？",
							  "ranking": 21,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038574242831981"
							},
							{
							  "name": "農業怎麼會是苦力活？",
							  "ranking": 17,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039778882711517"
							},
							{
							  "name": "黃士傑表示：「我在師大學習的論文，成為我做出 AlphaGo 的基礎。」，並且表示，台灣人才其實很優秀，但缺乏信心，例如害怕英文不好無法與外籍人士溝通。",
							  "ranking": 7,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039818839374188"
							},
							{
							  "name": "別看這些程式語言發明人好像很偉大，他們在取名的時候，有時候可是亂搞笑一把的ＸＤＤＤ",
							  "ranking": 20,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039561682733237"
							},
							{
							  "name": "學生創業情境模擬：大家約在咖啡廳討論出點子了，接下來就去徵夥伴、找資金吧～",
							  "ranking": 6,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039816579374414"
							},
							{
							  "name": "這豈不是要我出國渡假去了嗎～",
							  "ranking": 13,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039788902710515"
							},
							{
							  "name": "我要把這些網站都逛到爛然後變成coder大大！！",
							  "ranking": 2,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039996326023106"
							},
							{
							  "name": "覺得羨慕、覺得想去、覺得想轉職ＸＤ",
							  "ranking": 22,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039560869399985"
							},
							{
							  "name": "花那麼多時間在工作上，卻沒撥點空思考自己的人生？",
							  "ranking": 25,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038573859498686"
							},
							{
							  "name": "「強烈建議，規模小的企業或一人開公司的經營者，最好能親自處理財會工作！」",
							  "ranking": 3,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038013096221429"
							},
							{
							  "name": "人脈真的很重要～",
							  "ranking": 1,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038574602831945"
							},
							{
							  "name": "中文再難、網路長城再牢不可破，美國房仲左手微信右手淘寶，人坐在紐約辦公室，還是能大把賺進中國人的銀子",
							  "ranking": 5,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039770982712307"
							},
							{
							  "name": "Apple 獨樹一幟的美感風格，源自畢卡索的創作概念，以及賈伯斯年輕時上的一門字型設計課。",
							  "ranking": 24,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039560406066698"
							},
							{
							  "name": "為什麼 FinTech 在台灣跑得這麼慢？",
							  "ranking": 16,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1037910819564990"
							},
							{
							  "name": "咦，真假！？（放下鍵盤）",
							  "ranking": 18,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039562752733130"
							},
							{
							  "name": "想知道你的網站中，哪個網頁最熱門、最多人點閱嗎？只要使用 Google Analytics，就可以查詢熱門的到達網頁，或是跳出率過高的頁面，讓網站經營者更了解自己的網站。",
							  "ranking": 23,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1038025246220214"
							},
							{
							  "name": "網路產業很紅，但網路產業到底是什麼？",
							  "ranking": 26,
							  "src": "TechOrange",
							  "url": "https://www.facebook.com/151776788178402/posts/1039273452762060"
							}
						  ]
						},
						{
						  "id": "media-20",
						  "name": "FlyingV",
						  "hasInfo": false,
						  "day": 0,
						  "score": 0.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【給我沖一杯咖啡的時間  拯救傳統書店的即買即印！】",
							  "ranking": 1,
							  "src": "FlyingV",
							  "url": "https://www.facebook.com/274575209225142/posts/1283050595044260"
							}
						  ]
						},
						{
						  "id": "media-21",
						  "name": "創新創業激勵計畫",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 1,
						  "articles": [
							{
							  "name": "【特斯拉。籌備】",
							  "ranking": 1,
							  "src": "創新創業激勵計畫",
							  "url": "https://www.facebook.com/498486833520105/posts/1010663965635720"
							}
						  ]
						},
						{
						  "id": "media-22",
						  "name": "Makerdiwo 創客窩",
						  "hasInfo": false,
						  "day": 0,
						  "score": 1.0,
						  "count": 3,
						  "articles": [
							{
							  "name": "【活動花絮】「物物相聯」物聯網？",
							  "ranking": 1,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1524424654519668"
							},
							{
							  "name": "中彰投分署/青年職涯發展中心創客列車巡迴服務來到了彰化的北斗家商，帶領一群特殊資源班的同學利用廢棄木材做出自製燈罩。",
							  "ranking": 2,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525489094413224"
							},
							{
							  "name": "【03/20-03/27活動預報】",
							  "ranking": 3,
							  "src": "Makerdiwo 創客窩",
							  "url": "https://www.facebook.com/1389789557983179/posts/1525512741077526"
							}
						  ]
						}

					];
				break;
				case "2016-03-23":
					this.media = [];
				break;	
			}
	
			break;
			case 2:
				switch(date){
					case "2016-03-16":
					var object = [
					{"text":"水晶體","frequency":66,"sentiment":0,"articles":[{"name":"治療白內障，需要在眼睛裡植入「人工水晶體」來進行治療，現在學者們研究出新的醫療方法，他們不移植人工水晶體，直接讓眼睛自己長出新的水晶體，治好病人。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996754903711093"}]},
					{"text":"防護","frequency":41,"sentiment":0,"articles":[{"name":"#台灣之光","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1277137228968930"}]},
					{"text":"零錢","frequency":41,"sentiment":0,"articles":[{"name":"旅遊結束後的外幣零錢怎麼辦？","ranking":1,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1290240811002508"}]},
					{"text":"充電","frequency":36,"sentiment":0,"articles":[{"name":"行動電源有夠重，但帶電源線還要四處找插座，找到插座還不一定輪的到自己用…一次解決關於充電的各種問題，還可以順便來份悠哉的下午茶呢！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1034817453207660"},{"name":"【 隨需求自由組裝 】","ranking":2,"src":"ㄇㄞˋ點子/ 靈感品物","url":"https://www.facebook.com/139467854560/posts/10153985601479561"}]},
					{"text":"國貿","frequency":35,"sentiment":0,"articles":[{"name":"【IOH 講座公告】放棄國外研究所選擇台灣，在東吳國貿與世界接軌","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1005463439499212"}]},
					{"text":"梵谷","frequency":34,"sentiment":0,"articles":[{"name":"梵谷居住在巴黎期間，先後用過 7 本 moleskine 筆記本，內裡全部記載著的手繪草圖甚至完成作品，當中更包括其著名作品《Vase with Sixteen Sunflowers》《Vase with Twelve Sunflowers》，手稿現收藏於荷蘭阿姆斯特丹的梵谷博物館內作展覽。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153261181766566"}]},
					{"text":"認購","frequency":33,"sentiment":0,"articles":[{"name":"有趣，","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996776473708936"}]},
					{"text":"白內障","frequency":32,"sentiment":0,"articles":[{"name":"治療白內障，需要在眼睛裡植入「人工水晶體」來進行治療，現在學者們研究出新的醫療方法，他們不移植人工水晶體，直接讓眼睛自己長出新的水晶體，治好病人。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996754903711093"}]},
					{"text":"國家公園","frequency":30,"sentiment":0,"articles":[{"name":"好想出國呀…呀呀…","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/979616905465816"}]},
					{"text":"動畫","frequency":30,"sentiment":0,"articles":[{"name":"動畫的功能在此不是為了要用娛樂效果取悅客戶，相反的，動畫是要幫助他們更容易了解你的產品。如果拿掉動畫整個流程也不受影響，那麼這個動畫就是多餘的。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153260739931566"}]},
					{"text":"農業","frequency":29,"sentiment":0,"articles":[{"name":"隨著對於食安與生態議題的重視，美國也逐漸出現農業新創趨勢。","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1034816233207782"}]},
					{"text":"延長線","frequency":28,"sentiment":0,"articles":[{"name":"【 隨需求自由組裝 】","ranking":1,"src":"ㄇㄞˋ點子/ 靈感品物","url":"https://www.facebook.com/139467854560/posts/10153985601479561"}]},
					{"text":"眼睛","frequency":27,"sentiment":0,"articles":[{"name":"治療白內障，需要在眼睛裡植入「人工水晶體」來進行治療，現在學者們研究出新的醫療方法，他們不移植人工水晶體，直接讓眼睛自己長出新的水晶體，治好病人。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996754903711093"}]},
					{"text":"育成","frequency":26,"sentiment":0,"articles":[{"name":"【育成亮點企業案例】【酷贏數位科技股份有限公司】","ranking":1,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1133523363337985"}]},
					{"text":"記憶體","frequency":26,"sentiment":0,"articles":[{"name":"DRAM、硬碟、SSD三種特性各不同，","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996749377044979"}]},
					{"text":"過剩","frequency":25,"sentiment":0,"articles":[{"name":"產能過剩不僅在鋼鐵、水泥、石油等，","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996751903711393"}]},
					{"text":"粒子","frequency":25,"sentiment":0,"articles":[{"name":"來欣賞一下 BBC 去大型粒子對撞機那拍下的 360 度影片","ranking":1,"src":"Engadget 中文版","url":"https://www.facebook.com/161283787297006/posts/949861218439255"}]},
					{"text":"易學","frequency":25,"sentiment":0,"articles":[{"name":"【育成亮點企業案例】【酷贏數位科技股份有限公司】","ranking":1,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1133523363337985"}]},
					{"text":"跳繩","frequency":25,"sentiment":0,"articles":[{"name":"夜店也可以表演跳繩了…(誤)","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/979611565466350"}]},
					{"text":"解題","frequency":24,"sentiment":0,"articles":[{"name":"【育成亮點企業案例】【酷贏數位科技股份有限公司】","ranking":1,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1133523363337985"}]},
					{"text":"開店","frequency":22,"sentiment":0,"articles":[{"name":"【電商財務虧損連連？經營者了解開店成本也要懂預算控管】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/945889692125575"}]},
					{"text":"剪貼簿","frequency":22,"sentiment":0,"articles":[{"name":"【編輯救星】如果您還在尋找電腦與手機的剪貼簿軟體，或許可以試試這個「Alt-C」。","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154038222989284"}]},
					{"text":"死心塌地","frequency":22,"sentiment":0,"articles":[{"name":"#比爾蓋茲也在用！","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/953531234723000"}]},
					{"text":"夜光","frequency":22,"sentiment":0,"articles":[{"name":"學校附近唯一有夜間照明的棒球場，是河濱公園。如果有一片平坦的草地，縱使沒有照明設備，帶著夜光棒球也可以傳接球、守備練習、打擊練習。","ranking":1,"src":"嘖嘖 zeczec","url":"https://www.facebook.com/197008103698657/posts/1016213028444823"}]},
					{"text":"神器","frequency":22,"sentiment":0,"articles":[{"name":"【育成亮點企業案例】【酷贏數位科技股份有限公司】","ranking":1,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1133523363337985"}]},
					{"text":"實踐","frequency":22,"sentiment":0,"articles":[{"name":"【講座公告】跨領域碰撞！在實踐服設的創意激盪","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1005682416143981"}]},
					{"text":"人工","frequency":21,"sentiment":0,"articles":[{"name":"治療白內障，需要在眼睛裡植入「人工水晶體」來進行治療，現在學者們研究出新的醫療方法，他們不移植人工水晶體，直接讓眼睛自己長出新的水晶體，治好病人。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996754903711093"},{"name":"AlphaGo 也是會輸的！","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996876610365589"},{"name":"本週最受矚目的新聞當屬Google DeepMind開發出來的AlphaGo圍棋系統對戰人類棋王李世乭，也恭喜他今天奪下第一勝！","ranking":3,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154039695984284"},{"name":"【#AlphaGo投子認輸】輸掉前三場比賽後，棋王李世乭取得第一勝！","ranking":4,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154039460509284"},{"name":"贏了！","ranking":5,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153614980975674"},{"name":"繼人工智慧對真人後，現在來看看機器狗對真狗吧！","ranking":6,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996751600378090"},{"name":"AlphaGo與李世石這場人工智慧與人類之間的戰爭，沒想到演出令眾人跌破眼鏡。三輪戰罷，人類中的圍棋頂尖高手李世石，遭遇零封，目前以 3：0 在這場 5 局的鏖戰中完全處於下風。","ranking":7,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/953529831389807"},{"name":"機器勢必會取代人力，並且提供許多服務，一旦當機器供養著人類，人類真的還會有動力去追求更宏偉的目標，自我實現嗎？還是會醉生夢死、無所事事地活著？","ranking":8,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1034817806540958"}]},
					{"text":"無線","frequency":21,"sentiment":0,"articles":[{"name":"行動電源有夠重，但帶電源線還要四處找插座，找到插座還不一定輪的到自己用…一次解決關於充電的各種問題，還可以順便來份悠哉的下午茶呢！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1034817453207660"}]},
					{"text":"破解","frequency":21,"sentiment":0,"articles":[{"name":"網路產業很紅，但網路產業到底是什麼？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1034572449898827"}]},
					{"text":"富翁","frequency":21,"sentiment":0,"articles":[{"name":"富者越富，貧者越貧，未來十年內可能不會再有超級富翁出現，但貧富差距依然會持續擴大。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/996751263711457"}]}
					];
					return object;
					break;
					case "2016-03-17":
					var object = [
					{"text":"巧克力","frequency":82,"sentiment":0,"articles":[{"name":"手作巧克力最高？！有了這台巧克力 3D 列印機，不需要把廚房炸掉也可以自製巧克力。","ranking":1,"src":"Makerdiwo 創客窩","url":"https://www.facebook.com/1389789557983179/posts/1524081254554008"}]},
					{"text":"手錶","frequency":46,"sentiment":0,"articles":[{"name":"腕帶式心率偵測器不需要配戴心跳帶，用起來也十分方便，不過它們真的準確嗎？編輯部這次借到了 Apple、Samsung、Garmin、Asus、小米等五大品牌的智慧手環/手錶，用最簡易的測試方式來看看它們有沒有及格。","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153618871330674"},{"name":"正當我們期智慧手錶在 2016 年能更進一步的時候，智慧手錶卻集體沉默了，在 2016 年的 MWC 大會上幾乎沒有露面。難道，智慧手錶就這樣死了？","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036486919707380"}]},
					{"text":"英文系","frequency":45,"sentiment":0,"articles":[{"name":"【講座公告】奮力充實自己，在英文系成為閃亮的一顆星！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1006406959404860"}]},
					{"text":"奢侈品","frequency":43,"sentiment":0,"articles":[{"name":"享譽全球的義大利高級珠寶品牌寶格麗（Bulgari）總裁Jean-Christophe Babin提到，在東南亞各國，有越來越多的人能夠負擔得起這樣的精品消費，例如越南、泰國和馬來西亞，總計有高達上千萬客群。這也是為什麼寶格麗在過去短短八個月的時間，在單一國家印尼就新開設了6間分店。而目前東南亞奢侈品電商市場最大的泰國，在2015年的銷售額達到25億美元。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954473097962147"},{"name":"【東南亞，奢侈品電商的下一個新藍海】","ranking":2,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948200458561165"}]},
					{"text":"企鵝","frequency":39,"sentiment":0,"articles":[{"name":"你也喜歡圓圓滾滾的可愛企鵝嗎？事實上在過去數年間，企鵝的數量大量減少了90%左右，快進來一起關心這些可愛的小朋友！","ranking":1,"src":"TEDxTaipei","url":"https://www.facebook.com/109056135781639/posts/1079993818687861"}]},
					{"text":"儲存","frequency":39,"sentiment":0,"articles":[{"name":"WD 要讓小小的 Raspberry Pi，擁有大大的 314GB 儲存空間","ranking":1,"src":"Engadget 中文版","url":"https://www.facebook.com/161283787297006/posts/950774958347881"},{"name":"雖然核心方面有著基礎的差異存在，理論規格 800 \u003e 600 \u003e 400 \u003e 200 ，不過考慮到實際層面包括軟體支援性、其它包括螢幕、相機、內部儲存等硬體配置，還有當地電信商的 4G 服務等，最終入門 800 機種與高階 600 機種、入門 600 機種與高階 400 機種在使用體驗卻是難分難解...","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980451868715653"},{"name":"雲端儲存、軟體定義儲存對傳統企業儲存市場的影響不容小看。","ranking":3,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/812737082186038"}]},
					{"text":"天份","frequency":35,"sentiment":0,"articles":[{"name":"其實把「寫程式」這三個字換成任何工作，都可以說得通","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036567936365945"}]},
					{"text":"液化","frequency":33,"sentiment":0,"articles":[{"name":"土壤液化查詢系統，OPEN！","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1149862458387262"},{"name":"雖然說即使住家就在高潛勢地區也未必代表會有危險，但提早了解狀況，就能夠事先預防與補強。公告中午12點才開放，但已經有眼尖的民眾找出網址囉（內附連結）","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036403189715753"},{"name":"呼，小編目前住家跟公司都沒有在紅色範圍就是了...","ranking":3,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980405265386980"},{"name":"小編狀態顯示為連不上....","ranking":4,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153618297955674"},{"name":"南台大地震之後，大家開始注意到「土壤液化」這個問題，而今天「土壤液化潛勢區查詢系統」網站啟用，只要輸入地址，就可以知道自家土壤液化的潛勢區等級！（不過現在只有8個縣市可以查詢）。","ranking":5,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154042164454284"}]},
					{"text":"棋王","frequency":30,"sentiment":0,"articles":[{"name":"#每日精選英文新聞 AlphaGo 意外打敗棋王，讓人工智慧變成近期的熱門話題，很多人在探討它未來的應用。這裡有個非常實際的案例，一家每秒鐘幾百萬上下的大銀行，風險控管是極端重要的工作。過去，這個工作仰賴稽核部門數千位人員，建立各種內部規則來完成，不僅成本極高，也往往只能在事後才發現風險。在未來，這工作將越來越仰賴能主動學習的人工智慧。近期，摩根大通銀行跨出了第一步，開始運用大數據與演算法，去預測員工是否即將做出過度暴險的行為。","ranking":1,"src":"Mr.Jamie","url":"https://www.facebook.com/150738220490/posts/10153859684800491"},{"name":"#世紀對弈最後一戰就在明天","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954533977956059"},{"name":"此次 AlphaGo 和李世乭的對弈，不只是人工智慧發展的里程碑，也讓人們深刻體會到，那個我們覺得遙遠的未來已經到來。","ranking":3,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/997327783653805"},{"name":"棋王與Google人工智慧的第四戰，人類終於扳回一城，恭喜李世石，同時也恭喜拿下三勝的Google AlphaGo團隊。明天是最後一戰，有興趣的別錯過喔!","ranking":4,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/812736562186090"},{"name":"AlphaGo與棋王李世乭的世紀對弈最後一戰就在明天，今天是休兵日，先來了解一下AlphaGo的技術原理，以及背後涉及到的類神經網路以及深度學習技術。","ranking":5,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154041869719284"}]},
					{"text":"土壤","frequency":30,"sentiment":0,"articles":[{"name":"土壤液化查詢系統，OPEN！","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1149862458387262"},{"name":"雖然說即使住家就在高潛勢地區也未必代表會有危險，但提早了解狀況，就能夠事先預防與補強。公告中午12點才開放，但已經有眼尖的民眾找出網址囉（內附連結）","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036403189715753"},{"name":"呼，小編目前住家跟公司都沒有在紅色範圍就是了...","ranking":3,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980405265386980"},{"name":"小編狀態顯示為連不上....","ranking":4,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153618297955674"},{"name":"南台大地震之後，大家開始注意到「土壤液化」這個問題，而今天「土壤液化潛勢區查詢系統」網站啟用，只要輸入地址，就可以知道自家土壤液化的潛勢區等級！（不過現在只有8個縣市可以查詢）。","ranking":5,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154042164454284"}]},
					{"text":"靜宜","frequency":29,"sentiment":0,"articles":[{"name":"【講座公告】奮力充實自己，在英文系成為閃亮的一顆星！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1006406959404860"}]},
					{"text":"醫療","frequency":29,"sentiment":0,"articles":[{"name":"【專利資訊分享——醫療器材租賃後勤支援系統】","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1062549950457660"}]},
					{"text":"熱情","frequency":27,"sentiment":0,"articles":[{"name":"其實把「寫程式」這三個字換成任何工作，都可以說得通","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036567936365945"}]},
					{"text":"在乎","frequency":27,"sentiment":0,"articles":[{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036568113032594"}]},
					{"text":"程式碼","frequency":26,"sentiment":0,"articles":[{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036568113032594"},{"name":"Visual Studio支援R語言了!","ranking":2,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/812797232180023"}]},
					{"text":"心理系","frequency":26,"sentiment":0,"articles":[{"name":"【講座公告】做自己生活的主人！那些心理系教我的事","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1006519376060285"}]},
					{"text":"租賃","frequency":26,"sentiment":0,"articles":[{"name":"【專利資訊分享——醫療器材租賃後勤支援系統】","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1062549950457660"}]},
					{"text":"面板","frequency":26,"sentiment":0,"articles":[{"name":"為了力抗紅潮，三星也曾傳出想入股夏普 1 代廠，不過現在這個想法也未能如願...","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/997427460310504"}]},
					{"text":"自行車","frequency":26,"sentiment":0,"articles":[{"name":"AI 眼中的世界是什麼模樣？「一棵樹爬上了一塊木頭。一隻大鳥坐在山頭。一輛自行車斜靠在另一輛自行車上。」這個 iPhone app 會利用神經網路技術，把鏡頭中的畫面形容給你聽，有的時候平鋪直述，有的時候卻又天馬行空。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263269621566"}]},
					{"text":"圍巾","frequency":25,"sentiment":0,"articles":[{"name":"這種寒流天圍著女友幫你織的圍巾好暖好滿足嗎？","ranking":1,"src":"Makerdiwo 創客窩","url":"https://www.facebook.com/1389789557983179/posts/1524079084554225"}]},
					{"text":"轉帳","frequency":25,"sentiment":0,"articles":[{"name":"孟加拉央行發生的這起「網路搶案」，駭客潛伏在裡面已很久了，而且他們本來打算搶10億美元。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/812733812186365"}]},
					{"text":"實習","frequency":25,"sentiment":0,"articles":[{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036568113032594"},{"name":"【 第13屆實習生招募】倒數一週！","ranking":2,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1291331017560154"},{"name":"假如你有信心在 Google 主頁上變出點新花樣的話，你就是Google實習生了！","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036394923049913"}]},
					{"text":"傳導","frequency":24,"sentiment":0,"articles":[{"name":"看起來應該是使用了骨傳導技術，不過 Sony 未來實驗室還是強調這是概念產品，恐怕不會太快變成市售商品","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980389002055273"}]},
					{"text":"圍棋","frequency":24,"sentiment":0,"articles":[{"name":"由於這場失利，AlphaGo 得以正式進入世界職業圍棋選手排名，因為按照世界職業圍棋排名網站 GoRatings.org 的算法，如果一名選手從未落敗，就不會進入排名統計。 這次對戰的韓國選手李世乭則排名第五，第一名為中國棋士柯潔。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263143511566"},{"name":"現世界排名第一的中國圍棋選手柯潔九段在微博上發表言論，公然約戰 AlphaGo，柯潔在微博寫道：「來吧！管你是阿法狗還是阿法貓！我柯潔在棋上什麼大風大浪沒見過？讓風暴再來的猛烈點吧！」","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153262664811566"},{"name":"下圍棋是一回事，但是星海這項電競運動，在全世界有為數眾多的玩家，各位是否有覺得自己被威脅到了呢？","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036424793046926"},{"name":"就在大家以為我們將看到比分改寫為 4:0 的時候，李世乭在中腹下出一子。對此中國圍棋高手古力表示：「這是李世乭的神之一手。」這一步出現之後，前方直播室的韓國記者甚至直接開懷大笑。","ranking":4,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153261965436566"}]},
					{"text":"影音","frequency":24,"sentiment":0,"articles":[{"name":"再遲鈍的人應該都感受到了：時代的巨輪再次快速轉動，從前以文字、圖像為主的媒體傳播方式，已經隨著「移動設備的普及（搭配高清攝影功能）」、「4G 的用戶越來越多」，逐漸轉變為「影音為主」的傳播方式，各大平台，也都將旗下資源賭在這一塊。對於廣告主、或公司的品牌行銷負責人而言，這個領域就在極短的時間內，變成了一個「看起來很複雜、懂的人很少、但是大家都知道很重要」的東西。究竟想搶攻影音市場，該從何下手呢？","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263017096566"}]},
					{"text":"機種","frequency":24,"sentiment":0,"articles":[{"name":"雖然核心方面有著基礎的差異存在，理論規格 800 \u003e 600 \u003e 400 \u003e 200 ，不過考慮到實際層面包括軟體支援性、其它包括螢幕、相機、內部儲存等硬體配置，還有當地電信商的 4G 服務等，最終入門 800 機種與高階 600 機種、入門 600 機種與高階 400 機種在使用體驗卻是難分難解...","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980451868715653"}]},
					{"text":"新創","frequency":23,"sentiment":0,"articles":[{"name":"FOX Sports 與 NextVR 在歷經一年的測試，於 2016 年 2 月簽署為期 5 年的合作夥伴契約。據報導，FOX Sports 希望藉由與 NextVR 的合作關係，早期進入 VR 市場，以在電視頻道業者中取得領先地位。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954434077966049"},{"name":"#首支人民幣基金  #總規模超過1億美元","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954554491287341"},{"name":"新創事業就是人少錢少雜事多，用錢找外包來幫自己省點力是個不錯的方法。但這成本和效益要如何安排，才是真正把錢花在刀口上呢？","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036642269691845"},{"name":"[台灣新創在福岡] 創業觀察第三發！","ranking":4,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954630131279777"},{"name":"心元資本今日宣布推出兩支新的投資基金，鎖定全世界及中國的初早期新創公司，分別推出7千萬美元規模的美元基金以及5千萬美元規模的人民幣基金，總規模為1.2億美元，三個月來已完成超過7千萬美元融資。心元資本同時也宣布成立上海全球總部。","ranking":5,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154042216214284"},{"name":"【 第13屆實習生招募】倒數一週！","ranking":6,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1291331017560154"},{"name":"英特爾投資部門近來投資了許多新創事業，例如物聯網、穿戴裝置、無人機、大資料等等，如果出售部份資產，恐對這些新創業者帶來不小的影響。","ranking":7,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/812735732186173"},{"name":"要讓專案獲得足夠曝光，接觸媒體是最不可低估，但卻最容易無法「做好做滿」的策略。縱使對外聯絡將遠比你想像中來得耗時，而且大部分寄出的信都會石沉大海，但若能規劃並執行完善，便可能發揮意想不到的成效。此外，媒體的關注不僅有助於轉換為集資成績，報導文章還有助於 SEO，因而為官網增加自然流量，為集資結束後的銷售市場舖好路。","ranking":8,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/954471891295601"},{"name":"上完前菜後20-30分鐘再拿到主餐的客人，比起10-20分鐘拿到的客人，增加60%追加甜點的機率。一旦能找出關聯性，就能在 APP 設定自動提示服務生，在正確的時間上菜，讓餐廳營收輕鬆最佳化。","ranking":9,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036523023037103"}]},
					{"text":"標準","frequency":23,"sentiment":0,"articles":[{"name":"【240萬獎金 給夠標準的你】","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1149928201714021"}]},
					{"text":"巨頭","frequency":23,"sentiment":0,"articles":[{"name":"你做車，我也做車！你做智慧助手，我也做智慧助手！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036567259699346"}]},
					{"text":"火星","frequency":23,"sentiment":0,"articles":[{"name":"自月球之後，人類也終於要開始實現「登陸火星」？NASA 宣布他們已完成航向火星太空船的引擎測試，將在 2018 年進行首次飛行測試。若能成功，屆時將會搭載六位太空人完成人類夢想！","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263492336566"}]}
					];
					return object;
					break;
					case "2016-03-18":
					var object = [
					{"text":"育幼院","frequency":65,"sentiment":0,"articles":[{"name":"#育幼院孩子要的不是同情而是_________","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1280238185325501"}]},
					{"text":"液化","frequency":58,"sentiment":0,"articles":[{"name":"【我家在土壤液化高度潛勢區！怎麼辦？】","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1150670041639837"},{"name":"相信大家發現自己家就位在土壤液化的紅色高潛勢區的那一刻，第一個浮現的問題就是：那要怎麼辦？","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998183603568223"}]},
					{"text":"滑鼠","frequency":50,"sentiment":0,"articles":[{"name":"同時具備藍牙與 2.4Ghz 連結的無線滑鼠 ⋯","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981115941982579"}]},
					{"text":"土壤","frequency":48,"sentiment":0,"articles":[{"name":"【我家在土壤液化高度潛勢區！怎麼辦？】","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1150670041639837"},{"name":"相信大家發現自己家就位在土壤液化的紅色高潛勢區的那一刻，第一個浮現的問題就是：那要怎麼辦？","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998183603568223"}]},
					{"text":"藍芽","frequency":45,"sentiment":0,"articles":[{"name":"BLE 根據需要提供的短資料，然後關閉連接線路。這是藍芽 LE 實現低耗能的原因之一。 相比于常規藍芽的傳統配對方法，BLE裝置僅在需要收發資訊時進行連結。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153266130706566"}]},
					{"text":"文案","frequency":44,"sentiment":0,"articles":[{"name":"【FB小編養成班】網友瘋狂按讚與分享的社群發文技法","ranking":1,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1134090713276820"},{"name":"不管是經由紙本還是行動裝置，每個人每天都有機會接觸大量文字，","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/980378205389686"}]},
					{"text":"獨角獸","frequency":42,"sentiment":0,"articles":[{"name":"「如果一家新創透過股權群募取得早期的資金，他幾乎可以跟真正的風險資本家說再見了。」","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154045425974284"},{"name":"大學時手機都要裝查理鈴聲啊！（完全暴露年紀來著）","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037162366306502"},{"name":"成為投資者認可估值超過10億美元的新創「獨角獸」，未來就能一帆風順了嗎？","ranking":3,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1292075454152377"},{"name":"貨到付款而且只需要你的電子郵件和地址！這是一家來自瑞典斯德哥爾摩，估值 600 億美金的金融支付獨角獸 Klarna 最新宣傳的付款方式。我們報導過極簡化的第三方支付工具，瑞典Klarna跨出歐洲，收入和利潤都大幅增長，他們的理念是，讓你跳過輸入信用卡和認證的繁瑣過程，買東西後，你可以選擇馬上付錢，或是 14 天之後貨到付款，發票會隨貨附上，降低沒收到貨的風險。","ranking":4,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955101517899305"}]},
					{"text":"小米","frequency":41,"sentiment":0,"articles":[{"name":"小米創辦人雷軍也曾經提及過這件事：「我也很奇怪，怎麼一天到晚都有人說我做電動車？幾個月前才搞清楚，的確是有一家公司在背後推動，而這家公司居然叫「雷軍電動」。」","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153621225690674"}]},
					{"text":"查理","frequency":40,"sentiment":0,"articles":[{"name":"大學時手機都要裝查理鈴聲啊！（完全暴露年紀來著）","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037162366306502"}]},
					{"text":"爆米花","frequency":37,"sentiment":0,"articles":[{"name":"看著這些小花嗶嗶啵啵的跳出來其實還滿療癒的…","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981115271982646"}]},
					{"text":"粉絲","frequency":33,"sentiment":0,"articles":[{"name":"【FB小編養成班】網友瘋狂按讚與分享的社群發文技法","ranking":1,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1134090713276820"},{"name":"早安☀粉絲們對在職訓練有興趣嗎？那你千萬不能錯過以下課程喔👇","ranking":2,"src":"賈中哥JobGogo 勞動力發展署中彰投分署","url":"https://www.facebook.com/241247139221072/posts/1163166030362507"},{"name":"【獲1.4億新台幣A輪投資，進軍東南亞》旅遊電商KKday，將「服務型電商」推向全球的4大要訣】","ranking":3,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949125528468658"},{"name":"KKday在2014年才成立，2015年1月網站正式上線：從剛開站時有1千個行程，現在有5千個行程，目標年底網站上要有1萬個體驗行程。開站第一個月營業額約10萬，第三個月破百萬，月成長率約30-40％，2016年1月單月營收超過3千萬。粉絲團在半年內從7萬人成長到23萬人，台灣網站Alexa排名進到468名。","ranking":4,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955284277881029"},{"name":"《賈中哥求職陷阱停看聽》","ranking":5,"src":"賈中哥JobGogo 勞動力發展署中彰投分署","url":"https://www.facebook.com/241247139221072/posts/1163303473682096"},{"name":"【馬來西亞線上消費者樣貌 ：年輕女性是主力】","ranking":6,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948882445159633"},{"name":"【社群媒體心理學，五個小撇步，讓你的文章出類拔萃】","ranking":7,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949002978480913"},{"name":"【從認同到消費，電商粉絲團原來可以這樣做！】","ranking":8,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/946500162064528"},{"name":"【#SmartM電子商務學院》把握既有優勢，麗嬰房由實體通路轉型電子商務的３大策略】","ranking":9,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948851988496012"},{"name":"【「手機開店」，讓開運風水商品賣得嚇嚇叫】","ranking":10,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949003248480886"}]},
					{"text":"圍棋","frequency":33,"sentiment":0,"articles":[{"name":"你覺得AlphaGo vs. 李世乭最後一戰誰會勝出？","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154044858894284"},{"name":"五局對弈終結，Alphago在這場電腦對決人腦的戰爭取得4:1的勝利。證明自己的強大之後，Alphago下一步又打算做些什麼呢？（希望不要是稱霸世界之類的啊）","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037382792951126"},{"name":"今天 Google 的人工智慧 AlphaGo 在系列最終戰中，贏了韓國圍棋九段棋士李世乭，並以總戰績 4：1 贏得系列戰，跌破眾人眼鏡。AI 究竟會怎麼發展呢？來看看創造 Android 系統，總是領先世界一步的 Andy Rubin 在 WIRED 的專訪中，表達了他對機器人的熱情，並且大談他眼中，萬物皆 AI 的未來。","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265665096566"},{"name":"Google 這次行銷真的頗成功，不僅是圍棋愛好者，連一般人都投入高度關注。","ranking":4,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/997994773587106"},{"name":"【#最新】人機對決最終比數 4 : 1","ranking":5,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998106096909307"},{"name":"【舊文】","ranking":6,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265154511566"},{"name":"微軟：我們決定訓練人工智慧玩Minecraft XD","ranking":7,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154045141854284"},{"name":"人機世紀對決終於畫下尾聲！Google人工智慧AlphaGo與南韓棋王李世乭的圍棋對弈今日進行到第五局，由AlphaGo再添一勝，5局賽局最終比數為4：1。","ranking":8,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154045348254284"},{"name":"雖然 AlphaGo 與李世乭的對戰還沒結束，不過它的下一步也相當令人期待。","ranking":9,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/997931293593454"},{"name":"Google 除了有推不倒的 Atlas、會下圍棋的 AlphaGo ，現在還發表了會自己練習手眼協調的機械手臂！","ranking":10,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263906516566"}]},
					{"text":"電機系","frequency":32,"sentiment":0,"articles":[{"name":"【講座公告】Sharing is Magic! 電機系教我的開源精神","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1007173669328189"}]},
					{"text":"桌子","frequency":32,"sentiment":0,"articles":[{"name":"前提是你先得把桌上的東西清乾淨.....","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153620750170674"}]},
					{"text":"適用","frequency":31,"sentiment":0,"articles":[{"name":"轉換會計準則 企業可推延適用","ranking":1,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1133957596623465"},{"name":"難怪在跑步的時候排氣 都有加速的感覺…(誤)","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981139621980211"}]},
					{"text":"口罩","frequency":29,"sentiment":0,"articles":[{"name":"【印表機也是要戴口罩的！】","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1280145888668064"}]},
					{"text":"獵豹","frequency":29,"sentiment":0,"articles":[{"name":"[活動訊息]Share 移動互聯網大革命：回歸初心，以用戶為出發點","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955068221235968"}]},
					{"text":"飛機","frequency":27,"sentiment":0,"articles":[{"name":"大自然真是奇妙，你永遠不知道扔出去的紙飛機會飛向哪裡！","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153621219995674"}]},
					{"text":"肯亞","frequency":27,"sentiment":0,"articles":[{"name":"【國際金融創新大船啟航，台灣見賢思齊】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1036523039703768"}]},
					{"text":"進口","frequency":27,"sentiment":0,"articles":[{"name":"OUNCE magazine 玩食誌 是一本結合美食、設計、旅遊的美食指南：以城市為單位介紹各國美食及文化，並分享當地人私藏的口袋名單。從內容編輯到選紙、印刷均講求質感，跳脫既定的傳統雜誌印象。內容以 100% 純手繪設計為主，少量文字、大量圖片讓讀者記錄自己的玩食經驗。紙材堅持使用厚質牛皮紙，觸感有如歐洲麵包坊常用的紙袋，就連包裝繩也是選擇捆綁咖啡的原色麻繩或進口的烘焙用棉繩。就算人在台灣，也讓你如同周遊世界。","ranking":1,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1162438603789525"},{"name":"孩童教育無價！BBC 今年 10 月要小六生用「Micro：bit」不用錢學 Coding！","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037229976299741"},{"name":"#確定開課","ranking":3,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1133913719961186"}]},
					{"text":"電動車","frequency":26,"sentiment":0,"articles":[{"name":"小米創辦人雷軍也曾經提及過這件事：「我也很奇怪，怎麼一天到晚都有人說我做電動車？幾個月前才搞清楚，的確是有一家公司在背後推動，而這家公司居然叫「雷軍電動」。」","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153621225690674"}]},
					{"text":"人工智慧","frequency":25,"sentiment":0,"articles":[{"name":"你覺得AlphaGo vs. 李世乭最後一戰誰會勝出？","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154044858894284"},{"name":"今天 Google 的人工智慧 AlphaGo 在系列最終戰中，贏了韓國圍棋九段棋士李世乭，並以總戰績 4：1 贏得系列戰，跌破眾人眼鏡。AI 究竟會怎麼發展呢？來看看創造 Android 系統，總是領先世界一步的 Andy Rubin 在 WIRED 的專訪中，表達了他對機器人的熱情，並且大談他眼中，萬物皆 AI 的未來。","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265665096566"},{"name":"[人機對決，alphago又贏了！]","ranking":3,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955280787881378"},{"name":"Google 這次行銷真的頗成功，不僅是圍棋愛好者，連一般人都投入高度關注。","ranking":4,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/997994773587106"},{"name":"【#最新】人機對決最終比數 4 : 1","ranking":5,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998106096909307"},{"name":"【舊文】","ranking":6,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265154511566"},{"name":"微軟：我們決定訓練人工智慧玩Minecraft XD","ranking":7,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154045141854284"},{"name":"人機世紀對決終於畫下尾聲！Google人工智慧AlphaGo與南韓棋王李世乭的圍棋對弈今日進行到第五局，由AlphaGo再添一勝，5局賽局最終比數為4：1。","ranking":8,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154045348254284"},{"name":"雖然第四戰李世乭逆轉勝，賽後發言好像也找到了 AlphaGo 的弱點，不過在最後一戰仍舊是不敵人工智慧 AlphaGo，這場世紀級的人機圍棋系列戰也以 4：1 畫下句點。","ranking":9,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265594971566"},{"name":"目前微軟團隊先用人工智慧來訓練角色如何爬山，說不定以後遊戲角色不需要人為操作，就能以最聰明的方式自己打魔王了。","ranking":10,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/813454035447676"}]},
					{"text":"加班","frequency":25,"sentiment":0,"articles":[{"name":"加班是員工覺得大家目標一致很有幹勁的加班，還是相關負責人覺得應該加班？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037229339633138"}]},
					{"text":"家電","frequency":25,"sentiment":0,"articles":[{"name":"東芝已和中國家電大廠美的集團進入最終協商階段，擬將冰箱、洗衣機等白色家電事業出售給美的集團，出售額預估為數百億日圓。","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154044493099284"}]},
					{"text":"颶風","frequency":24,"sentiment":0,"articles":[{"name":"當颶風、地震來襲時，Twitter、Facebook不只能用來報平安，也可透過大資料分析，作為政府評估災害範圍、損害程度的輔助工具。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/813466025446477"}]},
					{"text":"鍵盤","frequency":22,"sentiment":0,"articles":[{"name":"羅技強調這把鍵盤的機械軸是自行開發的，感覺上貌似不能相容 Alps 與 Cherry 的鍵帽啊...","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981212605306246"}]},
					{"text":"還本","frequency":22,"sentiment":0,"articles":[{"name":"【台東百萬低利創業貸款 前2年可不還本】","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1064895663556422"}]},
					{"text":"原型","frequency":22,"sentiment":0,"articles":[{"name":"各位 UX 設計師，從今天起又多了一個好選擇，以圖像處理套裝軟體聞名的 Adobe，推出了新的 Adobe Experience Design—— 又稱「Adobe XD」。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153265446396566"}]},
					{"text":"車窗","frequency":22,"sentiment":0,"articles":[{"name":"不過列車速度這麼快，風景速度應該會調慢吧...？","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998225140230736"},{"name":"最近超級高鐵 Hyperloop 的 CEO 發表一段影片，說明將在列車車窗加上 AR ，利用乘客愛盯著車窗看的特性，將廣告資訊融合窗外風景，達到最有效的行銷效果。","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153263921076566"}]},
					{"text":"心法","frequency":22,"sentiment":0,"articles":[{"name":"「雖然嘴上說過程最重要，但是得個獎肯定更佳愉悅吧。」","ranking":1,"src":"Makerdiwo 創客窩","url":"https://www.facebook.com/1389789557983179/posts/1524475891181211"}]}
					];
					return object;
					break;
					case "2016-03-19":
					var object = [
					{"text":"授課","frequency":101,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"}]},
					{"text":"專長","frequency":88,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"}]},
					{"text":"特殊","frequency":63,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"}]},
					{"text":"文案","frequency":62,"sentiment":0,"articles":[{"name":"#超過8成文案都這樣操縱你的情緒","ranking":1,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1134683226550902"}]},
					{"text":"小米","frequency":49,"sentiment":0,"articles":[{"name":"這個宣傳手法看起來頗成功的阿，只是不僅小米覺得很困擾，就連雷軍本人也表示常被誤會開始做電動車了...","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998792780173972"}]},
					{"text":"）\n","frequency":48,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"},{"name":"看主角騎馬打仗，從頭砍人砍到尾的電影會好看嗎？....（歪頭沈思）","ranking":2,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153623629310674"},{"name":"以富質感之設計文創商品著稱，根植台灣的電商平台「Pinkoi」今天宣布將加強開拓海外市場，並入股日本電商 iichi ，將攜手日方進軍國際新市場！（先前已與 Pinkoi 再次確認並更正資訊）","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153267935671566"},{"name":"要養出優秀的歐吉桑想必也不是那麼容易的一件事（掩面）","ranking":4,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981275965299910"}]},
					{"text":"電動車","frequency":44,"sentiment":0,"articles":[{"name":"這個宣傳手法看起來頗成功的阿，只是不僅小米覺得很困擾，就連雷軍本人也表示常被誤會開始做電動車了...","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998792780173972"}]},
					{"text":"蛋白","frequency":39,"sentiment":0,"articles":[{"name":"#媲美滴雞精製成的膠原蛋白飲","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1280621248620528"}]},
					{"text":"新加坡","frequency":32,"sentiment":0,"articles":[{"name":"新加坡星展銀行先前就辦過加速器計畫，今年更是擴大舉辦，不僅邀請各國海外創投、打造新創園區，也與ALPHA Camp 合作，共同打造7個月長的加速器計畫！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037987946223944"},{"name":"【Start Up Taiwan創業聚會－3/30 新加坡創投家Alan kuan Hsu來台分享進軍東南亞市場秘訣】","ranking":2,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293122550714334"}]},
					{"text":"動態","frequency":32,"sentiment":0,"articles":[{"name":"越來越多的店家決定利用現今當紅的手機軟體Instagram作為品牌宣傳之平台，在過去，Instagram的動態依照時間軸排列，間接保證不會錯過任何一個動態，然而當用戶在Instagram追蹤的人愈來愈多的時候，他們也可能因為過多動態，而會錯過許多對用戶重要的動態消息。透過新的演算法，Instagram不僅表示能夠讓用戶最先看到自己在意的消息，所有的動態仍然會在動態牆上，只是以不同的順序排列。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955815184494605"},{"name":"【越來越像Facebook？】如果你是Instagram的愛好者，那你一定很熟悉螢幕上依時間軸排列的照片動態，但這一切將被新的機制取代。","ranking":2,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154047930319284"}]},
					{"text":"中堅","frequency":31,"sentiment":0,"articles":[{"name":"【娘子快來看！我把咖啡渣(ㄓㄚ)變衣服了】","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1151577088215799"}]},
					{"text":"東南亞","frequency":31,"sentiment":0,"articles":[{"name":"【想來越南經營必須非常有耐心！】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948864575161420"},{"name":"【Start Up Taiwan創業聚會－3/30 新加坡創投家Alan kuan Hsu來台分享進軍東南亞市場秘訣】","ranking":2,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293122550714334"}]},
					{"text":"激盪","frequency":31,"sentiment":0,"articles":[{"name":"[ #行政院青創基地]活動花絮 - 產品開發與實戰行銷系列活動#6 創業夥伴發表與聚會","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1065392503506738"}]},
					{"text":"道教","frequency":30,"sentiment":0,"articles":[{"name":"兄弟倆一開始只在FB經營以台灣傳統道教文化為訴求的粉絲團，以「免費無償提供資訊」的理念來服務廣大用戶，現已累積龐大30萬名粉絲。很多粉絲也常私訊詢問哪裡可以買到相關產品，於是，「財神小舖」品牌正式誕生。他們的經營理念是：人生要有財神的「態度」，他們力圖改變的，是人們的觀念，給大家有一種求財的正確觀念，幫助有需求的人。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955796764496447"}]},
					{"text":"聖雄","frequency":30,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"},{"name":"【光是102年4月，常駐人口僅462人的彰化台西村，就有4人罹癌】","ranking":2,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1281057391910247"}]},
					{"text":"溝通","frequency":29,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"},{"name":"\u003c\u003c職場順遂小秘訣\u003e\u003e","ranking":2,"src":"賈中哥JobGogo 勞動力發展署中彰投分署","url":"https://www.facebook.com/241247139221072/posts/1164000356945741"}]},
					{"text":"日月光","frequency":29,"sentiment":0,"articles":[{"name":"雖然日月光曾表示將不受公平會影響，不過公平會延長審查期限該案似乎也瀕臨破局。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998752333511350"}]},
					{"text":"房子","frequency":29,"sentiment":0,"articles":[{"name":"當你在看房子的時候，你考慮的還是房子的「功能」嗎？德國建築師舍人（Ole Scheeren）告訴你，你該想像的是你能在房子裡產生的「故事」...。","ranking":1,"src":"TEDxTaipei","url":"https://www.facebook.com/109056135781639/posts/1081404201880156"}]},
					{"text":"加速器","frequency":27,"sentiment":0,"articles":[{"name":"新加坡星展銀行先前就辦過加速器計畫，今年更是擴大舉辦，不僅邀請各國海外創投、打造新創園區，也與ALPHA Camp 合作，共同打造7個月長的加速器計畫！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037987946223944"},{"name":"【NextDrive 聯齊科技】徵 Cloud Software Engineer","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153267180871566"}]},
					{"text":"在乎","frequency":27,"sentiment":0,"articles":[{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037499166272822"}]},
					{"text":"履歷","frequency":26,"sentiment":0,"articles":[{"name":"#媲美滴雞精製成的膠原蛋白飲","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1280621248620528"}]},
					{"text":"助教","frequency":25,"sentiment":0,"articles":[{"name":"為了幫助年輕人成為新時代網路公司需要的人才，也為了幫助 AppWorks Startups 找到更多優秀的人才加入，AppWorks 決定創辦 AppWorks School，專注於新時代 i 人才教育，提供想加入網路與電商的熱血青年，一個與業界高度整合的訓練機構。","ranking":1,"src":"Mr.Jamie","url":"https://www.facebook.com/150738220490/posts/10153864956245491"},{"name":"AppWorks 今天正式宣布成立 AppWorks School，專注於新時代 i 人才教育，提供想加入網路與電商的熱血青年，一個與業界高度整合的訓練機構。而AppWorks School 的初期營運費用，將由 AppWorks 全額負擔。在未來則希望漸漸轉由人才介紹費來支持學校的營運。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955821234494000"}]},
					{"text":"馬來西亞","frequency":25,"sentiment":0,"articles":[{"name":"近日Shoppu公布調查報告，針對2016年馬來西亞消費者傾向進行分析，其中受訪者80%為20-30歲年輕人，72%為女性消費者，調查結果指出目前馬來西亞現在還是值得開發的電商市場處女地，因為還有25%的人口，相當於750萬人從未使用線上購物，以及馬來西亞人不愛線上分期付款的特性。以下是他們的幾點觀察：","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955117177897739"}]},
					{"text":"改裝","frequency":25,"sentiment":0,"articles":[{"name":"【新刊快訊】","ranking":1,"src":"《Make》國際中文版","url":"https://www.facebook.com/195312493826324/posts/1162160770474820"}]},
					{"text":"頭盔","frequency":25,"sentiment":0,"articles":[{"name":"外界似乎總認為成人產業是推動先驅科技的主要動力之一，不過事實上，Naughty America 資訊長表示，業界對 VR 普遍還是持保留態度，頭盔硬體商也不太願意跟他們扯上關係。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153267643876566"}]},
					{"text":"超級","frequency":25,"sentiment":0,"articles":[{"name":"【SmartM超級好講師最終八強，課程精華首度曝光】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949732288407982"},{"name":"蘇夏蔚表示，之所以選擇和Yahoo奇摩超級商城合作，主要是為了考慮客源的拓展。「Yahoo超級商城的用戶年齡層較Go Happy的年齡層平均低五歲。」這五歲的差距也展現在對行動電商的需求上。蘇夏蔚表示，雖然在Yahoo奇摩超級商城才剛開幕六個月，來自行動端的流量已達到40％，對比Go Happy的25％來的高出許多。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/955285051214285"},{"name":"Facebook影音已經是行銷人必備的超級基本功，但是只要額外注意這些簡單的細節，傳播效果就還能再上一層樓！","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037965232892882"}]},
					{"text":"燃料電池","frequency":24,"sentiment":0,"articles":[{"name":"先前看過節目介紹豐田燃料電池車 Mirai 感覺超酷的，不過燃料電池的高壓氫氣生產成本還有儲存還是目前比較大的問題，豐田這次則結合風力發電希望將燃料電池技術導入堆高機哩","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/981293688631471"}]},
					{"text":"南風","frequency":24,"sentiment":0,"articles":[{"name":"【光是102年4月，常駐人口僅462人的彰化台西村，就有4人罹癌】","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1281057391910247"}]},
					{"text":"彗星","frequency":24,"sentiment":0,"articles":[{"name":"【3/16 #GoogleDoodle 】","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/998671533519430"}]},
					{"text":"設計師","frequency":24,"sentiment":0,"articles":[{"name":"今後 UX 入門會越來越容易，設計師需要加強縱向的專業技能和發展橫向的相關知識，來提升自己。不然，在這人人都自稱是UX設計師的時代，你很快就被洗到沙灘上了！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037938939562178"},{"name":"這個可充電手機殼，應該比蘋果的那一個官方手機殼好看些吧！","ranking":2,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153623073855674"},{"name":"喜歡以緩慢的速度觀看世界，設計師 畫畫還不夠，所以旅行-張真輔 ","ranking":3,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1163315577035161"},{"name":"現在的工作你心甘情願做一輩子嗎？","ranking":4,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038036412885764"},{"name":"「職人精神」，聽來剛毅且硬派，實則細膩而溫暖。把手作工藝當作畢生的習作，來自各創作領域的日本職人齊聚，將他們眼中的美好，藉由雙手溫度傳遞到你的生命裡。","ranking":5,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1163349147031804"},{"name":"日本設計師鈴木萌子（名字好可愛）的 Instagram 大公開！","ranking":6,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1162523817114337"}]}
					];
					return object;
					break;
					case "2016-03-20":
					var object = [
					{"text":"實習","frequency":296,"sentiment":0,"articles":[{"name":"夢想學校  實習生招募  倒數4天 ","ranking":1,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293865860640003"},{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038603449495727"}]},
					{"text":"夢想","frequency":109,"sentiment":0,"articles":[{"name":"遊戲玩到滿滿感動，又超勵志是怎麼回事?","ranking":1,"src":"群募貝果 - WeBackers","url":"https://www.facebook.com/563108293798349/posts/864123190363523"},{"name":"夢想學校  實習生招募  倒數4天 ","ranking":2,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293865860640003"},{"name":"【因為你 值得他們的努力】","ranking":3,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282086391807347"}]},
					{"text":"酒店","frequency":102,"sentiment":0,"articles":[{"name":"作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282167141799272"}]},
					{"text":"酒店業","frequency":98,"sentiment":0,"articles":[{"name":"作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282167141799272"}]},
					{"text":"這裡","frequency":72,"sentiment":0,"articles":[{"name":"成功融資 4000 萬美元，有一支強大的團隊、清晰的使命目標以及被市場驗證過的商業模式。但發展三年後，公司還是以失敗告終，媒體紛紛報導你尷尬的失敗。上面說的這些正是家政 O2O 鼻祖 Homejoy 的故事，這家公司已經於去年 7 月 31 日正式關閉。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956574011085389"},{"name":"夢想學校  實習生招募  倒數4天 ","ranking":2,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293865860640003"},{"name":"#草根系藝術節又回來了 #讓整個市場都是我的藝術館","ranking":3,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282048601811126"},{"name":"這就是所謂的日式幽默嗎？","ranking":4,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/982423338518506"}]},
					{"text":"學校","frequency":67,"sentiment":0,"articles":[{"name":"夢想學校  實習生招募  倒數4天 ","ranking":1,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293865860640003"},{"name":"「視訊會議軟體 Zoom，長期耕耘美國教育市場。最新報告指出，全美排名前 200 所大學，有超過 86% 的學校，透過 Zoom 進行遠距教學及相關應用。」","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153269841301566"},{"name":"台灣創業學校 ALPHA Camp 受新加坡星展銀行邀請，在這次的前導加速器計畫合作，培育創業團隊與新創人才。","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153269966561566"},{"name":"教育部【大學校院創新創業扎根計畫】之「創業交流工作坊暨計畫說明會」開始報名囉!!","ranking":4,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1136206139736374"},{"name":"繼昨天 AppWorks正式宣布成立 AppWorks School後，ALPHA Camp 也宣布他們的新合作計畫：受新加坡星展銀行（DBS）邀請，ALPHA Camp 將成為 HotSpot Pre Accelerator 2016 的獨家合作夥伴，聯手打造為期七個月、預期招募百位創業家的前導加速器計畫，分兩階段進行，入選最後階段的隊伍將獲得近台幣 60 萬元的創業資金，價值數百萬的新創服務，且免收任何股份。","ranking":5,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956709911071799"},{"name":"【學測申請時程表】備審資料準備得如何呢？也要開始多練習面試囉！","ranking":6,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008319155880307"}]},
					{"text":"面試","frequency":61,"sentiment":0,"articles":[{"name":"Facebook面試提示出了名的刁鑽，你如果答得出來根本就面試神人，明天就準備到臉書上班吧！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038819492807456"},{"name":"【學測申請時程表】備審資料準備得如何呢？也要開始多練習面試囉！","ranking":2,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008319155880307"}]},
					{"text":"業師","frequency":61,"sentiment":0,"articles":[{"name":"[#行政院青創基地] 諮詢時段 - 下週青創基地駐點業師預告","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066028473443141"},{"name":"[#行政院青創基地] 行政院長張善政來訪青創基地","ranking":2,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066202880092367"}]},
					{"text":"諮詢","frequency":55,"sentiment":0,"articles":[{"name":"作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282167141799272"},{"name":"拆解「跨境電商」，簡單說就是網路貿易商，也就是跨國進行網路銷售，是賺取各地差異化商品、差異化價格的生意，受到各國貿易規範影響。其中，最近一年因為中國放寬跨境電商規範的利多政策，再加上中國消費者對海外商品欲望增加，根據艾瑞諮詢數據，2016年中國跨境電商市場規模可達6.5兆人民幣，明年將再攀升到8兆人民幣，讓最近一年中國購物網站動作頻頻，京東、淘寶、天貓等一線大站紛紛來台招商。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956841401058650"},{"name":"哈囉👋員林聯合徵才活動來囉😄","ranking":3,"src":"賈中哥JobGogo 勞動力發展署中彰投分署","url":"https://www.facebook.com/241247139221072/posts/1164620160217094"},{"name":"[#行政院青創基地] 諮詢時段 - 下週青創基地駐點業師預告","ranking":4,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066028473443141"},{"name":"[#行政院青創基地] 行政院長張善政來訪青創基地","ranking":5,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066202880092367"}]},
					{"text":"藍芽","frequency":53,"sentiment":0,"articles":[{"name":"相比于標準藍芽連接， BLE 可顯著降低裝置的能耗，同時提供常規藍芽的大部分連線性以及約一半的連接範圍（大約15米/50 英尺）。安裝電池的裝置如果使用藍芽LE，可在不充電或更換電池的情況下使用數年。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153270219491566"}]},
					{"text":"文章","frequency":51,"sentiment":0,"articles":[{"name":"【文章分享】沒有走錯路的人生","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008327339212822"},{"name":"#每日精選英文新聞 這篇文章提出了一個觀點，讓我非常受到啟發。它探討發展人工智慧與電腦深度學習，除了突破人類科技的最前緣，同時間，由於 AI 的基礎是模仿人腦，培養他們的同時，也能協我們了解自己，這個長期以來，我們最不了解的東西。","ranking":2,"src":"Mr.Jamie","url":"https://www.facebook.com/150738220490/posts/10153867513575491"},{"name":"夢想學校  實習生招募  倒數4天 ","ranking":3,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1293865860640003"},{"name":"如果你一直遇到有人問你這種問題，就把這篇丟給對方看吧！","ranking":4,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/982461121848061"},{"name":"【學測申請時程表】備審資料準備得如何呢？也要開始多練習面試囉！","ranking":5,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008319155880307"}]},
					{"text":"通話","frequency":50,"sentiment":0,"articles":[{"name":"嗯....以後老闆在LINE上面訓人的時候可以訓的更起勁了嗎？","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153626577745674"},{"name":"唉唷～以後老闆說要線上開會，再也不能用「沒看到」當藉口惹～（誤XD）","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038688326153906"},{"name":"這項功能國外宣佈不久，台灣就在今天上線了，快去更新吧!","ranking":3,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/814708471988899"}]},
					{"text":"林森","frequency":49,"sentiment":0,"articles":[{"name":"作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282167141799272"}]},
					{"text":"工匠","frequency":43,"sentiment":0,"articles":[{"name":"為何看到Made in China的產品大家會皺眉頭？因為講求工藝的「工匠精神」從來都不在中國製造業的字典中。","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038497089506363"}]},
					{"text":"聚餐","frequency":42,"sentiment":0,"articles":[{"name":"外出吃飯，常煩惱聚餐怎麼約嗎？OpenRice 調查外出聚餐的消費者行為，找出大家外食的煩惱，並針對聚餐推出飯局邀約功能，讓你喬時間、訂位一次搞定。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153270211511566"}]},
					{"text":"跑鞋","frequency":42,"sentiment":0,"articles":[{"name":"小米百貨公司又有新產品了，這次是運動跑鞋！","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153626190935674"}]},
					{"text":"獨角獸","frequency":42,"sentiment":0,"articles":[{"name":"投資者將估值超過10億美元的新創公司稱作「獨角獸」。在獲得獨角獸光環之後，還是有不少公司遭到同業瓜分市場，敵不過對手的低價策略，讓這些公司最後也只是曇花一現。而對科技公司而言，能夠維持長期優勢的關鍵就在於「網路效應」所帶來的壟斷性。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956725191070271"}]},
					{"text":"液化","frequency":41,"sentiment":0,"articles":[{"name":"【土壤液化剋星】~底加啦！","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1152217781485063"}]},
					{"text":"公關","frequency":40,"sentiment":0,"articles":[{"name":"作為寂寞都市人的溫柔鄉，酒店化為寄託心靈的歡場。然而，人們對於酒店業有多少幻想，就有多少誤解。長久以來，酒店業背負著無數汙名，我們常對其充滿排斥與懷疑，卻止不住心中的好奇。但，我們真的了解酒店業嗎？","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1282167141799272"}]},
					{"text":"創辦人","frequency":39,"sentiment":0,"articles":[{"name":"影音分享網站 YouTube 擁有超過 10 億用戶，是全球最大網站之一，創辦人之一陳士駿（Steve Chen）透露，最初版本和網站名稱是設計給單身人士上傳影片，敘述自己想要尋覓的理想伴侶。Google 公司 2006 年以 16 億 5,000 萬美元收購 YouTube，這個影音網站如今已擁有超過 10 億用戶，意味約有 ⅓ 全球網路用戶瀏覽 YouTube。","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956588371083953"},{"name":"「香港用戶，在輸入地址寫城市與街道名稱的時候，第一個英文字母大寫的貸款者，比全都小寫或全都大寫的貸款者，還款率還高。」","ranking":2,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154052164589284"},{"name":"前陣子才看到Alphago在棋盤上大顯身手，不知道如果以後Alphago被運用在農業上，會種出什麼樣的田？","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038636429492429"},{"name":"【許景泰（SmartM世紀智庫創辦人）：舉辦「超級好講師」，打造人才培訓2.0平台】","ranking":4,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950211595026718"},{"name":"【 IOH 友好活動分享】社企流四週年論壇，擁抱未來 Embrace Our Future！","ranking":5,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008299919215564"},{"name":"這是一個誤打誤撞的概念嗎？","ranking":6,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999342340119016"},{"name":"「我們希望為台灣創造一個全新的物聯網國際品牌i.X.」創辦人之一黃重道語氣肯定地說。","ranking":7,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154017995474284"},{"name":"Pinkoi共同創辦人兼執行長顏君庭表示，過去半年來，海外市場成長快速，除了在新進設計師中，來自港、日、泰三地的設計師占60％以上，港、日、泰三地營業額更已占海外整體營業額的70％。今年除了會在第二季增加香港版網站之外，也會因應泰國的消費者習慣推出金流付款方式。","ranking":8,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956587564417367"}]},
					{"text":"預約","frequency":39,"sentiment":0,"articles":[{"name":"[#行政院青創基地] 諮詢時段 - 下週青創基地駐點業師預告","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066028473443141"}]},
					{"text":"矽品","frequency":38,"sentiment":0,"articles":[{"name":"雖然日月光第二次收購矽品等同失敗，不過看來日月光未來應該也不會放棄，這場併購案不知要何時才能落幕...","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999504796769437"}]},
					{"text":"填寫","frequency":38,"sentiment":0,"articles":[{"name":"[#行政院青創基地] 諮詢時段 - 下週青創基地駐點業師預告","ranking":1,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066028473443141"}]},
					{"text":"孫文","frequency":36,"sentiment":0,"articles":[{"name":"遊戲玩到滿滿感動，又超勵志是怎麼回事?","ranking":1,"src":"群募貝果 - WeBackers","url":"https://www.facebook.com/563108293798349/posts/864123190363523"}]},
					{"text":"小米","frequency":32,"sentiment":0,"articles":[{"name":"小米百貨公司又有新產品了，這次是運動跑鞋！","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153626190935674"}]},
					{"text":"亞馬遜","frequency":32,"sentiment":0,"articles":[{"name":"【#SmartM電子商務企業菁英班：企業菁英必修的5堂電子商務經營與策略課程】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950346601679884"},{"name":"亞馬遜 AWS 公佈數據庫遷移服務，而且宣稱只要 10 分鐘就能幫你搬好，遷移費用視資料量而定，參考價格基本上是 3 美元 /TB。","ranking":2,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153269451746566"},{"name":"【#SmartM電子商務企業菁英班：企業菁英必修的5堂電子商務經營與策略課程】","ranking":3,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950329528348258"},{"name":"就算沒有體力登玉山也沒關係，Google 街景團隊已經將這個美景帶到你我眼前了。","ranking":4,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999511883435395"},{"name":"亞馬遜正式針對東京、新加坡、美國等地區，推出其資料庫遷移服務，該服務支援的資料庫包括MySQL、Oracle、MariaDB等。","ranking":5,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154050699019284"}]},
					{"text":"蘋果","frequency":32,"sentiment":0,"articles":[{"name":"若真的推出 256GB ，不知道它的定價會是多少？","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999249560128294"},{"name":"我就覺得蘋果賭我們不會用這麼久啊啊 lol","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/982626151831558"},{"name":"現在小型媒體、內容出版商及部落客也都可以使用News App來產製iPhone、iPad的內容了。","ranking":3,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/814640525329027"},{"name":"Google 品牌價值超越三星，成爲全球第二。","ranking":4,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999293653457218"},{"name":"雖然並不直接是 iCloud 的問題，不過透過不那麼複雜的手法就能直接取得私密資訊，還是很可怕啊...","ranking":5,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999508460102404"},{"name":"覺得羨慕、覺得想去、覺得想轉職ＸＤ","ranking":6,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038613122828093"},{"name":"蘋果在iPhone硬體元件供應鏈上的風險管理，記憶體、顯示器等都有兩三家的供應商提供，這個風險管理也推到iCloud後端的服務系統上。","ranking":7,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/814697798656633"},{"name":"【創業。是非】","ranking":8,"src":"創新創業激勵計畫","url":"https://www.facebook.com/498486833520105/posts/1009349085767208"}]},
					{"text":"老店","frequency":32,"sentiment":0,"articles":[{"name":"【餐飲老店看過來！】","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1152307178142790"}]},
					{"text":"新創","frequency":31,"sentiment":0,"articles":[{"name":"新創加速器 AppWorks 要辦學，想為合作的新創團隊直接培養行動、數據分析進階人才，而且不收學費。但既有的新創網路相關教育組織卻對這樣的模式，提出了許多疑問。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153270316891566"},{"name":"成功融資 4000 萬美元，有一支強大的團隊、清晰的使命目標以及被市場驗證過的商業模式。但發展三年後，公司還是以失敗告終，媒體紛紛報導你尷尬的失敗。上面說的這些正是家政 O2O 鼻祖 Homejoy 的故事，這家公司已經於去年 7 月 31 日正式關閉。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956574011085389"},{"name":"為什麼 FinTech 在台灣跑得這麼慢？","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037161442973261"},{"name":"「視訊會議軟體 Zoom，長期耕耘美國教育市場。最新報告指出，全美排名前 200 所大學，有超過 86% 的學校，透過 Zoom 進行遠距教學及相關應用。」","ranking":4,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153269841301566"},{"name":"數位化侵襲，不管你是創業家、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。","ranking":5,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038638089492263"},{"name":"3/29 So Fun新創小聚 媒你不行！","ranking":6,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1065992643446724"},{"name":"台灣創業學校 ALPHA Camp 受新加坡星展銀行邀請，在這次的前導加速器計畫合作，培育創業團隊與新創人才。","ranking":7,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153269966561566"},{"name":"投資者將估值超過10億美元的新創公司稱作「獨角獸」。在獲得獨角獸光環之後，還是有不少公司遭到同業瓜分市場，敵不過對手的低價策略，讓這些公司最後也只是曇花一現。而對科技公司而言，能夠維持長期優勢的關鍵就在於「網路效應」所帶來的壟斷性。","ranking":8,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956725191070271"},{"name":"台灣當代的新創企業，應該站在前人的肩膀上，利用與其他企業共同開發、合作銷售的方式，切入市場。畢竟大多數時候，產品發明人未必是最佳銷售員。","ranking":9,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/956838221058968"},{"name":"教育部【大學校院創新創業扎根計畫】之「創業交流工作坊暨計畫說明會」開始報名囉!!","ranking":10,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1136206139736374"}]},
					{"text":"參展","frequency":31,"sentiment":0,"articles":[{"name":"【Maker Faire Taipei 2016 參展通知公告】","ranking":1,"src":"《Make》國際中文版","url":"https://www.facebook.com/195312493826324/posts/1162865233737707"}]}
					];
					return object;
					break;
					case "2016-03-21":
					var object = [
					{"text":"招考","frequency":74,"sentiment":0,"articles":[{"name":"快來看！大家搶破頭都在搶什麼？欲報從速！以免向隅~","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1153246484715526"}]},
					{"text":"臺東","frequency":51,"sentiment":0,"articles":[{"name":"臺東除了能讓你泡溫泉看日出外，現在又多了新景點－「臺東 TTmaker 創客園區」和「臺東鐵花村聚落」。","ranking":1,"src":"Makerdiwo 創客窩","url":"https://www.facebook.com/1389789557983179/posts/1525473927748074"}]},
					{"text":"生生","frequency":46,"sentiment":0,"articles":[{"name":"心臟移植常常供不應求，好不容易排到又容易產生排斥，為了解決這些問題，麻省總醫院和哈佛醫學院的科學家合作，在實驗室造出了會跳動的心臟。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153272650511566"},{"name":"【育成亮點企業案例】【仿生生醫有限公司】","ranking":2,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1134241983266123"}]},
					{"text":"競賽","frequency":42,"sentiment":0,"articles":[{"name":"今天來聽聽 ///","ranking":1,"src":"ㄇㄞˋ點子/ 靈感品物","url":"https://www.facebook.com/139467854560/posts/10154000946519561"},{"name":"T小編深夜獨家分享！！！","ranking":2,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153627170335674"},{"name":"【產品力不能像煙火絢爛消逝，品牌要永續絕對需要行銷規劃】","ranking":3,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948878615160016"},{"name":"【2016創新創業競賽報名中】","ranking":4,"src":"創業圓夢 Start-up Hub","url":"https://www.facebook.com/235676103145053/posts/1066642953381693"},{"name":"【講座公告】Phd 工時長、壓力大、薪水低，在台大網媒所的心路歷程","ranking":5,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1009201342458755"},{"name":"由e27共同創辦人Thaddeus Jit Siong Koh主持，Echelon Asia Summit  新創競賽台灣站初選在本周一正式確定由Outland的廉價航空搜尋引擎Hellowings出線，代表台灣角逐Echelon Asia Summit總決賽。除了公布成果，本文也分別為大家介紹其他五組優秀的新創團隊，從3D列印科技平台、商情分析系統到借貸平台，可想見當時比賽之激烈。","ranking":6,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957597447649712"}]},
					{"text":"露天","frequency":39,"sentiment":0,"articles":[{"name":"大家今天也連不上露天拍賣嗎？","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154056238904284"},{"name":"網路家庭旗下的露天拍賣自 18 號早上就呈現了無法連線的狀態，到晚間大致上已恢復連線，但也引發使用者的眾多抱怨","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000322380021012"}]},
					{"text":"放大鏡","frequency":35,"sentiment":0,"articles":[{"name":"創業活動佈告▶▶▶【貝殼放大鏡，放大你的集資夢！】","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957536347655822"}]},
					{"text":"容量","frequency":34,"sentiment":0,"articles":[{"name":"不僅外在時尚有質感，內在也是大容量！防雨防雪都沒問題～","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983292671764906"},{"name":"現在有許多裝置支援 microSD 記憶卡，其市場需求並不見得比 SD 來得小，然而礙於先天架構限制因素，容量與性能提升進度總是慢了點。再者 SDXC 容量已達 512GB，能夠推出超過 128GB 容量 microSDXC 的廠商卻仍然寥寥無幾，Patriot 新發表兩款 200GB 容量 microSDXC，自此終於有多一點的選擇。","ranking":2,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153627901665674"}]},
					{"text":"拍賣","frequency":33,"sentiment":0,"articles":[{"name":"大家今天也連不上露天拍賣嗎？","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154056238904284"},{"name":"網路家庭旗下的露天拍賣自 18 號早上就呈現了無法連線的狀態，到晚間大致上已恢復連線，但也引發使用者的眾多抱怨","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000322380021012"}]},
					{"text":"快樂","frequency":32,"sentiment":0,"articles":[{"name":"快樂是可以學習的嗎？","ranking":1,"src":"TEDxTaipei","url":"https://www.facebook.com/109056135781639/posts/1082962635057646"}]},
					{"text":"行銷","frequency":30,"sentiment":0,"articles":[{"name":"【五招妙用FB表情符號，跟粉絲搏感情】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950814868299724"},{"name":"想要投入網路行銷，卻沒有足夠的行銷預算？","ranking":2,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1136185316400693"},{"name":"【RTB有用嗎？除了精準傳遞給對的人，用對的方式更重要】","ranking":3,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948884065159471"},{"name":"【產品力不能像煙火絢爛消逝，品牌要永續絕對需要行銷規劃】","ranking":4,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/948878615160016"},{"name":"【熱門貼文優先！Instagram 更改演算法】","ranking":5,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950931438288067"},{"name":"【中國跨境店商熱，「跨境電商體驗店」正蔓延】","ranking":6,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/950955351619009"},{"name":"【入手網站數據分析小秘書】","ranking":7,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1037297129626359"},{"name":"電商模式還能如何革新？","ranking":8,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039211676101571"},{"name":"None","ranking":9,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/986859371433914"},{"name":"許多行銷人員表示，發EDM時最常碰到三個問題：如何增加開信率？如何避免信件進入垃圾郵件夾？什麼時間最適合發EDM？","ranking":10,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/982622308498609"}]},
					{"text":"雲端","frequency":28,"sentiment":0,"articles":[{"name":"被評為「2015 十大物聯網創新公司」的物聯網平台 Particle 的共同創辦人兼執行長 Zach Supalla以知名的「棉花糖挑戰」解釋 Particle的成功經驗：「一路上我們除了提供服務，也和消費者一起成長，藉由從募資平台測試想法的可行性。過去單一小型製造業的服務對象較小，但進入 IoT、連上雲端後，規模會更龐大而且破碎，不斷產生新概念，你要認清這點，早點放上棉花糖，評估自己的狀況。」","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957504107659046"},{"name":"OpenStack執行長要來臺灣渡周末囉！","ranking":2,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815268505266229"},{"name":"很久沒談論產業動態的張明正，語氣透露出對台灣產業的擔心：「我們已經失去了雲端和大數據，接下來軟體要往人工智慧靠攏，人工智慧、軟體，這是這樣了！這比鴻海買夏普還重要100倍！」","ranking":3,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154055852784284"},{"name":"Docker還做不到的，我們想要提供，這是微軟雲端首席架構師首度來臺揭露Azure戰略時發下的豪語","ranking":4,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815321851927561"},{"name":"流量與效能是網站管理者平時最頭痛的事情，若是一般使用者也就罷了，最討厭的就是一些懷有特定目的的網站機器人程式，進到你的網站，把你辛辛苦苦建立的資料抓回去，然後用這些內容去作一些利於他們自己的事情。","ranking":5,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/814881521971594"}]},
					{"text":"息影","frequency":28,"sentiment":0,"articles":[{"name":"全景照片、3D影片都不夠炫，現在微軟HoloLens眼鏡要給你一個全新呈現方式，3D全息影像App，透過這個App可以快速製作出結合真實和虛擬世界的3D影像影片","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815246981935048"}]},
					{"text":"大頭貼","frequency":27,"sentiment":0,"articles":[{"name":"原本只是為了活動而推出的 Facebook 大頭貼濾鏡，卻引發意外的正面效果","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999661126753804"}]},
					{"text":"在乎","frequency":27,"sentiment":0,"articles":[{"name":"【《TechOrange》徵編輯、RD、實習生，一起用科技、Coding 改變世界】","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039348359421236"}]},
					{"text":"茶室","frequency":27,"sentiment":0,"articles":[{"name":"大家有發現嗎？日本藝人渡邊直美這幾天在台北的小店出沒啦！繼前天的 in Blooom 印花樂，今天又到 琅茶 Wolf Tea 拜訪囉，這張喝茶照片簡直是棚拍等級了，好可愛！","ranking":1,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1165119466854772"}]},
					{"text":"集資","frequency":26,"sentiment":0,"articles":[{"name":"創業活動佈告▶▶▶【貝殼放大鏡，放大你的集資夢！】","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957536347655822"}]},
					{"text":"育成","frequency":26,"sentiment":0,"articles":[{"name":"【育成亮點企業案例】【仿生生醫有限公司】","ranking":1,"src":"創業臺灣 育成家族~","url":"https://www.facebook.com/252546844768979/posts/1134241983266123"}]},
					{"text":"刮鬍刀","frequency":26,"sentiment":0,"articles":[{"name":"重點是DIY的樂趣…這看起來滿好做的","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983132055114301"}]},
					{"text":"版權","frequency":26,"sentiment":0,"articles":[{"name":"這筆版權費將覆蓋 Spotify 從公司成立到 2017 年 1 月 30 日的所有爭議版權費（音樂產業所稱「拖欠」的費用）！","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153272153886566"}]},
					{"text":"蘋果","frequency":26,"sentiment":0,"articles":[{"name":"既然如此，英特爾搶蘋果單是為什麼？","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000073013379282"},{"name":"從三星 和 LG 近來大動作擴廠來看，不排除蘋果真有可能提早一年在 2017 年時導入 OLED。","ranking":2,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999927690060481"},{"name":"有人曾試過向 Siri 說出「我被強姦」、「我正受到虐待」、「我被丈夫毆打」等類似求救的訊息嗎？","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153272067906566"},{"name":"作為蘋果創辦人之一、但又因和賈伯斯鬧矛盾而離開蘋果的史蒂夫·沃茲尼克，一直都是科技界的「點評專家」。在昨天 Reddit 的 Ask Me Anything 欄目上， 他回答了關於庫克、蘋果大戰 FBI 等等的問題，而一直都很做自己的他，這次的回答也一貫的有個性。","ranking":4,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154055048404284"},{"name":"蘋果是 Imagination 的主要客戶，iPhone 賣不好被認為是 IT 重整的主要原因...","ranking":5,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/999964213390162"},{"name":"身為蘋果創辦人之一的 Steve Wozniak 也是著名的科技評論家，最近他在美國大型討論區 Reddit 上回答網友的各式問題，除了肯定提姆庫克的努力，吐槽起 Apple Watch 也是正中紅心。","ranking":6,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153270891586566"},{"name":"若包裝盒照面屬實的話，這樣看來 4 吋iPhone 的耳機孔應該還會存在。","ranking":7,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000178280035422"}]},
					{"text":"液化","frequency":25,"sentiment":0,"articles":[{"name":"【★看影片答題送好禮──土壤液化可怕嗎?!!】 活動開獎囉！","ranking":1,"src":"經濟部","url":"https://www.facebook.com/335544036485779/posts/1153318491374992"}]},
					{"text":"巴巴","frequency":24,"sentiment":0,"articles":[{"name":"中國電商龍頭阿里巴巴也搶進VR虛擬實境產業！","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154054954269284"},{"name":"VR好像很紅，但是除了打電動以外還能怎麼用？","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039137749442297"},{"name":"電商模式還能如何革新？","ranking":3,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039211676101571"},{"name":"阿里巴巴除了投資 AR 公司 Magic Leap 之外，還宣佈成立了 VR 實驗室，更要在現在的購物平台上加入 VR 購物體驗。","ranking":4,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153270925691566"}]},
					{"text":"貝殼","frequency":24,"sentiment":0,"articles":[{"name":"創業活動佈告▶▶▶【貝殼放大鏡，放大你的集資夢！】","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957536347655822"}]},
					{"text":"交叉","frequency":24,"sentiment":0,"articles":[{"name":"【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1009283732450516"}]},
					{"text":"音樂","frequency":23,"sentiment":0,"articles":[{"name":"實木音響就是有質感","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/982638538496986"},{"name":"超酷的呀~","ranking":2,"src":"ㄇㄞˋ點子/ 靈感品物","url":"https://www.facebook.com/139467854560/posts/10154000937379561"},{"name":"青春，不就是要這樣充滿陽光的歌唱，用設計和音樂來為下雨的週末夜帶來陽光和青春吧！","ranking":3,"src":"ㄇㄞˋ點子/ 靈感品物","url":"https://www.facebook.com/139467854560/posts/10154001455174561"},{"name":"這筆版權費將覆蓋 Spotify 從公司成立到 2017 年 1 月 30 日的所有爭議版權費（音樂產業所稱「拖欠」的費用）！","ranking":4,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153272153886566"}]},
					{"text":"英特爾","frequency":22,"sentiment":0,"articles":[{"name":"既然如此，英特爾搶蘋果單是為什麼？","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000073013379282"}]},
					{"text":"還本","frequency":22,"sentiment":0,"articles":[{"name":"【創業新聞】超夯！台東百萬低利創業貸款 前2年可不還本","ranking":1,"src":"青創學院","url":"https://www.facebook.com/408006489218583/posts/1136192449733313"}]},
					{"text":"檔案","frequency":22,"sentiment":0,"articles":[{"name":"企業內部的檔案，可能分別存放於多臺檔案伺服器、NAS，也有可能是SharePoint平臺中，Acronis Access Advanced能提供使用者存取這些檔案的單一窗口。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/814629478663465"}]},
					{"text":"故鄉","frequency":22,"sentiment":0,"articles":[{"name":"「泰雅的孩子縱使用盡生命，也要將它留在故鄉。」 ─ 楊茂銀 （鐵木‧尤幹） 醫師","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1283315015017818"}]},
					{"text":"棉花","frequency":22,"sentiment":0,"articles":[{"name":"被評為「2015 十大物聯網創新公司」的物聯網平台 Particle 的共同創辦人兼執行長 Zach Supalla以知名的「棉花糖挑戰」解釋 Particle的成功經驗：「一路上我們除了提供服務，也和消費者一起成長，藉由從募資平台測試想法的可行性。過去單一小型製造業的服務對象較小，但進入 IoT、連上雲端後，規模會更龐大而且破碎，不斷產生新概念，你要認清這點，早點放上棉花糖，評估自己的狀況。」","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/957504107659046"}]}
	
					];
					return object;
					break;
					case "2016-03-22":
					var object = [
					{"text":"書店","frequency":49,"sentiment":0,"articles":[{"name":"【給我沖一杯咖啡的時間  拯救傳統書店的即買即印！】","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1283050595044260"}]},
					{"text":"修補","frequency":33,"sentiment":0,"articles":[{"name":"3月就遭通報有漏洞，但鼎新7月才成立產品漏洞修補小組","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815694705223609"}]},
					{"text":"奶油","frequency":31,"sentiment":0,"articles":[{"name":"我們都知道奶油不宜多吃，但沒有奶油的人生多無趣呀！垃圾食物與內容農場文章及八卦新聞一樣，吃多有害健康，卻偶爾需要它們來當作樂子","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983363085091198"}]},
					{"text":"故我","frequency":31,"sentiment":0,"articles":[{"name":"法國哲學家笛卡兒曾說「我思，故我在」，這句名言傳頌至今，或許改為「我拍，故我在」，更貼近現代人不愛思考、但一定要拍照的生活態度。美食上桌先拍照的習慣、手機拿高45度的自拍美學、衝浪板上裝GoPro的特殊視角，一幕幕豐富精彩的人生在臉書、Instagram上澎湃呈現。身旁的你我活在這樣一個自戀時代，也造就了攝影這門古老行業的新契機。","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154056666759284"}]},
					{"text":"醫學系","frequency":29,"sentiment":0,"articles":[{"name":"【講座公告】高醫醫學，尋找聖光背後的意義！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1008955792483310"}]},
					{"text":"刀劍","frequency":28,"sentiment":0,"articles":[{"name":"連茅場都出現了啊！你不得不相信我們真的有機會進入《刀劍神域》的世界(能不能出來就不知道了...)","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153631783850674"}]},
					{"text":"心臟","frequency":27,"sentiment":0,"articles":[{"name":"實驗發現，用皮膚細胞打造的心臟細胞能成功的像人體內的心臟依樣收縮，未來心臟移植或許就不需苦苦等待了。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000656683320915"}]},
					{"text":"耳機","frequency":26,"sentiment":0,"articles":[{"name":"這樣看來不管是哪家 VR ，成功運作前都要花費一筆不小的費用阿。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000641219989128"},{"name":"去年賣超好的睡眠耳機，很多人反應如果是無線的使用上會更好，所以...這不就來了嗎！！\u003e\u003esmarturl.it/sleepphoneswls","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983325538428286"}]},
					{"text":"貸款","frequency":26,"sentiment":0,"articles":[{"name":"#香港第一隻科技獨角獸","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958115574264566"}]},
					{"text":"廣告","frequency":25,"sentiment":0,"articles":[{"name":"蘋果修改後的形式，不僅讓廣告不會妨礙閱讀，點擊率更大幅增加，這樣的改變對與廣告主來說應該是相當樂見的吧。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000649219988328"}]},
					{"text":"漫畫","frequency":25,"sentiment":0,"articles":[{"name":"當平板、手機變成閱讀裝置後，漫畫的呈現形式也慢慢改變成符合手機閱讀的形式，這就是俗稱的「條漫」。","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153631362080674"}]},
					{"text":"新版","frequency":24,"sentiment":0,"articles":[{"name":"Kubernetes 強悍改版，擴充力提高400％，最高3萬Container在單一叢集。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815706231889123"}]},
					{"text":"交叉","frequency":24,"sentiment":0,"articles":[{"name":"【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1009378392441050"}]},
					{"text":"健康","frequency":23,"sentiment":0,"articles":[{"name":"我們都知道奶油不宜多吃，但沒有奶油的人生多無趣呀！垃圾食物與內容農場文章及八卦新聞一樣，吃多有害健康，卻偶爾需要它們來當作樂子","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983363085091198"},{"name":"如果沒有好好保養電池的話，可能不用一年電池健康度就會降到7成以下，但要如何得知電池健康度，以前得JB後從 Cydia 裝 App 來看，現在只要透過 App Store 的 Battery Life 不用 JB 就能取得電池的健康度資訊","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983366491757524"}]},
					{"text":"漏洞","frequency":23,"sentiment":0,"articles":[{"name":"3月就遭通報有漏洞，但鼎新7月才成立產品漏洞修補小組","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815694705223609"}]},
					{"text":"咖啡","frequency":23,"sentiment":0,"articles":[{"name":"【給我沖一杯咖啡的時間  拯救傳統書店的即買即印！】","ranking":1,"src":"FlyingV","url":"https://www.facebook.com/274575209225142/posts/1283050595044260"},{"name":"學生創業情境模擬：大家約在咖啡廳討論出點子了，接下來就去徵夥伴、找資金吧～","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039816579374414"},{"name":"看起來扁扁的 MaryWil 馬卡龍色後背包，其實能夠裝下不少東西喔，上學、實習、去咖啡店寫報告，背這樣出門剛剛好！","ranking":3,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1165154946851224"}]},
					{"text":"語言","frequency":23,"sentiment":0,"articles":[{"name":"別看這些程式語言發明人好像很偉大，他們在取名的時候，有時候可是亂搞笑一把的ＸＤＤＤ","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039561682733237"},{"name":"數位化侵襲，不管你是創業家、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039274419428630"},{"name":"\"...22歲那一年，江振誠踏入人生第二個家鄉，法國。在語言不通又人生地不熟的地方，跟隨著米其林三星主廚Jacques and Laurent Pourcel兄弟，開啟他在米其林三星餐廳Le Jardin des Sens的學習經驗。","ranking":3,"src":"Mr.Jamie","url":"https://www.facebook.com/150738220490/posts/10153874059955491"},{"name":"我要把這些網站都逛到爛然後變成coder大大！！","ranking":4,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039996326023106"},{"name":"美國知名開發者問答論壇Stack Overflow今年蒐集了來自全球173個國家，近6萬份開發者問卷完成了2016年開發者調查報告！","ranking":5,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815940318532381"}]},
					{"text":"機票","frequency":23,"sentiment":0,"articles":[{"name":"這豈不是要我出國渡假去了嗎～","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039788902710515"},{"name":"中文再難、網路長城再牢不可破，美國房仲左手微信右手淘寶，人坐在紐約辦公室，還是能大把賺進中國人的銀子","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039770982712307"},{"name":"全球首次OpenStack黑客松開跑了","ranking":3,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815773965215683"}]},
					{"text":"專利","frequency":23,"sentiment":0,"articles":[{"name":"【電子商務最容易忽視的風險！小心蟑螂就在你身邊】","ranking":1,"src":"SmartM 電子商務網","url":"https://www.facebook.com/466100950104454/posts/949587958422415"}]},
					{"text":"流量","frequency":22,"sentiment":0,"articles":[{"name":"是哪裡來的異常流量呢？感覺內情似乎...","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153631260150674"}]},
					{"text":"穿戴","frequency":22,"sentiment":0,"articles":[{"name":"爲了對抗皺紋，","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000741939979056"}]},
					{"text":"塑膠","frequency":22,"sentiment":0,"articles":[{"name":"儘管這細菌再厲害，其分解的速度也趕不上人們製造垃圾的速度吧。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000665249986725"}]},
					{"text":"店鋪","frequency":22,"sentiment":0,"articles":[{"name":"舊時代的產品銷售方式，差不多該結束了。而這些公司 ( 仰賴實體通路) 也大概剩下五年的壽命 -Giovannoni","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153274431271566"}]},
					{"text":"老氣","frequency":22,"sentiment":0,"articles":[{"name":"＃商務溝通 #職場溝通","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958163480926442"}]},
					{"text":"背心","frequency":22,"sentiment":0,"articles":[{"name":"這款背心不僅能偵測周遭環境，就連認人的工作也難不倒它。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1000664736653443"}]},
					{"text":"旗艦","frequency":21,"sentiment":0,"articles":[{"name":"所謂的旗艦處理器，多半是要有領先市場需求的硬體規劃，聯發科確實在多核設計有特殊之處，但相較之下 GPU 的規劃、 LTE 支援就顯得保守，加上他們無法決定客戶將處理器用在怎樣的產品，去年原本想藉 X10 跨入旗艦級領域，卻仍停留在被當成比 615 家族超值的選擇...","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983459685081538"}]},
					{"text":"破解","frequency":21,"sentiment":0,"articles":[{"name":"網路產業很紅，但網路產業到底是什麼？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039273452762060"},{"name":"一個用戶資料會被政府看透的科技服務誰敢用？不只蘋果怕，Google、Facebook…矽谷每間公司都怕。","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039995389356533"}]},
					{"text":"柴火","frequency":21,"sentiment":0,"articles":[{"name":"#創客 #Maker #程天縱","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958118667597590"},{"name":"亞洲捲起自造者Maker風潮，賽博集團與柴火創客空間成立合資公司賽博柴火造物吧，由兩岸創客導師程天縱擔任董事長，推動亞洲創客教育市場事業，針對台灣推出創客教育三大計畫。","ranking":2,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154056273019284"}]},
					{"text":"獨角獸","frequency":21,"sentiment":0,"articles":[{"name":"#香港第一隻科技獨角獸","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958115574264566"},{"name":"#獨角獸 #網路效應","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958128497596607"}]},
					{"text":"平臺","frequency":21,"sentiment":0,"articles":[{"name":"「面對全球Fintech衝擊，最危險的不是銀行，而是保險、證券。」","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815810945211985"}]}

					];
					return object;
					break;
					case "2016-03-23":
					var object = [
					{"text":"口傳","frequency":47,"sentiment":0,"articles":[{"name":"【講座公告】利用大學的自由壯大自己，在口傳系學習處處受用的能力！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010037052375184"}]},
					{"text":"手錶","frequency":46,"sentiment":0,"articles":[{"name":"正當我們期許智慧手錶能引爆趨勢，智慧手錶卻集體沉默了，在 2016 年的 MWC 大會上卻無消無息。難道，智慧手錶就這樣死了？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1040209706001768"}]},
					{"text":"電源","frequency":33,"sentiment":0,"articles":[{"name":"現在的行動電源百百款，不然想買顆最便宜的小米或ASUS行動電源，不然就是買顆像怪獸大學大眼仔這麼可愛的行動電源放在身邊，每次充電心中也都會會心一笑吧～","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/984372478323592"},{"name":"不只是可以用在觸控螢幕上，需要書寫的時候馬上就變身為原子筆囉～","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983343981759775"},{"name":"從電腦打不開、網路打不開、到踢到電源線的一些瞎事… ，IT 部門可以說是什麼大風大浪沒見過，雖然最後還是會幫你們處理的，但是真的不要跟 IT 抱怨…","ranking":3,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/983365125090994"}]},
					{"text":"金融業","frequency":33,"sentiment":0,"articles":[{"name":"全球超過一萬家 FinTech 公司，積極分食傳統金融業大餅！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038522442837161"},{"name":"對於區塊鏈技術，全球56％金融業者理解到區塊鏈的重要性，但57％金融業者表示不確定或是不清楚該如何面對，甚至超過83％金融業者坦言，對區塊鏈技術還不是很了解。","ranking":2,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/816625285130551"}]},
					{"text":"蝴蝶","frequency":32,"sentiment":0,"articles":[{"name":"土耳其設計師 Derya Aksoy 以蝴蝶為靈感，將細緻的蝴蝶彩繪圖樣印在絲質布料上，剪下並重疊蝴蝶薄紗，讓透明薄紗上蝴蝶的美麗配色自然交疊混合起來，薄紗的霧面透明材質讓重疊後的蝴蝶有如萬花筒般夢幻，也像夢境裡那樣神秘朦朧。","ranking":1,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1165111236855595"}]},
					{"text":"實習","frequency":32,"sentiment":0,"articles":[{"name":"曾在樂天草創期實習過的工程師，山田進太郎在 32 歲那年決定出國壯遊，在 6 個月中用平均一晚 5 美元的艱困預算，走遍了 23 個國家；這開拓了他的視野，並讓他重新立志回國創業。至今，他的 Mercari 已估值 10 億美元。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153275858786566"},{"name":"當時還是 2012 年，34 歲的山田進太郎還是單身，事業上也不順利。百無聊賴的他離開了東京，決心去看看世界。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958842660858524"},{"name":"【講座公告】從教師到牙醫師，發揮影響力是我終生追尋的目標","ranking":3,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010593992319490"},{"name":"【 第13屆實習生招募】","ranking":4,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1297098126983443"},{"name":"假如你有信心在 Google 主頁上變出點新花樣的話，你就是Google實習生了！","ranking":5,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1040212506001488"}]},
					{"text":"夢想","frequency":31,"sentiment":0,"articles":[{"name":"【 第13屆實習生招募】","ranking":1,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1297098126983443"},{"name":"【 IOH 講座公告】念研究所和大學有什麼不同？醫工所學長告訴你！","ranking":2,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010473382331551"}]},
					{"text":"水果","frequency":29,"sentiment":0,"articles":[{"name":"#小農 #生鮮電商 #在地果農","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958837347525722"}]},
					{"text":"智慧","frequency":29,"sentiment":0,"articles":[{"name":"正當我們期許智慧手錶能引爆趨勢，智慧手錶卻集體沉默了，在 2016 年的 MWC 大會上卻無消無息。難道，智慧手錶就這樣死了？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1040209706001768"},{"name":"現在的行動電源百百款，不然想買顆最便宜的小米或ASUS行動電源，不然就是買顆像怪獸大學大眼仔這麼可愛的行動電源放在身邊，每次充電心中也都會會心一笑吧～","ranking":2,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/984372478323592"},{"name":"機器人說出這樣的言論，確實會讓人嚇一跳。","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153276957586566"},{"name":"「我覺得太幸運了。我想不出比我正在研究的更有趣的問題，而且我也可以每天思考這些問題。」Demis Hassabis說著。","ranking":4,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1040817272607678"},{"name":"當時還是 2012 年，34 歲的山田進太郎還是單身，事業上也不順利。百無聊賴的他離開了東京，決心去看看世界。","ranking":5,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958842660858524"},{"name":"Swatch 的首款真・智慧錶是掛著 Tissot 品牌的","ranking":6,"src":"Engadget 中文版","url":"https://www.facebook.com/161283787297006/posts/954945751264135"}]},
					{"text":"新光","frequency":27,"sentiment":0,"articles":[{"name":"新光銀行自2015年7月成立數位金融小組，並且由新光金董事長吳東進二女兒，新光金控副總經理吳欣儒主導。在同年9月經由金管會核准可以兼營電子支付機構業務，半年後，在今年2月啟動線上開立數位存款帳戶業務，3月啟動新光跨境支付業務。","ranking":1,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154059744834284"}]},
					{"text":"大麥","frequency":26,"sentiment":0,"articles":[{"name":"先前有大麥克指數與 iphone 6 指數用以衡量各國購買力與薪資差距，現在日經新聞也想出了「迪士尼指數」，告訴大家日圓是否被低估。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1001407866579130"}]},
					{"text":"薄紗","frequency":25,"sentiment":0,"articles":[{"name":"土耳其設計師 Derya Aksoy 以蝴蝶為靈感，將細緻的蝴蝶彩繪圖樣印在絲質布料上，剪下並重疊蝴蝶薄紗，讓透明薄紗上蝴蝶的美麗配色自然交疊混合起來，薄紗的霧面透明材質讓重疊後的蝴蝶有如萬花筒般夢幻，也像夢境裡那樣神秘朦朧。","ranking":1,"src":"Pinkoi","url":"https://www.facebook.com/108929339140462/posts/1165111236855595"}]},
					{"text":"銳利","frequency":25,"sentiment":0,"articles":[{"name":"最近朋友的婚攝相片出來，結果每一張都像在演恐怖片一樣猙獰到不行 ... Lightroom 的清晰度與銳利化是完全不同的功能，拜託務必搞清楚再使用啊！","ranking":1,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/984838798276960"}]},
					{"text":"影音","frequency":24,"sentiment":0,"articles":[{"name":"追劇首選當然是要高清繁中字幕，台灣本土影音平台ChocoTV不僅完全符合以上需求，最近還一舉超越Netflix和愛奇藝，搶下Google Play影音下載第一名啦！","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1040206582668747"}]},
					{"text":"程式","frequency":24,"sentiment":0,"articles":[{"name":"用手機、平板電腦，為了防止硬體遭到意外擦撞，我們會裝上保護殼、貼膜，但其實對於這些裝置執行的軟體，本身的內容也需要嚴密保護，以免遭到有心人士透過逆向工程破解、竄改，甚至做成各種非法程式、惡意程式，造成業者、使用者蒙受損失。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/815983228528090"},{"name":"1976 年 2 月 3 日","ranking":2,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154059731374284"},{"name":"意味 Xbox One 以後也可當電腦用了嗎？","ranking":3,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153275685871566"}]},
					{"text":"交叉","frequency":24,"sentiment":0,"articles":[{"name":"【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1009381729107383"}]},
					{"text":"沙龍","frequency":23,"sentiment":0,"articles":[{"name":"#IoT #物聯網 #Meet產業沙龍","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958838550858935"}]},
					{"text":"迪士尼樂園","frequency":23,"sentiment":0,"articles":[{"name":"先前有大麥克指數與 iphone 6 指數用以衡量各國購買力與薪資差距，現在日經新聞也想出了「迪士尼指數」，告訴大家日圓是否被低估。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1001407866579130"},{"name":"在樂園中的商品，他們更關心的是商品如何能夠提升樂園的體驗。用上海迪士尼樂園商品部門的總監顧正偉的話來說就是，「我們開發的商品就是樂園體驗的一部分。」","ranking":2,"src":"數位時代","url":"https://www.facebook.com/158495994283/posts/10154059870084284"}]},
					{"text":"了解","frequency":23,"sentiment":0,"articles":[{"name":"對於區塊鏈技術，全球56％金融業者理解到區塊鏈的重要性，但57％金融業者表示不確定或是不清楚該如何面對，甚至超過83％金融業者坦言，對區塊鏈技術還不是很了解。","ranking":1,"src":"iThome","url":"https://www.facebook.com/352329718226779/posts/816625285130551"},{"name":"數位化侵襲，不管你是幕僚、主編、業務、設計師還是 PM，你都應該了解：掛網了該怎麼回報？系統掛了該怎麼修復...... 等五花八門的數位應對知識。","ranking":2,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1039275162761889"},{"name":"小孩的眼神都看呆了呀…","ranking":3,"src":"癮科技","url":"https://www.facebook.com/108887732538742/posts/984736104953896"},{"name":"【交叉查榜】個人申請一階段已於 3/17 放榜，快來做交叉查榜吧！","ranking":4,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1009381729107383"},{"name":"【 IOH 講座公告】念研究所和大學有什麼不同？醫工所學長告訴你！","ranking":5,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010473382331551"}]},
					{"text":"農民","frequency":22,"sentiment":0,"articles":[{"name":"#小農 #生鮮電商 #在地果農","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958837347525722"}]},
					{"text":"防震","frequency":22,"sentiment":0,"articles":[{"name":"長久以來，由Panasonic與Olympus所領軍的M4/3相機始終維持著1,600萬畫素的「默契」，Panasonic這次藉由GX7的後繼機種「GX8」一舉將畫素提升至2000萬。此外，GX8也延續上一代機身防震的規格，結合旗下鏡頭防震功能，推出「雙重防震」新概念。","ranking":1,"src":"T客邦的臉書基地","url":"https://www.facebook.com/161676900673/posts/10153634060130674"}]},
					{"text":"立志","frequency":22,"sentiment":0,"articles":[{"name":"曾在樂天草創期實習過的工程師，山田進太郎在 32 歲那年決定出國壯遊，在 6 個月中用平均一晚 5 美元的艱困預算，走遍了 23 個國家；這開拓了他的視野，並讓他重新立志回國創業。至今，他的 Mercari 已估值 10 億美元。","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153275858786566"},{"name":"當時還是 2012 年，34 歲的山田進太郎還是單身，事業上也不順利。百無聊賴的他離開了東京，決心去看看世界。","ranking":2,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958842660858524"},{"name":"【 IOH 講座公告】念研究所和大學有什麼不同？醫工所學長告訴你！","ranking":3,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010473382331551"}]},
					{"text":"寫成","frequency":22,"sentiment":0,"articles":[{"name":"【 第13屆實習生招募】","ranking":1,"src":"王文華的夢想學校","url":"https://www.facebook.com/117821821577752/posts/1297098126983443"}]},
					{"text":"快閃","frequency":22,"sentiment":0,"articles":[{"name":"計畫人最新活動【樹革快閃挑選會！】","ranking":1,"src":"嘖嘖 zeczec","url":"https://www.facebook.com/197008103698657/posts/1020055394727253"}]},
					{"text":"高醫","frequency":22,"sentiment":0,"articles":[{"name":"【講座公告】從教師到牙醫師，發揮影響力是我終生追尋的目標","ranking":1,"src":"IOH Innovation Open House","url":"https://www.facebook.com/438699959508899/posts/1010593992319490"}]},
					{"text":"入股","frequency":21,"sentiment":0,"articles":[{"name":"對新創團隊而言 ，最在乎的還有「技術入股」的問題 。什麼條件可以用技術作價入股？ 技術入股要課稅嗎？所得要如何計算 ？可以緩課嗎？可以緩多久？緩課代價很高嗎？","ranking":1,"src":"TechOrange","url":"https://www.facebook.com/151776788178402/posts/1038554582833947"}]},
					{"text":"速率","frequency":21,"sentiment":0,"articles":[{"name":"#創業者的思考 #成長速率 #成長曲線","ranking":1,"src":"創業小聚 Meet Startup","url":"https://www.facebook.com/101512403258225/posts/958839114192212"}]},
					{"text":"字元","frequency":21,"sentiment":0,"articles":[{"name":"你覺得 Twitter 該更動 140 字元的限制嗎？","ranking":1,"src":"Inside 硬塞的網路趨勢觀察","url":"https://www.facebook.com/159425621565/posts/10153275522921566"}]},
					{"text":"太空站","frequency":20,"sentiment":0,"articles":[{"name":"這項前所未有的太空實驗，背後想研究的，確實是太空人在國際太空站時將面對的最大威脅之一。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1001399023246681"}]},
					{"text":"遮攔","frequency":20,"sentiment":0,"articles":[{"name":"這次，匿名者不只要大舉攻下有關川普的網站，更要揭露可能會令川普覺得尷尬的機密資訊。","ranking":1,"src":"Technews 科技新報","url":"https://www.facebook.com/436202956432960/posts/1001421686577748"}]}
					];
					return object;
					break;
				}			
			break;
			case 3:
				switch(date){
					case "2016-03-16":
						this.nodes = {			
							"963467340409800": {
							  "url": "http://www.facebook.com/963467340409800", 
							  "name": "林禹彤", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161168150583237", 
								  "message": "你生日快到了 可惜你用不到這個 它會擱淺", 
								  "created_time_ts": 1457877156, 
								  "id": "1159642720735780_1161168150583237"
								}
							  ], 
							  "id": "963467340409800"
							}, 
							"1029443110445248": {
							  "url": "http://www.facebook.com/1029443110445248", 
							  "name": "陈俊文", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996879060365344", 
								  "message": "围棋是我们中国人发明的", 
								  "created_time_ts": 1457859363, 
								  "id": "996876610365589_996879060365344"
								}
							  ], 
							  "id": "1029443110445248"
							}, 
							"10208519341839416": {
							  "url": "http://www.facebook.com/10208519341839416", 
							  "name": "廖翊辰", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996980387021878", 
								  "message": "林書豪：美藉台裔>受美國教育>哈佛畢業進NBA>台灣：台灣之光", 
								  "created_time_ts": 1457873462, 
								  "id": "996876610365589_996980387021878"
								}
							  ], 
							  "id": "10208519341839416"
							}, 
							"1076925282345652": {
							  "url": "http://www.facebook.com/1076925282345652", 
							  "name": "馮凌剛", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996878553698728", 
								  "message": "換個人啦!\n韓國人不代表地球人，\n韓國人丟了人類的臉!~", 
								  "created_time_ts": 1457859302, 
								  "id": "996876610365589_996878553698728"
								}
							  ], 
							  "id": "1076925282345652"
							}, 
							"1758075287748853": {
							  "url": "http://www.facebook.com/1758075287748853", 
							  "name": "Kate Wu", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153608318315674", 
								  "message": "看看AlphaGo團隊要不要給人類留點顏面...丟一盤.", 
								  "created_time_ts": 1457772563, 
								  "id": "10153608302520674_10153608318315674"
								}, 
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153613778250674", 
								  "message": "黃紹維 不能是說謊，我覺得是鬥智，基本上它也是被教出人類思考方式。", 
								  "created_time_ts": 1457842131, 
								  "id": "10153608302520674_10153613778250674"
								}, 
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153613797745674", 
								  "message": "Sega Liu 你就想像訓練出幾種電腦1.每戰必求勝的 2.求小勝的，3:2 or 2:1 就好 或永遠求和的。 這應該可以做到。", 
								  "created_time_ts": 1457842871, 
								  "id": "10153608302520674_10153613797745674"
								}, 
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153613797630674?comment_id=10153614465210674", 
								  "message": "哪會悲壯? 這麼多人給他秀秀，名聲又更上一層樓。有多少人以前根本沒聽過他。", 
								  "created_time_ts": 1457852886, 
								  "id": "10153613797630674_10153614465210674"
								}, 
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153613797630674?comment_id=10153614578400674", 
								  "message": "吳聿凱 沒酸，也沒關心圍棋。有他，就更多人知道電腦挑戰人腦的方式是圍棋。他的確出名了，何必怕。", 
								  "created_time_ts": 1457855206, 
								  "id": "10153613797630674_10153614578400674"
								}
							  ], 
							  "id": "1758075287748853"
							}, 
							"10153845394508955": {
							  "url": "http://www.facebook.com/10153845394508955", 
							  "name": "Clark Lai", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996914683695115", 
								  "message": "如果可以做到故意放水，那真的人工智慧太強了，所以不可能放水的", 
								  "created_time_ts": 1457863798, 
								  "id": "996876610365589_996914683695115"
								}
							  ], 
							  "id": "10153845394508955"
							}, 
							"988612831219984": {
							  "url": "http://www.facebook.com/988612831219984", 
							  "name": "Eric Yang", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996879013698682", 
								  "message": "中肯!突破盲點了...", 
								  "created_time_ts": 1457859355, 
								  "id": "996876610365589_996879013698682"
								}
							  ], 
							  "id": "988612831219984"
							}, 
							"973456246054012": {
							  "url": "http://www.facebook.com/973456246054012", 
							  "name": "蔡億達", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996922800360970", 
								  "message": "中國棋院現在挺強的好嗎…", 
								  "created_time_ts": 1457865039, 
								  "id": "996876610365589_996922800360970"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996924883694095", 
								  "message": "當初深藍最後幾步是直接用窮舉法，簡單來說，根本不可能贏，頂多和局。", 
								  "created_time_ts": 1457865281, 
								  "id": "996876610365589_996924883694095"
								}
							  ], 
							  "id": "973456246054012"
							}, 
							"10204674234530619": {
							  "url": "http://www.facebook.com/10204674234530619", 
							  "name": "Jerry Hsieh", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996936787026238", 
								  "message": "呃.....所有棋類裡面，圍棋是變化最多而且最難的好嗎...", 
								  "created_time_ts": 1457867088, 
								  "id": "996876610365589_996936787026238"
								}
							  ], 
							  "id": "10204674234530619"
							}, 
							"202409276791086": {
							  "url": "http://www.facebook.com/202409276791086", 
							  "name": "Cia Tom", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996880927031824", 
								  "message": "“google ” deep mind很清楚！這也好拿來酸！", 
								  "created_time_ts": 1457859711, 
								  "id": "996876610365589_996880927031824"
								}
							  ], 
							  "id": "202409276791086"
							}, 
							"10153883390113570": {
							  "url": "http://www.facebook.com/10153883390113570", 
							  "name": "蔡冠廷", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153258491901566", 
								  "message": "不然怎麼會叫做*人工智慧*⋯就是由人工產生的智慧體", 
								  "created_time_ts": 1457799061, 
								  "id": "10153254431286566_10153258491901566"
								}, 
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153258613901566", 
								  "message": "另外，如果他如果學了5段的棋譜跟佈局、下贏業餘棋士可能不算機器贏過人類\n\n但是他是學習了眾多棋譜、並且自我對弈、最後下贏了曾經創造棋譜的人\n\n他已經有自己對圍棋的一套理解，如果你已經了解alphago的原理，3套落子策略，你就會發現他的思維已經非常逼近人類的學習模式、已及你的言論多麼無知\n\n什麼都不是？你先下贏他在說、不然他就是贏過你這位人類", 
								  "created_time_ts": 1457800472, 
								  "id": "10153254431286566_10153258613901566"
								}
							  ], 
							  "id": "10153883390113570"
							}, 
							"1046837305376368": {
							  "url": "http://www.facebook.com/1046837305376368", 
							  "name": "馬學禮", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996959900357260", 
								  "message": "你來 台灣代表", 
								  "created_time_ts": 1457870456, 
								  "id": "996876610365589_996959900357260"
								}
							  ], 
							  "id": "1046837305376368"
							}, 
							"1200685806615801": {
							  "url": "http://www.facebook.com/1200685806615801", 
							  "name": "邱冠誌", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996883800364870", 
								  "message": "開玩笑嘛", 
								  "created_time_ts": 1457859949, 
								  "id": "996876610365589_996883800364870"
								}
							  ], 
							  "id": "1200685806615801"
							}, 
							"1119291051422820": {
							  "url": "http://www.facebook.com/1119291051422820", 
							  "name": "許䰚哲", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996892927030624", 
								  "message": "不然你來好了", 
								  "created_time_ts": 1457861151, 
								  "id": "996876610365589_996892927030624"
								}
							  ], 
							  "id": "1119291051422820"
							}, 
							"1207870695907886": {
							  "url": "http://www.facebook.com/1207870695907886", 
							  "name": "Tangerine Hsu", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153258653826566", 
								  "message": "你(樓主)的理解真可笑", 
								  "created_time_ts": 1457801613, 
								  "id": "10153254431286566_10153258653826566"
								}
							  ], 
							  "id": "1207870695907886"
							}, 
							"1215866088443500": {
							  "url": "http://www.facebook.com/1215866088443500", 
							  "name": "Sunny Chou", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161201540579898", 
								  "message": "那個人可能會毀容🙈", 
								  "created_time_ts": 1457879741, 
								  "id": "1159642720735780_1161201540579898"
								}
							  ], 
							  "id": "1215866088443500"
							}, 
							"816966731746787": {
							  "url": "http://www.facebook.com/816966731746787", 
							  "name": "陳佳穎", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=997012807018636", 
								  "message": "阿發狗只是個下棋程式，說的複雜一點也就只是人工智慧下棋程式。\n它只會下棋。", 
								  "created_time_ts": 1457877612, 
								  "id": "996876610365589_997012807018636"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=997014937018423", 
								  "message": "寫出作弊程式很簡單，但寫出一個連贏棋王三場的作弊程式比單純的下棋程式難。懂圍棋的知道雙方下法都沒有放水。", 
								  "created_time_ts": 1457877899, 
								  "id": "996876610365589_997014937018423"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=997015653685018", 
								  "message": "科學家會因為自己的論點錯誤而感到失望嗎？同理", 
								  "created_time_ts": 1457878020, 
								  "id": "996876610365589_997015653685018"
								}
							  ], 
							  "id": "816966731746787"
							}, 
							"1070507423013826": {
							  "url": "http://www.facebook.com/1070507423013826", 
							  "name": "Luciya Shie", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996935213693062", 
								  "message": "但中國不能直接上google呀....", 
								  "created_time_ts": 1457866683, 
								  "id": "996876610365589_996935213693062"
								}
							  ], 
							  "id": "1070507423013826"
							}, 
							"989725374428594": {
							  "url": "http://www.facebook.com/989725374428594", 
							  "name": "Shen HaoBin", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996911127028804", 
								  "message": "你懂個屁", 
								  "created_time_ts": 1457863320, 
								  "id": "996876610365589_996911127028804"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996912127028704", 
								  "message": "哈哈哈哈哈 大師", 
								  "created_time_ts": 1457863494, 
								  "id": "996876610365589_996912127028704"
								}
							  ], 
							  "id": "989725374428594"
							}, 
							"1286039911423728": {
							  "url": "http://www.facebook.com/1286039911423728", 
							  "name": "喬立農", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996951603691423", 
								  "message": "好酸xd", 
								  "created_time_ts": 1457869120, 
								  "id": "996876610365589_996951603691423"
								}
							  ], 
							  "id": "1286039911423728"
							}, 
							"10208324439049394": {
							  "url": "http://www.facebook.com/10208324439049394", 
							  "name": "Ivan Su", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996914037028513", 
								  "message": "人工智慧還沒挑戰過中國象棋，贏過中國象棋再來說最強", 
								  "created_time_ts": 1457863656, 
								  "id": "996876610365589_996914037028513"
								}
							  ], 
							  "id": "10208324439049394"
							}, 
							"1073515436012142": {
							  "url": "http://www.facebook.com/1073515436012142", 
							  "name": "Will Ciou", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996156700437580?comment_id=996958940357356", 
								  "message": "去年獎勵容積限縮 , 建商搶在限縮前送件 , 送完件之後1~2年內要開始動工 , 我講的只是一小部分 , 房地產學問很廣 , 不是幾句話就能說完", 
								  "created_time_ts": 1457870278, 
								  "id": "996156700437580_996958940357356"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996747780378472?comment_id=996962283690355", 
								  "message": "不是已經取消證所稅了嗎? 股票不懂 好奇問問", 
								  "created_time_ts": 1457870798, 
								  "id": "996747780378472_996962283690355"
								}
							  ], 
							  "id": "1073515436012142"
							}, 
							"1076416109106731": {
							  "url": "http://www.facebook.com/1076416109106731", 
							  "name": "凝淵", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996940357025881", 
								  "message": "電腦稍微落後個幾目不到十目而已，沒點過當然看不出來~雖然差的不多但是白棋已經沒什麼弱點可以搜刮了，電腦已經算清終盤的差距，所以投了", 
								  "created_time_ts": 1457867661, 
								  "id": "996876610365589_996940357025881"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996941097025807", 
								  "message": "象棋不是老早就是電腦最強了嗎？", 
								  "created_time_ts": 1457867726, 
								  "id": "996876610365589_996941097025807"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996942023692381", 
								  "message": "會這麼說應該是不懂圍棋的", 
								  "created_time_ts": 1457867785, 
								  "id": "996876610365589_996942023692381"
								}
							  ], 
							  "id": "1076416109106731"
							}, 
							"888006737985899": {
							  "url": "http://www.facebook.com/888006737985899", 
							  "name": "江俊傑", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996892173697366", 
								  "message": "夠酸", 
								  "created_time_ts": 1457861020, 
								  "id": "996876610365589_996892173697366"
								}
							  ], 
							  "id": "888006737985899"
							}, 
							"1274604539222121": {
							  "url": "http://www.facebook.com/1274604539222121", 
							  "name": "徐啟倫", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996877137032203", 
								  "message": "真的是人工智慧\n怕要是連贏五局會被說是韓國人發明的", 
								  "created_time_ts": 1457858978, 
								  "id": "996876610365589_996877137032203"
								}
							  ], 
							  "id": "1274604539222121"
							}, 
							"752336581563543": {
							  "url": "http://www.facebook.com/752336581563543", 
							  "name": "吳聿凱", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153613797630674?comment_id=10153614573975674", 
								  "message": "有稍微關心過圍棋的就知道他，這麼酸~~嘖嘖嘖，果然特產又出現了", 
								  "created_time_ts": 1457854863, 
								  "id": "10153613797630674_10153614573975674"
								}
							  ], 
							  "id": "752336581563543"
							}, 
							"1007526685994331": {
							  "url": "http://www.facebook.com/1007526685994331", 
							  "name": "吳榮梅", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161165613916824", 
								  "message": "李欣妤林禹彤黃浩鈞你們說說Sunny Chou適合對不", 
								  "created_time_ts": 1457876818, 
								  "id": "1159642720735780_1161165613916824"
								}, 
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161176170582435", 
								  "message": "合資送她送她", 
								  "created_time_ts": 1457878036, 
								  "id": "1159642720735780_1161176170582435"
								}, 
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161176693915716", 
								  "message": "WTF誰說我要了  那麼久沒說話 第一句就婊我嗚嗚嗚嗚嗚嗚💩", 
								  "created_time_ts": 1457878105, 
								  "id": "1159642720735780_1161176693915716"
								}
							  ], 
							  "id": "1007526685994331"
							}, 
							"1236677123013323": {
							  "url": "http://www.facebook.com/1236677123013323", 
							  "name": "Shuen Wen", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996156700437580?comment_id=996754833711100", 
								  "message": "蓋房子就一定要賣房子嗎？\n如果你是這樣的觀念在台灣，你應該一輩子就是房貸族。", 
								  "created_time_ts": 1457838596, 
								  "id": "996156700437580_996754833711100"
								}
							  ], 
							  "id": "1236677123013323"
							}, 
							"939682739451789": {
							  "url": "http://www.facebook.com/939682739451789", 
							  "name": "葉育翔", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996883940364856", 
								  "message": "又一個電腦腦粉", 
								  "created_time_ts": 1457859978, 
								  "id": "996876610365589_996883940364856"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996883987031518", 
								  "message": "唉電腦腦粉", 
								  "created_time_ts": 1457859984, 
								  "id": "996876610365589_996883987031518"
								}
							  ], 
							  "id": "939682739451789"
							}, 
							"841010732677995": {
							  "url": "http://www.facebook.com/841010732677995", 
							  "name": "柯玫潔", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996156700437580?comment_id=996320113754572", 
								  "message": "個人有點疑問，像是臺灣的空房率也是高的嚇人，現在整個房價跟狀態也都是岌岌可危的，但是房子還是蓋個不停，光我們學校旁邊1年內就又蓋了兩大棟，問題臺灣房勢的差是連我這種學生都有感，為何建商還是停不下來？這種停不下來一直蓋的情況真覺得後面有掛。", 
								  "created_time_ts": 1457780394, 
								  "id": "996156700437580_996320113754572"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996156700437580?comment_id=996789727040944", 
								  "message": "我想你沒看懂我的問題\n我當然知道他們蓋了根本只是拿來炒，所以我問題現在狀況那麼差有錢的也不一定把錢丟下去炒，情況這麼差還在繼續蓋房子炒房的建商背後到底有什麼掛？ 我的問題是他們為什麼停不下來，而不是為什麼蓋。", 
								  "created_time_ts": 1457844904, 
								  "id": "996156700437580_996789727040944"
								}
							  ], 
							  "id": "841010732677995"
							}, 
							"968066666612499": {
							  "url": "http://www.facebook.com/968066666612499", 
							  "name": "Ka Yeung Lam", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996885033698080", 
								  "message": "你知道嗎？原來太陽是由東邊升起的，這是本世紀最偉大的發現！！！\n#曲線要講明", 
								  "created_time_ts": 1457860172, 
								  "id": "996876610365589_996885033698080"
								}
							  ], 
							  "id": "968066666612499"
							}, 
							"1167807379900610": {
							  "url": "http://www.facebook.com/1167807379900610", 
							  "name": "Zhong-Wei Lai", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996880043698579", 
								  "message": "我們是台灣人。", 
								  "created_time_ts": 1457859514, 
								  "id": "996876610365589_996880043698579"
								}
							  ], 
							  "id": "1167807379900610"
							}, 
							"987394314674657": {
							  "url": "http://www.facebook.com/987394314674657", 
							  "name": "Sun Po", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996901047029812", 
								  "message": "樓上數位看不懂這個笑話嗎……", 
								  "created_time_ts": 1457862360, 
								  "id": "996876610365589_996901047029812"
								}
							  ], 
							  "id": "987394314674657"
							}, 
							"10153626522181236": {
							  "url": "http://www.facebook.com/10153626522181236", 
							  "name": "蕭詠翰", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996156700437580?comment_id=996849980368252", 
								  "message": "獲利空間很大吧，蓋100戶賣出40戶回本，其餘皆獲利", 
								  "created_time_ts": 1457854063, 
								  "id": "996156700437580_996849980368252"
								}
							  ], 
							  "id": "10153626522181236"
							}, 
							"1068576643205669": {
							  "url": "http://www.facebook.com/1068576643205669", 
							  "name": "方彥升", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996884403698143", 
								  "message": "我覺得要輸得讓別人看不出來還真的有點難", 
								  "created_time_ts": 1457860036, 
								  "id": "996876610365589_996884403698143"
								}
							  ], 
							  "id": "1068576643205669"
							}, 
							"10154518191788625": {
							  "url": "http://www.facebook.com/10154518191788625", 
							  "name": "Sega Liu", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153613630080674", 
								  "message": "選手上網也贏不了吧", 
								  "created_time_ts": 1457840790, 
								  "id": "10153608302520674_10153613630080674"
								}, 
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153613642170674", 
								  "message": "AlphaGo自行放水就表示AI懂得用欺騙的方式誘捕人類\n可怕", 
								  "created_time_ts": 1457840866, 
								  "id": "10153608302520674_10153613642170674"
								}
							  ], 
							  "id": "10154518191788625"
							}, 
							"1175385905812837": {
							  "url": "http://www.facebook.com/1175385905812837", 
							  "name": "黃濬智", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153613031425674", 
								  "message": "團隊放水不恐怖AlphaGo自行放水就恐怖了", 
								  "created_time_ts": 1457835027, 
								  "id": "10153608302520674_10153613031425674"
								}
							  ], 
							  "id": "1175385905812837"
							}, 
							"1126442150729108": {
							  "url": "http://www.facebook.com/1126442150729108", 
							  "name": "Walker Wayne", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996885780364672", 
								  "message": "中國發明>中國搞爛>別國發楊>中國：「我們發明der」", 
								  "created_time_ts": 1457860315, 
								  "id": "996876610365589_996885780364672"
								}
							  ], 
							  "id": "1126442150729108"
							}, 
							"789683127830916": {
							  "url": "http://www.facebook.com/789683127830916", 
							  "name": "李欣妤", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161166510583401", 
								  "message": "我們合資送他吧😂😂", 
								  "created_time_ts": 1457876967, 
								  "id": "1159642720735780_1161166510583401"
								}, 
								{
								  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161172590582793", 
								  "message": "林禹彤你真狠😂😂😂", 
								  "created_time_ts": 1457877463, 
								  "id": "1159642720735780_1161172590582793"
								}
							  ], 
							  "id": "789683127830916"
							}, 
							"1657315427883581": {
							  "url": "http://www.facebook.com/1657315427883581", 
							  "name": "Therem Lee", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996946380358612", 
								  "message": "不輸一場\n韓國抓狂 那些bigbang歐巴 不出國表演\n女人不就瘋了\n然後暴動革命\n推翻政府就慘了", 
								  "created_time_ts": 1457868356, 
								  "id": "996876610365589_996946380358612"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996946647025252", 
								  "message": "因為alphago很孝順\n怕研發的父親被當做是韓國人\n所以只好認輸", 
								  "created_time_ts": 1457868430, 
								  "id": "996876610365589_996946647025252"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996947370358513", 
								  "message": "我每次打棒球電動\n電腦常常都九局兩出局還逆轉全壘打啊\n哪有沒作弊", 
								  "created_time_ts": 1457868577, 
								  "id": "996876610365589_996947370358513"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996948910358359", 
								  "message": "可以歸納 規則性 邏輯性的不難\n創造藝術性的\n大概電腦無法取代", 
								  "created_time_ts": 1457868653, 
								  "id": "996876610365589_996948910358359"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996117637108153?comment_id=996953650357885", 
								  "message": "我們兩百年前就有alphago的想法\n準備列入世界遺產", 
								  "created_time_ts": 1457869369, 
								  "id": "996117637108153_996953650357885"
								}
							  ], 
							  "id": "1657315427883581"
							}, 
							"984934034927442": {
							  "url": "http://www.facebook.com/984934034927442", 
							  "name": "吳佳樺", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996894253697158", 
								  "message": "人類的科技還沒有辦法模擬“動機”和“意志”哦", 
								  "created_time_ts": 1457861359, 
								  "id": "996876610365589_996894253697158"
								}
							  ], 
							  "id": "984934034927442"
							}, 
							"566470463520762": {
							  "url": "http://www.facebook.com/566470463520762", 
							  "name": "宋恩祥", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996932133693370", 
								  "message": "圍棋確實是中國發明的\n現在中國的實力懂圍棋就知道根本不能批評什麼\n不用看到什麼都只有政治跟壓迫\n這樣跟中國有什麼兩樣", 
								  "created_time_ts": 1457866249, 
								  "id": "996876610365589_996932133693370"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996934520359798", 
								  "message": "中國自己也認為圍棋是他們最艱澀變化的棋", 
								  "created_time_ts": 1457866499, 
								  "id": "996876610365589_996934520359798"
								}
							  ], 
							  "id": "566470463520762"
							}, 
							"1048403375198323": {
							  "url": "http://www.facebook.com/1048403375198323", 
							  "name": "徐式謙", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996896417030275", 
								  "message": "只有我覺得樓主是在開玩笑嗎?", 
								  "created_time_ts": 1457861778, 
								  "id": "996876610365589_996896417030275"
								}
							  ], 
							  "id": "1048403375198323"
							}, 
							"10204634820705115": {
							  "url": "http://www.facebook.com/10204634820705115", 
							  "name": "郭大維", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996877893698794", 
								  "message": "一堆人說阿法狗做假，你知道要程式作假有多難嘛？", 
								  "created_time_ts": 1457859196, 
								  "id": "996876610365589_996877893698794"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996880477031869", 
								  "message": "連贏五場也還好吧？GO算了這麼多機率跟可能性。\n會因此影響AI進程你是不是想太多了？", 
								  "created_time_ts": 1457859610, 
								  "id": "996876610365589_996880477031869"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996891930364057", 
								  "message": "原來是開玩笑，我誤會了嘛QQ", 
								  "created_time_ts": 1457860978, 
								  "id": "996876610365589_996891930364057"
								}
							  ], 
							  "id": "10204634820705115"
							}, 
							"640023952767687": {
							  "url": "http://www.facebook.com/640023952767687", 
							  "name": "賴承宇", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996917230361527", 
								  "message": "這不是五子棋", 
								  "created_time_ts": 1457864230, 
								  "id": "996876610365589_996917230361527"
								}
							  ], 
							  "id": "640023952767687"
							}, 
							"10208155081421592": {
							  "url": "http://www.facebook.com/10208155081421592", 
							  "name": "Chris Kang", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996984627021454", 
								  "message": "圍棋最複雜", 
								  "created_time_ts": 1457874195, 
								  "id": "996876610365589_996984627021454"
								}
							  ], 
							  "id": "10208155081421592"
							}, 
							"738120089625205": {
							  "url": "http://www.facebook.com/738120089625205", 
							  "name": "龔聖傑", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996910180362232", 
								  "message": "說讓的真的很無恥，這是科技人的下限嗎？\n怎麼不說李前三盤是讓的，免得被說成韓國人作弊？\n現在想想，當初西洋棋王真可憐。", 
								  "created_time_ts": 1457863159, 
								  "id": "996876610365589_996910180362232"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996939137026003", 
								  "message": "你才丟臉", 
								  "created_time_ts": 1457867550, 
								  "id": "996876610365589_996939137026003"
								}
							  ], 
							  "id": "738120089625205"
							}, 
							"1773409632874524": {
							  "url": "http://www.facebook.com/1773409632874524", 
							  "name": "陳彥廷", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996910773695506", 
								  "message": "這陣容，我怎麼看都不知道為什麼會要投降哈哈哈", 
								  "created_time_ts": 1457863215, 
								  "id": "996876610365589_996910773695506"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996911837028733", 
								  "message": "五子棋都不會你嘴個屁", 
								  "created_time_ts": 1457863452, 
								  "id": "996876610365589_996911837028733"
								}
							  ], 
							  "id": "1773409632874524"
							}, 
							"1238487972846159": {
							  "url": "http://www.facebook.com/1238487972846159", 
							  "name": "黃紹維", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/161676900673/posts/10153608302520674?comment_id=10153612655920674", 
								  "message": "Kate Wu 你會想要一個對你說謊的電腦嗎?", 
								  "created_time_ts": 1457831121, 
								  "id": "10153608302520674_10153612655920674"
								}
							  ], 
							  "id": "1238487972846159"
							}, 
							"1062667490463063": {
							  "url": "http://www.facebook.com/1062667490463063", 
							  "name": "何室陞", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996894770363773", 
								  "message": "換你上囉 馮先生 欸 換你囉 別跑啊", 
								  "created_time_ts": 1457861475, 
								  "id": "996876610365589_996894770363773"
								}
							  ], 
							  "id": "1062667490463063"
							}, 
							"736848293082415": {
							  "url": "http://www.facebook.com/736848293082415", 
							  "name": "莊建峰", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996932113693372", 
								  "message": "哈哈好87  我超喜歡看這種不懂圍棋的人,然後又喜歡發表評論,精彩R", 
								  "created_time_ts": 1457866246, 
								  "id": "996876610365589_996932113693372"
								}
							  ], 
							  "id": "736848293082415"
							}, 
							"997263530367378": {
							  "url": "http://www.facebook.com/997263530367378", 
							  "name": "蔡鈞宇", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996900333696550", 
								  "message": "這程式不是被做來思考人工智慧的進程的，而是做來下贏棋的，除非電腦真的有自己的意識，那人類準備滅亡了吧", 
								  "created_time_ts": 1457862246, 
								  "id": "996876610365589_996900333696550"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996901290363121", 
								  "message": "可是圍棋的邏輯很難說清楚講明白呀… 所以前幾盤電腦獲勝才會對棋壇造成大轟動", 
								  "created_time_ts": 1457862380, 
								  "id": "996876610365589_996901290363121"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996903360362914", 
								  "message": "抱歉太難笑了所以看不出來…", 
								  "created_time_ts": 1457862686, 
								  "id": "996876610365589_996903360362914"
								}
							  ], 
							  "id": "997263530367378"
							}, 
							"943835029026812": {
							  "url": "http://www.facebook.com/943835029026812", 
							  "name": "游啟鴻", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996982573688326", 
								  "message": "可憐", 
								  "created_time_ts": 1457873895, 
								  "id": "996876610365589_996982573688326"
								}
							  ], 
							  "id": "943835029026812"
							}, 
							"1218019214892119": {
							  "url": "http://www.facebook.com/1218019214892119", 
							  "name": "王璿翔", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996879510365299", 
								  "message": "不知道有沒有棋譜", 
								  "created_time_ts": 1457859414, 
								  "id": "996876610365589_996879510365299"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996879937031923", 
								  "message": "中國人 發明 被韓國 打敗", 
								  "created_time_ts": 1457859483, 
								  "id": "996876610365589_996879937031923"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996924993694084", 
								  "message": "感謝提供！", 
								  "created_time_ts": 1457865303, 
								  "id": "996876610365589_996924993694084"
								}
							  ], 
							  "id": "1218019214892119"
							}, 
							"690083674468274": {
							  "url": "http://www.facebook.com/690083674468274", 
							  "name": "顧治成", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996901293696454", 
								  "message": "這個餌我給101分，多1分是怕您謙虛啊", 
								  "created_time_ts": 1457862380, 
								  "id": "996876610365589_996901293696454"
								}
							  ], 
							  "id": "690083674468274"
							}, 
							"10206707178531710": {
							  "url": "http://www.facebook.com/10206707178531710", 
							  "name": "Ed Lien", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996877853698798", 
								  "message": "是讓的吧，google/alphago簡單的意識到連贏五場的話，恐懼會影響到人工智慧的進程", 
								  "created_time_ts": 1457859186, 
								  "id": "996876610365589_996877853698798"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996944880358762", 
								  "message": "大眾所能夠見到的人工智慧目前是還不具有思考或情感的，但是以科技相對演化的速度，或許只需要不經意但機率上只是時間早晚的巧合，機械就會有類似生物的第一隻眼誕生後的改變。alphago 已顛覆4000年來人對圍棋普偏認知的玩法，光是這點就已經讓人毛毛的了…", 
								  "created_time_ts": 1457868071, 
								  "id": "996876610365589_996944880358762"
								}, 
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996948820358368", 
								  "message": "棄子欺敵這步應該是算計alphago近乎鏡射的下法，下次如果不管用它進化的速度就嚇人了", 
								  "created_time_ts": 1457868636, 
								  "id": "996876610365589_996948820358368"
								}
							  ], 
							  "id": "10206707178531710"
							}, 
							"1305779329438521": {
							  "url": "http://www.facebook.com/1305779329438521", 
							  "name": "Tommy Wong", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996884753698108", 
								  "message": "人哋是圍棋世界一呀白痴仔", 
								  "created_time_ts": 1457860125, 
								  "id": "996876610365589_996884753698108"
								}
							  ], 
							  "id": "1305779329438521"
							}, 
							"772627092863450": {
							  "url": "http://www.facebook.com/772627092863450", 
							  "name": "藍月 詠", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996895967030320", 
								  "message": "就演算法的Bug吧，否則為何要舉辦高強度比賽。人腦在演算沒有電腦完美，但邏輯運算AI目前還無法完全複製人腦的思考模式。(當然指的是高人的邏輯思考能力。)", 
								  "created_time_ts": 1457861700, 
								  "id": "996876610365589_996895967030320"
								}
							  ], 
							  "id": "772627092863450"
							}, 
							"1293167937366537": {
							  "url": "http://www.facebook.com/1293167937366537", 
							  "name": "謝君平", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=996951113691472", 
								  "message": "七十年前就輸了", 
								  "created_time_ts": 1457869017, 
								  "id": "996876610365589_996951113691472"
								}
							  ], 
							  "id": "1293167937366537"
							}, 
							"984735351565070": {
							  "url": "http://www.facebook.com/984735351565070", 
							  "name": "Bruce Hewes Bruce", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153259201491566", 
								  "message": "阿呆", 
								  "created_time_ts": 1457810053, 
								  "id": "10153254431286566_10153259201491566"
								}
							  ], 
							  "id": "984735351565070"
							}, 
							"945819412179939": {
							  "url": "http://www.facebook.com/945819412179939", 
							  "name": "李飛龍", 
							  "comments": [
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153257630621566", 
								  "message": "蠻可笑的！AlphaGo是一個圍棋知識+資訊工程結合的智慧，說到底還是由人類智慧所生成的，若沒有人類智慧的輸入，AlphaGo甚麼都不是！結果一堆人類卻迷信科技結果的表象，真以為科技贏過人類了！\n這就好像人類利用上帝所創造的萬物做原料來製造出各種高科技設備，能不受地心引力限制，開始飛天遁地，就自大地認為自己智慧已經勝過上帝了，兩者都是一樣愚痴可笑！", 
								  "created_time_ts": 1457784673, 
								  "id": "10153254431286566_10153257630621566"
								}, 
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153258678166566", 
								  "message": "蔡冠廷 俗云：天地乃萬物之母，而人類乃萬物之靈。正因為人類的靈性是情理法三者俱足交互運作，此非其他萬物所能及的！故人類成了萬物之駕馭者，駕馭得當，則天下太平；駕馭脫序，則天下大亂矣！與其說人類敗給科技，不如說人類是敗給自己！說到底，韓國棋王是敗給懂得駕馭科技的人類而非是敗給科技呀！這其中深意，不知能意會者有幾人乎？", 
								  "created_time_ts": 1457802578, 
								  "id": "10153254431286566_10153258678166566"
								}, 
								{
								  "url": "https://www.facebook.com/159425621565/posts/10153254431286566?comment_id=10153258680736566", 
								  "message": "這個人工智慧與所謂複製人的爭議問題是如出一轍的，同樣是人類在妄自以為真能藉由科技文明取代上帝角色，讓自己能成為主宰者之希望下所衍生的產物！\n\n沒有天地焉有萬物；沒有人類焉有人工智慧？研發出人工智慧的人類卻選擇相信科技，而不相信自己，這是很可笑且危險的事！", 
								  "created_time_ts": 1457802665, 
								  "id": "10153254431286566_10153258680736566"
								}
							  ], 
							  "id": "945819412179939"
							}
						};
						this.links = [
						{
						  "user_id": "1274604539222121", 
						  "links": [
							"10208519341839416", 
							"1286039911423728", 
							"1070507423013826", 
							"566470463520762", 
							"736848293082415", 
							"973456246054012", 
							"1126442150729108", 
							"939682739451789", 
							"202409276791086", 
							"1167807379900610", 
							"1218019214892119", 
							"1029443110445248", 
							"988612831219984"
						  ], 
						  "leader_ratio": 143
						}, 
						{
						  "user_id": "10206707178531710", 
						  "links": [
							"1657315427883581", 
							"10206707178531710", 
							"10153845394508955", 
							"997263530367378", 
							"690083674468274", 
							"987394314674657", 
							"1048403375198323", 
							"772627092863450", 
							"984934034927442", 
							"1068576643205669", 
							"939682739451789", 
							"10204634820705115"
						  ], 
						  "leader_ratio": 133
						}, 
						{
						  "user_id": "1076925282345652", 
						  "links": [
							"943835029026812", 
							"1046837305376368", 
							"738120089625205", 
							"1062667490463063", 
							"1119291051422820", 
							"888006737985899", 
							"1305779329438521"
						  ], 
						  "leader_ratio": 77
						}, 
						{
						  "user_id": "1758075287748853", 
						  "links": [
							"1758075287748853", 
							"10154518191788625", 
							"1175385905812837", 
							"1238487972846159", 
							"752336581563543"
						  ], 
						  "leader_ratio": 57
						}, 
						{
						  "user_id": "10204634820705115", 
						  "links": [
							"816966731746787", 
							"1657315427883581", 
							"10204634820705115", 
							"968066666612499", 
							"1200685806615801"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "10208324439049394", 
						  "links": [
							"10208155081421592", 
							"1293167937366537", 
							"1076416109106731", 
							"10204674234530619", 
							"566470463520762"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "1007526685994331", 
						  "links": [
							"1215866088443500", 
							"1007526685994331", 
							"789683127830916", 
							"963467340409800"
						  ], 
						  "leader_ratio": 46
						}, 
						{
						  "user_id": "945819412179939", 
						  "links": [
							"984735351565070", 
							"945819412179939", 
							"1207870695907886", 
							"10153883390113570"
						  ], 
						  "leader_ratio": 46
						}, 
						{
						  "user_id": "1773409632874524", 
						  "links": [
							"1076416109106731", 
							"640023952767687", 
							"989725374428594", 
							"1773409632874524"
						  ], 
						  "leader_ratio": 45
						}, 
						{
						  "user_id": "841010732677995", 
						  "links": [
							"1073515436012142", 
							"10153626522181236", 
							"841010732677995", 
							"1236677123013323"
						  ], 
						  "leader_ratio": 44
						}
					  ];
					break;
					case "2016-03-17":
						this.nodes = {
						"1242340969128823": {
						  "url": "http://www.facebook.com/1242340969128823", 
						  "name": "莊一毛", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997273733659210", 
							  "message": "應該要順便研發一下長腦！", 
							  "created_time_ts": 1457912120, 
							  "id": "996754903711093_997273733659210"
							}
						  ], 
						  "id": "1242340969128823"
						}, 
						"10205630797509120": {
						  "url": "http://www.facebook.com/10205630797509120", 
						  "name": "楊宗儒", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997375853648998", 
							  "message": "亂斷章取義，很有當記者的天份", 
							  "created_time_ts": 1457930987, 
							  "id": "997362836983633_997375853648998"
							}
						  ], 
						  "id": "10205630797509120"
						}, 
						"625113437627415": {
						  "url": "http://www.facebook.com/625113437627415", 
						  "name": "碧琦", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997373266982590", 
							  "message": "還好啦，天網什麼的能突破祖國超堅強防火牆嗎? (´Д` )", 
							  "created_time_ts": 1457930688, 
							  "id": "997327783653805_997373266982590"
							}
						  ], 
						  "id": "625113437627415"
						}, 
						"1025031544223779": {
						  "url": "http://www.facebook.com/1025031544223779", 
						  "name": "朱家恩", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263141846566", 
							  "message": "連啟泰 李確實是圍棋界第一人與AI迎戰??http://udn.com/news/story/6812/1472026-Google%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7AlphaGo-%E5%AE%8C%E5%8B%9D%E6%AD%90%E6%B4%B2%E5%9C%8D%E6%A3%8B%E6%A3%8B%E7%8E%8B", 
							  "created_time_ts": 1457934012, 
							  "id": "10153262664811566_10153263141846566"
							}
						  ], 
						  "id": "1025031544223779"
						}, 
						"10153371731493388": {
						  "url": "http://www.facebook.com/10153371731493388", 
						  "name": "楊偉隆", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262934406566", 
							  "message": "分散式不用網路用什麼？", 
							  "created_time_ts": 1457924794, 
							  "id": "10153262664811566_10153262934406566"
							}
						  ], 
						  "id": "10153371731493388"
						}, 
						"10154543246625400": {
						  "url": "http://www.facebook.com/10154543246625400", 
						  "name": "Billy Cheung", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263103061566", 
							  "message": "柯潔是現在的世界第一，戰績對李世石8勝2負", 
							  "created_time_ts": 1457931548, 
							  "id": "10153262664811566_10153263103061566"
							}
						  ], 
						  "id": "10154543246625400"
						}, 
						"1040820355955074": {
						  "url": "http://www.facebook.com/1040820355955074", 
						  "name": "陳希綸", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997667313619852", 
							  "message": "幫阿法夠裝360", 
							  "created_time_ts": 1457970549, 
							  "id": "997598313626752_997667313619852"
							}
						  ], 
						  "id": "1040820355955074"
						}, 
						"1194397283909798": {
						  "url": "http://www.facebook.com/1194397283909798", 
						  "name": "Andrew Hsu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=996787553707828", 
							  "message": "柯屁：中華文化吃飯用筷子，代表著人與人互助的精神，唯有兩根筷子一起幫忙夾住，肚皮才不會餓，人民也才過得幸福\n柯粉：柯市長講好有道理哦，這就是生活的現實面！！\n其他人：幹，不就是常識？", 
							  "created_time_ts": 1457844337, 
							  "id": "996179520435298_996787553707828"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997493466970570", 
							  "message": "我是還蠻想知道連勝文哪裡比較爛", 
							  "created_time_ts": 1457949499, 
							  "id": "996179520435298_997493466970570"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997596826960234", 
							  "message": "拜託，高收入高績效要求這誰不知道？不然你以為google這麼好進喔？你知道Apple 高通intel也是一樣嗎？", 
							  "created_time_ts": 1457961936, 
							  "id": "996179520435298_997596826960234"
							}
						  ], 
						  "id": "1194397283909798"
						}, 
						"1137600476258412": {
						  "url": "http://www.facebook.com/1137600476258412", 
						  "name": "劉晉華", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263245611566", 
							  "message": "中肯。。。人家世界冠軍，講話大聲也理所當然\n一群世界魯蛇只能自我取暖。。。", 
							  "created_time_ts": 1457938682, 
							  "id": "10153262664811566_10153263245611566"
							}
						  ], 
						  "id": "1137600476258412"
						}, 
						"1337895432903259": {
						  "url": "http://www.facebook.com/1337895432903259", 
						  "name": "Tsung Chi Kuo", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997363823650201", 
							  "message": "有個立委說台灣不需要台積電 他去美國不知道會不會說美國不需要apple", 
							  "created_time_ts": 1457928892, 
							  "id": "997362836983633_997363823650201"
							}
						  ], 
						  "id": "1337895432903259"
						}, 
						"1300468899968630": {
						  "url": "http://www.facebook.com/1300468899968630", 
						  "name": "Chi Chung Yu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/995214210531829?comment_id=995285737191343", 
							  "message": "他當然會贏啊，因為中國連不上google，AlphaGo無法用。", 
							  "created_time_ts": 1457619190, 
							  "id": "995214210531829_995285737191343"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262777921566", 
							  "message": "他當然敢約戰啦。在中國又連不上google sever，管你阿法貓阿法狗都沒用。人家為什麼選韓國是有理由的好嗎?因為韓國連網速度世界第一。", 
							  "created_time_ts": 1457920333, 
							  "id": "10153262664811566_10153262777921566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262789521566", 
							  "message": "李世乭對戰的是聯機版，柯潔好意思去挑單機版?", 
							  "created_time_ts": 1457920774, 
							  "id": "10153262664811566_10153262789521566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262852876566", 
							  "message": "分散式是用串聯的把各主機串聯起來。要把這麼多台主機都搬到中國去?可能嗎?還不是得透過網際網路連線?不然就讓柯潔到google總部去應戰好了。", 
							  "created_time_ts": 1457923303, 
							  "id": "10153262664811566_10153262852876566"
							}
						  ], 
						  "id": "1300468899968630"
						}, 
						"1109986875680101": {
						  "url": "http://www.facebook.com/1109986875680101", 
						  "name": "WenPin Lu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997365180316732", 
							  "message": "其實是台積電不需要台灣", 
							  "created_time_ts": 1457929190, 
							  "id": "997362836983633_997365180316732"
							}
						  ], 
						  "id": "1109986875680101"
						}, 
						"1160974957254260": {
						  "url": "http://www.facebook.com/1160974957254260", 
						  "name": "Blossom Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262?comment_id=1149869188386589", 
							  "message": "台中市，南投市呢？", 
							  "created_time_ts": 1457929023, 
							  "id": "1149862458387262_1149869188386589"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262?comment_id=1149953518378156", 
							  "message": "感恩~", 
							  "created_time_ts": 1457940761, 
							  "id": "1149862458387262_1149953518378156"
							}
						  ], 
						  "id": "1160974957254260"
						}, 
						"943048829124949": {
						  "url": "http://www.facebook.com/943048829124949", 
						  "name": "蕭予君", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161905173842868", 
							  "message": "哈哈哈好啊多少呀", 
							  "created_time_ts": 1457960634, 
							  "id": "1159642720735780_1161905173842868"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161952627171456", 
							  "message": "貴   齁(-_-メ)", 
							  "created_time_ts": 1457965092, 
							  "id": "1159642720735780_1161952627171456"
							}
						  ], 
						  "id": "943048829124949"
						}, 
						"10206950888864019": {
						  "url": "http://www.facebook.com/10206950888864019", 
						  "name": "Annie Shih", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997616380291612", 
							  "message": "只能在中國比", 
							  "created_time_ts": 1457964740, 
							  "id": "997598313626752_997616380291612"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997657293620854", 
							  "message": "出現蓋版廣告之後，柯潔就領先了", 
							  "created_time_ts": 1457968869, 
							  "id": "997598313626752_997657293620854"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997667516953165", 
							  "message": "Clean Master", 
							  "created_time_ts": 1457970588, 
							  "id": "997598313626752_997667516953165"
							}
						  ], 
						  "id": "10206950888864019"
						}, 
						"10153929041222319": {
						  "url": "http://www.facebook.com/10153929041222319", 
						  "name": "Ho Chuan Hoh", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263454491566", 
							  "message": "就是不喜欢柯洁对围棋的态度", 
							  "created_time_ts": 1457950956, 
							  "id": "10153262664811566_10153263454491566"
							}
						  ], 
						  "id": "10153929041222319"
						}, 
						"195310787507190": {
						  "url": "http://www.facebook.com/195310787507190", 
						  "name": "许强", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262998011566", 
							  "message": "鄭濡 这货虽然狂，人家有狂的本钱。这次之所以选李世石，因为他作为世界第一的时间长。这位小哥之所以没选上，因为人家95年出生，出道晚。但是就目前的表现来说，他比李世石强，他才是现在的世界第一棋王。而且与李世石几次交手都是他赢多输少。人家有本事装B，你是什么咖", 
							  "created_time_ts": 1457927260, 
							  "id": "10153262664811566_10153262998011566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263005691566", 
							  "message": "拜托，台湾就是你这种只看懒人包，或者只看一则新闻就自以为是的人。才被叫做井蛙。柯洁在他们下第一局的时候就想干阿法狗了", 
							  "created_time_ts": 1457927616, 
							  "id": "10153262664811566_10153263005691566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263029781566", 
							  "message": "这B装的我给你1分。怕你没信心继续装逼了", 
							  "created_time_ts": 1457928745, 
							  "id": "10153262664811566_10153263029781566"
							}
						  ], 
						  "id": "195310787507190"
						}, 
						"1157644797592595": {
						  "url": "http://www.facebook.com/1157644797592595", 
						  "name": "Ian Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997515276968389", 
							  "message": "聽他講東西真的很簡單，好像沒甚麼，但為什麼很多人都沒想到？？\n\n厲害的人不是把簡單的事講的很複雜，而是把複雜的事講的很簡單。你明白嗎？", 
							  "created_time_ts": 1457952862, 
							  "id": "996179520435298_997515276968389"
							}
						  ], 
						  "id": "1157644797592595"
						}, 
						"1271492319531812": {
						  "url": "http://www.facebook.com/1271492319531812", 
						  "name": "Yuan Wei Hsu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262960971566", 
							  "message": "通常我會把學生的錯字用紅筆圈起來.........", 
							  "created_time_ts": 1457925979, 
							  "id": "10153262664811566_10153262960971566"
							}
						  ], 
						  "id": "1271492319531812"
						}, 
						"957228371021881": {
						  "url": "http://www.facebook.com/957228371021881", 
						  "name": "胡伃茜", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161984427168276", 
							  "message": "自己做(X", 
							  "created_time_ts": 1457967447, 
							  "id": "1159642720735780_1161984427168276"
							}
						  ], 
						  "id": "957228371021881"
						}, 
						"1249687388378947": {
						  "url": "http://www.facebook.com/1249687388378947", 
						  "name": "Stark Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262?comment_id=1150083605031814", 
							  "message": "中部縣市年底再完成 可以說明原因嗎？", 
							  "created_time_ts": 1457957591, 
							  "id": "1149862458387262_1150083605031814"
							}
						  ], 
						  "id": "1249687388378947"
						}, 
						"1967866196771829": {
						  "url": "http://www.facebook.com/1967866196771829", 
						  "name": "Yang Nash", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997429183643665", 
							  "message": "Ang Jason 會害怕是當然的，若這系統被濫用跟本沒國家擋的了，若被駭客或激進組織取得那目前大該所有國家都要淪陷....量子電腦目前還沒國家能抗衡…", 
							  "created_time_ts": 1457939727, 
							  "id": "997327783653805_997429183643665"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997429946976922", 
							  "message": "AI進化的壞處也不能不防，濫用可是危害很大，不要認為電影或動畫劇情未來不可能存在，只要人有私心這些早晚要發生…", 
							  "created_time_ts": 1457939907, 
							  "id": "997327783653805_997429946976922"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996751903711393?comment_id=997454430307807", 
							  "message": "對岸要賺錢誰管品質跟過剩問題啊…", 
							  "created_time_ts": 1457943682, 
							  "id": "996751903711393_997454430307807"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997427460310504?comment_id=997508126969104", 
							  "message": "你現在只看的到紅色供應鏈的影響,將來印度  巴西起來後呢?整個局勢還有台灣代工的市場在嗎?不要只看到眼前的對手後方還沒出現的都會造成更大的動盪....", 
							  "created_time_ts": 1457951795, 
							  "id": "997427460310504_997508126969104"
							}
						  ], 
						  "id": "1967866196771829"
						}, 
						"557020864461420": {
						  "url": "http://www.facebook.com/557020864461420", 
						  "name": "Ang Jason", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997351523651431", 
							  "message": "当然AI 进化也有很多好处:\nAlphaGo+ Siri (Asiri):请问有什么可以帮你滴?\n(人类)用家   :中午了，不知吃什么?\nAsiri.           :  我从你智能手表中，分析到你上火了，来些清淡的素食套餐吧! 记得要多喝水呀！\n\n用家: Asiri 你是傻迫吗？\nAsiri:  你为何这么问?有何动机? 如果你不了解我，我可以谅解。 \n   但是如果很无聊的话，那么你就是人类中的傻迫，问一个能够帮助人类解世界上最难的数学题，以及连围棋都完输给我。如果我Asiri是傻迫,那么你比傻迫还不如也!", 
							  "created_time_ts": 1457927062, 
							  "id": "997327783653805_997351523651431"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997366303649953", 
							  "message": "阿尔法攻(天网的前身)，它的力害在于可以破解世界上任何旧时代的密码，仍有可能自我学习(需量子电脑成形，只少东风)破解未来任何世界上需要加密档案/啟动功能(核武器装备-物联网)…会怕并不是傻瓜，只是比别人看到更多。\n      最可悲是机械与我们未来的关系密不可分呀！", 
							  "created_time_ts": 1457929303, 
							  "id": "997327783653805_997366303649953"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996876610365589?comment_id=997373123649271", 
							  "message": "有一目，不就是让“天网”联上美国军事装备(物联网)…结果就是杯具了…无奈呀！", 
							  "created_time_ts": 1457930648, 
							  "id": "996876610365589_997373123649271"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997376623648921", 
							  "message": "哈哈哈哈哈…这就是人类过渡自信所带来的杯具。目前还好，因为只差量子电脑的形成，如果量子电脑完成，人类未来可能没剩多少了。", 
							  "created_time_ts": 1457931165, 
							  "id": "997327783653805_997376623648921"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997377093648874", 
							  "message": "量子电脑一旦成形，美国自己人都开始在害怕!", 
							  "created_time_ts": 1457931245, 
							  "id": "997327783653805_997377093648874"
							}
						  ], 
						  "id": "557020864461420"
						}, 
						"1151112248233847": {
						  "url": "http://www.facebook.com/1151112248233847", 
						  "name": "吳灃育", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262811811566", 
							  "message": "人家世界冠軍 還有人在酸 不知道酸幾點的 就算阿法狗贏了也跟你沒半毛錢關係", 
							  "created_time_ts": 1457921551, 
							  "id": "10153262664811566_10153262811811566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262997251566", 
							  "message": "聽起來你懂得比他多，那你也去拿個世界第一呀", 
							  "created_time_ts": 1457927225, 
							  "id": "10153262664811566_10153262997251566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263906386566", 
							  "message": "Jason Lin 科技進步對所以人帶來影響當然是有關係，但我指的是，那些科技的進步跟這些酸民有什麼關係嗎？就只會敲敲鍵盤留些憤世的話啊", 
							  "created_time_ts": 1457968867, 
							  "id": "10153262664811566_10153263906386566"
							}
						  ], 
						  "id": "1151112248233847"
						}, 
						"974724039242630": {
						  "url": "http://www.facebook.com/974724039242630", 
						  "name": "Taco Wu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262980586566", 
							  "message": "比賽地點會在香港", 
							  "created_time_ts": 1457926829, 
							  "id": "10153262664811566_10153262980586566"
							}
						  ], 
						  "id": "974724039242630"
						}, 
						"1142196405791633": {
						  "url": "http://www.facebook.com/1142196405791633", 
						  "name": "A-Ken Liao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263487236566", 
							  "message": "董爵豪 CPU數量不會影響思考邏輯，只會影響運算速度而已。\n\n相信GOOGLE改用分散式的結構，主要原因只是因為他們發展要下一盤棋的運算量十分驚人，所以才改用這個結構。", 
							  "created_time_ts": 1457953004, 
							  "id": "10153262664811566_10153263487236566"
							}
						  ], 
						  "id": "1142196405791633"
						}, 
						"1145666652119558": {
						  "url": "http://www.facebook.com/1145666652119558", 
						  "name": "林佑儒", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=979876862106487", 
							  "message": "根本不用用到真的雲霄飛車，坐在那種會晃動的椅子就夠了。\n以前是看著單方向螢幕體驗椅子晃動，以後可以戴著 ＶＲ看著 360度景象！\n\n既改變實體飛車在景觀種類上的限制，也彌補動態椅設施畫面單一方向的不足。而且也相對安全！", 
							  "created_time_ts": 1457865954, 
							  "id": "979829055444601_979876862106487"
							}
						  ], 
						  "id": "1145666652119558"
						}, 
						"10208905266617749": {
						  "url": "http://www.facebook.com/10208905266617749", 
						  "name": "蘇英啟", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997327783653805?comment_id=997391796980737", 
							  "message": "天網成真的話，不需要酸中國了，人類全滅，也沒人酸中國了", 
							  "created_time_ts": 1457933575, 
							  "id": "997327783653805_997391796980737"
							}
						  ], 
						  "id": "10208905266617749"
						}, 
						"10207667873795814": {
						  "url": "http://www.facebook.com/10207667873795814", 
						  "name": "董爵豪", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262809976566", 
							  "message": "分散式不是很多台主機串聯做運算嗎?和網路好像沒相關，還是我誤會了?", 
							  "created_time_ts": 1457921461, 
							  "id": "10153262664811566_10153262809976566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263249696566", 
							  "message": "據AlphaGo研究團隊1月刊登在《自然》（Nature）期刊的研究報告，AlphaGo分「單機版\n」與「分散式版」。前者在同一台電腦中裝48個電腦中央處理器（CPU）與8個圖形處理器\n（GPU）進行運算；後者是由數十台電腦、共1202個CPU與176個GPU共組的運算網路。", 
							  "created_time_ts": 1457938860, 
							  "id": "10153262664811566_10153263249696566"
							}
						  ], 
						  "id": "10207667873795814"
						}, 
						"10153703516818798": {
						  "url": "http://www.facebook.com/10153703516818798", 
						  "name": "Lien Ying-Te", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997656680287582", 
							  "message": "那阿發夠鐵定輸慘了，因為在中國google是無法使用的@@，我猜比五場可能輸七場.........", 
							  "created_time_ts": 1457968734, 
							  "id": "997598313626752_997656680287582"
							}
						  ], 
						  "id": "10153703516818798"
						}, 
						"10201654743208359": {
						  "url": "http://www.facebook.com/10201654743208359", 
						  "name": "Will Kuan", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262846621566", 
							  "message": "分散式是可以不用網路\n但是AlphaGo的Server在google總部，如果要在中國應戰的話，我不覺得deep mind會把這些node搬到中國\n所以一定還是得連網", 
							  "created_time_ts": 1457923118, 
							  "id": "10153262664811566_10153262846621566"
							}
						  ], 
						  "id": "10201654743208359"
						}, 
						"1087470127931857": {
						  "url": "http://www.facebook.com/1087470127931857", 
						  "name": "Tzuyu Ting", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997367406983176", 
							  "message": "台積電不需要台灣？ 那他收了全台至少當屆前五%的人才要不要吐回來？", 
							  "created_time_ts": 1457929616, 
							  "id": "997362836983633_997367406983176"
							}
						  ], 
						  "id": "1087470127931857"
						}, 
						"10153698921018591": {
						  "url": "http://www.facebook.com/10153698921018591", 
						  "name": "劉傳祥", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263450661566", 
							  "message": "AlphaGo對戰李之前，跟別的棋士對戰過了，好嗎？", 
							  "created_time_ts": 1457950713, 
							  "id": "10153262664811566_10153263450661566"
							}
						  ], 
						  "id": "10153698921018591"
						}, 
						"920613098058457": {
						  "url": "http://www.facebook.com/920613098058457", 
						  "name": "San Mao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161880847178634", 
							  "message": "適合ㄟ", 
							  "created_time_ts": 1457958400, 
							  "id": "1159642720735780_1161880847178634"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161947757171943", 
							  "message": "恩...-,-", 
							  "created_time_ts": 1457964491, 
							  "id": "1159642720735780_1161947757171943"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161991243834261", 
							  "message": "好", 
							  "created_time_ts": 1457968473, 
							  "id": "1159642720735780_1161991243834261"
							}
						  ], 
						  "id": "920613098058457"
						}, 
						"1431674310487966": {
						  "url": "http://www.facebook.com/1431674310487966", 
						  "name": "覺醒公民", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262869841566", 
							  "message": "連小學單字都拼不好也好意思酸人，人家站在世界的頂端呵呵笑了。", 
							  "created_time_ts": 1457923678, 
							  "id": "10153262664811566_10153262869841566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262870636566", 
							  "message": "在井底呱得更大聲。", 
							  "created_time_ts": 1457923733, 
							  "id": "10153262664811566_10153262870636566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262871346566", 
							  "message": "他就憑這心態站上世界圍棋頂峰，心態不行？", 
							  "created_time_ts": 1457923774, 
							  "id": "10153262664811566_10153262871346566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262872566566", 
							  "message": "誰不想理誰啊，笑死，世界第一的事實直接無視很好玩？", 
							  "created_time_ts": 1457923819, 
							  "id": "10153262664811566_10153262872566566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263043261566", 
							  "message": "去韓國都沒被宣稱是MIK了去中國又有甚麼好怕的？", 
							  "created_time_ts": 1457929274, 
							  "id": "10153262664811566_10153263043261566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263052111566", 
							  "message": "许强 其實柯潔是97年生的，又小又強又狂，李世乭才是下坡了還裝逼，柯潔不用裝就是牛逼，太沒天良了！", 
							  "created_time_ts": 1457929570, 
							  "id": "10153262664811566_10153263052111566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153263143511566?comment_id=10153263366131566", 
							  "message": "自己做夢夢到的鬼話說給自己聽就夠了，貼出來只是好笑而已。", 
							  "created_time_ts": 1457945675, 
							  "id": "10153263143511566_10153263366131566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263696826566", 
							  "message": "廢話\n中國不用灌甚麼東西一樣還是世界第一", 
							  "created_time_ts": 1457962104, 
							  "id": "10153262664811566_10153263696826566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263697766566", 
							  "message": "無知的力量真可怕。", 
							  "created_time_ts": 1457962143, 
							  "id": "10153262664811566_10153263697766566"
							}
						  ], 
						  "id": "1431674310487966"
						}, 
						"10201192310407193": {
						  "url": "http://www.facebook.com/10201192310407193", 
						  "name": "Rever Jian", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980062138754626", 
							  "message": "1g還容易，椅子傾斜度高一點就辦得到，但2G以上就要動態才做得出來了。", 
							  "created_time_ts": 1457885215, 
							  "id": "979829055444601_980062138754626"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980062355421271", 
							  "message": "然後雲霄飛車比世界上任何交通工具還安全。\n你開車（尤其在台灣）絕對比較危險。\n\n根據美國消費者產品安全委員會（CPSC）和六旗樂園（Six Flags）的調查顯示，2001 年當中搭乘雲霄飛車的死亡率約為15億分之1。這意味著：遊客死於駕車前往遊樂園途中的機率反而大些。", 
							  "created_time_ts": 1457885270, 
							  "id": "979829055444601_980062355421271"
							}
						  ], 
						  "id": "10201192310407193"
						}, 
						"10206057930547147": {
						  "url": "http://www.facebook.com/10206057930547147", 
						  "name": "Allen Hao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262947301566", 
							  "message": "酸人的就是種不戰不輸的心理，不敗神話。\n（小聲說：從來也沒能贏過……）", 
							  "created_time_ts": 1457925339, 
							  "id": "10153262664811566_10153262947301566"
							}
						  ], 
						  "id": "10206057930547147"
						}, 
						"1708661492704907": {
						  "url": "http://www.facebook.com/1708661492704907", 
						  "name": "成千富", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262?comment_id=1150103371696504", 
							  "message": "年底？\n太久了吧", 
							  "created_time_ts": 1457959764, 
							  "id": "1149862458387262_1150103371696504"
							}
						  ], 
						  "id": "1708661492704907"
						}, 
						"108887732538742": {
						  "url": "http://www.facebook.com/108887732538742", 
						  "name": "癮科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979888485438658?comment_id=980392778721562", 
							  "message": "哪裡！（揉眼睛）", 
							  "created_time_ts": 1457932068, 
							  "id": "979888485438658_980392778721562"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979888485438658?comment_id=980392805388226", 
							  "message": "", 
							  "created_time_ts": 1457932089, 
							  "id": "979888485438658_980392805388226"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980392875388219", 
							  "message": "環球影城那種就很逼真了其實", 
							  "created_time_ts": 1457932136, 
							  "id": "979829055444601_980392875388219"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980392972054876", 
							  "message": "真的是滿暈的（噁）", 
							  "created_time_ts": 1457932153, 
							  "id": "979829055444601_980392972054876"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980393078721532", 
							  "message": "哈哈哈哈下車正好走進商店裡XD", 
							  "created_time_ts": 1457932178, 
							  "id": "979829055444601_980393078721532"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980393272054846", 
							  "message": "卡莉怪妞？", 
							  "created_time_ts": 1457932224, 
							  "id": "979829055444601_980393272054846"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980393425388164", 
							  "message": "有去試過喔，但感覺還是比較溫柔一點，好像沒有像真的雲霄飛車那麼激動哈哈", 
							  "created_time_ts": 1457932280, 
							  "id": "979829055444601_980393425388164"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980393672054806", 
							  "message": "要做好保護措施應該是不難～", 
							  "created_time_ts": 1457932358, 
							  "id": "979829055444601_980393672054806"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979628982131275?comment_id=980394678721372", 
							  "message": "要你命三千", 
							  "created_time_ts": 1457932487, 
							  "id": "979628982131275_980394678721372"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979616905465816?comment_id=980394755388031", 
							  "message": "等下輩子.....", 
							  "created_time_ts": 1457932502, 
							  "id": "979616905465816_980394755388031"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979581265469380?comment_id=980395925387914", 
							  "message": "但還是有不少玩家喜歡底片機啊！", 
							  "created_time_ts": 1457932680, 
							  "id": "979581265469380_980395925387914"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979581265469380?comment_id=980397722054401", 
							  "message": "回想起來應該不荒唐吧哈哈\n應該有種燒錢的成就感XD", 
							  "created_time_ts": 1457932812, 
							  "id": "979581265469380_980397722054401"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978650865562420?comment_id=980398775387629", 
							  "message": "蛤感覺很療癒耶XD", 
							  "created_time_ts": 1457932866, 
							  "id": "978650865562420_980398775387629"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100?comment_id=980399215387585", 
							  "message": "應該要供給全家的\n不運動就沒電用哈哈，可以順便瘦身", 
							  "created_time_ts": 1457932905, 
							  "id": "979267398834100_980399215387585"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100?comment_id=980399932054180", 
							  "message": "但其實自己覺得一邊運動一邊要做其他事有點難哈哈", 
							  "created_time_ts": 1457932944, 
							  "id": "979267398834100_980399932054180"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100?comment_id=980400145387492", 
							  "message": "滿難的哈哈\n但我覺得跑步機背單字滿有用的XD\n很有 tempo", 
							  "created_time_ts": 1457932976, 
							  "id": "979267398834100_980400145387492"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100?comment_id=980400205387486", 
							  "message": "很多人都需要吧（誤）", 
							  "created_time_ts": 1457932988, 
							  "id": "979267398834100_980400205387486"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979267398834100?comment_id=980400438720796", 
							  "message": "站起來踩更瘦哈哈", 
							  "created_time_ts": 1457933013, 
							  "id": "979267398834100_980400438720796"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979231388837701?comment_id=980401248720715", 
							  "message": "還有油亮的光澤感哈哈", 
							  "created_time_ts": 1457933032, 
							  "id": "979231388837701_980401248720715"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979231388837701?comment_id=980402928720547", 
							  "message": "哈哈哈哈\n你突破盲點XD\n胖了只能去摩斯吃沙拉", 
							  "created_time_ts": 1457933080, 
							  "id": "979231388837701_980402928720547"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980403018720538", 
							  "message": "哈哈哈哈", 
							  "created_time_ts": 1457933097, 
							  "id": "979161338844706_980403018720538"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980403088720531", 
							  "message": "他們是不能比較的啦！！！", 
							  "created_time_ts": 1457933118, 
							  "id": "979161338844706_980403088720531"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978685758892264?comment_id=980403722053801", 
							  "message": "那是一種心情啦～～～", 
							  "created_time_ts": 1457933305, 
							  "id": "978685758892264_980403722053801"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980389002055273?comment_id=980420572052116", 
							  "message": "骨傳導耳機其實行之有年，有些游泳用的耳機直接使用骨傳導，不過小編先前看過的幾款都不是很好配戴， Sony 這款應該算是在配戴設計上的創新吧0.0", 
							  "created_time_ts": 1457936863, 
							  "id": "980389002055273_980420572052116"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980434022050771", 
							  "message": "其實若是能夠維持和98以及2002一樣的打感，單單加強圖像等等，那它依舊會是個好玩的Kof", 
							  "created_time_ts": 1457939553, 
							  "id": "979161338844706_980434022050771"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980436238717216", 
							  "message": "人物圖像膩程度是一回事，實際上打起來的感覺又是另一回事，在這真的得說SF5的後者並沒有讓人很滿意", 
							  "created_time_ts": 1457939607, 
							  "id": "979161338844706_980436238717216"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980436312050542", 
							  "message": "PS2的98UM跟2002um還蠻多人在玩", 
							  "created_time_ts": 1457939633, 
							  "id": "979161338844706_980436312050542"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979161338844706?comment_id=980436412050532", 
							  "message": "加個墨鏡更像XD", 
							  "created_time_ts": 1457939669, 
							  "id": "979161338844706_980436412050532"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979628982131275?comment_id=980469972047176", 
							  "message": "突然腦子裡響起這個音樂：https://www.youtube.com/watch?v=xFcSKowpPM0", 
							  "created_time_ts": 1457945746, 
							  "id": "979628982131275_980469972047176"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978663522227821?comment_id=980471458713694", 
							  "message": "所以你有使用3M的觸碰式水龍頭開關嗎？使用感想如何呢？", 
							  "created_time_ts": 1457946074, 
							  "id": "978663522227821_980471458713694"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978663522227821?comment_id=980471668713673", 
							  "message": "所以男生的小便斗也有這種感應的呀？", 
							  "created_time_ts": 1457946132, 
							  "id": "978663522227821_980471668713673"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980416312052542?comment_id=980681198692720", 
							  "message": "以前那個時候，很多地方都有賣：百貨公司、巷口文具店、超級市場二樓賣電玩展的專櫃⋯有點後悔當時沒買個幾台放著XD", 
							  "created_time_ts": 1457962674, 
							  "id": "980416312052542_980681198692720"
							}
						  ], 
						  "id": "108887732538742"
						}, 
						"1291466784201912": {
						  "url": "http://www.facebook.com/1291466784201912", 
						  "name": "陳懷家", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262803671566", 
							  "message": "分散式=/=有用網路\n請不要誤解了", 
							  "created_time_ts": 1457921196, 
							  "id": "10153262664811566_10153262803671566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262817786566", 
							  "message": "樓上\n分散式不代表上千台電腦...", 
							  "created_time_ts": 1457921848, 
							  "id": "10153262664811566_10153262817786566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262819256566", 
							  "message": "google本來就有考慮要找柯潔\n只是一開始問李世石的時候他就答應了.....\n跟什麼網路一點關係都沒有\nalphago根本不需要用到網路", 
							  "created_time_ts": 1457921916, 
							  "id": "10153262664811566_10153262819256566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262867621566", 
							  "message": "Chi Chung Yu 你沒看過機器實體不要太早下定論\n快20年前的深藍也才那麼大一台而已，不是超級電腦那麼大好嗎", 
							  "created_time_ts": 1457923540, 
							  "id": "10153262664811566_10153262867621566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262960931566", 
							  "message": "分散式是指用多台電腦串連增加運算效能，電腦彼此會合作\n跟有沒有網路沒有關係", 
							  "created_time_ts": 1457925971, 
							  "id": "10153262664811566_10153262960931566"
							}
						  ], 
						  "id": "1291466784201912"
						}, 
						"335544036485779": {
						  "url": "http://www.facebook.com/335544036485779", 
						  "name": "經濟部", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1149862458387262?comment_id=1149925761714265", 
							  "message": "今天先公開已完成的臺北市、新北市、宜蘭縣、新竹縣市、台南市、高雄市、屏東縣等縣市的測製。\n另外今年底將再完成臺中市、彰化縣、雲林縣、嘉義縣市等地區的調查測製。\n至於桃園市、苗栗縣、花蓮縣、臺東縣、基隆市、南投縣等地區，因屬於較不易發生土壤液化地區，將於106年起陸續進行調查。", 
							  "created_time_ts": 1457936756, 
							  "id": "1149862458387262_1149925761714265"
							}
						  ], 
						  "id": "335544036485779"
						}, 
						"10153908189454609": {
						  "url": "http://www.facebook.com/10153908189454609", 
						  "name": "Jacky Liew", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997304230322827", 
							  "message": "断人财路", 
							  "created_time_ts": 1457918667, 
							  "id": "996754903711093_997304230322827"
							}
						  ], 
						  "id": "10153908189454609"
						}, 
						"1101733749846280": {
						  "url": "http://www.facebook.com/1101733749846280", 
						  "name": "李建模", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980382728722567", 
							  "message": "大阪環球影城卡莉怪妞那個", 
							  "created_time_ts": 1457930017, 
							  "id": "979829055444601_980382728722567"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/979829055444601?comment_id=980382845389222", 
							  "message": "差很多 椅子晃和真實g力不一樣", 
							  "created_time_ts": 1457930070, 
							  "id": "979829055444601_980382845389222"
							}
						  ], 
						  "id": "1101733749846280"
						}, 
						"10204181176328886": {
						  "url": "http://www.facebook.com/10204181176328886", 
						  "name": "Janathan Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262786776566", 
							  "message": "alphago有分為網路分散式和單機版本的說，帶個單機版的去應戰也行。\n只是網路分散式的比單機版的強。\n之前看勝率，網路分散式對單機版的勝率是77%", 
							  "created_time_ts": 1457920634, 
							  "id": "10153262664811566_10153262786776566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262792446566", 
							  "message": "柯潔輸的會更沒面子呀…\n李世石一開始也很有把握，但還不是連輸3場。", 
							  "created_time_ts": 1457920865, 
							  "id": "10153262664811566_10153262792446566"
							}
						  ], 
						  "id": "10204181176328886"
						}, 
						"10205789099069961": {
						  "url": "http://www.facebook.com/10205789099069961", 
						  "name": "Jason Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263651411566", 
							  "message": "AlphaGo贏了就表示科技更進步\n怎麼沒關係?", 
							  "created_time_ts": 1457960248, 
							  "id": "10153262664811566_10153263651411566"
							}
						  ], 
						  "id": "10205789099069961"
						}, 
						"10205652185799993": {
						  "url": "http://www.facebook.com/10205652185799993", 
						  "name": "David Lu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996769587042958?comment_id=997484463638137", 
							  "message": "就算三萬台幣，只要可以彌補心中的自卑，還是有人覺得便宜。", 
							  "created_time_ts": 1457948570, 
							  "id": "996769587042958_997484463638137"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997489563637627", 
							  "message": "什麼時候開始輪到香港人批評台北市長？那我可不可以請你回去香港就好？", 
							  "created_time_ts": 1457949086, 
							  "id": "996179520435298_997489563637627"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997490166970900", 
							  "message": "重點不在柯文哲好不好，重點在連勝文更爛。", 
							  "created_time_ts": 1457949159, 
							  "id": "996179520435298_997490166970900"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997490863637497", 
							  "message": "Wei-Chung Ma 憲法賦予人民居住遷徙的自由，你可以搬出台北市，氣壞身子多划不來，我只知道外省姓的對手只會更爛。", 
							  "created_time_ts": 1457949321, 
							  "id": "996179520435298_997490863637497"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997493833637200", 
							  "message": "Taylor Woo  你根本也不住台北市，反正現在台北市長就是他，你高興也是他不高興也是他，嫌大腿不好看？眼睛自己戳瞎啊", 
							  "created_time_ts": 1457949599, 
							  "id": "996179520435298_997493833637200"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997494836970433", 
							  "message": "乖乖住你的台南，台北市長與你無關。", 
							  "created_time_ts": 1457949734, 
							  "id": "996179520435298_997494836970433"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996179520435298?comment_id=997495003637083", 
							  "message": "最好笑的是有些人根本不住台北市", 
							  "created_time_ts": 1457949768, 
							  "id": "996179520435298_997495003637083"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996747780378472?comment_id=997498143636769", 
							  "message": "沒有喔，我一個朋友以前在台積，晚上11點下班主管還說今天這麼早下班喔，gg的只有肝指數。", 
							  "created_time_ts": 1457950176, 
							  "id": "996747780378472_997498143636769"
							}
						  ], 
						  "id": "10205652185799993"
						}, 
						"1257469940935758": {
						  "url": "http://www.facebook.com/1257469940935758", 
						  "name": "蘇仕瑋", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997373050315945", 
							  "message": "他是說「台灣不需要另一個台積電」，你斷章取義成 「台灣不需要台積電」，你了解意思差多少嗎？", 
							  "created_time_ts": 1457930631, 
							  "id": "997362836983633_997373050315945"
							}
						  ], 
						  "id": "1257469940935758"
						}, 
						"532794616891541": {
						  "url": "http://www.facebook.com/532794616891541", 
						  "name": "連啟泰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263108101566", 
							  "message": "重點不在誰是棋王或是誰牛B，重點是李確實是圍棋界第一人與AI迎戰，後續再有誰加入戰場，不論輸贏，只不過是踩著前人的屍體上位，不值一晌~", 
							  "created_time_ts": 1457931945, 
							  "id": "10153262664811566_10153263108101566"
							}
						  ], 
						  "id": "532794616891541"
						}, 
						"10206259164702225": {
						  "url": "http://www.facebook.com/10206259164702225", 
						  "name": "鄭濡", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262962711566", 
							  "message": "柯傑別急著打自己國家臉阿，到時候去國外迎戰，裡子跟面子都先輸了", 
							  "created_time_ts": 1457926106, 
							  "id": "10153262664811566_10153262962711566"
							}
						  ], 
						  "id": "10206259164702225"
						}, 
						"931675100284502": {
						  "url": "http://www.facebook.com/931675100284502", 
						  "name": "楊鮪", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161857670514285", 
							  "message": "San Mao 蕭予君 胡伃茜 買給77", 
							  "created_time_ts": 1457955105, 
							  "id": "1159642720735780_1161857670514285"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161906607176058", 
							  "message": "點進去看...600多-.-", 
							  "created_time_ts": 1457960810, 
							  "id": "1159642720735780_1161906607176058"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1159642720735780?comment_id=1161989023834483", 
							  "message": "採納茜茜的意見", 
							  "created_time_ts": 1457968109, 
							  "id": "1159642720735780_1161989023834483"
							}
						  ], 
						  "id": "931675100284502"
						}, 
						"544760179022897": {
						  "url": "http://www.facebook.com/544760179022897", 
						  "name": "Uriel Engill", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262834431566", 
							  "message": "就文字上看起來他確實是講話比較衝沒錯\n但他贏過李世石很多次也是事實\n覺得有些人一直提政治問題跟拔插頭什麼的滿無聊的", 
							  "created_time_ts": 1457922642, 
							  "id": "10153262664811566_10153262834431566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262835561566", 
							  "message": "不是選韓國是看頭銜的好嗎…韓國的圍棋本來就很強", 
							  "created_time_ts": 1457922702, 
							  "id": "10153262664811566_10153262835561566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263547936566", 
							  "message": "我沒有否認這件事啊…", 
							  "created_time_ts": 1457955795, 
							  "id": "10153262664811566_10153263547936566"
							}
						  ], 
						  "id": "544760179022897"
						}, 
						"10153259778471527": {
						  "url": "http://www.facebook.com/10153259778471527", 
						  "name": "Thinkpanda Hkhc", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153262815221566", 
							  "message": "董爵豪 要Google 搬上千台電腦去中國作賽嗎", 
							  "created_time_ts": 1457921704, 
							  "id": "10153262664811566_10153262815221566"
							}
						  ], 
						  "id": "10153259778471527"
						}, 
						"972789602813474": {
						  "url": "http://www.facebook.com/972789602813474", 
						  "name": "Lam Novo", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/995214210531829?comment_id=997426490310601", 
							  "message": "中国连不上google？只能说明你脑残", 
							  "created_time_ts": 1457939253, 
							  "id": "995214210531829_997426490310601"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/995720433814540?comment_id=997432023643381", 
							  "message": "哈哈哈，我想起在俄国的斯诺登，哈哈哈", 
							  "created_time_ts": 1457940330, 
							  "id": "995720433814540_997432023643381"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996171583769425?comment_id=997449780308272", 
							  "message": "这智商还问为什么一样，哈哈！还台湾选举？那是你们美爹的，别学南棒子占为己有", 
							  "created_time_ts": 1457942946, 
							  "id": "996171583769425_997449780308272"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996171583769425?comment_id=997451253641458", 
							  "message": "就跟你们台蛙一样啊，蔡英文背景你们不知道啊？哈哈哈", 
							  "created_time_ts": 1457943001, 
							  "id": "996171583769425_997451253641458"
							}
						  ], 
						  "id": "972789602813474"
						}, 
						"1008753389215204": {
						  "url": "http://www.facebook.com/1008753389215204", 
						  "name": "林承志", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=996982953688288", 
							  "message": "為甚麼醫學的進步，還有一大堆人在酸啊??\n是不相信科技嗎?", 
							  "created_time_ts": 1457873955, 
							  "id": "996754903711093_996982953688288"
							}
						  ], 
						  "id": "1008753389215204"
						}, 
						"1126105304068973": {
						  "url": "http://www.facebook.com/1126105304068973", 
						  "name": "倪裕程", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997531420300108", 
							  "message": "黃邦齊 這個回得太妙了", 
							  "created_time_ts": 1457955256, 
							  "id": "996754903711093_997531420300108"
							}
						  ], 
						  "id": "1126105304068973"
						}, 
						"1048613181838274": {
						  "url": "http://www.facebook.com/1048613181838274", 
						  "name": "黃翊", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153262664811566?comment_id=10153263646861566", 
							  "message": "中國世界大賽都要自己接電線了還沒配桌子~誰要去中國比阿~", 
							  "created_time_ts": 1457960114, 
							  "id": "10153262664811566_10153263646861566"
							}
						  ], 
						  "id": "1048613181838274"
						}, 
						"10153813380378930": {
						  "url": "http://www.facebook.com/10153813380378930", 
						  "name": "鄭宇軒", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997362836983633?comment_id=997396520313598", 
							  "message": "蘇仕瑋 我也記得是這樣", 
							  "created_time_ts": 1457934418, 
							  "id": "997362836983633_997396520313598"
							}
						  ], 
						  "id": "10153813380378930"
						}, 
						"1121604131191784": {
						  "url": "http://www.facebook.com/1121604131191784", 
						  "name": "謝崇立", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997460153640568", 
							  "message": "應該要研發腦細胞增生\n不然腦缺的人太慘了。", 
							  "created_time_ts": 1457944536, 
							  "id": "996754903711093_997460153640568"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997460383640545", 
							  "message": "重新從其他部位取得幹細胞就行了", 
							  "created_time_ts": 1457944606, 
							  "id": "996754903711093_997460383640545"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997464740306776", 
							  "message": "癌症學名是惡性腫瘤\n主要是惡性細胞無限增生\n而人體無法自癒\n目前研究大多數癌細胞是因為\n人體吸收了不可吸收排出的毒物質\n導致細胞病變成癌細胞\n\n只不過現代醫學沒能力單純只殺死癌細胞\n而化療就是類似一種生化毒劑去殺死所有細胞\n再讓好細胞自己重造", 
							  "created_time_ts": 1457945444, 
							  "id": "996754903711093_997464740306776"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/996754903711093?comment_id=997466903639893", 
							  "message": "化療讓癌細胞更活躍?\n只能說是一種抗藥性而已\n蚊子都可能進化出抗藥性\n人類細胞當然也可能進化出抗藥性\n\n只是有抗藥性頂多難殺死\n你不用藥，就像上面說的\n你只會比原本死更快\n不過也可能自癒\n只是已知癌症自癒的人數\n連0.1%都不到", 
							  "created_time_ts": 1457945666, 
							  "id": "996754903711093_997466903639893"
							}
						  ], 
						  "id": "1121604131191784"
						}
					  };
						this.links = [
						{
						  "user_id": "1300468899968630", 
						  "links": [
							"972789602813474", 
							"1048613181838274", 
							"1142196405791633", 
							"10153929041222319", 
							"10153698921018591", 
							"10207667873795814", 
							"1025031544223779", 
							"532794616891541", 
							"1431674310487966", 
							"195310787507190", 
							"974724039242630", 
							"10206259164702225", 
							"1271492319531812", 
							"1291466784201912", 
							"10153371731493388", 
							"1300468899968630", 
							"10201654743208359", 
							"544760179022897", 
							"10153259778471527", 
							"10204181176328886"
						  ], 
						  "leader_ratio": 228
						}, 
						{
						  "user_id": "1337895432903259", 
						  "links": [
							"10153813380378930", 
							"10205630797509120", 
							"1257469940935758", 
							"1087470127931857", 
							"1109986875680101"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "1151112248233847", 
						  "links": [
							"1151112248233847", 
							"10205789099069961", 
							"1137600476258412", 
							"10154543246625400", 
							"10206057930547147"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "931675100284502", 
						  "links": [
							"920613098058457", 
							"931675100284502", 
							"957228371021881", 
							"943048829124949"
						  ], 
						  "leader_ratio": 48
						}, 
						{
						  "user_id": "557020864461420", 
						  "links": [
							"1967866196771829", 
							"10208905266617749", 
							"557020864461420", 
							"625113437627415"
						  ], 
						  "leader_ratio": 46
						}, 
						{
						  "user_id": "1160974957254260", 
						  "links": [
							"1708661492704907", 
							"1249687388378947", 
							"1160974957254260", 
							"335544036485779"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1008753389215204", 
						  "links": [
							"1126105304068973", 
							"1121604131191784", 
							"10153908189454609", 
							"1242340969128823"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1194397283909798", 
						  "links": [
							"1194397283909798", 
							"1157644797592595", 
							"10205652185799993"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "10206950888864019", 
						  "links": [
							"10206950888864019", 
							"1040820355955074", 
							"10153703516818798"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "1145666652119558", 
						  "links": [
							"108887732538742", 
							"1101733749846280", 
							"10201192310407193"
						  ], 
						  "leader_ratio": 34
						}
					  ];
					break;
					case "2016-03-18":
						this.nodes = {
						"972789602813474": {
						  "url": "http://www.facebook.com/972789602813474", 
						  "name": "Lam Novo", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=998297370223513", 
							  "message": "这就是全世界都在关注的高科技，傻X", 
							  "created_time_ts": 1458053464, 
							  "id": "997598313626752_998297370223513"
							}
						  ], 
						  "id": "972789602813474"
						}, 
						"1121360294565129": {
						  "url": "http://www.facebook.com/1121360294565129", 
						  "name": "江勝弘", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163366037009173", 
							  "message": "【賈中哥，我知道答案是1.O 2.X 3.O 4.X， Iris Kuan你覺得呢?】", 
							  "created_time_ts": 1458037277, 
							  "id": "1163303473682096_1163366037009173"
							}
						  ], 
						  "id": "1121360294565129"
						}, 
						"1488036894835602": {
						  "url": "http://www.facebook.com/1488036894835602", 
						  "name": "Keith LI", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998010126918904?comment_id=998154640237786", 
							  "message": "對預算不多 又想買旗艦機的人 只能等跳水 或前支旗艦", 
							  "created_time_ts": 1458034615, 
							  "id": "998010126918904_998154640237786"
							}
						  ], 
						  "id": "1488036894835602"
						}, 
						"462248447295064": {
						  "url": "http://www.facebook.com/462248447295064", 
						  "name": "羅浚瑋", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980471998713640?comment_id=980837228677117", 
							  "message": "小編錯了\n\n不是這孩子太強，\n\n而是快打旋風5的故事模式又短又爛", 
							  "created_time_ts": 1457977474, 
							  "id": "980471998713640_980837228677117"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998010126918904?comment_id=998045413582042", 
							  "message": "雖然我是SONY愛用者\n\n但誠實地說，獲利高是因為SONY一向定價高\n\n。", 
							  "created_time_ts": 1458023264, 
							  "id": "998010126918904_998045413582042"
							}
						  ], 
						  "id": "462248447295064"
						}, 
						"10205987174058459": {
						  "url": "http://www.facebook.com/10205987174058459", 
						  "name": "西立耶去", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350?comment_id=981149405312566", 
							  "message": "這個台灣賣很久了，記得只要一百多元而已畫質不會太好堪用而已\nhttps://farm2.staticflickr.com/1687/25170962974_41016b2d96_b.jpg", 
							  "created_time_ts": 1458015220, 
							  "id": "980678232026350_981149405312566"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350?comment_id=981284788632361", 
							  "message": "買好久了早忘了哪裡買的", 
							  "created_time_ts": 1458035575, 
							  "id": "980678232026350_981284788632361"
							}
						  ], 
						  "id": "10205987174058459"
						}, 
						"1299073050108372": {
						  "url": "http://www.facebook.com/1299073050108372", 
						  "name": "Faith Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150813111625530", 
							  "message": "這樣讓蔡英文以後不漲價的政見跳票.....-_-#", 
							  "created_time_ts": 1458034388, 
							  "id": "1150810884959086_1150813111625530"
							}
						  ], 
						  "id": "1299073050108372"
						}, 
						"139467854560": {
						  "url": "http://www.facebook.com/139467854560", 
						  "name": "ㄇㄞˋ點子/ 靈感品物", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991145929561", 
							  "message": "答案是《馬克白》。好多朋友都答對了呢～接下來我們將會抽出十位答對＋有tag人的幸運的朋友，贈送票券！靜候我們公布獲獎名單喔！", 
							  "created_time_ts": 1458008836, 
							  "id": "10153967419774561_10153991145929561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991617924561", 
							  "message": "哈囉您好！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458025940, 
							  "id": "10153967419774561_10153991617924561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991619579561", 
							  "message": "到電影院看看就知道有沒有超越囉！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026018, 
							  "id": "10153967419774561_10153991619579561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991621469561", 
							  "message": "有參加就有希望！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026092, 
							  "id": "10153967419774561_10153991621469561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991623414561", 
							  "message": "HI！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026200, 
							  "id": "10153967419774561_10153991623414561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991624004561", 
							  "message": "哈囉您好！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026247, 
							  "id": "10153967419774561_10153991624004561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991625979561", 
							  "message": "感覺不錯就進電影院看囉！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026313, 
							  "id": "10153967419774561_10153991625979561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991629289561", 
							  "message": "趕快連絡朋友把這天晚上空下來囉！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026438, 
							  "id": "10153967419774561_10153991629289561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991637729561", 
							  "message": "哈囉您好！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026500, 
							  "id": "10153967419774561_10153991637729561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991638649561", 
							  "message": "可以聯絡朋友看電影囉！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026556, 
							  "id": "10153967419774561_10153991638649561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991638929561", 
							  "message": "哈囉您好！恭喜您抽中3/21晚間九點於國賓長春放映的「馬克白」特映會票券2張。\n請於3/17中午12:00之前「私訊」我們以下資料：\n1. 真實姓名\n2. 手機號碼", 
							  "created_time_ts": 1458026578, 
							  "id": "10153967419774561_10153991638929561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991640199561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458026661, 
							  "id": "10153967419774561_10153991640199561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991644794561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，這次沒抽到別起餒，我們不定期還會舉辦其他活動喔！", 
							  "created_time_ts": 1458026763, 
							  "id": "10153967419774561_10153991644794561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991678979561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028108, 
							  "id": "10153967419774561_10153991678979561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991680839561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028136, 
							  "id": "10153967419774561_10153991680839561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991681034561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028151, 
							  "id": "10153967419774561_10153991681034561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991681514561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物子 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028186, 
							  "id": "10153967419774561_10153991681514561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991681834561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028204, 
							  "id": "10153967419774561_10153991681834561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991683229561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028245, 
							  "id": "10153967419774561_10153991683229561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991683454561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028258, 
							  "id": "10153967419774561_10153991683454561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991684049561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028285, 
							  "id": "10153967419774561_10153991684049561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991684484561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028296, 
							  "id": "10153967419774561_10153991684484561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991684824561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028319, 
							  "id": "10153967419774561_10153991684824561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991685149561", 
							  "message": "感謝您參加 ㄇㄞˋ點子/ 靈感品物 的抽獎活動，下次再接再厲囉！", 
							  "created_time_ts": 1458028344, 
							  "id": "10153967419774561_10153991685149561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153991251314561?comment_id=10153992000869561", 
							  "message": "風水師看的重點，果然不同角度～", 
							  "created_time_ts": 1458037858, 
							  "id": "10153991251314561_10153992000869561"
							}
						  ], 
						  "id": "139467854560"
						}, 
						"520413578140187": {
						  "url": "http://www.facebook.com/520413578140187", 
						  "name": "Jenny Hu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150833838290124", 
							  "message": "哈哈～～等著看大戲㕸！", 
							  "created_time_ts": 1458037315, 
							  "id": "1150810884959086_1150833838290124"
							}
						  ], 
						  "id": "520413578140187"
						}, 
						"1039137259480820": {
						  "url": "http://www.facebook.com/1039137259480820", 
						  "name": "劉孟芳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307980348312", 
							  "message": "【賈中哥，我知道答案是1.O 2.X 3.O 4.X， 劉蕙嘉 你覺得呢?】", 
							  "created_time_ts": 1458029559, 
							  "id": "1163303473682096_1163307980348312"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311773681266", 
							  "message": "又濕又冷的天宅在家…，突然覺得自己好幸福，在外工作的朋友們辛苦了！", 
							  "created_time_ts": 1458030062, 
							  "id": "1163303473682096_1163311773681266"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318610347249", 
							  "message": "賓果！這算家管的小確幸吧😁中獎就是大驚喜了XD", 
							  "created_time_ts": 1458030630, 
							  "id": "1163303473682096_1163318610347249"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163320437013733", 
							  "message": "差不多，好想一人發一份麥當當😂", 
							  "created_time_ts": 1458031007, 
							  "id": "1163303473682096_1163320437013733"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163322317013545", 
							  "message": "喜歡，又方便，比自己煮還受歡迎😝，不煮了不煮了😁今晚菜單決定了！", 
							  "created_time_ts": 1458031252, 
							  "id": "1163303473682096_1163322317013545"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163331607012616", 
							  "message": "都愛！立馬去買，天雨，小編下班行車也要小心啊！快下班了，加油💪💪💪", 
							  "created_time_ts": 1458032282, 
							  "id": "1163303473682096_1163331607012616"
							}
						  ], 
						  "id": "1039137259480820"
						}, 
						"494916767360270": {
						  "url": "http://www.facebook.com/494916767360270", 
						  "name": "林氏", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997764443610139", 
							  "message": "根本沒有南韓這個國家好嗎，沒腦子過濾資訊嗎？", 
							  "created_time_ts": 1457981817, 
							  "id": "997598313626752_997764443610139"
							}
						  ], 
						  "id": "494916767360270"
						}, 
						"10203769465315456": {
						  "url": "http://www.facebook.com/10203769465315456", 
						  "name": "Abraham Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150814921625349", 
							  "message": "不應該降價吧！馬英九擺明了要害小英。", 
							  "created_time_ts": 1458034760, 
							  "id": "1150810884959086_1150814921625349"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150832864956888", 
							  "message": "我承認我這點是真的很小人，不過，為何不拿來補台電的虧損？", 
							  "created_time_ts": 1458037163, 
							  "id": "1150810884959086_1150832864956888"
							}
						  ], 
						  "id": "10203769465315456"
						}, 
						"1226887863994107": {
						  "url": "http://www.facebook.com/1226887863994107", 
						  "name": "Vivian Liu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998143956905521", 
							  "message": "\"人類並沒有因為科技的發展造出跑得比人快的車子後，而停止跑步競賽\"...這類比不正確 \n汽車出現後 人力三輪車就不見了", 
							  "created_time_ts": 1458033183, 
							  "id": "998106096909307_998143956905521"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998153116904605", 
							  "message": "同樣是交通工具 人力三輪車大量被汽車取代", 
							  "created_time_ts": 1458034309, 
							  "id": "998106096909307_998153116904605"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998206960232554", 
							  "message": "Tsou Chieh 當然不會消失 就算google智慧車很進步 人類司機不會消失...只是大部分凋零了\n圍棋如果最後人跟機器實力越差越大  人類對弈變成小聯盟或會外賽 沒人說會消失 就像小聯盟跟網球會外賽一直在", 
							  "created_time_ts": 1458041626, 
							  "id": "998106096909307_998206960232554"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998209556898961", 
							  "message": "Tsou Chieh :至少比車子跟跑步的類比近似多了\n(人力三輪車也沒完全消失啊 依樣)", 
							  "created_time_ts": 1458041936, 
							  "id": "998106096909307_998209556898961"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998230720230178", 
							  "message": "沒錯 所以那個汽車跟人的比喻很爛\n智力有多個面向 快速的大數據分析跟強記只是其中一項\n更何況快速的大數據分析還是人類幫他寫好的程式才辦到的\n最重要的是機器沒有自我意識...你幾時聽說機器自己要求一天只能開機八小時了?", 
							  "created_time_ts": 1458044679, 
							  "id": "998106096909307_998230720230178"
							}
						  ], 
						  "id": "1226887863994107"
						}, 
						"1061975607154874": {
						  "url": "http://www.facebook.com/1061975607154874", 
						  "name": "陳振遠", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350?comment_id=981331098627730", 
							  "message": "光南就有了", 
							  "created_time_ts": 1458042398, 
							  "id": "980678232026350_981331098627730"
							}
						  ], 
						  "id": "1061975607154874"
						}, 
						"963254320425296": {
						  "url": "http://www.facebook.com/963254320425296", 
						  "name": "楊開元", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998144243572159", 
							  "message": "這和三輪車有關係??", 
							  "created_time_ts": 1458033231, 
							  "id": "998106096909307_998144243572159"
							}
						  ], 
						  "id": "963254320425296"
						}, 
						"940073292780688": {
						  "url": "http://www.facebook.com/940073292780688", 
						  "name": "高嘉潁", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350?comment_id=981272245300282", 
							  "message": "在哪裡買的到呢？", 
							  "created_time_ts": 1458033361, 
							  "id": "980678232026350_981272245300282"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980678232026350?comment_id=981286365298870", 
							  "message": "QwQ", 
							  "created_time_ts": 1458036040, 
							  "id": "980678232026350_981286365298870"
							}
						  ], 
						  "id": "940073292780688"
						}, 
						"1798428030384659": {
						  "url": "http://www.facebook.com/1798428030384659", 
						  "name": "江清", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998286866891230", 
							  "message": "Arphen Lin 人類的智力不就強在善用工具嗎？", 
							  "created_time_ts": 1458052122, 
							  "id": "998106096909307_998286866891230"
							}
						  ], 
						  "id": "1798428030384659"
						}, 
						"241247139221072": {
						  "url": "http://www.facebook.com/241247139221072", 
						  "name": "賈中哥JobGogo 勞動力發展署中彰投分署", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163286250350485?comment_id=1163302677015509", 
							  "message": "午安^^ 今天在做什麼呢？", 
							  "created_time_ts": 1458028559, 
							  "id": "1163286250350485_1163302677015509"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163286250350485?comment_id=1163302710348839", 
							  "message": "午安^^今天在上班嗎？", 
							  "created_time_ts": 1458028567, 
							  "id": "1163286250350485_1163302710348839"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306420348468", 
							  "message": "蔡泰午安喔^^答對了！今天工作順利嗎？", 
							  "created_time_ts": 1458029245, 
							  "id": "1163303473682096_1163306420348468"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306530348457", 
							  "message": "小玉午安^^ 正確解答！ 今天在做什麼呢？", 
							  "created_time_ts": 1458029269, 
							  "id": "1163303473682096_1163306530348457"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306563681787", 
							  "message": "午安^^ 賓果～今天在做什麼呢？", 
							  "created_time_ts": 1458029278, 
							  "id": "1163303473682096_1163306563681787"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306617015115", 
							  "message": "午安^^ 賓果！今天在上班嗎？", 
							  "created_time_ts": 1458029291, 
							  "id": "1163303473682096_1163306617015115"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306657015111", 
							  "message": "午安^^ 正確答案！今天在做什麼呢？", 
							  "created_time_ts": 1458029300, 
							  "id": "1163303473682096_1163306657015111"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306690348441", 
							  "message": "午安喔^^ 答對啦～今天在上班嗎？", 
							  "created_time_ts": 1458029310, 
							  "id": "1163303473682096_1163306690348441"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306730348437", 
							  "message": "午安^^ 答對啦～現在在做什麼呢？", 
							  "created_time_ts": 1458029321, 
							  "id": "1163303473682096_1163306730348437"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306767015100", 
							  "message": "午安喔～賓果！現在在做什麼呢？^^", 
							  "created_time_ts": 1458029334, 
							  "id": "1163303473682096_1163306767015100"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163306923681751", 
							  "message": "原來如此^^ 漢庭有特別喜歡的工作嗎？", 
							  "created_time_ts": 1458029373, 
							  "id": "1163303473682096_1163306923681751"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307000348410", 
							  "message": "！！！有沒有去看醫生呀！！", 
							  "created_time_ts": 1458029386, 
							  "id": "1163303473682096_1163307000348410"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307037015073", 
							  "message": "午安唷^^賓果！今天在做什麼呢？", 
							  "created_time_ts": 1458029399, 
							  "id": "1163303473682096_1163307037015073"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307207015056", 
							  "message": "哈囉～正確答案^^今天在上班嗎？", 
							  "created_time_ts": 1458029415, 
							  "id": "1163303473682096_1163307207015056"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307327015044", 
							  "message": "哈囉^^答對啦～現在在做什麼呢？", 
							  "created_time_ts": 1458029424, 
							  "id": "1163303473682096_1163307327015044"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307520348358", 
							  "message": "嗨^^ 正確解答！ 今天上班順利嗎？", 
							  "created_time_ts": 1458029439, 
							  "id": "1163303473682096_1163307520348358"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307563681687", 
							  "message": "午安^^ 答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458029451, 
							  "id": "1163303473682096_1163307563681687"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307607015016", 
							  "message": "哈囉^^ 現在在做什麼呢？", 
							  "created_time_ts": 1458029458, 
							  "id": "1163303473682096_1163307607015016"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307637015013", 
							  "message": "午安喔^^ 今天在做什麼呢？", 
							  "created_time_ts": 1458029468, 
							  "id": "1163303473682096_1163307637015013"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307663681677", 
							  "message": "午安^^賓果！今天在做什麼呢？", 
							  "created_time_ts": 1458029477, 
							  "id": "1163303473682096_1163307663681677"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163307727015004", 
							  "message": "午安^^ 答對囉！今天在做什麼啊？", 
							  "created_time_ts": 1458029487, 
							  "id": "1163303473682096_1163307727015004"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163308403681603", 
							  "message": "原來是這樣^^ 祝你錄取喔！話說最近天冷～要多加件外套嘿～", 
							  "created_time_ts": 1458029612, 
							  "id": "1163303473682096_1163308403681603"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163308680348242", 
							  "message": "哈哈^^ 安潔是家庭主婦嗎？", 
							  "created_time_ts": 1458029637, 
							  "id": "1163303473682096_1163308680348242"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163309107014866", 
							  "message": "哇～家裡的小寶貝幾歲了呀^^？", 
							  "created_time_ts": 1458029666, 
							  "id": "1163303473682096_1163309107014866"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163309820348128", 
							  "message": "再撐一下就下班囉^^最近天冷要多加件外套嘿～", 
							  "created_time_ts": 1458029710, 
							  "id": "1163303473682096_1163309820348128"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310350348075", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458029754, 
							  "id": "1163303473682096_1163310350348075"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310410348069", 
							  "message": "哈囉^^賓果～今天在做什麼呢？", 
							  "created_time_ts": 1458029764, 
							  "id": "1163303473682096_1163310410348069"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310477014729", 
							  "message": "午安喔^^今天上班順利嗎？", 
							  "created_time_ts": 1458029773, 
							  "id": "1163303473682096_1163310477014729"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310553681388", 
							  "message": "哈囉^^ 今天天氣好冷～有多穿點嗎？", 
							  "created_time_ts": 1458029784, 
							  "id": "1163303473682096_1163310553681388"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310597014717", 
							  "message": "嗨^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458029796, 
							  "id": "1163303473682096_1163310597014717"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310627014714", 
							  "message": "嗨^^ 今天在做什麼呢？", 
							  "created_time_ts": 1458029804, 
							  "id": "1163303473682096_1163310627014714"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310790348031", 
							  "message": "嗨^^今天上班順利嗎？", 
							  "created_time_ts": 1458029840, 
							  "id": "1163303473682096_1163310790348031"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310820348028", 
							  "message": "午安^^ 今天在做什麼呢？", 
							  "created_time_ts": 1458029847, 
							  "id": "1163303473682096_1163310820348028"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310843681359", 
							  "message": "午安^^ 今天在做什麼呢？", 
							  "created_time_ts": 1458029852, 
							  "id": "1163303473682096_1163310843681359"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163310873681356", 
							  "message": "午安^^ 答對啦～～今天在做什麼呢？", 
							  "created_time_ts": 1458029857, 
							  "id": "1163303473682096_1163310873681356"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311377014639", 
							  "message": "哈哈～可是賈中哥覺得家庭主婦的工作不比上班族少耶ＸＤ 等等該不會要準備晚餐了ＸＤ？", 
							  "created_time_ts": 1458029968, 
							  "id": "1163303473682096_1163311377014639"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311403681303", 
							  "message": "哈哈^^家人都出門了嗎？", 
							  "created_time_ts": 1458029982, 
							  "id": "1163303473682096_1163311403681303"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311517014625", 
							  "message": "原來是這樣^^ 今天天氣好冷～有沒有多穿點啊？", 
							  "created_time_ts": 1458030008, 
							  "id": "1163303473682096_1163311517014625"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311647014612", 
							  "message": "真的！！今天好冷啊～有多穿點嗎？", 
							  "created_time_ts": 1458030030, 
							  "id": "1163303473682096_1163311647014612"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311733681270", 
							  "message": "一起加油^^！也謝謝Xiaoyu的貼心提醒^^", 
							  "created_time_ts": 1458030058, 
							  "id": "1163303473682096_1163311733681270"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311820347928", 
							  "message": "哈囉^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030073, 
							  "id": "1163303473682096_1163311820347928"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311843681259", 
							  "message": "哈囉^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030079, 
							  "id": "1163303473682096_1163311843681259"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311873681256", 
							  "message": "哈囉^^答對啦～今天上班順利嗎？", 
							  "created_time_ts": 1458030088, 
							  "id": "1163303473682096_1163311873681256"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311900347920", 
							  "message": "哈囉^^答對啦～今天在做什麼呢？～", 
							  "created_time_ts": 1458030095, 
							  "id": "1163303473682096_1163311900347920"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311920347918", 
							  "message": "哈囉^^賓果～今天在做什麼呢？", 
							  "created_time_ts": 1458030103, 
							  "id": "1163303473682096_1163311920347918"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163311970347913", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030111, 
							  "id": "1163303473682096_1163311970347913"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312003681243", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030116, 
							  "id": "1163303473682096_1163312003681243"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312023681241", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030119, 
							  "id": "1163303473682096_1163312023681241"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312033681240", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030122, 
							  "id": "1163303473682096_1163312033681240"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312087014568", 
							  "message": "嗨^^今天上班順利嗎？", 
							  "created_time_ts": 1458030131, 
							  "id": "1163303473682096_1163312087014568"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312117014565", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030135, 
							  "id": "1163303473682096_1163312117014565"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312170347893", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030148, 
							  "id": "1163303473682096_1163312170347893"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312203681223", 
							  "message": "嗨^^今天在做什麼呢？", 
							  "created_time_ts": 1458030152, 
							  "id": "1163303473682096_1163312203681223"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312247014552", 
							  "message": "嗨^^今天上班順利嗎？", 
							  "created_time_ts": 1458030164, 
							  "id": "1163303473682096_1163312247014552"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312290347881", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030174, 
							  "id": "1163303473682096_1163312290347881"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312313681212", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030179, 
							  "id": "1163303473682096_1163312313681212"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312333681210", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030182, 
							  "id": "1163303473682096_1163312333681210"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163312370347873", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030186, 
							  "id": "1163303473682096_1163312370347873"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163314237014353", 
							  "message": "辛苦了！今天上班順利嗎^^？", 
							  "created_time_ts": 1458030281, 
							  "id": "1163303473682096_1163314237014353"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163314353681008", 
							  "message": "賈中哥也預祝你能中獎喔^^", 
							  "created_time_ts": 1458030295, 
							  "id": "1163303473682096_1163314353681008"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163315473680896", 
							  "message": "哈哈^^ 跟大家聊天很愉快啊！有預計晚餐要吃什麼了嗎？", 
							  "created_time_ts": 1458030368, 
							  "id": "1163303473682096_1163315473680896"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163315953680848", 
							  "message": "真的！而且最近流感又盛行，還要記得戴口罩喔^^", 
							  "created_time_ts": 1458030397, 
							  "id": "1163303473682096_1163315953680848"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163316920347418", 
							  "message": "知足就是幸福啊^^ 孟芳是家庭主婦嗎？", 
							  "created_time_ts": 1458030437, 
							  "id": "1163303473682096_1163316920347418"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163317267014050", 
							  "message": "今天上班順利嗎^^？", 
							  "created_time_ts": 1458030453, 
							  "id": "1163303473682096_1163317267014050"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163317567014020", 
							  "message": "再撐一下就下班啦^^ 感冒了嗎？有沒有去看醫生呀～", 
							  "created_time_ts": 1458030513, 
							  "id": "1163303473682096_1163317567014020"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163317877013989", 
							  "message": "今天上班順利嗎^^？", 
							  "created_time_ts": 1458030523, 
							  "id": "1163303473682096_1163317877013989"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163317990347311", 
							  "message": "讚喔^^ 寶貝金孫多大了呀？", 
							  "created_time_ts": 1458030539, 
							  "id": "1163303473682096_1163317990347311"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318377013939", 
							  "message": "午安喔^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030582, 
							  "id": "1163303473682096_1163318377013939"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318420347268", 
							  "message": "午安喔^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030589, 
							  "id": "1163303473682096_1163318420347268"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318440347266", 
							  "message": "午安^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030594, 
							  "id": "1163303473682096_1163318440347266"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318487013928", 
							  "message": "午安喔^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030603, 
							  "id": "1163303473682096_1163318487013928"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318507013926", 
							  "message": "午安喔^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030609, 
							  "id": "1163303473682096_1163318507013926"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318557013921", 
							  "message": "嗨^^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030616, 
							  "id": "1163303473682096_1163318557013921"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318587013918", 
							  "message": "哈囉^答對啦～今天在做什麼呢？", 
							  "created_time_ts": 1458030627, 
							  "id": "1163303473682096_1163318587013918"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163318757013901", 
							  "message": "讚喔^^再撐一下就下班啦～今天天氣好冷有多穿點嗎？", 
							  "created_time_ts": 1458030683, 
							  "id": "1163303473682096_1163318757013901"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163319113680532", 
							  "message": "賈中哥覺得家管要做的工作也蠻多的，也是很辛苦耶^^等等該不會要準備晚餐了嗎？", 
							  "created_time_ts": 1458030756, 
							  "id": "1163303473682096_1163319113680532"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163319323680511", 
							  "message": "辛苦啦> <專題的題目是什麼呢^^？", 
							  "created_time_ts": 1458030802, 
							  "id": "1163303473682096_1163319323680511"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163319390347171", 
							  "message": "真的！兩個都好小呀^^ 會不會調皮呢？", 
							  "created_time_ts": 1458030824, 
							  "id": "1163303473682096_1163319390347171"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163319603680483", 
							  "message": "哇^^再一年就要上幼稚園了耶～還是現在已經在上小班了呢？", 
							  "created_time_ts": 1458030867, 
							  "id": "1163303473682096_1163319603680483"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163319857013791", 
							  "message": "原來如此^^ 現在還在郵局嗎？", 
							  "created_time_ts": 1458030908, 
							  "id": "1163303473682096_1163319857013791"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163320813680362", 
							  "message": "麥當當超好吃的啊！孟芳也喜歡嗎^^？", 
							  "created_time_ts": 1458031079, 
							  "id": "1163303473682096_1163320813680362"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163325573679886", 
							  "message": "哈哈^^ 孟芳喜歡吃麥當當的什麼餐點呢？", 
							  "created_time_ts": 1458031592, 
							  "id": "1163303473682096_1163325573679886"
							}
						  ], 
						  "id": "241247139221072"
						}, 
						"10154654306123696": {
						  "url": "http://www.facebook.com/10154654306123696", 
						  "name": "Karl Chan", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998259853560598", 
							  "message": "柯潔必勝", 
							  "created_time_ts": 1458049389, 
							  "id": "998106096909307_998259853560598"
							}
						  ], 
						  "id": "10154654306123696"
						}, 
						"1657045287905230": {
						  "url": "http://www.facebook.com/1657045287905230", 
						  "name": "賴淑芳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150832348290273", 
							  "message": "小人之心度君子之腹。反應源物料降價有何不可?", 
							  "created_time_ts": 1458037061, 
							  "id": "1150810884959086_1150832348290273"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150833458290162", 
							  "message": "這樣又如何?對我們來說，很好啊!", 
							  "created_time_ts": 1458037255, 
							  "id": "1150810884959086_1150833458290162"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150833771623464", 
							  "message": "+1。", 
							  "created_time_ts": 1458037297, 
							  "id": "1150810884959086_1150833771623464"
							}
						  ], 
						  "id": "1657045287905230"
						}, 
						"925888990836833": {
						  "url": "http://www.facebook.com/925888990836833", 
						  "name": "葉泳新", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150818618291646", 
							  "message": "一定跳票的啊  有差?", 
							  "created_time_ts": 1458035261, 
							  "id": "1150810884959086_1150818618291646"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150820528291455", 
							  "message": "不應該降價是三小哈哈哈", 
							  "created_time_ts": 1458035342, 
							  "id": "1150810884959086_1150820528291455"
							}
						  ], 
						  "id": "925888990836833"
						}, 
						"862721613836562": {
						  "url": "http://www.facebook.com/862721613836562", 
						  "name": "林子明", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998150953571488", 
							  "message": "妳確定\"希望\"第四場是放水嗎？（AlphaGo表示：連我的設計團隊都不知道我放水呀...顆顆^^...人類...天網啟動！)", 
							  "created_time_ts": 1458033857, 
							  "id": "998106096909307_998150953571488"
							}
						  ], 
						  "id": "862721613836562"
						}, 
						"108887732538742": {
						  "url": "http://www.facebook.com/108887732538742", 
						  "name": "癮科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980471998713640?comment_id=981047355322771", 
							  "message": "聽起來好像快打界的Ric Flair...XDDDD", 
							  "created_time_ts": 1458002032, 
							  "id": "980471998713640_981047355322771"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980471998713640?comment_id=981047445322762", 
							  "message": "一針見血...", 
							  "created_time_ts": 1458002047, 
							  "id": "980471998713640_981047445322762"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980471998713640?comment_id=981047595322747", 
							  "message": "是這位嘉航嗎XDDDD", 
							  "created_time_ts": 1458002068, 
							  "id": "980471998713640_981047595322747"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980416312052542?comment_id=981048021989371", 
							  "message": "Chen Frank Ren 對對，全國電子也有賣，那時候鈕扣電池超麻煩的，還得請大人幫忙買幫忙換", 
							  "created_time_ts": 1458002130, 
							  "id": "980416312052542_981048021989371"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980416312052542?comment_id=981048438655996", 
							  "message": "玩章魚水下尋寶那一台Game&watch就是這樣，越滴越快，然後就被章魚腳抓到了XDDD", 
							  "created_time_ts": 1458002210, 
							  "id": "980416312052542_981048438655996"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980416312052542?comment_id=981048661989307", 
							  "message": "液晶螢幕放久了好像都會那個樣子，Gameboy也是", 
							  "created_time_ts": 1458002247, 
							  "id": "980416312052542_981048661989307"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978692415558265?comment_id=981048918655948", 
							  "message": "最可怕的就是小黑蚊", 
							  "created_time_ts": 1458002299, 
							  "id": "978692415558265_981048918655948"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981177111976462?comment_id=981205371973636", 
							  "message": "會比一般同級行動電源的重一些，畢竟內建了變壓器，小編在找插座是覺得不算太麻煩，不過如果隔壁插了本來就比較占位置的變壓器，例如 Macbook 、 ZenBook 那一型的，就要看插座的方向了，好處是可以不用帶變壓器，本身也可以邊充邊輸出，但原廠不建議這樣就是...", 
							  "created_time_ts": 1458023231, 
							  "id": "981177111976462_981205371973636"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980451868715653?comment_id=981205778640262", 
							  "message": "其實沒有耶， 6 系列初代其實就是 800 的前身， 800 反而強化了時脈跟 GPU ，不過當時比較大的問題應該是因為製程關係所以高階的 800 很需要更好的散熱，如果散熱規劃不良，跑分的時候就會因為過熱降頻跟關閉核心，分數就難看了...", 
							  "created_time_ts": 1458023347, 
							  "id": "980451868715653_981205778640262"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981177111976462?comment_id=981274028633437", 
							  "message": "不過自帶插頭的那款比較頭痛是它 QC 2.0 只有內建線才有， USB 孔沒有，但那條線不是很好抽取跟收納...", 
							  "created_time_ts": 1458033899, 
							  "id": "981177111976462_981274028633437"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981307005296806", 
							  "message": "不怕一萬 就怕萬一囉～ 小編身邊開車的朋友就滿多都有遇過車子沒電發不動要借電的情況！", 
							  "created_time_ts": 1458039299, 
							  "id": "980468795380627_981307005296806"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981307078630132", 
							  "message": "是說影片內的嗎？", 
							  "created_time_ts": 1458039318, 
							  "id": "980468795380627_981307078630132"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981307488630091", 
							  "message": "真的！不然跟計程車司機借電 有些還要付個幾百，重點也不是每個人都願意幫忙說", 
							  "created_time_ts": 1458039379, 
							  "id": "980468795380627_981307488630091"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981307691963404", 
							  "message": "行動電源如果也沒電，那就是真的衰XD", 
							  "created_time_ts": 1458039420, 
							  "id": "980468795380627_981307691963404"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978663522227821?comment_id=981307921963381", 
							  "message": "小編是女生啊XD", 
							  "created_time_ts": 1458039481, 
							  "id": "978663522227821_981307921963381"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/978663522227821?comment_id=981308245296682", 
							  "message": "哇～感謝你的分享耶！", 
							  "created_time_ts": 1458039538, 
							  "id": "978663522227821_981308245296682"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981256215301885?comment_id=981383778622462", 
							  "message": "上個世代的電子遊戲機啊XDDDD", 
							  "created_time_ts": 1458049223, 
							  "id": "981256215301885_981383778622462"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=981413765286130", 
							  "message": "是的", 
							  "created_time_ts": 1458052276, 
							  "id": "981180218642818_981413765286130"
							}
						  ], 
						  "id": "108887732538742"
						}, 
						"1066811143338796": {
						  "url": "http://www.facebook.com/1066811143338796", 
						  "name": "Janet Hwang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150867948286713", 
							  "message": "這根本不該扯到兩位總統的", 
							  "created_time_ts": 1458041882, 
							  "id": "1150810884959086_1150867948286713"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150870494953125", 
							  "message": "因為資方是弱勢，資方是\"營利\"單位，註該被扒皮。契約電價是一個，外加流動電價，隨便就破萬！從勞保健保等，資方要負擔的不是六成就是七成。就業保險的部份還全部是資方負擔的，也就是說大家領的失業給付，其實是所有老闆聯合蓋起的大水庫。(對不起，我離題了，但.....有氣！)", 
							  "created_time_ts": 1458042209, 
							  "id": "1150810884959086_1150870494953125"
							}
						  ], 
						  "id": "1066811143338796"
						}, 
						"1121604131191784": {
						  "url": "http://www.facebook.com/1121604131191784", 
						  "name": "謝崇立", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998010126918904?comment_id=998315350221715", 
							  "message": "那是因為sony的手機有那水準跟技術\n技術夠，成本就低\n而且拼的是藍海，\n防水機能現在連蘋果都要模仿", 
							  "created_time_ts": 1458055659, 
							  "id": "998010126918904_998315350221715"
							}
						  ], 
						  "id": "1121604131191784"
						}, 
						"1269325303084818": {
						  "url": "http://www.facebook.com/1269325303084818", 
						  "name": "蔡杰恩", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153981316024561", 
							  "message": "馬可白 鄭欣怡", 
							  "created_time_ts": 1457702122, 
							  "id": "10153967419774561_10153981316024561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991790214561", 
							  "message": "天哪 鄭欣怡我終於中獎我都要哭了", 
							  "created_time_ts": 1458032263, 
							  "id": "10153967419774561_10153991790214561"
							}, 
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991891279561", 
							  "message": "皇天不負苦心人！", 
							  "created_time_ts": 1458034704, 
							  "id": "10153967419774561_10153991891279561"
							}
						  ], 
						  "id": "1269325303084818"
						}, 
						"1110643265627224": {
						  "url": "http://www.facebook.com/1110643265627224", 
						  "name": "何承翰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998010126918904?comment_id=998084063578177", 
							  "message": "旗艦機價格都那樣啦  只是中低階機種比較少", 
							  "created_time_ts": 1458029896, 
							  "id": "998010126918904_998084063578177"
							}
						  ], 
						  "id": "1110643265627224"
						}, 
						"1304825342880413": {
						  "url": "http://www.facebook.com/1304825342880413", 
						  "name": "Cloud CF", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998144683572115", 
							  "message": "Alpha Go 之前的那局明顯 “放水” ，讓人類勝一局！", 
							  "created_time_ts": 1458033350, 
							  "id": "998106096909307_998144683572115"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998183566901560", 
							  "message": "我對人類還有希望，接下來 柯潔 上陣！", 
							  "created_time_ts": 1458039120, 
							  "id": "998106096909307_998183566901560"
							}
						  ], 
						  "id": "1304825342880413"
						}, 
						"1197889706895816": {
						  "url": "http://www.facebook.com/1197889706895816", 
						  "name": "鄭欣怡", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/139467854560/posts/10153967419774561?comment_id=10153991877829561", 
							  "message": "有志者事竟成XDDDD", 
							  "created_time_ts": 1458034457, 
							  "id": "10153967419774561_10153991877829561"
							}
						  ], 
						  "id": "1197889706895816"
						}, 
						"1129378980436294": {
						  "url": "http://www.facebook.com/1129378980436294", 
						  "name": "黃子倪", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163541270324983", 
							  "message": "賈中哥，我知道答案是1.0 2.X 3.0 4.X\n葉暁渂 Mai Hsuna Kuo 林澤瑋你覺得呢？", 
							  "created_time_ts": 1458053646, 
							  "id": "1163303473682096_1163541270324983"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163541423658301", 
							  "message": "我的答案跟妳一樣ㄟ", 
							  "created_time_ts": 1458053673, 
							  "id": "1163303473682096_1163541423658301"
							}
						  ], 
						  "id": "1129378980436294"
						}, 
						"10154115317885934": {
						  "url": "http://www.facebook.com/10154115317885934", 
						  "name": "Arphen Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998228660230384", 
							  "message": "人類不會和汽車比賽跑，因為那本來就不是人類的強項；但智力是人類在地球萬物中引以為傲的天賦，當這個支點被撼動，人類還剩下什麼？", 
							  "created_time_ts": 1458044301, 
							  "id": "998106096909307_998228660230384"
							}
						  ], 
						  "id": "10154115317885934"
						}, 
						"809450209181008": {
						  "url": "http://www.facebook.com/809450209181008", 
						  "name": "葉暁渂", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163384857007291", 
							  "message": "賈中哥，我知道答案是1.0 2.X 3.0 4.X\nMai Hsuna Kuo 黃子倪 林澤瑋你覺得呢？", 
							  "created_time_ts": 1458038749, 
							  "id": "1163303473682096_1163384857007291"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163384940340616", 
							  "message": "https://m.facebook.com/story.php?story_fbid=828362750623087&id=100003481096108", 
							  "created_time_ts": 1458038769, 
							  "id": "1163303473682096_1163384940340616"
							}
						  ], 
						  "id": "809450209181008"
						}, 
						"186328018390877": {
						  "url": "http://www.facebook.com/186328018390877", 
						  "name": "Mai Hsuna Kuo", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163399210339189", 
							  "message": "答對了喔！ 巧喔！", 
							  "created_time_ts": 1458040648, 
							  "id": "1163303473682096_1163399210339189"
							}, 
							{
							  "url": "https://www.facebook.com/241247139221072/posts/1163303473682096?comment_id=1163542440324866", 
							  "message": "都對喔！ 妳真巧喔！", 
							  "created_time_ts": 1458053800, 
							  "id": "1163303473682096_1163542440324866"
							}
						  ], 
						  "id": "186328018390877"
						}, 
						"989769944435655": {
						  "url": "http://www.facebook.com/989769944435655", 
						  "name": "Tsou Chieh", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998174486902468", 
							  "message": "但是三輪車不是人 \n現在就是\n人類圍棋與電腦圍棋\n人類的腳與汽車\n這樣的比較而已", 
							  "created_time_ts": 1458037516, 
							  "id": "998106096909307_998174486902468"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998174866902430", 
							  "message": "簡單來說就是\n即使發明出百戰百勝的電腦\n也不會讓人類的圍棋比賽消失", 
							  "created_time_ts": 1458037626, 
							  "id": "998106096909307_998174866902430"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998106096909307?comment_id=998208530232397", 
							  "message": "但是跟汽車還有三輪車的比較完全沒關係就是了", 
							  "created_time_ts": 1458041829, 
							  "id": "998106096909307_998208530232397"
							}
						  ], 
						  "id": "989769944435655"
						}, 
						"1186367444747930": {
						  "url": "http://www.facebook.com/1186367444747930", 
						  "name": "Jason Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997662583620325", 
							  "message": "這種跟南韓有關的爛新聞就不用分享了，虧你還混高科技的，沒腦子過濾資訊嗎？", 
							  "created_time_ts": 1457969746, 
							  "id": "997598313626752_997662583620325"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/997598313626752?comment_id=997888826931034", 
							  "message": "我那裏提到國家兩個字，眼睛脫窗...", 
							  "created_time_ts": 1457997824, 
							  "id": "997598313626752_997888826931034"
							}
						  ], 
						  "id": "1186367444747930"
						}
					  };
						this.links = [
						{
						  "user_id": "1226887863994107", 
						  "links": [
							"1798428030384659", 
							"1226887863994107", 
							"10154115317885934", 
							"989769944435655", 
							"963254320425296"
						  ], 
						  "leader_ratio": 60
						}, 
						{
						  "user_id": "1299073050108372", 
						  "links": [
							"1066811143338796", 
							"520413578140187", 
							"1657045287905230", 
							"925888990836833"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "462248447295064", 
						  "links": [
							"1121604131191784", 
							"1488036894835602", 
							"1110643265627224", 
							"108887732538742"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1039137259480820", 
						  "links": [
							"1121360294565129", 
							"1039137259480820", 
							"241247139221072"
						  ], 
						  "leader_ratio": 41
						}, 
						{
						  "user_id": "1269325303084818", 
						  "links": [
							"1269325303084818", 
							"1197889706895816", 
							"139467854560"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "10205987174058459", 
						  "links": [
							"1061975607154874", 
							"940073292780688", 
							"10205987174058459"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "809450209181008", 
						  "links": [
							"1129378980436294", 
							"186328018390877", 
							"809450209181008"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "10203769465315456", 
						  "links": [
							"10203769465315456", 
							"1657045287905230", 
							"925888990836833"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1304825342880413", 
						  "links": [
							"10154654306123696", 
							"1304825342880413", 
							"862721613836562"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1186367444747930", 
						  "links": [
							"972789602813474", 
							"1186367444747930", 
							"494916767360270"
						  ], 
						  "leader_ratio": 33
						}
					  ];
					break;
					case "2016-03-19":
						this.nodes = {
						"10201291451525586": {
						  "url": "http://www.facebook.com/10201291451525586", 
						  "name": "黃其君", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151250034915171", 
							  "message": "調降干馬英九屁事?  電價調整 是包含了民代 、ngo代表， 然後有立法院核定的公式， 你怎麼不怪立法院 惡搞公式呢?", 
							  "created_time_ts": 1458079102, 
							  "id": "1150810884959086_1151250034915171"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151251984914976", 
							  "message": "立法院上期利委和那些怪怪NGO\n\n立法院104年1月20日第8屆第6會期第18次會議通過電價計算公式，並決議應設置「電價費率審議會」，其中與電價公式相關包括：\n\n合理利潤之投資報酬率設定為3%至5%，有累積虧損待彌補期間，投資報酬率上限5%，全數彌補累積虧損；累積虧損不存在時，投資報酬率降為3%。", 
							  "created_time_ts": 1458079273, 
							  "id": "1150810884959086_1151251984914976"
							}
						  ], 
						  "id": "10201291451525586"
						}, 
						"1120975161267551": {
						  "url": "http://www.facebook.com/1120975161267551", 
						  "name": "江懿凡", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163469633686422", 
							  "message": "廖珮紋  趙典妤", 
							  "created_time_ts": 1458137299, 
							  "id": "1163350940364958_1163469633686422"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163474433685942", 
							  "message": "太困難啦~", 
							  "created_time_ts": 1458137619, 
							  "id": "1163350940364958_1163474433685942"
							}
						  ], 
						  "id": "1120975161267551"
						}, 
						"10153418530222894": {
						  "url": "http://www.facebook.com/10153418530222894", 
						  "name": "Vivian Chao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498?comment_id=998909446828972", 
							  "message": "無恥還假清高", 
							  "created_time_ts": 1458138849, 
							  "id": "998724186847498_998909446828972"
							}
						  ], 
						  "id": "10153418530222894"
						}, 
						"1657045287905230": {
						  "url": "http://www.facebook.com/1657045287905230", 
						  "name": "賴淑芳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151056474934527", 
							  "message": "這回饋給民眾我覺得很ok呀!過去電價漲，民眾罵聲連連，現在降價剛好而已呀!", 
							  "created_time_ts": 1458059228, 
							  "id": "1150810884959086_1151056474934527"
							}
						  ], 
						  "id": "1657045287905230"
						}, 
						"209222272761389": {
						  "url": "http://www.facebook.com/209222272761389", 
						  "name": "Jason Rebirth", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981953455232161", 
							  "message": "我也是去美國看到的", 
							  "created_time_ts": 1458121110, 
							  "id": "981672618593578_981953455232161"
							}
						  ], 
						  "id": "209222272761389"
						}, 
						"10154010333299127": {
						  "url": "http://www.facebook.com/10154010333299127", 
						  "name": "Tina Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864997005491", 
							  "message": "往後有可能舉辦在南部嗎?", 
							  "created_time_ts": 1458093226, 
							  "id": "10153864956245491_10153864997005491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865000820491", 
							  "message": "太好了 (Y) (Y) (Y)", 
							  "created_time_ts": 1458093430, 
							  "id": "10153864956245491_10153865000820491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865510585491", 
							  "message": "吳逸凡 當然要儲備多點能力啊(眨眼", 
							  "created_time_ts": 1458111229, 
							  "id": "10153864956245491_10153865510585491"
							}
						  ], 
						  "id": "10154010333299127"
						}, 
						"10208391912899729": {
						  "url": "http://www.facebook.com/10208391912899729", 
						  "name": "Huang Chunjung", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865171695491", 
							  "message": "中部有嗎?", 
							  "created_time_ts": 1458098996, 
							  "id": "10153864956245491_10153865171695491"
							}
						  ], 
						  "id": "10208391912899729"
						}, 
						"10153959946699612": {
						  "url": "http://www.facebook.com/10153959946699612", 
						  "name": "Jamie Wang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981942391899934", 
							  "message": "這東西從小看到大", 
							  "created_time_ts": 1458118676, 
							  "id": "981672618593578_981942391899934"
							}
						  ], 
						  "id": "10153959946699612"
						}, 
						"1181407098536643": {
						  "url": "http://www.facebook.com/1181407098536643", 
						  "name": "雨晴", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982081235219383", 
							  "message": "我拿我弟的二手的HTC ONE X也拿了四年了", 
							  "created_time_ts": 1458137079, 
							  "id": "981970181897155_982081235219383"
							}
						  ], 
						  "id": "1181407098536643"
						}, 
						"10206536228501945": {
						  "url": "http://www.facebook.com/10206536228501945", 
						  "name": "Jeff Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566?comment_id=10153266780251566", 
							  "message": "噓，讓他繼續作夢", 
							  "created_time_ts": 1458076566, 
							  "id": "10153265594971566_10153266780251566"
							}
						  ], 
						  "id": "10206536228501945"
						}, 
						"1082275698451273": {
						  "url": "http://www.facebook.com/1082275698451273", 
						  "name": "YR Wang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982067918554048", 
							  "message": "就另一種形式的分期付款阿\n你確定這年頭要你一支手機用兩年你受的了?", 
							  "created_time_ts": 1458136021, 
							  "id": "981970181897155_982067918554048"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982068275220679", 
							  "message": "自己想想看上隻手機用多久就換了", 
							  "created_time_ts": 1458136065, 
							  "id": "981970181897155_982068275220679"
							}
						  ], 
						  "id": "1082275698451273"
						}, 
						"1267747903252809": {
						  "url": "http://www.facebook.com/1267747903252809", 
						  "name": "黃朝雍", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982080505219456", 
							  "message": "用3年沒問題", 
							  "created_time_ts": 1458137010, 
							  "id": "981970181897155_982080505219456"
							}
						  ], 
						  "id": "1267747903252809"
						}, 
						"10206441916502702": {
						  "url": "http://www.facebook.com/10206441916502702", 
						  "name": "Jim Yeh", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982115341882639", 
							  "message": "NOKIA 智障手機用到唉鳳6出了才跟別人買了第一隻智慧型手機，並且是 iPhone 4沒有S", 
							  "created_time_ts": 1458140778, 
							  "id": "981970181897155_982115341882639"
							}
						  ], 
						  "id": "10206441916502702"
						}, 
						"959025574192908": {
						  "url": "http://www.facebook.com/959025574192908", 
						  "name": "王郁順", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007891712589718", 
							  "message": "欸老頭 講真的 我對你超好", 
							  "created_time_ts": 1458139384, 
							  "id": "1007174242661465_1007891712589718"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007892192589670", 
							  "message": "一看到盈翔的動態有政大的消息馬上請他tag你耶", 
							  "created_time_ts": 1458139423, 
							  "id": "1007174242661465_1007892192589670"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007892485922974", 
							  "message": "不知感恩真的是😒", 
							  "created_time_ts": 1458139446, 
							  "id": "1007174242661465_1007892485922974"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007894199256136", 
							  "message": "我看你明天是不想考段考了你這個死肥宅", 
							  "created_time_ts": 1458139560, 
							  "id": "1007174242661465_1007894199256136"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007896549255901", 
							  "message": "王盈翔偏心😒😒😒", 
							  "created_time_ts": 1458139791, 
							  "id": "1007174242661465_1007896549255901"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007901579255398", 
							  "message": "", 
							  "created_time_ts": 1458140294, 
							  "id": "1007174242661465_1007901579255398"
							}
						  ], 
						  "id": "959025574192908"
						}, 
						"10204491911937108": {
						  "url": "http://www.facebook.com/10204491911937108", 
						  "name": "Ron Yeh", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864983970491", 
							  "message": "藍逸雯還真好", 
							  "created_time_ts": 1458092947, 
							  "id": "10153864956245491_10153864983970491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864992260491", 
							  "message": "廖慶麟", 
							  "created_time_ts": 1458093122, 
							  "id": "10153864956245491_10153864992260491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864997050491", 
							  "message": "75小哈", 
							  "created_time_ts": 1458093230, 
							  "id": "10153864956245491_10153864997050491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865457750491", 
							  "message": "想學", 
							  "created_time_ts": 1458108700, 
							  "id": "10153864956245491_10153865457750491"
							}
						  ], 
						  "id": "10204491911937108"
						}, 
						"10203769465315456": {
						  "url": "http://www.facebook.com/10203769465315456", 
						  "name": "Abraham Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1150814921625349", 
							  "message": "不應該降價吧！馬英九擺明了要害小英。", 
							  "created_time_ts": 1458034760, 
							  "id": "1150810884959086_1150814921625349"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151083421598499", 
							  "message": "看多了二黨鬥爭，我現在對於政治都變得很小人。因為之前小英說不會大幅調升電價，在最近油價開始上漲、台電仍然虧損、廢核四會帶給台電更多虧損的情形下，馬政府卻調降電價，這明顯地違反馬英九之前説漲電價要弭補台電虧損的説法。另外，馬英九之前亂搞都不管小老百姓死活了，這次怎麼會那樣好心。那馬政府的目的何在？應該就是留給小英一個財務很糟的台電，一旦小英要調整電價，國民黨就會拿來攻擊民進黨説小英跳票。", 
							  "created_time_ts": 1458061617, 
							  "id": "1150810884959086_1151083421598499"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151083614931813", 
							  "message": "看多了二黨鬥爭，我現在對於政治都變得很小人。因為之前小英說不會大幅調升電價，在最近油價開始上漲、台電仍然虧損、廢核四會帶給台電更多虧損的情形下，馬政府卻調降電價，這明顯地違反馬英九之前説漲電價要弭補台電虧損的説法。另外，馬英九之前亂搞都不管小老百姓死活了，這次怎麼會那樣好心。那馬政府的目的何在？應該就是留給小英一個財務很糟的台電，一旦小英要調整電價，國民黨就會拿來攻擊民進黨説小英跳票。", 
							  "created_time_ts": 1458061646, 
							  "id": "1150810884959086_1151083614931813"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1150810884959086?comment_id=1151408288232679", 
							  "message": "真的有公式？原來電價也像油價一樣有個浮動公式在呀？從來沒有聽過耶。如果有公式，那大概是我比較小人。如果沒有呢？", 
							  "created_time_ts": 1458095699, 
							  "id": "1150810884959086_1151408288232679"
							}
						  ], 
						  "id": "10203769465315456"
						}, 
						"1967866196771829": {
						  "url": "http://www.facebook.com/1967866196771829", 
						  "name": "Yang Nash", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498?comment_id=998736793512904", 
							  "message": "不要說日本連台灣自己本身有多少假帳也只有企業跟財團自己知道…", 
							  "created_time_ts": 1458114575, 
							  "id": "998724186847498_998736793512904"
							}
						  ], 
						  "id": "1967866196771829"
						}, 
						"957534284293704": {
						  "url": "http://www.facebook.com/957534284293704", 
						  "name": "James Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781?comment_id=952075718217805", 
							  "message": "比賽時它的智慧只限於圍棋，不會有什麼完整思考系統", 
							  "created_time_ts": 1458117583, 
							  "id": "951415958283781_952075718217805"
							}
						  ], 
						  "id": "957534284293704"
						}, 
						"522140411298048": {
						  "url": "http://www.facebook.com/522140411298048", 
						  "name": "彭成正", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007856855926537", 
							  "message": "痾......王郁順踹共", 
							  "created_time_ts": 1458135923, 
							  "id": "1007174242661465_1007856855926537"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007893809256175", 
							  "message": "最好是啦!老太婆", 
							  "created_time_ts": 1458139491, 
							  "id": "1007174242661465_1007893809256175"
							}
						  ], 
						  "id": "522140411298048"
						}, 
						"1054419137938850": {
						  "url": "http://www.facebook.com/1054419137938850", 
						  "name": "毕云", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781?comment_id=952092074882836", 
							  "message": "这算ai吗？感觉就是bot……那ai又是什么？", 
							  "created_time_ts": 1458120298, 
							  "id": "951415958283781_952092074882836"
							}
						  ], 
						  "id": "1054419137938850"
						}, 
						"478496805690912": {
						  "url": "http://www.facebook.com/478496805690912", 
						  "name": "廖珮紋", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163470983686287", 
							  "message": "我喜歡♡", 
							  "created_time_ts": 1458137403, 
							  "id": "1163350940364958_1163470983686287"
							}
						  ], 
						  "id": "478496805690912"
						}, 
						"440654996134941": {
						  "url": "http://www.facebook.com/440654996134941", 
						  "name": "馬紹川", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998176600235590?comment_id=998225520230698", 
							  "message": "相機跟蘋果比？把Sony. Meitu. Casio放哪？", 
							  "created_time_ts": 1458043952, 
							  "id": "998176600235590_998225520230698"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998176600235590?comment_id=998392326880684", 
							  "message": "Spencer LB Chan 據說很多黑Meitu的人 是曾經被女伴央求買一台除了自拍 時尚 神馬功能都木有的手機", 
							  "created_time_ts": 1458065626, 
							  "id": "998176600235590_998392326880684"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498?comment_id=998890003497583", 
							  "message": "我高中的時候學校蓋了個籃球場 搭個鐵皮遮雨棚報價三千多萬", 
							  "created_time_ts": 1458136121, 
							  "id": "998724186847498_998890003497583"
							}
						  ], 
						  "id": "440654996134941"
						}, 
						"1184316938245951": {
						  "url": "http://www.facebook.com/1184316938245951", 
						  "name": "Tang Wei Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981930488567791", 
							  "message": "這在美國真的到處都是...\n而且十幾年前就有了", 
							  "created_time_ts": 1458117017, 
							  "id": "981672618593578_981930488567791"
							}
						  ], 
						  "id": "1184316938245951"
						}, 
						"1243188625696163": {
						  "url": "http://www.facebook.com/1243188625696163", 
						  "name": "呂偉志", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566?comment_id=10153266280536566", 
							  "message": "他最後希望用黑棋打贏電腦啊", 
							  "created_time_ts": 1458060052, 
							  "id": "10153265594971566_10153266280536566"
							}
						  ], 
						  "id": "1243188625696163"
						}, 
						"1079754132047504": {
						  "url": "http://www.facebook.com/1079754132047504", 
						  "name": "梁晉偉", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781?comment_id=951963648229012", 
							  "message": "Alpha GO 應該是比較複雜的演算系統而已啦 照理來說是沒有放進這種無關緊要的其他處理程序 O_O 應該啦...", 
							  "created_time_ts": 1458099435, 
							  "id": "951415958283781_951963648229012"
							}
						  ], 
						  "id": "1079754132047504"
						}, 
						"175751339463056": {
						  "url": "http://www.facebook.com/175751339463056", 
						  "name": "Ching Chi Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498?comment_id=998726926847224", 
							  "message": "日本人真的做假帳做上癮了，有臉笑中國？中國的員工都還沒這麼奴性。\n作假帳還不是最可惡的，最可惡的是作假帳還被查出來，作假帳已經是無恥了，無恥也就罷了，居然還被查出來，根本無能到極點，有種作假就要有把握做到300%完美，不然就別出來混，一家企業養了一堆無恥又無能的經營階層，全部裁掉剛剛好！就像國民黨有種貪汙就要有保握把貪汙工作做到100%完美讓人查不出來，連做假都偷工減料，標準的廢物...", 
							  "created_time_ts": 1458112333, 
							  "id": "998724186847498_998726926847224"
							}
						  ], 
						  "id": "175751339463056"
						}, 
						"755038764592930": {
						  "url": "http://www.facebook.com/755038764592930", 
						  "name": "陳寗說科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981750341919139?comment_id=981859098574930", 
							  "message": "首先你要說服財政部長，讓他知道先在把他拍醜完全是相機爛的緣故", 
							  "created_time_ts": 1458108545, 
							  "id": "981750341919139_981859098574930"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981750341919139?comment_id=981859131908260", 
							  "message": "你贏了", 
							  "created_time_ts": 1458108555, 
							  "id": "981750341919139_981859131908260"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982072788553561", 
							  "message": "我的 iPhone 都是用滿兩年，隔年再換新 iPhone", 
							  "created_time_ts": 1458136299, 
							  "id": "981970181897155_982072788553561"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982072875220219", 
							  "message": "我的上一台 MacBook Pro 從 2009 年用到 2015 年才換", 
							  "created_time_ts": 1458136321, 
							  "id": "981970181897155_982072875220219"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981750341919139?comment_id=982075581886615", 
							  "message": "以後購買之前先來跟我聊聊，每個私訊我的粉絲最後都能忠於自己的偏好，購買最高價的產品。\n\n沒為什麼，只因為你值得這麼好的產品。", 
							  "created_time_ts": 1458136421, 
							  "id": "981750341919139_982075581886615"
							}
						  ], 
						  "id": "755038764592930"
						}, 
						"1224474170902677": {
						  "url": "http://www.facebook.com/1224474170902677", 
						  "name": "許智晴", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982095435217963", 
							  "message": "我都用兩年多", 
							  "created_time_ts": 1458138648, 
							  "id": "981970181897155_982095435217963"
							}
						  ], 
						  "id": "1224474170902677"
						}, 
						"108887732538742": {
						  "url": "http://www.facebook.com/108887732538742", 
						  "name": "癮科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981752868585553?comment_id=981798288581011", 
							  "message": "硬體規模大家應該不會差到太多，接下來就是看軟體能變出怎樣的魔法了", 
							  "created_time_ts": 1458099580, 
							  "id": "981752868585553_981798288581011"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980652112028962?comment_id=981812025246304", 
							  "message": "應該不是這麼回事吧.....", 
							  "created_time_ts": 1458101582, 
							  "id": "980652112028962_981812025246304"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980652112028962?comment_id=981815445245962", 
							  "message": "感覺他們應該做過很多次", 
							  "created_time_ts": 1458102186, 
							  "id": "980652112028962_981815445245962"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980652112028962?comment_id=981815558579284", 
							  "message": "配命運交響曲的話感覺應該也不會比較好.....", 
							  "created_time_ts": 1458102212, 
							  "id": "980652112028962_981815558579284"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981939001900273", 
							  "message": "會有種忍不住的感覺哈哈", 
							  "created_time_ts": 1458118027, 
							  "id": "981672618593578_981939001900273"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981939148566925", 
							  "message": "其實國外也有很多有趣的其他種類捐款箱喔！\n之前也有看過硬幣向前滾，撞倒骨牌會有照片出來的，記得好像是在丹麥之類的", 
							  "created_time_ts": 1458118075, 
							  "id": "981672618593578_981939148566925"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981939181900255", 
							  "message": "感覺這更貴了哈哈", 
							  "created_time_ts": 1458118083, 
							  "id": "981672618593578_981939181900255"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=981939611900212", 
							  "message": "其他國家應該也有很多酷的", 
							  "created_time_ts": 1458118098, 
							  "id": "981672618593578_981939611900212"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981296088631231?comment_id=981940441900129", 
							  "message": "網址在哪（張望）", 
							  "created_time_ts": 1458118345, 
							  "id": "981296088631231_981940441900129"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981296088631231?comment_id=981940535233453", 
							  "message": "可惜癮科技沒在賣哈哈", 
							  "created_time_ts": 1458118368, 
							  "id": "981296088631231_981940535233453"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981296088631231?comment_id=981940588566781", 
							  "message": "哈哈哈哈\n每個人需求不同吧", 
							  "created_time_ts": 1458118377, 
							  "id": "981296088631231_981940588566781"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981275965299910?comment_id=981941461900027", 
							  "message": "", 
							  "created_time_ts": 1458118445, 
							  "id": "981275965299910_981941461900027"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981275965299910?comment_id=981941508566689", 
							  "message": "滿可愛的說真的XD", 
							  "created_time_ts": 1458118460, 
							  "id": "981275965299910_981941508566689"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981977545229752", 
							  "message": "那也要有才行啊！而且可不是沒電時都剛好在停車場附近呢", 
							  "created_time_ts": 1458124438, 
							  "id": "980468795380627_981977545229752"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981977671896406", 
							  "message": "哈哈哈哈哈", 
							  "created_time_ts": 1458124459, 
							  "id": "980468795380627_981977671896406"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/980468795380627?comment_id=981977898563050", 
							  "message": "smarturl.it/ebc502 這裏喔！！優會只到明天～", 
							  "created_time_ts": 1458124485, 
							  "id": "980468795380627_981977898563050"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981846598576180?comment_id=982125571881616", 
							  "message": "超讚的呀～", 
							  "created_time_ts": 1458142060, 
							  "id": "981846598576180_982125571881616"
							}
						  ], 
						  "id": "108887732538742"
						}, 
						"203983873303126": {
						  "url": "http://www.facebook.com/203983873303126", 
						  "name": "王盈翔", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007795049266051", 
							  "message": "彭成正 王郁順叫我tag你她說你要考政大中文系", 
							  "created_time_ts": 1458128012, 
							  "id": "1007174242661465_1007795049266051"
							}, 
							{
							  "url": "https://www.facebook.com/438699959508899/posts/1007174242661465?comment_id=1007899205922302", 
							  "message": "什麼？(飄過~~~", 
							  "created_time_ts": 1458140050, 
							  "id": "1007174242661465_1007899205922302"
							}
						  ], 
						  "id": "203983873303126"
						}, 
						"723333721131547": {
						  "url": "http://www.facebook.com/723333721131547", 
						  "name": "陳郁翔", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566?comment_id=10153266230776566", 
							  "message": "不要每次都這樣歧視別人，尤其對方還是潛在盟國的時候...而且這位我覺得很有大師風範，明白地說AlphaGo有Bug(執黑棋而先手時較弱)而不願意去利用這Bug", 
							  "created_time_ts": 1458058092, 
							  "id": "10153265594971566_10153266230776566"
							}
						  ], 
						  "id": "723333721131547"
						}, 
						"996422513778660": {
						  "url": "http://www.facebook.com/996422513778660", 
						  "name": "廖慶麟", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864995510491", 
							  "message": "好想去啊~~", 
							  "created_time_ts": 1458093207, 
							  "id": "10153864956245491_10153864995510491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864996965491", 
							  "message": "可是一週七十五小時我現在的工作就要掰掰了QAQ", 
							  "created_time_ts": 1458093225, 
							  "id": "10153864956245491_10153864996965491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865000895491", 
							  "message": "Jamie大出現了,因為我現在是上一屆團隊的ios intern所以才很想去rrrr(膜拜", 
							  "created_time_ts": 1458093434, 
							  "id": "10153864956245491_10153865000895491"
							}
						  ], 
						  "id": "996422513778660"
						}, 
						"1048516588504196": {
						  "url": "http://www.facebook.com/1048516588504196", 
						  "name": "趙典妤", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163471293686256", 
							  "message": "做給我XD", 
							  "created_time_ts": 1458137456, 
							  "id": "1163350940364958_1163471293686256"
							}
						  ], 
						  "id": "1048516588504196"
						}, 
						"1201890426491011": {
						  "url": "http://www.facebook.com/1201890426491011", 
						  "name": "張文健", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981672618593578?comment_id=982050978555742", 
							  "message": "很多國家都有啦", 
							  "created_time_ts": 1458133902, 
							  "id": "981672618593578_982050978555742"
							}
						  ], 
						  "id": "1201890426491011"
						}, 
						"1046039472102372": {
						  "url": "http://www.facebook.com/1046039472102372", 
						  "name": "Ken Chu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781?comment_id=951499318275445", 
							  "message": "那一場人類勝利的戰局，反而讓我覺得可怕，若以科幻片可能劇情，那就像病毒那樣，沒有發展誠完整AI且拿到控制權之前，刻意輸一場，表示還有進步空間，讓人類繼續對AI做Perfection的改善", 
							  "created_time_ts": 1458045744, 
							  "id": "951415958283781_951499318275445"
							}, 
							{
							  "url": "https://www.facebook.com/161283787297006/posts/951415958283781?comment_id=952099631548747", 
							  "message": "Google不是吃素的，Google不會沒事只發明一個只會下棋的Ai,會學習這一點就是要警惕的事情，除非是計畫的發起人，不然不知道是單純如此，或者比一般人類想得那麼簡單……\n又如鴻海跟SoftBank 的Pepper,透過接受到的資訊輸入雲端再整合然後又從雲端整合後可以再學習，Pepper是家用服務系統，AlphaGo是策略系統(甚至要講戰略系統也可以)。\nGoogle是商業公司，發明這個有其用處，不會只是單純下棋，相信Pepper可以透過雲端整合學習，一堆天才工程師聚集且雲端本行的Google Alphago一定也可(況且本身他就是在Google雲端伺服器的一個巨大程式)", 
							  "created_time_ts": 1458120981, 
							  "id": "951415958283781_952099631548747"
							}
						  ], 
						  "id": "1046039472102372"
						}, 
						"544760179022897": {
						  "url": "http://www.facebook.com/544760179022897", 
						  "name": "Uriel Engill", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566?comment_id=10153266232086566", 
							  "message": "跟韓國人什麼關係...他就是他啊。", 
							  "created_time_ts": 1458058178, 
							  "id": "10153265594971566_10153266232086566"
							}
						  ], 
						  "id": "544760179022897"
						}, 
						"990258867687864": {
						  "url": "http://www.facebook.com/990258867687864", 
						  "name": "吳逸凡", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865131440491", 
							  "message": "Tina Cheng 提娜妳要轉行了嗎？", 
							  "created_time_ts": 1458097800, 
							  "id": "10153864956245491_10153865131440491"
							}
						  ], 
						  "id": "990258867687864"
						}, 
						"10205411324430445": {
						  "url": "http://www.facebook.com/10205411324430445", 
						  "name": "Howard Hou", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265594971566?comment_id=10153265698931566", 
							  "message": "韓國人只贏一次就以為贏定了，被打臉了吧！", 
							  "created_time_ts": 1458038252, 
							  "id": "10153265594971566_10153265698931566"
							}
						  ], 
						  "id": "10205411324430445"
						}, 
						"150738220490": {
						  "url": "http://www.facebook.com/150738220490", 
						  "name": "Mr.Jamie", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864982460491", 
							  "message": "當然", 
							  "created_time_ts": 1458092880, 
							  "id": "10153864956245491_10153864982460491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864999410491", 
							  "message": "主要是為了計劃轉職的人才設計的", 
							  "created_time_ts": 1458093368, 
							  "id": "10153864956245491_10153864999410491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864999640491", 
							  "message": "有哦", 
							  "created_time_ts": 1458093379, 
							  "id": "10153864956245491_10153864999640491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153864999765491", 
							  "message": "當然可以", 
							  "created_time_ts": 1458093388, 
							  "id": "10153864956245491_10153864999765491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865062730491", 
							  "message": "很高興認識你。如果這一屆不方便也沒關係，未來還會持續開課。", 
							  "created_time_ts": 1458095578, 
							  "id": "10153864956245491_10153865062730491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865064165491", 
							  "message": "有哦，很快就會開", 
							  "created_time_ts": 1458095632, 
							  "id": "10153864956245491_10153865064165491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865065630491", 
							  "message": "會一直持續開下去", 
							  "created_time_ts": 1458095687, 
							  "id": "10153864956245491_10153865065630491"
							}, 
							{
							  "url": "https://www.facebook.com/150738220490/posts/10153864956245491?comment_id=10153865065825491", 
							  "message": "未來有機會", 
							  "created_time_ts": 1458095692, 
							  "id": "10153864956245491_10153865065825491"
							}
						  ], 
						  "id": "150738220490"
						}, 
						"1078047338884045": {
						  "url": "http://www.facebook.com/1078047338884045", 
						  "name": "Jun Jiang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163471277019591", 
							  "message": "好像你哦阿凡", 
							  "created_time_ts": 1458137453, 
							  "id": "1163350940364958_1163471277019591"
							}
						  ], 
						  "id": "1078047338884045"
						}, 
						"461664477366685": {
						  "url": "http://www.facebook.com/461664477366685", 
						  "name": "Mifi  Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/998724186847498?comment_id=998728810180369", 
							  "message": "中國是獸性！大佬性！皇帝性！\n台灣人是奴性。", 
							  "created_time_ts": 1458112781, 
							  "id": "998724186847498_998728810180369"
							}
						  ], 
						  "id": "461664477366685"
						}
					  };
						this.links = [
						{
						  "user_id": "1082275698451273", 
						  "links": [
							"10206441916502702", 
							"1224474170902677", 
							"1181407098536643", 
							"1267747903252809", 
							"755038764592930", 
							"1082275698451273"
						  ], 
						  "leader_ratio": 67
						}, 
						{
						  "user_id": "10154010333299127", 
						  "links": [
							"10154010333299127", 
							"10208391912899729", 
							"990258867687864", 
							"150738220490"
						  ], 
						  "leader_ratio": 45
						}, 
						{
						  "user_id": "1120975161267551", 
						  "links": [
							"1120975161267551", 
							"1048516588504196", 
							"1078047338884045", 
							"478496805690912"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1046039472102372", 
						  "links": [
							"1046039472102372", 
							"1054419137938850", 
							"957534284293704", 
							"1079754132047504"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "175751339463056", 
						  "links": [
							"10153418530222894", 
							"440654996134941", 
							"1967866196771829", 
							"461664477366685"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1184316938245951", 
						  "links": [
							"1201890426491011", 
							"209222272761389", 
							"10153959946699612", 
							"108887732538742"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "10205411324430445", 
						  "links": [
							"10206536228501945", 
							"1243188625696163", 
							"544760179022897", 
							"723333721131547"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "203983873303126", 
						  "links": [
							"959025574192908", 
							"203983873303126", 
							"522140411298048"
						  ], 
						  "leader_ratio": 39
						}, 
						{
						  "user_id": "10204491911937108", 
						  "links": [
							"150738220490", 
							"996422513778660", 
							"10204491911937108"
						  ], 
						  "leader_ratio": 37
						}, 
						{
						  "user_id": "10203769465315456", 
						  "links": [
							"10203769465315456", 
							"10201291451525586", 
							"1657045287905230"
						  ], 
						  "leader_ratio": 34
						}
					  ];
					break;
					case "2016-03-20":
						this.nodes = {
						"10201175500787650": {
						  "url": "http://www.facebook.com/10201175500787650", 
						  "name": "黃庭", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265674741566?comment_id=10153270287831566", 
							  "message": "當初是jobs從xerox偷來的好嗎", 
							  "created_time_ts": 1458213901, 
							  "id": "10153265674741566_10153270287831566"
							}
						  ], 
						  "id": "10201175500787650"
						}, 
						"10208015060603933": {
						  "url": "http://www.facebook.com/10208015060603933", 
						  "name": "Chou Yuling", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152404254799749", 
							  "message": "從去年10月到今年3月了，整整半年，台中的空氣汙染已經病入膏肓。合理懷疑台電採購給中火發電的煤炭品質真的沒有問題嗎? 以前的空汙有像去年開始這麼嚴重嗎? 台積電已經中科蓋了一大片，現在要繼續往上蓋到都會公園那邊。今年台積運轉後，中火又要再燃多少煤供電給台積? 台積電開心賺大錢，台中人只能認命求一口新鮮空氣不可得了嗎?", 
							  "created_time_ts": 1458209466, 
							  "id": "1152366651470176_1152404254799749"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152591348114373", 
							  "message": "火力發電可選用天然氣，就算燃煤煤炭品質也有區分。增加綠電也可以減少燃煤的需求。方法有很多種，只差有沒有意願改善而已。請不用在這裡說些似是而非，想要唬弄別人的廢話。", 
							  "created_time_ts": 1458227827, 
							  "id": "1152366651470176_1152591348114373"
							}
						  ], 
						  "id": "10208015060603933"
						}, 
						"1137706222929776": {
						  "url": "http://www.facebook.com/1137706222929776", 
						  "name": "周玉龍", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982212858539554", 
							  "message": "如果夠好用夠經典不至於那麼快淘汰，我的nokia8800arte還活的好好的~(目前邁向9年中~)", 
							  "created_time_ts": 1458151366, 
							  "id": "981970181897155_982212858539554"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982662798494560", 
							  "message": "capcom出香水?.....誰代工的?", 
							  "created_time_ts": 1458209543, 
							  "id": "982637015163805_982662798494560"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982730278487812", 
							  "message": "癮科技 如果出「回血用的救急噴霧」一定買~", 
							  "created_time_ts": 1458217533, 
							  "id": "982637015163805_982730278487812"
							}
						  ], 
						  "id": "1137706222929776"
						}, 
						"1014253635299585": {
						  "url": "http://www.facebook.com/1014253635299585", 
						  "name": "謝智仲", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252?comment_id=1525119927783474", 
							  "message": "吃不飽阿...這有毛用?", 
							  "created_time_ts": 1458205398, 
							  "id": "1525062147789252_1525119927783474"
							}
						  ], 
						  "id": "1014253635299585"
						}, 
						"10208330349561166": {
						  "url": "http://www.facebook.com/10208330349561166", 
						  "name": "囗刂囗", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982137675213739", 
							  "message": "就過期的展示機便宜賣給你啊！講得好像全新分期付款。葉佩雯膩？還轉二手文章勒。癮科技真的越來越令人失望。", 
							  "created_time_ts": 1458143556, 
							  "id": "981970181897155_982137675213739"
							}
						  ], 
						  "id": "10208330349561166"
						}, 
						"10201237714022269": {
						  "url": "http://www.facebook.com/10201237714022269", 
						  "name": "Wonder Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982190805208426", 
							  "message": "請問可否提供被Engadget踢出去的詳細內容@@，一直不太了解Engadget和癮科技的關係呢。", 
							  "created_time_ts": 1458149480, 
							  "id": "981970181897155_982190805208426"
							}
						  ], 
						  "id": "10201237714022269"
						}, 
						"1024216164307729": {
						  "url": "http://www.facebook.com/1024216164307729", 
						  "name": "Salome Liao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152562248117283", 
							  "message": "這個嘛 你知道要乾淨穩定的發電只能要核能嗎", 
							  "created_time_ts": 1458225615, 
							  "id": "1152366651470176_1152562248117283"
							}
						  ], 
						  "id": "1024216164307729"
						}, 
						"462938263904147": {
						  "url": "http://www.facebook.com/462938263904147", 
						  "name": "陳和彬", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152445758128932", 
							  "message": "經濟部u也是聽令行事的，現在問蔡總統比較正確", 
							  "created_time_ts": 1458214331, 
							  "id": "1152366651470176_1152445758128932"
							}
						  ], 
						  "id": "462938263904147"
						}, 
						"915583788531980": {
						  "url": "http://www.facebook.com/915583788531980", 
						  "name": "謝紹南", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153626935440674", 
							  "message": "Intel Atom 被任何一款ARM fixed function 在手機平台慘電，好像才是事實喔！", 
							  "created_time_ts": 1458227069, 
							  "id": "10153626079365674_10153626935440674"
							}
						  ], 
						  "id": "915583788531980"
						}, 
						"1389789557983179": {
						  "url": "http://www.facebook.com/1389789557983179", 
						  "name": "vMaker 台灣自造者", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525033827792084?comment_id=1525036781125122", 
							  "message": "工具人守則餒，show your respect!!!", 
							  "created_time_ts": 1458183816, 
							  "id": "1525033827792084_1525036781125122"
							}, 
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252?comment_id=1525079671120833", 
							  "message": "沒有，你講完我也覺得很像了", 
							  "created_time_ts": 1458193260, 
							  "id": "1525062147789252_1525079671120833"
							}, 
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252?comment_id=1525147137780753", 
							  "message": "這是藝術，是藝術（自己也覺得吃不飽）", 
							  "created_time_ts": 1458206841, 
							  "id": "1525062147789252_1525147137780753"
							}
						  ], 
						  "id": "1389789557983179"
						}, 
						"893754294055384": {
						  "url": "http://www.facebook.com/893754294055384", 
						  "name": "陳亞宣", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1147132145326960?comment_id=961943293841056", 
							  "message": "", 
							  "created_time_ts": 1458216959, 
							  "id": "1147132145326960_961943293841056"
							}
						  ], 
						  "id": "893754294055384"
						}, 
						"1197115220305873": {
						  "url": "http://www.facebook.com/1197115220305873", 
						  "name": "吳憂無慮", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=981401948620645", 
							  "message": "不知我是否買到地雷，這品牌的7Port的有時電腦上會顯示USB電源暴衝，然後就整個usb hub 就沒反應了。", 
							  "created_time_ts": 1458051232, 
							  "id": "981180218642818_981401948620645"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153626157395674", 
							  "message": "不知會不會跟AMD一樣，4核心打輸Intel 雙核心", 
							  "created_time_ts": 1458202357, 
							  "id": "10153626079365674_10153626157395674"
							}
						  ], 
						  "id": "1197115220305873"
						}, 
						"10209065459462069": {
						  "url": "http://www.facebook.com/10209065459462069", 
						  "name": "Chuck Kurt", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982750535152453", 
							  "message": "原來大家都不知道印表機出現前有繪圖機 從小看繪圖機到上國中", 
							  "created_time_ts": 1458219853, 
							  "id": "982351481859025_982750535152453"
							}
						  ], 
						  "id": "10209065459462069"
						}, 
						"10206445585792549": {
						  "url": "http://www.facebook.com/10206445585792549", 
						  "name": "Danny Wong", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982258285201678", 
							  "message": "我也有興趣", 
							  "created_time_ts": 1458155369, 
							  "id": "981970181897155_982258285201678"
							}
						  ], 
						  "id": "10206445585792549"
						}, 
						"1712057469029168": {
						  "url": "http://www.facebook.com/1712057469029168", 
						  "name": "陳淑娟", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1147132145326960?comment_id=510613179110662", 
							  "message": "謝謝妳的分享", 
							  "created_time_ts": 1458193297, 
							  "id": "1147132145326960_510613179110662"
							}
						  ], 
						  "id": "1712057469029168"
						}, 
						"1122045177814084": {
						  "url": "http://www.facebook.com/1122045177814084", 
						  "name": "Sean Hsu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265674741566?comment_id=10153269996611566", 
							  "message": "當初jobs也找ms 根本沒什麼吧...", 
							  "created_time_ts": 1458203198, 
							  "id": "10153265674741566_10153269996611566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265674741566?comment_id=10153270135851566", 
							  "message": "其實也不能說偷啦...畢竟Bill Gates 出很多錢..多到讓蘋果起死回生xd", 
							  "created_time_ts": 1458208426, 
							  "id": "10153265674741566_10153270135851566"
							}
						  ], 
						  "id": "1122045177814084"
						}, 
						"10207318283567696": {
						  "url": "http://www.facebook.com/10207318283567696", 
						  "name": "黃凡", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252?comment_id=1525120921116708", 
							  "message": "洗碗洗筷子用掉的能量可能比那口飯多", 
							  "created_time_ts": 1458205753, 
							  "id": "1525062147789252_1525120921116708"
							}
						  ], 
						  "id": "10207318283567696"
						}, 
						"1059623954125619": {
						  "url": "http://www.facebook.com/1059623954125619", 
						  "name": "陳奕楷", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153626218960674", 
							  "message": "CPU很強 GPU就掉大漆", 
							  "created_time_ts": 1458204117, 
							  "id": "10153626079365674_10153626218960674"
							}
						  ], 
						  "id": "1059623954125619"
						}, 
						"1167377316614341": {
						  "url": "http://www.facebook.com/1167377316614341", 
						  "name": "易朧", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/1389789557983179/posts/1525062147789252?comment_id=1525177364444397", 
							  "message": "可以吃2個（？", 
							  "created_time_ts": 1458214789, 
							  "id": "1525062147789252_1525177364444397"
							}
						  ], 
						  "id": "1167377316614341"
						}, 
						"551528868333996": {
						  "url": "http://www.facebook.com/551528868333996", 
						  "name": "Toby Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673?comment_id=999416573444926", 
							  "message": "之前是聽說十奈米已達物理極限，好奇台積電如何克服七奈米", 
							  "created_time_ts": 1458196830, 
							  "id": "999332436786673_999416573444926"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673?comment_id=999481060105144", 
							  "message": "那用什麼(?!)", 
							  "created_time_ts": 1458208971, 
							  "id": "999332436786673_999481060105144"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673?comment_id=999644536755463", 
							  "message": "感謝專業解惑Orz", 
							  "created_time_ts": 1458227250, 
							  "id": "999332436786673_999644536755463"
							}
						  ], 
						  "id": "551528868333996"
						}, 
						"1046398352048943": {
						  "url": "http://www.facebook.com/1046398352048943", 
						  "name": "Charlie Chou", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153626160920674", 
							  "message": "我記得Helio X10跟S801對幹都不見得有優勢了 ?", 
							  "created_time_ts": 1458202509, 
							  "id": "10153626079365674_10153626160920674"
							}
						  ], 
						  "id": "1046398352048943"
						}, 
						"1104239482933578": {
						  "url": "http://www.facebook.com/1104239482933578", 
						  "name": "Iris Wu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163510930348959", 
							  "message": "翁紫瑄好像你好胖", 
							  "created_time_ts": 1458141337, 
							  "id": "1163350940364958_1163510930348959"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163558027010916", 
							  "message": "", 
							  "created_time_ts": 1458145859, 
							  "id": "1163350940364958_1163558027010916"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163572703676115", 
							  "message": "", 
							  "created_time_ts": 1458147258, 
							  "id": "1163350940364958_1163572703676115"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163575283675857", 
							  "message": "", 
							  "created_time_ts": 1458147545, 
							  "id": "1163350940364958_1163575283675857"
							}
						  ], 
						  "id": "1104239482933578"
						}, 
						"543733899128481": {
						  "url": "http://www.facebook.com/543733899128481", 
						  "name": "林子翔", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673?comment_id=999475123439071", 
							  "message": "不用矽（Si）了", 
							  "created_time_ts": 1458207861, 
							  "id": "999332436786673_999475123439071"
							}
						  ], 
						  "id": "543733899128481"
						}, 
						"108887732538742": {
						  "url": "http://www.facebook.com/108887732538742", 
						  "name": "癮科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981846598576180?comment_id=982587128502127", 
							  "message": "又方便又好用！", 
							  "created_time_ts": 1458197335, 
							  "id": "981846598576180_982587128502127"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981846598576180?comment_id=982588538501986", 
							  "message": "哈囉 你現在看還是嗎？  小編剛看沒問題說！", 
							  "created_time_ts": 1458197469, 
							  "id": "981846598576180_982588538501986"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=982600148500825", 
							  "message": "是同一個型號嗎？", 
							  "created_time_ts": 1458199668, 
							  "id": "981180218642818_982600148500825"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=982600228500817", 
							  "message": "是同一個型號啊？當初有跟廠商反應嗎？", 
							  "created_time_ts": 1458199688, 
							  "id": "981180218642818_982600228500817"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982625388498301", 
							  "message": "可以叫你一聲 先輩~~~", 
							  "created_time_ts": 1458203597, 
							  "id": "982351481859025_982625388498301"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982026388558201?comment_id=982637235163783", 
							  "message": "價格資訊有誤，已經更正了，HA-SW01是NTD$19900，HA-SW02是$14900，感謝告知~", 
							  "created_time_ts": 1458205471, 
							  "id": "982026388558201_982637235163783"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=982637661830407", 
							  "message": "賣得好不好專案還沒有結束，現在不能定奪啦 !\n關於總電流跟個別USB插頭的輸出電流：有與廠商確認USB3.0的標準規格是5V/900mA，也就是說每一個Port的供電都是5V/900mA喔。", 
							  "created_time_ts": 1458205565, 
							  "id": "981180218642818_982637661830407"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981180218642818?comment_id=982638435163663", 
							  "message": "這個部分有跟原廠確認過，廠商回覆的內容如下：\n12V/3A =12V*3A=36W(瓦)\n一般來說Android手機或平板的耗電是5V/1A，即是5V*1A=5W的耗電(實際上沒有用到5W)\n而隨身碟約5V/0.2-0.3A=1.5W\n外接式硬碟約5V/0.8A=5V*0.8A=4W\n以此來推算，就算接上7不外接式硬碟的耗電為 4W*7=28W，原廠所提供的變壓器仍然是足以應付的\n希望有解答到大家的疑惑 !", 
							  "created_time_ts": 1458205690, 
							  "id": "981180218642818_982638435163663"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982660305161476", 
							  "message": "就是想換女朋友了，然後故意買這個給舊愛...讓她...XDDDD", 
							  "created_time_ts": 1458209108, 
							  "id": "982637015163805_982660305161476"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982660891828084", 
							  "message": "古堡香水，讓妳散發出猶如病毒擴散一般的強烈迷人吸引力~", 
							  "created_time_ts": 1458209205, 
							  "id": "982637015163805_982660891828084"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723471821826", 
							  "message": "這考倒小編了，恐怕得問Capcom...", 
							  "created_time_ts": 1458216921, 
							  "id": "982637015163805_982723471821826"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723491821824", 
							  "message": "", 
							  "created_time_ts": 1458216927, 
							  "id": "982637015163805_982723491821824"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723618488478", 
							  "message": "到時候得出動植物大軍了(植物大戰僵屍)", 
							  "created_time_ts": 1458216957, 
							  "id": "982637015163805_982723618488478"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723661821807", 
							  "message": "", 
							  "created_time_ts": 1458216965, 
							  "id": "982637015163805_982723661821807"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723908488449", 
							  "message": "", 
							  "created_time_ts": 1458217013, 
							  "id": "982637015163805_982723908488449"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982723981821775", 
							  "message": "相信他們再笨應該也不會真的做屍臭的啦哈哈哈", 
							  "created_time_ts": 1458217036, 
							  "id": "982637015163805_982723981821775"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982724048488435", 
							  "message": "天網表示：敢擋我財路~？", 
							  "created_time_ts": 1458217053, 
							  "id": "982637015163805_982724048488435"
							}
						  ], 
						  "id": "108887732538742"
						}, 
						"10208000945295273": {
						  "url": "http://www.facebook.com/10208000945295273", 
						  "name": "Wei-Chih Lai", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/999332436786673?comment_id=999629853423598", 
							  "message": "物理極限是指光學上的繞射極限，可以靠蝕刻(etching)吃到比繞射極限還小的線寬。", 
							  "created_time_ts": 1458225714, 
							  "id": "999332436786673_999629853423598"
							}
						  ], 
						  "id": "10208000945295273"
						}, 
						"1225485174135872": {
						  "url": "http://www.facebook.com/1225485174135872", 
						  "name": "Kai Wei", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982652635162243", 
							  "message": "我認識的廠商家裡就有一台還正常運作中", 
							  "created_time_ts": 1458208102, 
							  "id": "982351481859025_982652635162243"
							}
						  ], 
						  "id": "1225485174135872"
						}, 
						"1161976263820533": {
						  "url": "http://www.facebook.com/1161976263820533", 
						  "name": "Hwang A Mao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982622968498543", 
							  "message": "20幾-30年前「羅蘭 Roland Printer」繪圖機就是抓筆式(單色一支筆、4色4支筆、8色、12...好壯觀，好像小型CNC)，當時噴墨一出，就被打趴，退役之後一堆流落到廣告行，抓筆式變成抓刀，在切割卡典西德(貼紙)...\n\n這算是科技倒退嚕吧！說好聽是復古.....\n\nhttp://www.zcm.com.au/mp5300.jpg", 
							  "created_time_ts": 1458203264, 
							  "id": "982351481859025_982622968498543"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982629008497939", 
							  "message": "嘜啦，我也才50幾.....", 
							  "created_time_ts": 1458204350, 
							  "id": "982351481859025_982629008497939"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982790161815157", 
							  "message": "靠邀，就這樣....\n\n為了一部印表機，將自己的黃金歲月一點一滴地洩漏光.......", 
							  "created_time_ts": 1458223765, 
							  "id": "982351481859025_982790161815157"
							}
						  ], 
						  "id": "1161976263820533"
						}, 
						"10208837311600709": {
						  "url": "http://www.facebook.com/10208837311600709", 
						  "name": "真西馬", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153265674741566?comment_id=10153270109246566", 
							  "message": "然後就被MS把視窗OS偷走了.......", 
							  "created_time_ts": 1458207364, 
							  "id": "10153265674741566_10153270109246566"
							}
						  ], 
						  "id": "10208837311600709"
						}, 
						"1275150579178116": {
						  "url": "http://www.facebook.com/1275150579178116", 
						  "name": "葉仲榮", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982789381815235", 
							  "message": "在那個倚天屠龍刀時代⋯⋯\n不對是倚天中文版時代，公司做簡報畫分析圖或是趨勢圖不是用這個就是用投影片，整個辦公室都能聽到機器在跑，咿咿歪歪的聲音⋯", 
							  "created_time_ts": 1458223627, 
							  "id": "982351481859025_982789381815235"
							}
						  ], 
						  "id": "1275150579178116"
						}, 
						"10204271142017344": {
						  "url": "http://www.facebook.com/10204271142017344", 
						  "name": "Martin Shue", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982465268514313", 
							  "message": "小弟剛好那陣子有跟到，\n但跟 張峻瑜 大看到的不同\nEngadget 台灣 某天空降某位香港來的某主編\n但和原團隊不合\n某天某主編撰寫了篇西瓜攜帶器，被內部恥笑\n後來當時特約漫畫家仙x大濕畫了一篇有些超過尺度的漫畫而被檢舉到Engadget主站\nEngadget主站把原團隊通通請出去(或是自行離開，不清楚)獨留某主編\n原團隊成立了癮科技", 
							  "created_time_ts": 1458178162, 
							  "id": "981970181897155_982465268514313"
							}
						  ], 
						  "id": "10204271142017344"
						}, 
						"163732287336239": {
						  "url": "http://www.facebook.com/163732287336239", 
						  "name": "陳甯兒", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1147132145326960?comment_id=510553399116640", 
							  "message": "(D).土壤液化潛勢區，可透過地盤改良或建築結構改善，減少土壤液化釀災的風險。  雅琦李 陳淑娟 陳亞宣", 
							  "created_time_ts": 1458176766, 
							  "id": "1147132145326960_510553399116640"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1147132145326960?comment_id=850984018344437", 
							  "message": "不客氣～加油", 
							  "created_time_ts": 1458215722, 
							  "id": "1147132145326960_850984018344437"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1147132145326960?comment_id=1022654771142515", 
							  "message": "", 
							  "created_time_ts": 1458227104, 
							  "id": "1147132145326960_1022654771142515"
							}
						  ], 
						  "id": "163732287336239"
						}, 
						"572047196290342": {
						  "url": "http://www.facebook.com/572047196290342", 
						  "name": "周鑫", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982477108513129", 
							  "message": "正確來說應該是轉型為團購網站惹。", 
							  "created_time_ts": 1458179900, 
							  "id": "981970181897155_982477108513129"
							}
						  ], 
						  "id": "572047196290342"
						}, 
						"10201290836910221": {
						  "url": "http://www.facebook.com/10201290836910221", 
						  "name": "張峻瑜", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982172835210223", 
							  "message": "自此被Engadget 踢出去，就沒救了XD  現在突然又開始經營網站但是變成內容農場囉～", 
							  "created_time_ts": 1458148032, 
							  "id": "981970181897155_982172835210223"
							}
						  ], 
						  "id": "10201290836910221"
						}, 
						"1860675197492488": {
						  "url": "http://www.facebook.com/1860675197492488", 
						  "name": "馬騜", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=982743688486471", 
							  "message": "Tricell,怕了吧？", 
							  "created_time_ts": 1458218910, 
							  "id": "982637015163805_982743688486471"
							}
						  ], 
						  "id": "1860675197492488"
						}, 
						"10154568447096038": {
						  "url": "http://www.facebook.com/10154568447096038", 
						  "name": "Kuan-Che Feng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/981970181897155?comment_id=982258221868351", 
							  "message": "https://www.cool3c.com/article/47984", 
							  "created_time_ts": 1458155356, 
							  "id": "981970181897155_982258221868351"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982026388558201?comment_id=982325325194974", 
							  "message": "賣得比日本便宜? \nHA-SW01日本也要六萬日圓 台灣只要一萬三?", 
							  "created_time_ts": 1458162606, 
							  "id": "982026388558201_982325325194974"
							}
						  ], 
						  "id": "10154568447096038"
						}, 
						"1101747293209822": {
						  "url": "http://www.facebook.com/1101747293209822", 
						  "name": "翁紫瑄", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163572473676138", 
							  "message": "你為什麼要敷衍", 
							  "created_time_ts": 1458147235, 
							  "id": "1163350940364958_1163572473676138"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163574113675974", 
							  "message": "", 
							  "created_time_ts": 1458147356, 
							  "id": "1163350940364958_1163574113675974"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1163350940364958?comment_id=1163574143675971", 
							  "message": "", 
							  "created_time_ts": 1458147361, 
							  "id": "1163350940364958_1163574143675971"
							}
						  ], 
						  "id": "1101747293209822"
						}
					  };
						this.links = [
						{
						  "user_id": "10208330349561166", 
						  "links": [
							"572047196290342", 
							"10204271142017344", 
							"10206445585792549", 
							"10154568447096038", 
							"10201237714022269", 
							"10201290836910221"
						  ], 
						  "leader_ratio": 66
						}, 
						{
						  "user_id": "1161976263820533", 
						  "links": [
							"1161976263820533", 
							"1275150579178116", 
							"10209065459462069", 
							"1225485174135872", 
							"108887732538742"
						  ], 
						  "leader_ratio": 56
						}, 
						{
						  "user_id": "1197115220305873", 
						  "links": [
							"108887732538742", 
							"915583788531980", 
							"1059623954125619", 
							"1046398352048943"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "551528868333996", 
						  "links": [
							"551528868333996", 
							"10208000945295273", 
							"543733899128481"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "163732287336239", 
						  "links": [
							"163732287336239", 
							"893754294055384", 
							"1712057469029168"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "1122045177814084", 
						  "links": [
							"10201175500787650", 
							"1122045177814084", 
							"10208837311600709"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1137706222929776", 
						  "links": [
							"1860675197492488", 
							"1137706222929776", 
							"108887732538742"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "10208015060603933", 
						  "links": [
							"10208015060603933", 
							"1024216164307729", 
							"462938263904147"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1014253635299585", 
						  "links": [
							"1167377316614341", 
							"1389789557983179", 
							"10207318283567696"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1104239482933578", 
						  "links": [
							"1104239482933578", 
							"1101747293209822"
						  ], 
						  "leader_ratio": 26
						}
					  ];
					break;
					case "2016-03-21":
						this.nodes = {
						"10208015060603933": {
						  "url": "http://www.facebook.com/10208015060603933", 
						  "name": "Chou Yuling", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152404061466435", 
							  "message": "媽祖遶境活動 PM2.5可能達10倍紫爆！　　　http://m.ltn.com.tw/news/life/breakingnews/1634980", 
							  "created_time_ts": 1458209444, 
							  "id": "1152366651470176_1152404061466435"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152404254799749", 
							  "message": "從去年10月到今年3月了，整整半年，台中的空氣汙染已經病入膏肓。合理懷疑台電採購給中火發電的煤炭品質真的沒有問題嗎? 以前的空汙有像去年開始這麼嚴重嗎? 台積電已經中科蓋了一大片，現在要繼續往上蓋到都會公園那邊。今年台積運轉後，中火又要再燃多少煤供電給台積? 台積電開心賺大錢，台中人只能認命求一口新鮮空氣不可得了嗎?", 
							  "created_time_ts": 1458209466, 
							  "id": "1152366651470176_1152404254799749"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152645404775634", 
							  "message": "長久以來，台灣工業用電電價低於民生用電，也低於發電成本，等於是用全民納稅錢，補貼浪費電的工廠及用電大戶。綠色公民行動聯盟理事長賴偉傑指出，這等於是讓越浪費的人，享有越多補貼，是非常不符合社會公平正義，也不斷消耗社會與自然資源的發展模式。 - See more at: http://ourisland.pts.org.tw/content/%E7%AF%80%E8%83%BD%E5%A4%A7%E6%9C%AA%E4%BE%86#sthash.JTTnrqcZ.TDw1WqLf.dpuf", 
							  "created_time_ts": 1458232688, 
							  "id": "1152366651470176_1152645404775634"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152647128108795", 
							  "message": "取消工業用電優惠補助的話，自然而然投資者就會去發展更節能的產業，台灣才能產業轉型。", 
							  "created_time_ts": 1458232812, 
							  "id": "1152366651470176_1152647128108795"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152971781409663", 
							  "message": "不知道是誰在叫囂跟嘴砲，我個人可是不會用這麼粗俗的字眼。", 
							  "created_time_ts": 1458262082, 
							  "id": "1152366651470176_1152971781409663"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152973041409537", 
							  "message": "核能留言終結者的黃先生跟核能專業沒有任何關係，您個人有興趣去相信我也不便反對。", 
							  "created_time_ts": 1458262146, 
							  "id": "1152366651470176_1152973041409537"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152973801409461", 
							  "message": "誰的小孩會替他的家長感到不好意思，我想從上面的留言發話粗鄙程度一目了然。", 
							  "created_time_ts": 1458262210, 
							  "id": "1152366651470176_1152973801409461"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152974314742743", 
							  "message": "原來連經濟部也有這種粗鄙網軍護航，真是不可思議。", 
							  "created_time_ts": 1458262327, 
							  "id": "1152366651470176_1152974314742743"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152976158075892", 
							  "message": "一國的發電政策可以有多種彈性，也可以有具體目標。烏拉圭全國已有百分之七五採用綠能發電，德國也表示將全面停用燃煤發電。世界在進步，台灣也必須與時共進。日本重啟少數核能但停機不再使用的核能廠又有多少呢?  一些奇怪網民好像全身長了刺蝟，但這不影響國家能源政策走向正確發展。", 
							  "created_time_ts": 1458262672, 
							  "id": "1152366651470176_1152976158075892"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152977914742383", 
							  "message": "Rainysong Chang 燒天然氣產生的PM2.5的確少非常多，要不然大家用瓦斯煮飯有看到黑煙嗎?  但是烤肉一不小心用了劣質煤炭，那種恐怖的冒煙程度相信大家都有經歷過吧。 這就是天然氣跟燃煤的差別。", 
							  "created_time_ts": 1458262866, 
							  "id": "1152366651470176_1152977914742383"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1153204791386362", 
							  "message": "要交代什麼? 我自己也是媽祖虔誠信徒，常到鎮瀾宮拜拜。但是我都雙手合十，自己買餅乾鮮花水果去拜。不點香也不燒金紙。感謝媽祖保佑，我才能在這裡幫媽祖澄清，媽祖一點也不鼓勵信眾(其實都是地方勢力)亂點煙火炮竹，造成空氣汙染與噪音。", 
							  "created_time_ts": 1458280757, 
							  "id": "1152366651470176_1153204791386362"
							}
						  ], 
						  "id": "10208015060603933"
						}, 
						"1024216164307729": {
						  "url": "http://www.facebook.com/1024216164307729", 
						  "name": "Salome Liao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152954344744740", 
							  "message": "Chou Yuling 推薦你一個粉絲頁叫核能流言終結者 我相信他們很願意教你啥叫正確的知識\n工業用電比較便宜是因為接電線成本低好嗎，拉一條電線就夠，家庭用電家家戶戶都要拉電線，我想基本邏輯都會懂的\n不懂的話我替你孩子未來感到憂心\n身為父母連正確知識都無法教導小孩", 
							  "created_time_ts": 1458260419, 
							  "id": "1152366651470176_1152954344744740"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152955544744620", 
							  "message": "Chou Yuling 還有天然氣 直接用日本打你臉 你知道日本廢核電廠以後 因為受不了天然氣發電的成本要衝啟核電廠了嗎\n天然氣臺灣又不產，而且貴，不然你這麼偉大你來補貼差價就好，是好幾十倍的差距。相信您為了您的下一代很樂意做犧牲吧\n\n不樂意就別嘴砲，丟人", 
							  "created_time_ts": 1458260579, 
							  "id": "1152366651470176_1152955544744620"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152956924744482", 
							  "message": "Chou Yuling 你貼的綠色聯盟理事長有沒有告訴你\n綠電發電成本是現在十幾倍，而且可以認購，他自己買了沒，買了多少\n這麼關心環境卻沒拿出行動\n\n成天只會叫囂結果啥都不做，我都替你感到丟人", 
							  "created_time_ts": 1458260708, 
							  "id": "1152366651470176_1152956924744482"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152958448077663", 
							  "message": "不爽就請你去買綠電 不要只會嘴砲 認購方法要不要幫你查好\n記得買好讓我們看一下你有多大決心", 
							  "created_time_ts": 1458260910, 
							  "id": "1152366651470176_1152958448077663"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152958731410968", 
							  "message": "Chou Yuling 綠電的任何優點都不包含穩定 你敬愛的聯盟理事長沒告訴你？", 
							  "created_time_ts": 1458260951, 
							  "id": "1152366651470176_1152958731410968"
							}
						  ], 
						  "id": "1024216164307729"
						}, 
						"1278531085495903": {
						  "url": "http://www.facebook.com/1278531085495903", 
						  "name": "Pipi Nana", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272238921566", 
							  "message": "直接說撥打110就好了，不是這樣嗎？可能我想的太簡單了吧。也許。", 
							  "created_time_ts": 1458277629, 
							  "id": "10153272067906566_10153272238921566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272259766566", 
							  "message": "哈～!看看就好。只是擔心那些正在發生的悲劇一直發生下去而已。", 
							  "created_time_ts": 1458278826, 
							  "id": "10153272067906566_10153272259766566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272343426566", 
							  "message": "應該說，可以直接定位及撥打911可以及時救援，上次好像有人被綁架，雙手反綁直接用嘴巴觸碰螢幕點siri報警求助。高科技也能更幫助人類，希望可以更進步完善的科技支援現代緊急救援，有想到提出這個問題就會有改進，這樣粉好啊。", 
							  "created_time_ts": 1458282385, 
							  "id": "10153272067906566_10153272343426566"
							}
						  ], 
						  "id": "1278531085495903"
						}, 
						"10204269792023595": {
						  "url": "http://www.facebook.com/10204269792023595", 
						  "name": "Ruemann Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000214930031757", 
							  "message": "人類對電腦本來就不公平了  倒是什麼狀態下您才認為是公平的基礎？", 
							  "created_time_ts": 1458299533, 
							  "id": "1000173973369186_1000214930031757"
							}
						  ], 
						  "id": "10204269792023595"
						}, 
						"991838717521090": {
						  "url": "http://www.facebook.com/991838717521090", 
						  "name": "Tony Shave", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153628700170674?comment_id=10153628955505674", 
							  "message": "台廠家電很多都是拿中國貼牌。", 
							  "created_time_ts": 1458288560, 
							  "id": "10153628700170674_10153628955505674"
							}
						  ], 
						  "id": "991838717521090"
						}, 
						"1013418272057860": {
						  "url": "http://www.facebook.com/1013418272057860", 
						  "name": "Sam Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000364870016763", 
							  "message": "別浪費金錢了。單憑韓國一國之力、不可能戰勝 google 的。", 
							  "created_time_ts": 1458315821, 
							  "id": "1000215556698361_1000364870016763"
							}
						  ], 
						  "id": "1013418272057860"
						}, 
						"1058690950817550": {
						  "url": "http://www.facebook.com/1058690950817550", 
						  "name": "TY Huang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153628554500674", 
							  "message": "跑分還是輸820.一整個 十核打輸 八核 的概念。不過價格也是低很多啦...", 
							  "created_time_ts": 1458274298, 
							  "id": "10153626079365674_10153628554500674"
							}
						  ], 
						  "id": "1058690950817550"
						}, 
						"10154708755858881": {
						  "url": "http://www.facebook.com/10154708755858881", 
						  "name": "Calvin Ng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272301951566", 
							  "message": "你邏輯混亂，人類的智慧正正發明了語音助手幫助我們。\n\n你每天吃肉不就是假手於機器嗎？\n你為什麼不返回森林像原始時代跟野獸搏鬥捕食？", 
							  "created_time_ts": 1458280644, 
							  "id": "10153272067906566_10153272301951566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272313071566", 
							  "message": "不是，110還要等接聽，還要交代你地址，而如果你被綁架，根本可能不知身處位置\n\n現在手機有我們的行蹤、路線、個人資料、作息時間Siri 基本都掌握了，跟Siri/ 智能助手求救只是未設置，但沒有難度", 
							  "created_time_ts": 1458281128, 
							  "id": "10153272067906566_10153272313071566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272313851566", 
							  "message": "李文煊這麼大火，但自己正在用 facebook，太可笑了~ 😂😂😂😂", 
							  "created_time_ts": 1458281199, 
							  "id": "10153272067906566_10153272313851566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272323136566", 
							  "message": "假設一個情況：\n女兒一個人在外國讀書，一次獨自外出時被綁架，她手機訊息到了一個地方就消失了，她連嘗試用手機叫 Siri 的機會都沒有...\n\n但她父母為她預先設定了求生報警系統，當她晚上未有在指定時間回家就會自動先通知遠方父母、老師\n\n父母確定不對勁就通知當地警局，警方憑女兒訊息消失地點再參考當時在同一地點下幾個可疑電話紀錄去追蹤，及時救回女兒", 
							  "created_time_ts": 1458281589, 
							  "id": "10153272067906566_10153272323136566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272325831566", 
							  "message": "這不就正正是人類智慧解決問題嗎？\n\n李文煊我花了十多分鐘講解你明白了嗎？", 
							  "created_time_ts": 1458281676, 
							  "id": "10153272067906566_10153272325831566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272327626566", 
							  "message": "大家可看下樓下 pipi nana 裡，我簡短回應了", 
							  "created_time_ts": 1458281787, 
							  "id": "10153272067906566_10153272327626566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272412626566", 
							  "message": "有量度～!👍🏻👍🏻👍🏻", 
							  "created_time_ts": 1458284673, 
							  "id": "10153272067906566_10153272412626566"
							}
						  ], 
						  "id": "10154708755858881"
						}, 
						"1129863383704299": {
						  "url": "http://www.facebook.com/1129863383704299", 
						  "name": "Ya Chiu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271968261566", 
							  "message": "Sabrina Cheng 多繳點稅，就沒問題。", 
							  "created_time_ts": 1458267923, 
							  "id": "10153270304871566_10153271968261566"
							}
						  ], 
						  "id": "1129863383704299"
						}, 
						"450645011798286": {
						  "url": "http://www.facebook.com/450645011798286", 
						  "name": "李文煊", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272226326566", 
							  "message": "這是什麼時代？人類遭遇困難，竟然要乞靈於手機語音助理的協助？上帝給人類腦袋，又不是用來裝屎的！", 
							  "created_time_ts": 1458277015, 
							  "id": "10153272067906566_10153272226326566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272256101566", 
							  "message": "對啊，不然 Siri, Googl Now 以後可能都要有人工智慧，這樣才能兼差當張老師、家暴觀護中心...（族繁不及備載），嗚呼！", 
							  "created_time_ts": 1458278582, 
							  "id": "10153272067906566_10153272256101566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272256776566", 
							  "message": "這篇廢文真是讓人火大！", 
							  "created_time_ts": 1458278633, 
							  "id": "10153272067906566_10153272256776566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272067906566?comment_id=10153272350056566", 
							  "message": "也對，在緊急狀況下，可能連自己在哪裡都說不清楚了。是我有欠考慮，多謝各位！", 
							  "created_time_ts": 1458282532, 
							  "id": "10153272067906566_10153272350056566"
							}
						  ], 
						  "id": "450645011798286"
						}, 
						"10201592850658366": {
						  "url": "http://www.facebook.com/10201592850658366", 
						  "name": "Jay Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271772296566", 
							  "message": "要把電競跟圍棋，撲克牌，麻將，混在一起，說成體育只能說硬拗\n玩家可以自己成立一個組織活動，沒必要什麼都要靠政府", 
							  "created_time_ts": 1458261554, 
							  "id": "10153270304871566_10153271772296566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153272192386566", 
							  "message": "Sabrina Cheng 不是靠不住問題,就打電動而言,青少年沉迷於電玩本來就不是好事,負面事件也一堆,,國家資源有限不可能只要有人提就要做,要考量的是最大效益,所以不納入是有原因", 
							  "created_time_ts": 1458275731, 
							  "id": "10153270304871566_10153272192386566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153272198776566", 
							  "message": "Sabrina Cheng 講白話點 電玩競技這項活動,能對個人,社會,經濟,健康帶來多少正面或負面,這是政府考量的", 
							  "created_time_ts": 1458275984, 
							  "id": "10153270304871566_10153272198776566"
							}
						  ], 
						  "id": "10201592850658366"
						}, 
						"1016018861799052": {
						  "url": "http://www.facebook.com/1016018861799052", 
						  "name": "風城雲", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982570345170472?comment_id=982755848485255", 
							  "message": "宅", 
							  "created_time_ts": 1458220106, 
							  "id": "982570345170472_982755848485255"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983460915081415?comment_id=983472285080278", 
							  "message": "上次塑膠版教訓還沒吃夠嗎", 
							  "created_time_ts": 1458300012, 
							  "id": "983460915081415_983472285080278"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982570345170472?comment_id=983478955079611", 
							  "message": "", 
							  "created_time_ts": 1458301218, 
							  "id": "982570345170472_983478955079611"
							}
						  ], 
						  "id": "1016018861799052"
						}, 
						"1269479176402552": {
						  "url": "http://www.facebook.com/1269479176402552", 
						  "name": "鄭又齊", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000366523349931", 
							  "message": "陳韋漢 你這樣會被說圖利特定產業唷", 
							  "created_time_ts": 1458316159, 
							  "id": "1000215556698361_1000366523349931"
							}
						  ], 
						  "id": "1269479176402552"
						}, 
						"1302309803129100": {
						  "url": "http://www.facebook.com/1302309803129100", 
						  "name": "Arack Goldshire", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153270796776566", 
							  "message": "那圍棋是不是體育運動？", 
							  "created_time_ts": 1458231989, 
							  "id": "10153270304871566_10153270796776566"
							}
						  ], 
						  "id": "1302309803129100"
						}, 
						"1197115220305873": {
						  "url": "http://www.facebook.com/1197115220305873", 
						  "name": "吳憂無慮", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153626079365674?comment_id=10153626157395674", 
							  "message": "不知會不會跟AMD一樣，4核心打輸Intel 雙核心", 
							  "created_time_ts": 1458202357, 
							  "id": "10153626079365674_10153626157395674"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153628700170674?comment_id=10153628801055674", 
							  "message": "台製品質已經也不差了，所以也沒必要特別買日本品牌了，尤其被中國買走後", 
							  "created_time_ts": 1458283290, 
							  "id": "10153628700170674_10153628801055674"
							}
						  ], 
						  "id": "1197115220305873"
						}, 
						"1076134775731588": {
						  "url": "http://www.facebook.com/1076134775731588", 
						  "name": "Sabrina Cheng", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271835961566", 
							  "message": "怎麼？政府靠不得嗎？要推廣一個產業與相關活動本來就是必須利用政府的資源，和民間相輔相成，互相調整，才能收最大效益，現在私人團體都不知道多少了，最大權力還是掌握在政府手上，結果有人說「沒必要什麼都靠政府」？是在搞笑嗎。", 
							  "created_time_ts": 1458263821, 
							  "id": "10153270304871566_10153271835961566"
							}
						  ], 
						  "id": "1076134775731588"
						}, 
						"10204030735687742": {
						  "url": "http://www.facebook.com/10204030735687742", 
						  "name": "亨利王", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271532571566", 
							  "message": "棋賽、撲克牌比較像數學競賽，不是體育活動", 
							  "created_time_ts": 1458255140, 
							  "id": "10153270304871566_10153271532571566"
							}
						  ], 
						  "id": "10204030735687742"
						}, 
						"1052242874798561": {
						  "url": "http://www.facebook.com/1052242874798561", 
						  "name": "James Hung", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153270787931566", 
							  "message": "做了一堆垃圾 大家真正想要的卻不放", 
							  "created_time_ts": 1458231656, 
							  "id": "10153270301161566_10153270787931566"
							}
						  ], 
						  "id": "1052242874798561"
						}, 
						"1657253701191716": {
						  "url": "http://www.facebook.com/1657253701191716", 
						  "name": "Rainysong Chang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1152941614746013", 
							  "message": "用天然氣取代燃煤? 你知道台灣的安全存量有多少嗎? 就算第三接收站蓋好也要10年後，到時候你覺得電費該漲多少? 燒天然氣就沒有PM2.5?", 
							  "created_time_ts": 1458259224, 
							  "id": "1152366651470176_1152941614746013"
							}
						  ], 
						  "id": "1657253701191716"
						}, 
						"216113825400536": {
						  "url": "http://www.facebook.com/216113825400536", 
						  "name": "Jing Ping Lu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185?comment_id=983397391754434", 
							  "message": "古有一句成語，叫杞人憂天", 
							  "created_time_ts": 1458290717, 
							  "id": "983333215094185_983397391754434"
							}
						  ], 
						  "id": "216113825400536"
						}, 
						"10205216335160928": {
						  "url": "http://www.facebook.com/10205216335160928", 
						  "name": "Kao Shuai", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000364386683478", 
							  "message": "阿就師大資工做的AlphaGo咩\n整天只會酸 台灣還有一堆在做圍棋AI好嘛 無聊", 
							  "created_time_ts": 1458315735, 
							  "id": "1000215556698361_1000364386683478"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000366570016593", 
							  "message": "那你知道AlphaGo有請台灣人設計嗎\n你還真是全面思考呢\n輕輕鬆鬆算個幾句 就要否認其他人的付出", 
							  "created_time_ts": 1458316172, 
							  "id": "1000215556698361_1000366570016593"
							}
						  ], 
						  "id": "10205216335160928"
						}, 
						"10204512452331036": {
						  "url": "http://www.facebook.com/10204512452331036", 
						  "name": "陳君逸", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983460915081415?comment_id=983475531746620", 
							  "message": "價格上原本說得非常親民，出來之後價格火速標高。。。。。。。 根本不親民", 
							  "created_time_ts": 1458300625, 
							  "id": "983460915081415_983475531746620"
							}
						  ], 
						  "id": "10204512452331036"
						}, 
						"1171719359514616": {
						  "url": "http://www.facebook.com/1171719359514616", 
						  "name": "林昱辰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983460915081415?comment_id=983473385080168", 
							  "message": "5c在華人區以外的地方賣很好", 
							  "created_time_ts": 1458300132, 
							  "id": "983460915081415_983473385080168"
							}
						  ], 
						  "id": "1171719359514616"
						}, 
						"1051196538236947": {
						  "url": "http://www.facebook.com/1051196538236947", 
						  "name": "Firemrta Tsi", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185?comment_id=983382271755946", 
							  "message": "為人父母者比較在意的是 ,\"絕對\"不會發生嗎?", 
							  "created_time_ts": 1458287723, 
							  "id": "983333215094185_983382271755946"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185?comment_id=983400601754113", 
							  "message": "去小兒科待一陣子就知道這句成語了", 
							  "created_time_ts": 1458291303, 
							  "id": "983333215094185_983400601754113"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185?comment_id=983562605071246", 
							  "message": "所以說，當站在父母的角度去看時，機率再低也會令他們膽戰心驚，即便機率只是百萬分之一，要說服他們不是用簡單的科學數據而已，真的會因此去墮胎還是極少數，除了科學數據外，心裡的建設與旁人的支持是很重要的", 
							  "created_time_ts": 1458310089, 
							  "id": "983333215094185_983562605071246"
							}
						  ], 
						  "id": "1051196538236947"
						}, 
						"514220488758820": {
						  "url": "http://www.facebook.com/514220488758820", 
						  "name": "Pin-Zhu  Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271656896566", 
							  "message": "依照本文對於電競中身體之使用，棋類、撲克牌都可以算是體育，打坐應該也可以，大抵不是睡覺的共同競爭活動都算體育吧...", 
							  "created_time_ts": 1458258848, 
							  "id": "10153270304871566_10153271656896566"
							}
						  ], 
						  "id": "514220488758820"
						}, 
						"108887732538742": {
						  "url": "http://www.facebook.com/108887732538742", 
						  "name": "癮科技", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982601078500732?comment_id=983287845098722", 
							  "message": "∑(ﾟДﾟ)", 
							  "created_time_ts": 1458273442, 
							  "id": "982601078500732_983287845098722"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982601078500732?comment_id=983287905098716", 
							  "message": "捕獲鋼彈迷（咦", 
							  "created_time_ts": 1458273463, 
							  "id": "982601078500732_983287905098716"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983306915096815?comment_id=983318631762310", 
							  "message": "資深程式測試員表示：我有找出它的 Bug ...", 
							  "created_time_ts": 1458278246, 
							  "id": "983306915096815_983318631762310"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983313488429491?comment_id=983474741746699", 
							  "message": "說真的應該還會有變～", 
							  "created_time_ts": 1458300455, 
							  "id": "983313488429491_983474741746699"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983313488429491?comment_id=983474888413351", 
							  "message": "老任得加把勁啊...人家SONY的PS4已經快賣飛到衝出大氣層了...", 
							  "created_time_ts": 1458300498, 
							  "id": "983313488429491_983474888413351"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475335079973", 
							  "message": "它的確是地表上最划算的複合式藍光播放器XDD", 
							  "created_time_ts": 1458300591, 
							  "id": "982725751821598_983475335079973"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475395079967", 
							  "message": "", 
							  "created_time_ts": 1458300602, 
							  "id": "982725751821598_983475395079967"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475445079962", 
							  "message": "有設計感", 
							  "created_time_ts": 1458300615, 
							  "id": "982725751821598_983475445079962"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475588413281", 
							  "message": "眼睛還是會累的啦XD", 
							  "created_time_ts": 1458300637, 
							  "id": "982725751821598_983475588413281"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475675079939", 
							  "message": "230間軟體開發商真的會讓人產生期待～", 
							  "created_time_ts": 1458300654, 
							  "id": "982725751821598_983475675079939"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983475878413252", 
							  "message": "它已經有一大片硬體佔有率的江山了，再加上進入VR的門檻低，對消費者而言真的很誘人", 
							  "created_time_ts": 1458300701, 
							  "id": "982725751821598_983475878413252"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983476011746572", 
							  "message": "+1，這同時也得歸功於PS4的軟體夠給力，讓主機賣不少", 
							  "created_time_ts": 1458300731, 
							  "id": "982725751821598_983476011746572"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983476058413234", 
							  "message": "這也是原因之一～", 
							  "created_time_ts": 1458300746, 
							  "id": "982725751821598_983476058413234"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983476371746536", 
							  "message": "", 
							  "created_time_ts": 1458300783, 
							  "id": "982725751821598_983476371746536"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983476481746525", 
							  "message": "是預購一空的意思，已修正", 
							  "created_time_ts": 1458300799, 
							  "id": "982725751821598_983476481746525"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983477211746452", 
							  "message": "Sony有很好的起跑點", 
							  "created_time_ts": 1458300887, 
							  "id": "982725751821598_983477211746452"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983477301746443", 
							  "message": "在電玩展體驗的感覺是還不錯～", 
							  "created_time_ts": 1458300910, 
							  "id": "982725751821598_983477301746443"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983477385079768", 
							  "message": "", 
							  "created_time_ts": 1458300920, 
							  "id": "982725751821598_983477385079768"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983477411746432", 
							  "message": "", 
							  "created_time_ts": 1458300926, 
							  "id": "982725751821598_983477411746432"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982725751821598?comment_id=983477458413094", 
							  "message": "", 
							  "created_time_ts": 1458300938, 
							  "id": "982725751821598_983477458413094"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982601078500732?comment_id=983477628413077", 
							  "message": "那就用感應砲把對方打下來XDD", 
							  "created_time_ts": 1458300975, 
							  "id": "982601078500732_983477628413077"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982570345170472?comment_id=983477688413071", 
							  "message": "也蠻好看的啊", 
							  "created_time_ts": 1458300989, 
							  "id": "982570345170472_983477688413071"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982570345170472?comment_id=983477718413068", 
							  "message": "", 
							  "created_time_ts": 1458300997, 
							  "id": "982570345170472_983477718413068"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=983477781746395", 
							  "message": "喔耶～XDD", 
							  "created_time_ts": 1458301018, 
							  "id": "982637015163805_983477781746395"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982637015163805?comment_id=983477898413050", 
							  "message": "周玉龍 出個肌樂救急噴霧應該不賴XD", 
							  "created_time_ts": 1458301048, 
							  "id": "982637015163805_983477898413050"
							}
						  ], 
						  "id": "108887732538742"
						}, 
						"948310765205913": {
						  "url": "http://www.facebook.com/948310765205913", 
						  "name": "Johnny Smith", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153270596511566", 
							  "message": "只要把讚顛倒就夠了，是在想什麼？", 
							  "created_time_ts": 1458225730, 
							  "id": "10153270301161566_10153270596511566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153271588001566", 
							  "message": "陳立杰 表面功夫", 
							  "created_time_ts": 1458256851, 
							  "id": "10153270301161566_10153271588001566"
							}
						  ], 
						  "id": "948310765205913"
						}, 
						"1250353228314869": {
						  "url": "http://www.facebook.com/1250353228314869", 
						  "name": "陳立杰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153270793721566", 
							  "message": "那會變霸凌   他們應該想得比較遠", 
							  "created_time_ts": 1458231870, 
							  "id": "10153270301161566_10153270793721566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153272084251566", 
							  "message": "你想得太簡單了XD", 
							  "created_time_ts": 1458271701, 
							  "id": "10153270301161566_10153272084251566"
							}
						  ], 
						  "id": "1250353228314869"
						}, 
						"1161976263820533": {
						  "url": "http://www.facebook.com/1161976263820533", 
						  "name": "Hwang A Mao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982622968498543", 
							  "message": "20幾-30年前「羅蘭 Roland Printer」繪圖機就是抓筆式(單色一支筆、4色4支筆、8色、12...好壯觀，好像小型CNC)，當時噴墨一出，就被打趴，退役之後一堆流落到廣告行，抓筆式變成抓刀，在切割卡典西德(貼紙)...\n\n這算是科技倒退嚕吧！說好聽是復古.....\n\nhttp://www.zcm.com.au/mp5300.jpg", 
							  "created_time_ts": 1458203264, 
							  "id": "982351481859025_982622968498543"
							}
						  ], 
						  "id": "1161976263820533"
						}, 
						"10201664737297868": {
						  "url": "http://www.facebook.com/10201664737297868", 
						  "name": "陳建宏", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153272123201566", 
							  "message": "的確是啊西洋棋有奧林匹克，請見維基百科", 
							  "created_time_ts": 1458273386, 
							  "id": "10153270304871566_10153272123201566"
							}
						  ], 
						  "id": "10201664737297868"
						}, 
						"10153899744245842": {
						  "url": "http://www.facebook.com/10153899744245842", 
						  "name": "葉俊宏", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=983195888441251", 
							  "message": "和我第一眼看到這新聞是，想到的一樣！", 
							  "created_time_ts": 1458261558, 
							  "id": "982351481859025_983195888441251"
							}
						  ], 
						  "id": "10153899744245842"
						}, 
						"1753200274903145": {
						  "url": "http://www.facebook.com/1753200274903145", 
						  "name": "Giovanio Cinese", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983333215094185?comment_id=983404828420357", 
							  "message": "沒有任何事情絕對不會發生，臺北交通這麼亂，出門也沒有絕對不會被撞。古代沒有艾克斯射線也會生出不健全的嬰孩。但是這些資料告訴我們機率有多低，至少不用過於操心。", 
							  "created_time_ts": 1458291933, 
							  "id": "983333215094185_983404828420357"
							}
						  ], 
						  "id": "1753200274903145"
						}, 
						"10206869794838189": {
						  "url": "http://www.facebook.com/10206869794838189", 
						  "name": "Eddie Kao", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000184233368160", 
							  "message": "應該是為無人駕駛汽車鋪路！這比賽根本不在一個公平基礎上！", 
							  "created_time_ts": 1458296029, 
							  "id": "1000173973369186_1000184233368160"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000215516698365", 
							  "message": "電腦能有七情六慾時，就平了", 
							  "created_time_ts": 1458299622, 
							  "id": "1000173973369186_1000215516698365"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000288463357737", 
							  "message": "人腦與電腦差別在七情六慾", 
							  "created_time_ts": 1458306883, 
							  "id": "1000173973369186_1000288463357737"
							}
						  ], 
						  "id": "10206869794838189"
						}, 
						"10204549126327563": {
						  "url": "http://www.facebook.com/10204549126327563", 
						  "name": "Mason Huang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000264893360094", 
							  "message": "你想跟電腦程式談戀愛？", 
							  "created_time_ts": 1458305522, 
							  "id": "1000173973369186_1000264893360094"
							}
						  ], 
						  "id": "10204549126327563"
						}, 
						"945526738834473": {
						  "url": "http://www.facebook.com/945526738834473", 
						  "name": "登山客", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270301161566?comment_id=10153270779561566", 
							  "message": "因為講過不會放了 :v", 
							  "created_time_ts": 1458231285, 
							  "id": "10153270301161566_10153270779561566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153269911576566?comment_id=10153271091596566", 
							  "message": "早就發生過了ˊ_>ˋ....", 
							  "created_time_ts": 1458241379, 
							  "id": "10153269911576566_10153271091596566"
							}
						  ], 
						  "id": "945526738834473"
						}, 
						"985540254853962": {
						  "url": "http://www.facebook.com/985540254853962", 
						  "name": "陳韋漢", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000365640016686", 
							  "message": "但是能不能戰勝我們? 恐怕是可以的\n這種國家級策略不能單看一方面 要全局思考", 
							  "created_time_ts": 1458315991, 
							  "id": "1000215556698361_1000365640016686"
							}
						  ], 
						  "id": "985540254853962"
						}, 
						"10209559179202655": {
						  "url": "http://www.facebook.com/10209559179202655", 
						  "name": "柯亦正", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=982916855135821", 
							  "message": "Chuck Kurt  從小看到大 +1", 
							  "created_time_ts": 1458235653, 
							  "id": "982351481859025_982916855135821"
							}
						  ], 
						  "id": "10209559179202655"
						}, 
						"10208866310553229": {
						  "url": "http://www.facebook.com/10208866310553229", 
						  "name": "謝政翰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153271799986566", 
							  "message": "目前實務上似乎的確把圍棋視為運動比賽。國際間也舉辦數次智力運動會。", 
							  "created_time_ts": 1458262652, 
							  "id": "10153270304871566_10153271799986566"
							}
						  ], 
						  "id": "10208866310553229"
						}, 
						"988248124584038": {
						  "url": "http://www.facebook.com/988248124584038", 
						  "name": "Linch Lin", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153272833846566", 
							  "message": "Jay Lee遊戲只會讓年輕人沉淪是已經過時的刻板印象，看看現在台灣充斥著滿坑滿谷的中國跟韓國遊戲廣告，連新聞台那種貴得要死的電視廣告都有好幾間遊戲公司買得起，還有那個買了超多檔廣告的野豬騎士，就知道遊戲產業可以有多少利潤了吧？\n台灣從十幾年前就說要發展遊戲產業搞到現在不管捷運、公車、電視到處都是大陸手機遊戲的廣告，我不覺得發展電競會對社會有多劇烈的不利影響，難道韓國的經濟有因此一蹶不振嗎？至少我覺得小孩玩遊戲比去逞凶鬥狠或是在菸酒中醉生夢死好。", 
							  "created_time_ts": 1458300525, 
							  "id": "10153270304871566_10153272833846566"
							}
						  ], 
						  "id": "988248124584038"
						}, 
						"10203817633040256": {
						  "url": "http://www.facebook.com/10203817633040256", 
						  "name": "黃小斌", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1153021828071325", 
							  "message": "你這樣講，對媽祖的信眾怎麼交待？", 
							  "created_time_ts": 1458267600, 
							  "id": "1152366651470176_1153021828071325"
							}, 
							{
							  "url": "https://www.facebook.com/335544036485779/posts/1152366651470176?comment_id=1153205451386296", 
							  "message": "文創業和製作業不同喔。", 
							  "created_time_ts": 1458280903, 
							  "id": "1152366651470176_1153205451386296"
							}
						  ], 
						  "id": "10203817633040256"
						}, 
						"10208436474820608": {
						  "url": "http://www.facebook.com/10208436474820608", 
						  "name": "林敬發", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153628700170674?comment_id=10153628926230674", 
							  "message": "然後沒多久台廠也被大陸收購了(淚)", 
							  "created_time_ts": 1458287349, 
							  "id": "10153628700170674_10153628926230674"
							}
						  ], 
						  "id": "10208436474820608"
						}, 
						"242507989428479": {
						  "url": "http://www.facebook.com/242507989428479", 
						  "name": "Ash Hsien", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270304871566?comment_id=10153272854476566", 
							  "message": "Jay Lee 我想問一下你了解運動員或是職業棋手一天花得練習時間有多少嗎？這無非也是一種沈迷吧？", 
							  "created_time_ts": 1458301210, 
							  "id": "10153270304871566_10153272854476566"
							}
						  ], 
						  "id": "242507989428479"
						}, 
						"1275150579178116": {
						  "url": "http://www.facebook.com/1275150579178116", 
						  "name": "葉仲榮", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/982351481859025?comment_id=983511858409654", 
							  "message": "Hwang A Mao 沒關係，有伴你不寂寞的⋯^ ^", 
							  "created_time_ts": 1458305153, 
							  "id": "982351481859025_983511858409654"
							}
						  ], 
						  "id": "1275150579178116"
						}
					  };
						this.links = [
						{
						  "user_id": "1302309803129100", 
						  "links": [
							"242507989428479", 
							"988248124584038", 
							"10201592850658366", 
							"10201664737297868", 
							"1129863383704299", 
							"1076134775731588", 
							"10208866310553229", 
							"514220488758820", 
							"10204030735687742"
						  ], 
						  "leader_ratio": 101
						}, 
						{
						  "user_id": "10208015060603933", 
						  "links": [
							"10208015060603933", 
							"10203817633040256", 
							"1024216164307729", 
							"1657253701191716"
						  ], 
						  "leader_ratio": 56
						}, 
						{
						  "user_id": "948310765205913", 
						  "links": [
							"1250353228314869", 
							"948310765205913", 
							"1052242874798561", 
							"945526738834473"
						  ], 
						  "leader_ratio": 45
						}, 
						{
						  "user_id": "1016018861799052", 
						  "links": [
							"1016018861799052", 
							"108887732538742", 
							"10204512452331036", 
							"1171719359514616"
						  ], 
						  "leader_ratio": 44
						}, 
						{
						  "user_id": "1278531085495903", 
						  "links": [
							"10154708755858881", 
							"450645011798286", 
							"1278531085495903"
						  ], 
						  "leader_ratio": 40
						}, 
						{
						  "user_id": "10206869794838189", 
						  "links": [
							"10206869794838189", 
							"10204549126327563", 
							"10204269792023595"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "1051196538236947", 
						  "links": [
							"1051196538236947", 
							"1753200274903145", 
							"216113825400536"
						  ], 
						  "leader_ratio": 34
						}, 
						{
						  "user_id": "1013418272057860", 
						  "links": [
							"10205216335160928", 
							"1269479176402552", 
							"985540254853962"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1197115220305873", 
						  "links": [
							"1058690950817550", 
							"991838717521090", 
							"10208436474820608"
						  ], 
						  "leader_ratio": 33
						}, 
						{
						  "user_id": "1161976263820533", 
						  "links": [
							"1275150579178116", 
							"10153899744245842", 
							"10209559179202655"
						  ], 
						  "leader_ratio": 33
						}
					  ];
					break;
					case "2016-03-22":
						this.nodes = {
						"535951239897067": {
						  "url": "http://www.facebook.com/535951239897067", 
						  "name": "鄭星濤", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000394500013800", 
							  "message": "中肯XDDD", 
							  "created_time_ts": 1458319774, 
							  "id": "1000173973369186_1000394500013800"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000395490013701", 
							  "message": "專業就是知道自己懂什麼,資深媒體人也不會轉職成人工智慧專家", 
							  "created_time_ts": 1458319952, 
							  "id": "1000173973369186_1000395490013701"
							}
						  ], 
						  "id": "535951239897067"
						}, 
						"10206096592670825": {
						  "url": "http://www.facebook.com/10206096592670825", 
						  "name": "顏嘉裕", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274969946566", 
							  "message": "辦公投....", 
							  "created_time_ts": 1458378750, 
							  "id": "10153274910276566_10153274969946566"
							}
						  ], 
						  "id": "10206096592670825"
						}, 
						"1685588808362228": {
						  "url": "http://www.facebook.com/1685588808362228", 
						  "name": "蔡樺岳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000473353339248", 
							  "message": "台積電還是在代工啊╮(╯▽╰)╭", 
							  "created_time_ts": 1458329875, 
							  "id": "1000215556698361_1000473353339248"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000473730005877", 
							  "message": "只有會嘴炮的政客", 
							  "created_time_ts": 1458329922, 
							  "id": "1000215556698361_1000473730005877"
							}
						  ], 
						  "id": "1685588808362228"
						}, 
						"1013418272057860": {
						  "url": "http://www.facebook.com/1013418272057860", 
						  "name": "Sam Lee", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000364870016763", 
							  "message": "別浪費金錢了。單憑韓國一國之力、不可能戰勝 google 的。", 
							  "created_time_ts": 1458315821, 
							  "id": "1000215556698361_1000364870016763"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000383746681542", 
							  "message": "Kao Shuai 就是這個原因。google 是全球精英雲集的公司。", 
							  "created_time_ts": 1458318253, 
							  "id": "1000215556698361_1000383746681542"
							}
						  ], 
						  "id": "1013418272057860"
						}, 
						"10201196706156342": {
						  "url": "http://www.facebook.com/10201196706156342", 
						  "name": "李敬倫", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275057571566", 
							  "message": "跟政府有什麼關係，\n國似民貌。\n\n捫心自問，\n你手上有1000萬，\n願意投資前景不明的項目，\n還是買一間店面好增值收租???\n\n官由民生，\n每個官員都是人民來的，\n他們現在的腦袋，\n就是你坐他們位子的腦袋。", 
							  "created_time_ts": 1458383117, 
							  "id": "10153274910276566_10153275057571566"
							}
						  ], 
						  "id": "10201196706156342"
						}, 
						"1073973689309053": {
						  "url": "http://www.facebook.com/1073973689309053", 
						  "name": "李庭毅", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000792846640632", 
							  "message": "可是瑞凡  只有vive可以走動", 
							  "created_time_ts": 1458377169, 
							  "id": "1000641219989128_1000792846640632"
							}
						  ], 
						  "id": "1073973689309053"
						}, 
						"918303951590168": {
						  "url": "http://www.facebook.com/918303951590168", 
						  "name": "謝昆明", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631275680674", 
							  "message": "我就說了吧 一定被DDOS了= =\n最近真的太多連線超頓的情況了", 
							  "created_time_ts": 1458362123, 
							  "id": "10153631260150674_10153631275680674"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631296110674", 
							  "message": "主機沒有放乖乖(O", 
							  "created_time_ts": 1458363349, 
							  "id": "10153631260150674_10153631296110674"
							}
						  ], 
						  "id": "918303951590168"
						}, 
						"10205401366049668": {
						  "url": "http://www.facebook.com/10205401366049668", 
						  "name": "Tseng Wei Lun", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631371985674", 
							  "message": "乖乖被值班工讀生吃了", 
							  "created_time_ts": 1458366890, 
							  "id": "10153631260150674_10153631371985674"
							}
						  ], 
						  "id": "10205401366049668"
						}, 
						"10208627811787813": {
						  "url": "http://www.facebook.com/10208627811787813", 
						  "name": "Dios Li", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274929806566", 
							  "message": "海賊王彩繪", 
							  "created_time_ts": 1458377217, 
							  "id": "10153274910276566_10153274929806566"
							}
						  ], 
						  "id": "10208627811787813"
						}, 
						"1269584846388913": {
						  "url": "http://www.facebook.com/1269584846388913", 
						  "name": "蘇家慶", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000360793350504", 
							  "message": "偉大的國家，說到就做到。\n不像是台灣，僅知道做低階組裝代工！", 
							  "created_time_ts": 1458315372, 
							  "id": "1000215556698361_1000360793350504"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000674386652478", 
							  "message": "台積電在台灣生存的原因，說穿了就是租稅及廉價水電罷了...\n當然了，還有廉價的勞動力...最優值勞動力，做最低劣無恥的運用！\n\n一般半導體產業，在其國內，都是三級到四級的人力投入。只有台灣才叫一流人力投入，然後僅是看管生產線，當生產線工頭。\n\n同樣的一堆人，你覺得叫他們發展AI比較有價值呢？還是叫他們像是台積電一樣的，投入台成清交一流大學碩博士畢業生，看管產線，比較好？", 
							  "created_time_ts": 1458358532, 
							  "id": "1000215556698361_1000674386652478"
							}
						  ], 
						  "id": "1269584846388913"
						}, 
						"1073316399396403": {
						  "url": "http://www.facebook.com/1073316399396403", 
						  "name": "蕭廉達", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000692466650670", 
							  "message": "而且那台主機一班的還不行 要電競用的才行 光那台主機配下來就比整套PS4 VR 可能還貴了", 
							  "created_time_ts": 1458361458, 
							  "id": "1000641219989128_1000692466650670"
							}
						  ], 
						  "id": "1073316399396403"
						}, 
						"10204645847500958": {
						  "url": "http://www.facebook.com/10204645847500958", 
						  "name": "Rush Light", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000384326681484", 
							  "message": "人家要做的不只圍棋AI，是整個AI產業。", 
							  "created_time_ts": 1458318283, 
							  "id": "1000215556698361_1000384326681484"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000384673348116", 
							  "message": "至少他們懂得往前邁進，台灣還在....", 
							  "created_time_ts": 1458318362, 
							  "id": "1000215556698361_1000384673348116"
							}
						  ], 
						  "id": "10204645847500958"
						}, 
						"1526407350987220": {
						  "url": "http://www.facebook.com/1526407350987220", 
						  "name": "Mars C. Huang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153272581161566", 
							  "message": "真環保！", 
							  "created_time_ts": 1458291610, 
							  "id": "10153272506196566_10153272581161566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274183671566", 
							  "message": "請問登大大為什麼會覺得只是方便而不環保呢?", 
							  "created_time_ts": 1458344195, 
							  "id": "10153272506196566_10153274183671566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274334311566", 
							  "message": "即便生產過程不環保和成本費用較高，但所追求的不是長遠的利益，如果不用嘗試使用乾淨的能源，而用火力和核能，傷害不是更大。二害取其輕，至少比這些環保許多，風力和水力發電的效用雖然也是選項，但應用還不至於太廣，有其限制。", 
							  "created_time_ts": 1458350386, 
							  "id": "10153272506196566_10153274334311566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274662176566", 
							  "message": "謝謝各位大大分享意見！", 
							  "created_time_ts": 1458364510, 
							  "id": "10153272506196566_10153274662176566"
							}
						  ], 
						  "id": "1526407350987220"
						}, 
						"803373723101624": {
						  "url": "http://www.facebook.com/803373723101624", 
						  "name": "陳璿如", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165892253444160", 
							  "message": "謝濱有", 
							  "created_time_ts": 1458363997, 
							  "id": "1165062986860420_1165892253444160"
							}
						  ], 
						  "id": "803373723101624"
						}, 
						"10207502118564180": {
						  "url": "http://www.facebook.com/10207502118564180", 
						  "name": "Home Rern Wang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1000925139960736", 
							  "message": "預計分解一個寶特瓶需要一年，但我們一年就製造了多少寶特瓶啊?", 
							  "created_time_ts": 1458389586, 
							  "id": "1000665249986725_1000925139960736"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1000985973287986", 
							  "message": "好問題，但是你的十個雞蛋還沒熟，就每隔一分鐘丟二十個生雞蛋下去，你的鍋子要多大?", 
							  "created_time_ts": 1458395952, 
							  "id": "1000665249986725_1000985973287986"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1001016863284897", 
							  "message": "抱歉，可能我的回應造成您的不快，但我想表達的是，人類製造垃圾的速度目前絕對遠勝自然分解，還是要從回收與減量先著手。", 
							  "created_time_ts": 1458398211, 
							  "id": "1000665249986725_1001016863284897"
							}
						  ], 
						  "id": "10207502118564180"
						}, 
						"10205729224362354": {
						  "url": "http://www.facebook.com/10205729224362354", 
						  "name": "游婉琳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165825386784180", 
							  "message": "謝佳凌", 
							  "created_time_ts": 1458357579, 
							  "id": "1165062986860420_1165825386784180"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165840816782637", 
							  "message": "你就是潮流", 
							  "created_time_ts": 1458359153, 
							  "id": "1165062986860420_1165840816782637"
							}
						  ], 
						  "id": "10205729224362354"
						}, 
						"943886005726400": {
						  "url": "http://www.facebook.com/943886005726400", 
						  "name": "謝濱有", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165893596777359", 
							  "message": "張育誠", 
							  "created_time_ts": 1458364174, 
							  "id": "1165062986860420_1165893596777359"
							}
						  ], 
						  "id": "943886005726400"
						}, 
						"1111849558838901": {
						  "url": "http://www.facebook.com/1111849558838901", 
						  "name": "Jeffrey Wang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000871603299423", 
							  "message": "如果轉頭沒用就不叫VR…", 
							  "created_time_ts": 1458384021, 
							  "id": "1000662773320306_1000871603299423"
							}
						  ], 
						  "id": "1111849558838901"
						}, 
						"1094080783937331": {
						  "url": "http://www.facebook.com/1094080783937331", 
						  "name": "Joe Huang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000835349969715", 
							  "message": "而且轉頭沒用\n\n沒辦法遮眼睛\n\n應該也不好遮耳朵", 
							  "created_time_ts": 1458381780, 
							  "id": "1000662773320306_1000835349969715"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000882423298341", 
							  "message": "ㄟ...到處都是一樣轉頭沒用阿", 
							  "created_time_ts": 1458384990, 
							  "id": "1000662773320306_1000882423298341"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000900313296552", 
							  "message": "女生:啊!!(遮眼)", 
							  "created_time_ts": 1458387234, 
							  "id": "1000662773320306_1000900313296552"
							}
						  ], 
						  "id": "1094080783937331"
						}, 
						"1215385525144380": {
						  "url": "http://www.facebook.com/1215385525144380", 
						  "name": "田育丞", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983961798364660?comment_id=983978061696367", 
							  "message": "螢幕不好的還是看不出來(X", 
							  "created_time_ts": 1458352861, 
							  "id": "983961798364660_983978061696367"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631292495674", 
							  "message": "泡麵鍋(X", 
							  "created_time_ts": 1458363106, 
							  "id": "10153631260150674_10153631292495674"
							}, 
							{
							  "url": "https://www.facebook.com/108887732538742/posts/983325538428286?comment_id=984394774988029", 
							  "message": "自己的耳機自己....(X", 
							  "created_time_ts": 1458399837, 
							  "id": "983325538428286_984394774988029"
							}
						  ], 
						  "id": "1215385525144380"
						}, 
						"10153288586612014": {
						  "url": "http://www.facebook.com/10153288586612014", 
						  "name": "戴強尼", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000720063314577", 
							  "message": "乞丐中的霸主\n\n還是乞丐", 
							  "created_time_ts": 1458366192, 
							  "id": "1000215556698361_1000720063314577"
							}
						  ], 
						  "id": "10153288586612014"
						}, 
						"1381519671873751": {
						  "url": "http://www.facebook.com/1381519671873751", 
						  "name": "陳明谷", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274322751566", 
							  "message": "太陽能板生產過程非常不環保！", 
							  "created_time_ts": 1458349964, 
							  "id": "10153272506196566_10153274322751566"
							}
						  ], 
						  "id": "1381519671873751"
						}, 
						"10205057133457411": {
						  "url": "http://www.facebook.com/10205057133457411", 
						  "name": "鄧運霖", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274940386566", 
							  "message": "立法院允許政府瞬間生出...........億美金丟進去喔..............", 
							  "created_time_ts": 1458377584, 
							  "id": "10153274910276566_10153274940386566"
							}
						  ], 
						  "id": "10205057133457411"
						}, 
						"965145713547949": {
						  "url": "http://www.facebook.com/965145713547949", 
						  "name": "YuJun Hsieh", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000620133324570", 
							  "message": "哈哈哈", 
							  "created_time_ts": 1458350309, 
							  "id": "1000173973369186_1000620133324570"
							}
						  ], 
						  "id": "965145713547949"
						}, 
						"10153832186928564": {
						  "url": "http://www.facebook.com/10153832186928564", 
						  "name": "Kwan Lau", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1000983429954907", 
							  "message": "IQ題: 煮一隻蛋需要五分鐘時間，如果煮十隻蛋需要幾多時間呢？", 
							  "created_time_ts": 1458395694, 
							  "id": "1000665249986725_1000983429954907"
							}
						  ], 
						  "id": "10153832186928564"
						}, 
						"10153907351184154": {
						  "url": "http://www.facebook.com/10153907351184154", 
						  "name": "Rexon Han", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1001007343285849", 
							  "message": "題意不清  此題題意之 IQ程度必須提高", 
							  "created_time_ts": 1458397822, 
							  "id": "1000665249986725_1001007343285849"
							}
						  ], 
						  "id": "10153907351184154"
						}, 
						"1250353228314869": {
						  "url": "http://www.facebook.com/1250353228314869", 
						  "name": "陳立杰", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153270219491566?comment_id=10153274580946566", 
							  "message": "看到了", 
							  "created_time_ts": 1458361009, 
							  "id": "10153270219491566_10153274580946566"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000934693293114", 
							  "message": "可以閉眼阿", 
							  "created_time_ts": 1458390705, 
							  "id": "1000662773320306_1000934693293114"
							}
						  ], 
						  "id": "1250353228314869"
						}, 
						"1141771719167700": {
						  "url": "http://www.facebook.com/1141771719167700", 
						  "name": "謝佳凌", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165840043449381", 
							  "message": "我們在潮流前端耶", 
							  "created_time_ts": 1458359127, 
							  "id": "1165062986860420_1165840043449381"
							}, 
							{
							  "url": "https://www.facebook.com/108929339140462/posts/1165062986860420?comment_id=1165840790115973", 
							  "message": "陳璿如", 
							  "created_time_ts": 1458359148, 
							  "id": "1165062986860420_1165840790115973"
							}
						  ], 
						  "id": "1141771719167700"
						}, 
						"1077072318981235": {
						  "url": "http://www.facebook.com/1077072318981235", 
						  "name": "李大貓", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631281110674", 
							  "message": "工讀生打翻泡麵", 
							  "created_time_ts": 1458362468, 
							  "id": "10153631260150674_10153631281110674"
							}
						  ], 
						  "id": "1077072318981235"
						}, 
						"10208605222552010": {
						  "url": "http://www.facebook.com/10208605222552010", 
						  "name": "Mark Chang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275030851566", 
							  "message": "立刻檢討改善\n\n先從基層開始開會", 
							  "created_time_ts": 1458381524, 
							  "id": "10153274910276566_10153275030851566"
							}
						  ], 
						  "id": "10208605222552010"
						}, 
						"693742827432442": {
						  "url": "http://www.facebook.com/693742827432442", 
						  "name": "陳冠宇", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1001033779949872", 
							  "message": "這麼怕就不要玩啊", 
							  "created_time_ts": 1458399725, 
							  "id": "1000662773320306_1001033779949872"
							}
						  ], 
						  "id": "693742827432442"
						}, 
						"985040374917702": {
						  "url": "http://www.facebook.com/985040374917702", 
						  "name": "邱新偉", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000658219987428", 
							  "message": "腦殘台灣人看到包裝漂亮就認為是高檔貨...慘...", 
							  "created_time_ts": 1458355599, 
							  "id": "1000173973369186_1000658219987428"
							}
						  ], 
						  "id": "985040374917702"
						}, 
						"10205652185799993": {
						  "url": "http://www.facebook.com/10205652185799993", 
						  "name": "David Lu", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000572646662652", 
							  "message": "Kevin Chang 姑且先不論台積電還是代工廠，他骨子裡是一家外商公司，除了壓榨台灣勞工和每年拿台灣人幾十億租稅補貼以外，其他很難讓台灣人驕傲。", 
							  "created_time_ts": 1458343795, 
							  "id": "1000215556698361_1000572646662652"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000575226662394", 
							  "message": "先進國家本來就很少在做製造業", 
							  "created_time_ts": 1458344330, 
							  "id": "1000215556698361_1000575226662394"
							}
						  ], 
						  "id": "10205652185799993"
						}, 
						"1134056246604577": {
						  "url": "http://www.facebook.com/1134056246604577", 
						  "name": "Kevin Chang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000402483346335", 
							  "message": "因為上不了網", 
							  "created_time_ts": 1458321005, 
							  "id": "1000215556698361_1000402483346335"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000402726679644", 
							  "message": "哥，真有默契", 
							  "created_time_ts": 1458321031, 
							  "id": "1000215556698361_1000402726679644"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000403600012890", 
							  "message": "台積電很低階嗎", 
							  "created_time_ts": 1458321114, 
							  "id": "1000215556698361_1000403600012890"
							}
						  ], 
						  "id": "1134056246604577"
						}, 
						"1544124939247782": {
						  "url": "http://www.facebook.com/1544124939247782", 
						  "name": "有個冬天.", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631330225674", 
							  "message": "放了紅色那包", 
							  "created_time_ts": 1458364759, 
							  "id": "10153631260150674_10153631330225674"
							}
						  ], 
						  "id": "1544124939247782"
						}, 
						"10201534517282861": {
						  "url": "http://www.facebook.com/10201534517282861", 
						  "name": "韋長華", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000681259985124", 
							  "message": "VIVE全套799", 
							  "created_time_ts": 1458359345, 
							  "id": "1000641219989128_1000681259985124"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000692773317306", 
							  "message": "付出多少代價得到多少體驗", 
							  "created_time_ts": 1458361545, 
							  "id": "1000641219989128_1000692773317306"
							}
						  ], 
						  "id": "10201534517282861"
						}, 
						"10205598594756094": {
						  "url": "http://www.facebook.com/10205598594756094", 
						  "name": "Howard De", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000665249986725?comment_id=1001059249947325", 
							  "message": "這只是個開端，內文不是也提到有科學家認為找到根本後便能讓細菌變得更強壯，分解得更快嗎?抱著希望看世界會讓自己比較愉快吧?", 
							  "created_time_ts": 1458402902, 
							  "id": "1000665249986725_1001059249947325"
							}
						  ], 
						  "id": "10205598594756094"
						}, 
						"689429177826300": {
						  "url": "http://www.facebook.com/689429177826300", 
						  "name": "Aaron Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000885743298009", 
							  "message": "沒VR也不需要遮眼阿..", 
							  "created_time_ts": 1458385486, 
							  "id": "1000662773320306_1000885743298009"
							}
						  ], 
						  "id": "689429177826300"
						}, 
						"1943296605724026": {
						  "url": "http://www.facebook.com/1943296605724026", 
						  "name": "張庭維", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000932943293289", 
							  "message": "蘇家慶 台成清交只在台積電管生產線!? 這其中是不是有什麼誤會XD", 
							  "created_time_ts": 1458390474, 
							  "id": "1000215556698361_1000932943293289"
							}
						  ], 
						  "id": "1943296605724026"
						}, 
						"945526738834473": {
						  "url": "http://www.facebook.com/945526738834473", 
						  "name": "登山客", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153273607176566", 
							  "message": "太陽能板是最不環保的發電方式哦～\n只是很方便而已", 
							  "created_time_ts": 1458326171, 
							  "id": "10153272506196566_10153273607176566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272751081566?comment_id=10153273875901566", 
							  "message": "很亂又很吃效能?", 
							  "created_time_ts": 1458334826, 
							  "id": "10153272751081566_10153273875901566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274481641566", 
							  "message": "太陽能本身是零污染沒錯\n但「太陽能板」對環境的傷害絕對是不容小覷的\n太陽能板的製造過程對環境造成的慘況絕對沒有你所講的這麼簡單...\n\n火力發電對溫室效應加劇的說法尚未得到明確且絕對的數據證實\n核能的潛在風險傷害的發生機率，是可以透過精密的人為控管降低的\n但太陽能板對河川、土地造成的污染是必定、立即、可見，且現階段技術難以立即復原的\n\n要比乾淨，太陽能真的不會是最乾淨的選項\n\n那為什麼會造成這麼大的傷害還是如此倍受喜愛？\n就是因為她足夠便利\n發電最困難的條件就是那塊板子而已\n相較其他發電方式，受地利、氣候、原料等因素的限制較低，且造型輕便可塑\n\n舉個日常生活中的例子，計算機上的太陽能板換成別種發電方式\n你覺得要在上面裝個反應爐好，還是在上面插支風車好？", 
							  "created_time_ts": 1458356199, 
							  "id": "10153272506196566_10153274481641566"
							}
						  ], 
						  "id": "945526738834473"
						}, 
						"514211632092324": {
						  "url": "http://www.facebook.com/514211632092324", 
						  "name": "劉尚綸", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000691023317481", 
							  "message": "主機呢？", 
							  "created_time_ts": 1458361312, 
							  "id": "1000641219989128_1000691023317481"
							}
						  ], 
						  "id": "514211632092324"
						}, 
						"10153442502241169": {
						  "url": "http://www.facebook.com/10153442502241169", 
						  "name": "Autumn Chen", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000313500021900", 
							  "message": "陳文茜雖然錯了,但是台灣的媒體人,有比她更專業的嗎 ？", 
							  "created_time_ts": 1458309362, 
							  "id": "1000173973369186_1000313500021900"
							}
						  ], 
						  "id": "10153442502241169"
						}, 
						"1131895026834836": {
						  "url": "http://www.facebook.com/1131895026834836", 
						  "name": "陳弘哲", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1000970456622871", 
							  "message": "陳立杰 突破盲點", 
							  "created_time_ts": 1458394461, 
							  "id": "1000662773320306_1000970456622871"
							}
						  ], 
						  "id": "1131895026834836"
						}, 
						"1056552944418226": {
						  "url": "http://www.facebook.com/1056552944418226", 
						  "name": "雷子霆", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000378346682082", 
							  "message": "我覺得台灣人有參與 不代表整個台灣的成功阿 這只證明他本人的傑出吧", 
							  "created_time_ts": 1458317483, 
							  "id": "1000215556698361_1000378346682082"
							}
						  ], 
						  "id": "1056552944418226"
						}, 
						"10204549126327563": {
						  "url": "http://www.facebook.com/10204549126327563", 
						  "name": "Mason Huang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000468010006449", 
							  "message": "台灣的國發基金應該盡量把google的股份買下來。最好有一席董事。", 
							  "created_time_ts": 1458328985, 
							  "id": "1000215556698361_1000468010006449"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000469186672998", 
							  "message": "發展程式高手，軟體國力象徵。", 
							  "created_time_ts": 1458329220, 
							  "id": "1000215556698361_1000469186672998"
							}
						  ], 
						  "id": "10204549126327563"
						}, 
						"936398649769893": {
						  "url": "http://www.facebook.com/936398649769893", 
						  "name": "許竣翔", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631282910674", 
							  "message": "沒屋頂系統缺陷一堆！ \n帳戶莫名被盜也怪到用戶身上", 
							  "created_time_ts": 1458362620, 
							  "id": "10153631260150674_10153631282910674"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631284790674", 
							  "message": "更正 多名用戶同時被盜", 
							  "created_time_ts": 1458362739, 
							  "id": "10153631260150674_10153631284790674"
							}, 
							{
							  "url": "https://www.facebook.com/161676900673/posts/10153631260150674?comment_id=10153631385640674", 
							  "message": "https://m.facebook.com/story.php?story_fbid=1742620562640880&substory_index=0&id=1632027893700148", 
							  "created_time_ts": 1458367501, 
							  "id": "10153631260150674_10153631385640674"
							}
						  ], 
						  "id": "936398649769893"
						}, 
						"985540254853962": {
						  "url": "http://www.facebook.com/985540254853962", 
						  "name": "陳韋漢", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000088620044388?comment_id=1000376476682269", 
							  "message": "唉", 
							  "created_time_ts": 1458317345, 
							  "id": "1000088620044388_1000376476682269"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000384636681453", 
							  "message": "還有運算速度 資訊整合力 決斷速度", 
							  "created_time_ts": 1458318358, 
							  "id": "1000173973369186_1000384636681453"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000614719991778", 
							  "message": "Kao Shuai 請問這個台灣人替誰工作? google? 還是台灣企業\n這個台灣企業早就被google買下來了\n閣下認為他目前的貢獻是對台灣有利 還是對google有利\n所以我說要全面思考 不要因為人家是台灣人 就以為他做的事情都跟台灣有利\n另外 AlphaGo的設計團隊只有台灣人嗎? 其中的技術 資金來源 任何支持這個計畫的來源是台灣嗎? 你怎麼好意思說的好像AlphaGo是台灣的東西似的.....\n\n而且我哪裡有否定其他人的付出? 你腦補我的句子?", 
							  "created_time_ts": 1458349827, 
							  "id": "1000215556698361_1000614719991778"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000619553324628", 
							  "message": "台灣人有個缺點 只有國外有台灣人做了什麼舉世無雙的東西 在台灣本島的人就會立刻跳出來說台灣之光!\n這是好事 但是當這種光環漸漸變成一種自慰\n你看 AlphaGo是台灣人設計的耶(AlphaGo是google的東西)\n你看 林書豪是NBA籃球選手耶(林書豪是台裔美國人)", 
							  "created_time_ts": 1458350217, 
							  "id": "1000215556698361_1000619553324628"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153272506196566?comment_id=10153274413471566", 
							  "message": "先不吐槽太陽能的製造過程\n光是它的使用效率就讓人覺得投入>產出", 
							  "created_time_ts": 1458353965, 
							  "id": "10153272506196566_10153274413471566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153271782866566?comment_id=10153274735256566", 
							  "message": "Alphabet本來就是Google\n只是為了擺脫財務報表上非常難看的數字\n所以成立一個Alphabet母公司並控股所有原Google公司旗下所有事業 包含Google", 
							  "created_time_ts": 1458367968, 
							  "id": "10153271782866566_10153274735256566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275352071566", 
							  "message": "大概是84億公升的口水投入人工智慧產業吧", 
							  "created_time_ts": 1458394516, 
							  "id": "10153274910276566_10153275352071566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275354131566", 
							  "message": "說實在的 我們的政府如果要能做事 就要先革除立法院的劣質立委 無論任何政黨", 
							  "created_time_ts": 1458394582, 
							  "id": "10153274910276566_10153275354131566"
							}, 
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000662773320306?comment_id=1001039083282675", 
							  "message": "就是怕才好玩\n不然玩恐怖遊戲幹嘛", 
							  "created_time_ts": 1458400649, 
							  "id": "1000662773320306_1001039083282675"
							}
						  ], 
						  "id": "985540254853962"
						}, 
						"1218019214892119": {
						  "url": "http://www.facebook.com/1218019214892119", 
						  "name": "王璿翔", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274919126566", 
							  "message": "我們的政府在做啥……？", 
							  "created_time_ts": 1458376677, 
							  "id": "10153274910276566_10153274919126566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275062646566", 
							  "message": "好激動喔！", 
							  "created_time_ts": 1458383488, 
							  "id": "10153274910276566_10153275062646566"
							}, 
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153275457386566", 
							  "message": "說的好", 
							  "created_time_ts": 1458397864, 
							  "id": "10153274910276566_10153275457386566"
							}
						  ], 
						  "id": "1218019214892119"
						}, 
						"1128785117132889": {
						  "url": "http://www.facebook.com/1128785117132889", 
						  "name": "卓志鋼", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000641219989128?comment_id=1000721883314395", 
							  "message": "毛毛，你先買我再借來玩看看", 
							  "created_time_ts": 1458366353, 
							  "id": "1000641219989128_1000721883314395"
							}
						  ], 
						  "id": "1128785117132889"
						}, 
						"1301922659822863": {
						  "url": "http://www.facebook.com/1301922659822863", 
						  "name": "李勳", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000173973369186?comment_id=1000583736661543", 
							  "message": "可憐", 
							  "created_time_ts": 1458345210, 
							  "id": "1000173973369186_1000583736661543"
							}
						  ], 
						  "id": "1301922659822863"
						}, 
						"10204188238145262": {
						  "url": "http://www.facebook.com/10204188238145262", 
						  "name": "Shih-Yen Lo", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274970096566", 
							  "message": "https://www.facebook.com/pnnnq/videos/854516571361142/", 
							  "created_time_ts": 1458378767, 
							  "id": "10153274910276566_10153274970096566"
							}
						  ], 
						  "id": "10204188238145262"
						}, 
						"10207757579113968": {
						  "url": "http://www.facebook.com/10207757579113968", 
						  "name": "Kevin Chang", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/159425621565/posts/10153274910276566?comment_id=10153274965416566", 
							  "message": "徵文比賽", 
							  "created_time_ts": 1458378641, 
							  "id": "10153274910276566_10153274965416566"
							}
						  ], 
						  "id": "10207757579113968"
						}, 
						"947220385367890": {
						  "url": "http://www.facebook.com/947220385367890", 
						  "name": "張彤睿", 
						  "comments": [
							{
							  "url": "https://www.facebook.com/436202956432960/posts/1000215556698361?comment_id=1000425850010665", 
							  "message": "單憑3腥 就一支獨秀了..", 
							  "created_time_ts": 1458323175, 
							  "id": "1000215556698361_1000425850010665"
							}
						  ], 
						  "id": "947220385367890"
						}
					  };
						this.links = [
						{
						  "user_id": "1218019214892119", 
						  "links": [
							"1218019214892119", 
							"985540254853962", 
							"10201196706156342", 
							"10208605222552010", 
							"10204188238145262", 
							"10206096592670825", 
							"10207757579113968", 
							"10205057133457411", 
							"10208627811787813"
						  ], 
						  "leader_ratio": 100
						}, 
						{
						  "user_id": "1094080783937331", 
						  "links": [
							"985540254853962", 
							"693742827432442", 
							"1131895026834836", 
							"1250353228314869", 
							"1094080783937331", 
							"689429177826300", 
							"1111849558838901"
						  ], 
						  "leader_ratio": 78
						}, 
						{
						  "user_id": "1013418272057860", 
						  "links": [
							"985540254853962", 
							"10204549126327563", 
							"947220385367890", 
							"10204645847500958", 
							"1013418272057860", 
							"1056552944418226"
						  ], 
						  "leader_ratio": 66
						}, 
						{
						  "user_id": "1269584846388913", 
						  "links": [
							"1943296605724026", 
							"10153288586612014", 
							"1269584846388913", 
							"10205652185799993", 
							"1685588808362228", 
							"1134056246604577"
						  ], 
						  "leader_ratio": 66
						}, 
						{
						  "user_id": "10201534517282861", 
						  "links": [
							"1073973689309053", 
							"1128785117132889", 
							"10201534517282861", 
							"1073316399396403", 
							"514211632092324"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "1077072318981235", 
						  "links": [
							"936398649769893", 
							"10205401366049668", 
							"1544124939247782", 
							"918303951590168", 
							"1215385525144380"
						  ], 
						  "leader_ratio": 55
						}, 
						{
						  "user_id": "1526407350987220", 
						  "links": [
							"1526407350987220", 
							"945526738834473", 
							"985540254853962", 
							"1381519671873751"
						  ], 
						  "leader_ratio": 47
						}, 
						{
						  "user_id": "10205729224362354", 
						  "links": [
							"943886005726400", 
							"803373723101624", 
							"10205729224362354", 
							"1141771719167700"
						  ], 
						  "leader_ratio": 45
						}, 
						{
						  "user_id": "10207502118564180", 
						  "links": [
							"10205598594756094", 
							"10207502118564180", 
							"10153907351184154", 
							"10153832186928564"
						  ], 
						  "leader_ratio": 45
						}, 
						{
						  "user_id": "10153442502241169", 
						  "links": [
							"985040374917702", 
							"965145713547949", 
							"1301922659822863", 
							"535951239897067"
						  ], 
						  "leader_ratio": 44
						}
					  ];
					break;					
				}
			break;
			default:
			break;
		}
	}
});