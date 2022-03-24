#!/bin/bash
# https://github.com/Hyy2001X/AutoBuild-Actions
# AutoBuild Module by Hyy2001

rm -f /tmp/cloud_version
rm -f /tmp/Version_Tags
if [[ -f /bin/openwrt_info ]]; then
	chmod +x /bin/openwrt_info
	bash /bin/AutoUpdate.sh	-w
else
	echo "未检测到openwrt_info文件,无法运行更新程序!" > /tmp/cloud_version
	exit 1
fi
[[ ! -f /tmp/Version_Tags ]] && echo "未检测到云端版本,请检查网络,或您的仓库为私库,或您修改的Github地址有错误,或发布已被删除,或再次刷新网页试试!" > /tmp/cloud_version && exit 1
chmod +x /tmp/Version_Tags && source /tmp/Version_Tags
if [[ -n "${CLOUD_Firmware}" ]];then
	if [[ "${LOCAL_Firmware}" -eq "${CLOUD_Firmware}" ]];then
		Checked_Type="已是最新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -gt "${CLOUD_Firmware}" ]];then
		Checked_Type="发现更高版本固件可更新"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version
	elif [[ "${LOCAL_Firmware}" -lt "${CLOUD_Firmware}" ]];then
		Checked_Type="云端最高版本固件,低于您现在所安装的版本"
		echo "${CLOUD_Firmware} [${Checked_Type}]" > /tmp/cloud_version	
	fi
else
	echo "没检测到云端固件，您可能把云端固件删除了，或格式不对称，比如很多虚拟机安装UEIF格式都会变成Legacy引导!" > /tmp/cloud_version
fi
exit 0
