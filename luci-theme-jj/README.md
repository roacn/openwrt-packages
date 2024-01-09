<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/JJ%20Logo.png?raw=true">
</div>

### 本主题基于 OpenWrt R21 版本和Boostrap 主题制作。
**建议使用lean大的固件进行编译，[仓库地址](https://github.com/coolsnowwolf/lede/)**
> 主要改动：
- 引用了ECHART图表插件。
- 对后台状态首页的布局进行了调整，凸出显示CPU使用状态和负载状态，内存使用状态等。
- 配色调整为灰白
- 基本适配了IPHONE手机端，PC端在Chromium内核浏览器下通过。
- ~~中文字体换了个人比较喜欢的TaipeiSansTC~~ (字体体积过大，取消)
	
  ##### 由于不止改动OPENWRT的CSS和基本页面，还涉及到系统默认布局文件，暂时只能是编译安装后再通过SH脚本完成最后安装。系统默认主题原文件会在同个位置备份为有'backup_by_JJ'后缀的文件）

> 即将开发功能：
- 显示后台首页的各接口流量（上传/下载）实时速度
- 佛系构思中。。。


 # <div align=center>HOW TO???</div>


1. **编译安装步骤**：

    1.1 下载好lean大固件后，进入在package/lean/文件夹下git clone我的主题
	```bash
    $ cd lede/packkage/lean
    $ git clone https://github.com/netitgo/luci-theme-jj.git
	```
    编译菜单里就能出现`JJ Theme`主题可选。
    
    1.2 编译成功和固件安装后，通过SSH到目录路径`/www/luci-static/JJTheme/`,
    赋予文件夹下`toggleIndex.sh`运行权限,运行脚本：

	```bash
	$ cd /www/luci-static/JJTheme/
	$ chmod u+x ./toggleIndex.sh
	$ ./toggleIndex.sh
	```
    脚本运行后，有提示`Done`即为成功。
        
	1.3 登录OPENWRT后台选定JJ Theme为默认主题，然后清除OPENWRT缓存,重新进入后台即可生效。
	```bash
    $ rm -rf /tmp/luci-modulecache/*
    $ rm /tmp/luci-indexcache
	```

2. **IPK安装步骤**：

    2.1 上传IPK文件到`tmp`目录并安装：
    ```bash
    $ cd /tmp
    $ opkg install luci-theme-jj*.ipk
    ```
    2.2 安装成功后，返回上面`1.2`步骤运行`toggleIndex.sh`。


---

- ### 登录效果图（移动端）

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_login_mobile.png?raw=true" width=40%>
</div>

- ### 首页-目录效果图（移动端）

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_menu_mobile.gif?raw=true" width=40%>
</div>

- ### 首页-效果图（移动端）

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_login_mobile.gif?raw=true" width=40%>
</div>

---

- ### 登录-效果图（PC端）

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_login.png?raw=true" width=80%>
</div>

- ### 首页-效果图（PC端）

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_main.png?raw=true" width=80%>
</div>

- ### 数据动画图

<div align=center>
<img src="https://github.com/netitgo/stuff/blob/master/screenshots_main.gif?raw=true" width=80%>
</div>
