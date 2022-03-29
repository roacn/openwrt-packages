#!/bin/bash
# https://github.com/Hyy2001X/AutoBuild-Actions
# AutoBuild Module by Hyy2001


[[ -f /tmp/cloud_version ]] && rm -f /tmp/cloud_version
[[ -f /tmp/Version_Tags ]] && rm -f /tmp/Version_Tags
[[ -f /tmp/baidu.html ]] && rm -rf /tmp/baidu.html

curl -o /tmp/baidu.html -s -w %{time_namelookup}: http://www.baidu.com > /dev/null 2>&1
if [[ -f /tmp/baidu.html ]] && [[ `grep -c "百度一下" /tmp/baidu.html` -ge '1' ]]; then
	rm -rf /tmp/baidu.html
else
	echo "您可能没进行联网,请检查网络,或您的网络不能连接百度?" > /tmp/cloud_version
	exit 1
fi

if [[ -f /bin/openwrt_info ]]; then
	chmod +x /bin/openwrt_info
	source /bin/openwrt_info
	if [[ $? -ne 0 ]];then
		echo "openwrt_info数据有误运行失败,请检查openwrt_info文件!" > /tmp/cloud_version
		exit 1
        fi
else
	echo "固件不存在openwrt_info执行文件!" > /tmp/cloud_version
	exit 1
fi

if [[ -f /bin/AutoUpdate.sh ]]; then
	chmod +x /bin/AutoUpdate.sh
	bash /bin/AutoUpdate.sh	-w
	if [[ $? -ne 0 ]];then
		echo "您现在所用的Github地址上没检测到云端存在,或您的仓库为私库!" > /tmp/cloud_version
		exit 1
        fi
else
	echo "固件不存在AutoUpdate.sh执行文件!" > /tmp/cloud_version
	exit 1
fi

[[ -f /tmp/format_tags ]] && echo "获取云端固件版本信息失败,如果是x86的话,注意固件的引导模式是否对应,比如很多虚拟机安装UEIF格式都会变成Legacy引导,或者是蛋痛的脚本作者修改过脚本导致版本信息不一致!" > /tmp/cloud_version && exit 1

if [[ -f /tmp/Version_Tags ]]; then
	chmod +x /tmp/Version_Tags
	source /tmp/Version_Tags
else
	echo "未知原因获取不了版本信息" > /tmp/cloud_version
	exit 1
fi
if [[ -n "${CLOUD_Firmware}" ]]; then
	if [[ "${LOCAL_Firmware}" -eq "${CLOUD_Firmware}" ]]; then
		Checked_Type="已是最新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -gt "${CLOUD_Firmware}" ]]; then
		Checked_Type="发现更高版本固件可更新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -lt "${CLOUD_Firmware}" ]]; then
		Checked_Type="云端最高版本固件,低于您现在所安装的版本,请到云端查看原因"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version	
	fi
fi
exit 0
