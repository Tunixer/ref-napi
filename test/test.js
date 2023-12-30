'use strict';
const path = require('path');
// 这个就是'@lwahonen/ref-napi'
/*
 * var refNAPI  = require('node-gyp-build')(path.join(__dirname, '..'));
 * 上述语句只会导入gyp编译的二进制文件，但不会导入ref.js中定义的types 
 */
var refNAPI  = require(path.join(__dirname, '..'));
var StructType = require("ref-struct-di");
/*
 * 关键在于弄清楚其中的变化过程
 */
const NAPIStructType = StructType(refNAPI);
console.log(refNAPI.types);
const Plane = NAPIStructType({
    a:     refNAPI.types.float,
    b:     refNAPI.types.float,
    c:     refNAPI.types.float,
    d:     refNAPI.types.float
});