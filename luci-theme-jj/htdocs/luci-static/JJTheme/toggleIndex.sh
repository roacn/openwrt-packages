#!/bin/sh
WORKING_PATH='/usr/lib/lua/luci/view/admin_status/'
ORIGINAL_FILE='index.htm'
JJ_FILE='index_jj.htm'
cd $WORKING_PATH
if [ -f "$ORIGINAL_FILE" ];then
    mv $ORIGINAL_FILE index_backup_by_JJ.htm
    echo "Backup the original file, Done!"
    if [ -f "$JJ_FILE" ];then
        mv $JJ_FILE index.htm
        echo "Install the JJ theme file, Done!"
    else
        echo 'the index_jj.htm file not found, pls check!'
    fi
else
    echo 'the index.htm file not found, pls check!'
fi
