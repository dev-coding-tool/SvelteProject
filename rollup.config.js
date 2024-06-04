import alias from "@rollup/plugin-alias";
import path from 'path';

export default {
    plugins: [
        alias({
            entries: [
                {
                    find: '~',
                    replacement: path.resolve(__dirname, 'src/'), // __dirmname: 해당 파일의 경로, "해당 파일의 경로/src"에 해당하는 경로를 ~로 alias
                }
            ]
        }),
    ],
};