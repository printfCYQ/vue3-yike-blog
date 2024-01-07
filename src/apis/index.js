import service from "@/utils/request.ts";
//定义请求方法，然后导出
export function Code(参数) {
  return service({
    url: "/smsCode",
    data: {},
    method: "post",
  });
}
