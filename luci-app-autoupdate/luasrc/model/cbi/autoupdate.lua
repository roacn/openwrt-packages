require("luci.sys")

m=Map("autoupdate",translate("AutoUpdate"),translate("AutoUpdate LUCI supports one-click firmware upgrade and scheduled upgrade"))

s=m:section(TypedSection,"login","")
s.anonymous=true
s.addremove=false


o = s:option(Flag, "enable", translate("Enable AutoUpdate"),translate("Automatically update firmware during the specified time"))
o.default = 0
o.optional = false

week=s:option(ListValue,"week",translate("xWeek Day"))
week:value(7,translate("Everyday"))
week:value(1,translate("Monday"))
week:value(2,translate("Tuesday"))
week:value(3,translate("Wednesday"))
week:value(4,translate("Thursday"))
week:value(5,translate("Friday"))
week:value(6,translate("Saturday"))
week:value(0,translate("Sunday"))
week.default=0

hour=s:option(Value,"hour",translate("xHour"))
hour.datatype = "range(0,23)"
hour.rmempty = false

pass=s:option(Value,"minute",translate("xMinute"))
pass.datatype = "range(0,59)"
pass.rmempty = false

local github_url = luci.sys.exec("grep -i GITHUB_REPOSITORY_URL= /etc/openwrt_autoupdate | sed 's/\"//g'| awk -F '=' '{print $2;}'")
o=s:option(Value,"github",translate("Github Url"))
o.default=github_url

luci.sys.call("autoupdate -c > /dev/null")

local cloud_version = luci.sys.exec("cat /tmp/autoupdate/autoupdate.cloud")
local current_version = luci.sys.exec("grep -i CURRENT_FIRMWARE= /etc/openwrt_autoupdate | sed 's/\"//g'| awk -F '=' '{print $2;}'")
local cpu_info = luci.sys.exec("grep -i CPU_INFO= /tmp/autoupdate/autoupdate.info | sed 's/\"//g'| awk -F '=' '{print $2;}'")
local kernel_luci = luci.sys.exec("grep -i KERNEL_LUCI= /tmp/autoupdate/autoupdate.info | sed 's/\"//g'| awk -F '=' '{print $2;}'")
local firmware_type = luci.sys.exec("grep -i FIRMWARE_TYPE= /tmp/autoupdate/autoupdate.info | sed 's/\"//g'| awk -F '=' '{print $2;}'")

button_upgrade_firmware = s:option(Button, "_button_upgrade_firmware", translate("Upgrade to Latested Version"),
translatef("若有更新可点击上方 手动更新 后请耐心等待至路由器重启.") .. "<br><br>当前固件版本: " .. current_version .. "<br>云端固件版本: " .. cloud_version.. "<br><br>设备名称: " .. cpu_info .. "<br>内核版本: " .. kernel_luci .. "<br>固件类型: " .. firmware_type)
button_upgrade_firmware.inputtitle = translate ("Do Upgrade")
button_upgrade_firmware.write = function()
	luci.sys.call ("autoupdate -u > /dev/null")
end

local e=luci.http.formvalue("cbi.apply")
if e then
	io.popen("/etc/init.d/autoupdate restart")
end

return m
