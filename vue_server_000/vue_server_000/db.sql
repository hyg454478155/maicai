#app数据库操作

#功能一:创建用户登录表并且添加数据
#1:进入xz库 7~16
USE app;
#2:创建表 app_login
#3:添加几列 14:20
CREATE TABLE app_login(
   id INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(50),
   upwd  VARCHAR(32),
);
INSERT INTO app_login VALUES(null,'tom','123');

#功能二:创建商品列表模块
CREATE TABLE app_laptop(
   id INT PRIMARY KEY AUTO_INCREMENT,
   pname VARCHAR(50),
   price  VARCHAR(50),
   details  VARCHAR(50)
);
INSERT INTO app_laptop VALUES(null,"土豆",2.3,"精选新土豆，家常餐桌必备","01.png");
INSERT INTO app_laptop VALUES(null,"进口香蕉",3.9,"香甜软糯 老少皆宜","02.png");
INSERT INTO app_laptop VALUES(null,"三红胡萝卜",2.3,"顶级胡萝卜","03.png");
INSERT INTO app_laptop VALUES(null,"精选冷冻肥牛卷",28.9,"肉质细腻 口感弹嫩","04.png");
INSERT INTO app_laptop VALUES(null,"红心火龙果",7.9,"独特皱皮品种","05.png");
INSERT INTO app_laptop VALUES(null,"半边鸭",17.6,"低脂高蛋白","06.png");
INSERT INTO app_laptop VALUES(null,"小青菜",0.99,"鲜嫩可口小青菜","07.png");
INSERT INTO app_laptop VALUES(null,"小馄饨",7.2,"香浓软滑 肉质鲜嫩","08.png");
INSERT INTO app_laptop VALUES(null,"康师傅方便面",4.5,"新老包装交替","09.png");
INSERT INTO app_laptop VALUES(null,"湾仔码头水饺",33.9,"肉质鲜美弹嫩","10.png");
INSERT INTO app_laptop VALUES(null,"家乐浓汤宝",5.9,"让家常菜美味升级的方法","11.png");
INSERT INTO app_laptop VALUES(null,"农夫山泉款泉水",9.0,"大自然的搬运工","12.png");
#功能三:创建用户展示模块
CREATE TABLE app_show(
   id INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(50),
   details  VARCHAR(50),
   img_url  VARCHAR(50)
);
INSERT INTO app_show VALUES(null,"肖艾米","松鼠桂鱼","1.png");
INSERT INTO app_show VALUES(null,"卡拉米","十个步骤吃螃蟹","2.png");
INSERT INTO app_show VALUES(null,"下山虎虎","葱油鲈鱼","3.png");
INSERT INTO app_show VALUES(null,"圆猪猪","红烧冬瓜","4.png");