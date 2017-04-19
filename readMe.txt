开启博客的方法
1.建立本地数据库
怎么样MongoDB搭建环境-
下面主要是在Windows上（WinXP）安装、运行、安装Windows服务的笔记，以作备忘。
1、下载
下载地址：http://www.mongodb.org/downloads
从其下载页面就可以看出MongoDB还真的是不赖，支持各个操作系统，其驱动也有好多，其中就有我喜欢的Java和Python驱动，看样子我真的应该学习下了。
我下载的是Windows321.7.1版本的【http://fastdl.mongodb.org/win32/mongodb-win32-i386-1.7.1.zip】（正在开发中，不稳定，不过学习可以了），它的说明中有个限制，数据最大只能2GB，不过对于学习来说，已经足够了。
2、安装
安装非常简单，解压就行了，我解压后，放在D:/MongoDB目录下。
为了命令行的方便，我把D:/MongoDB/bin加到系统环境变量的path中了。
3、运行
D:\>mongod –dbpath D:/MongoDB/data
SunOct2415:07:05MongoDBstarting:pid=2472 port=3000 dbpath=D:/MongoDB/data64-bit
**NOTE:Thisisadevelopmentversion(1.7.1)ofMongoDB.
**Notrecommendedforproduction.
**NOTE:whenusingMongoDB32bit,youarelimitedtoabout2gigabytesofdata
**seehttp://blog.mongodb.org/post/137788967/32-bit-limitations
SunOct2415:07:05dbversionv1.7.1,pdfileversion4.5
SunOct2415:07:05gitversion:cee2d0d6816a704126c283401db24c949d5f52a3
SunOct2415:07:05sysinfo:windows(5,1,2600,2,'ServicePack3')BOOST_LIB_VERSION=1_35
SunOct2415:07:05[initandlisten]waitingforconnectionsonport27017
SunOct2415:07:05[websvr]webadmininterfacelisteningonport28017
由于是开发版，上面就有个警告，没关系，忽略它。(data目录自己手动创建)
最后两行说明的数据库端口和Web端口，分别是27017和28017，在浏览器中打开http://localhost:28017，可以看到其相关的一些信息。
4、安装Windows服务
每次运行mongod –dbpath D:/MongoDB/data命令行来启动MongoDB实在是不方便，就像我免安装的MySQL一样，我想把它作为Windows服务，这样就方便多了。
D:\MongoDB\bin>mongod --logpath D:\MongoDB\logs\MongoDB.log --logappend --dbpath D:\MongoDB\data --directoryperdb --serviceName MongoDB --install

alloutputgoingto:D:\MongoDB\logs\MongoDB.log
CreatingserviceMongoDB.
Servicecreationsuccessful.
Servicecanbestartedfromthecommandlinevia'netstart"MongoDB"'.
注意：这条命令要到MongoDB的bin目录下运行，刚开始的时候，我就直接在D:\下运行，结果服务的可执行目录为【"D:\mongod"--logpath"D:\MongoDB\logs\MongoDB.log"--logappend--dbpath"D:\MongoDB\data"--di

进入到你当前MongoDB所在的目录地址
例如我的是放在D盘：cd/d D:\MongoDB\bin
-mongo命令进入数据库
至于怎么建立数据库   网上很多
-use simpleBlog 进入数据库 我建立的名称为simpleBlog
这样本地的数据库就搭建完成

2.搭建本地服务器环境
下载nodejs
把项目放在nodejs里面 
我也放在D盘：进入到项目所在路径
-node bin/www
这样就开启了服务器的环境
在浏览器中输入http://localhost:3000/index
即可



