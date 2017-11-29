export default {
	simple: [
		[''],
		['[]'],
		['[[]]'],
		['[]=[]'],
		['()=>{}'],
		['(foo=0)=>{}'],
		['async()=>{await 0}'],
		['async function foo(){await 0}'],
		['function* foo(){0}'],
		['0+1'],
		['foo:{break foo}'],
		['foo()'],
		['try{}catch(foo){}'],
		['try{}catch(foo){}finally{}'],
		['class Foo{}'],
		['class Foo extends Bar{}'],
		['foo=class Foo{}'],
		['foo=class Foo extends Bar{}'],
		['0?1:2'],
		['foo:while(0)continue foo'],
		['foo:while(0){continue foo}'],
		['debugger'],
		['do{}while(0)'],
		[';'],
		['export * from \'foo\''],
		['export default 0'],
		['export let foo'],
		['export let foo,bar=1'],
		['export {foo as bar,baz}'],
		['for(foo in 0){}'],
		['for(foo of 0){}'],
		['for(;;);'],
		['for(;;){}'],
		['for(;;){break}'],
		['function* foo(){}'],
		['async function foo(){}'],
		['foo=function(){}'],
		['foo=function*(){}'],
		['foo=async function(){}'],
		['foo=function bar(){}'],
		['foo=function* bar(){}'],
		['foo=async function bar(){}'],
		['if(0);'],
		['if(0){}'],
		['if(0){}else;'],
		['if(0){}else{}'],
		['import foo from \'foo\''],
		['import * as foo from \'foo\''],
		['import {foo} from \'foo\''],
		['import {foo as bar} from \'foo\''],
		['import {foo as bar,baz} from \'foo\''],
		['import foo,{foo as bar,baz} from \'foo\''],
		['import foo,* as bar from \'foo\''],
		['0&&1&&2'],
		['0||1&&2'],
		['(0||1)&&2'],
		['(0||1)&&(2||3)'],
		['0&&1||2&&3'],
		['foo.bar'],
		['function foo(){new.target}'],
		['class Foo{foo(){}}'],
		['class Foo{*foo(){}}'],
		['class Foo{async foo(){}}'],
		['class Foo{get foo(){}}'],
		['class Foo{set foo(foo){}}'],
		['new Foo(foo)'],
		['foo={foo:bar}'],
		['foo={foo:bar,bar}'],
		['foo={foo:bar,bar,baz(){},foobar:function(){}}'],
		['foo={foo:bar,bar,baz(){},foobar:function(){},get qux(){},set qux(foo){}}'],
		['const {foo}=2'],
		['const {foo,bar=0}=2'],
		['const {foo,bar=0,baz:{foobar=1}}=2'],
		['(0)', {preserveParens: true}],
		['[...foo]=0'],
		['function foo(){return bar}'],
		['foo(...bar)'],
		['foo,bar'],
		['class Foo{foo(){super.foo}}'],
		['switch(foo){case 0:}'],
		['switch(foo){case 0:bar;break;case 1:}'],
		['switch(foo){case 0:bar;break;case 1:default:}'],
		['`${1}\\u0032${3}\\u0034`'],
		['foo`${1}\\u0032${3}\\u0034`'],
		['foo`${1}\\u0032${3}\n\\n\\u0034`'],
		['this'],
		['throw foo'],
		['+foo'],
		['+-foo'],
		['++foo'],
		['foo++'],
		['typeof foo'],
		['void foo'],
		['delete foo.bar'],
		['with(foo)bar', {sourceType: 'script'}],
		['function* foo(){yield bar}'],
		['function* foo(){yield* bar}'],
		['((1+2)*(3-4)+5)*6**(7+8)'],
	],
};
