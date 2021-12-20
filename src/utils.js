/**
 * @Description:    工具类
 * @Author:         YKB
 * @Email:          305832053@qq.com
 * @CreateDate:     2021/12/20 14:46
 */

/**
 * 检测图片是否存在
 * @param url
 */
export const imageIsExist = function(url) {
    return new Promise((resolve) => {
        var img = new Image();
        img.onload = function () {
            if (this.complete == true){
                resolve(true);
                img = null;
            }
        }
        img.onerror = function () {
            resolve(false);
            img = null;
        }
        img.src = url;
    })
}