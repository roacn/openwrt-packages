#!/bin/bash
# https://github.com/Hyy2001X/AutoBuild-Actions
# AutoBuild Module by Hyy2001


[[ -f /tmp/cloud_version ]] && rm -f /tmp/cloud_version
[[ -f /tmp/Version_Tags ]] && rm -f /tmp/Version_Tags
[[ -f /tmp/baidu.html ]] && rm -rf /tmp/baidu.html

curl -o /tmp/baidu.html -s -w %{time_namelookup}: http://www.baidu.com
if [[ -f /tmp/baidu.html ]] && [[ `grep -c "百度一下" /tmp/baidu.html` -ge '1' ]]; then
	rm -rf /tmp/baidu.html
else
	echo "您可能没进行联网,请检查网络!" > /tmp/cloud_version
	exit 1
fi

if [[ -f /bin/openwrt_info ]]; then
	chmod +x /bin/openwrt_info
	source /bin/openwrt_info
	if [[ $? -ne 0 ]];then
		echo "openwrt_info数据有误运行失败,请检查openwrt_info文件!" > /tmp/cloud_version
		exit 1
        fi
	chmod +x /bin/AutoUpdate.sh
	bash /bin/AutoUpdate.sh	-w
        if [[ $? -ne 0 ]];then
		echo "AutoUpdate.sh数据有误运行失败,请检查AutoUpdate.sh文件!" > /tmp/cloud_version
		exit 1
        fi
else
	echo "未检测到openwrt_info文件,无法运行更新程序!" > /tmp/cloud_version
	exit 1
fi

[[ ! -f /tmp/Version_Tags ]] && echo "未检测到云端版本,或您的仓库为私库,或您修改的Github地址有错误,或发布已被删除!" > /tmp/cloud_version && exit 1
chmod +x /tmp/Version_Tags && source /tmp/Version_Tags
if [[ -n "${CLOUD_Firmware}" ]]; then
	if [[ "${LOCAL_Firmware}" -eq "${CLOUD_Firmware}" ]]; then
		Checked_Type="已是最新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -gt "${CLOUD_Firmware}" ]]; then
		Checked_Type="发现更高版本固件可更新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -lt "${CLOUD_Firmware}" ]]; then
		Checked_Type="云端最高版本固件,低于您现在所安装的版本"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version	
	fi
else
	echo "没检测到云端固件，您可能把云端固件删除了，或格式不对称，比如很多虚拟机安装UEIF格式都会变成Legacy引导!" > /tmp/cloud_version
fi
exit 0
