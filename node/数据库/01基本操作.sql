-- select * from users;
-- 选择 
-- select username,password from users; 
 
-- 插入
-- INSERT INTO users (username,password) values ('tony stark','12138');


-- 修改
-- update users set password=888888 where id=3;
-- update users set password='admin123',status=1 where id=2;

-- 删除
-- delete from users where id=3;


-- insert into users (id,username,password) values (3,'h','abc');

-- 按照status的升序排序
-- select * from users order by status; -- 或者加上SAC
-- 按照 id 降序排序
-- select * from users order by id desc;
-- 按照 status 降序排序，再按照 id 升序排序
-- select * from users order by status desc, id asc;

-- 统计
-- select count(*) from users where status=0;

-- 起别名
select count(*) as total from users where status=0;
-- select * from users;