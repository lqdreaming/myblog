�������͵ķ���
1.�����������ݿ�
��ô��MongoDB�����-
������Ҫ����Windows�ϣ�WinXP����װ�����С���װWindows����ıʼǣ�����������
1������
���ص�ַ��http://www.mongodb.org/downloads
��������ҳ��Ϳ��Կ���MongoDB������ǲ�����֧�ָ�������ϵͳ��������Ҳ�кö࣬���о�����ϲ����Java��Python�����������������Ӧ��ѧϰ���ˡ�
�����ص���Windows321.7.1�汾�ġ�http://fastdl.mongodb.org/win32/mongodb-win32-i386-1.7.1.zip�������ڿ����У����ȶ�������ѧϰ�����ˣ�������˵�����и����ƣ��������ֻ��2GB����������ѧϰ��˵���Ѿ��㹻�ˡ�
2����װ
��װ�ǳ��򵥣���ѹ�����ˣ��ҽ�ѹ�󣬷���D:/MongoDBĿ¼�¡�
Ϊ�������еķ��㣬�Ұ�D:/MongoDB/bin�ӵ�ϵͳ����������path���ˡ�
3������
D:\>mongod �Cdbpath D:/MongoDB/data
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
�����ǿ����棬������и����棬û��ϵ����������(dataĿ¼�Լ��ֶ�����)
�������˵�������ݿ�˿ں�Web�˿ڣ��ֱ���27017��28017����������д�http://localhost:28017�����Կ�������ص�һЩ��Ϣ��
4����װWindows����
ÿ������mongod �Cdbpath D:/MongoDB/data������������MongoDBʵ���ǲ����㣬�������ⰲװ��MySQLһ�������������ΪWindows���������ͷ�����ˡ�
D:\MongoDB\bin>mongod --logpath D:\MongoDB\logs\MongoDB.log --logappend --dbpath D:\MongoDB\data --directoryperdb --serviceName MongoDB --install

alloutputgoingto:D:\MongoDB\logs\MongoDB.log
CreatingserviceMongoDB.
Servicecreationsuccessful.
Servicecanbestartedfromthecommandlinevia'netstart"MongoDB"'.
ע�⣺��������Ҫ��MongoDB��binĿ¼�����У��տ�ʼ��ʱ���Ҿ�ֱ����D:\�����У��������Ŀ�ִ��Ŀ¼Ϊ��"D:\mongod"--logpath"D:\MongoDB\logs\MongoDB.log"--logappend--dbpath"D:\MongoDB\data"--di

���뵽�㵱ǰMongoDB���ڵ�Ŀ¼��ַ
�����ҵ��Ƿ���D�̣�cd/d D:\MongoDB\bin
-mongo����������ݿ�
������ô�������ݿ�   ���Ϻܶ�
-use simpleBlog �������ݿ� �ҽ���������ΪsimpleBlog
�������ص����ݿ�ʹ���

2.����ط���������
����nodejs
����Ŀ����nodejs���� 
��Ҳ����D�̣����뵽��Ŀ����·��
-node bin/www
�����Ϳ����˷������Ļ���
�������������http://localhost:3000/index
����



