import * as vscode from 'vscode';
import { move } from 'fe-mv/lib/move';

export function activate(context: vscode.ExtensionContext) {

	// TODO: 大驼峰、连接线、小驼峰、下划线等格式互相转化，或自行重命名
	// TODO: 移动文件/文件夹自动更新依赖
	let disposable = vscode.commands.registerCommand('fe-file-rename.rename', (params) => {
		const filePath = params.fsPath;
		vscode.window.showInformationMessage(JSON.stringify(params));
		// TODO: 调用移动文件函数
		// move("filepath", "newpath", {
		// 	root: "projectRootPath"
		// });
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
