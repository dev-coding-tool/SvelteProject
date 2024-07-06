import { json } from '@sveltejs/kit';
import * as puppeteer from 'puppeteer';

let categoryList = [];

async function run() {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'); //headeless: true일때 느린 현상 제거
    await page.setViewport({ width: 1920, height: 1080});
    await page.goto('https://www.farfetch.com/kr/', { waitUntil: 'networkidle2' }); // { waitUntil: 'networkidle2' }
    //await page.waitForSelector('.etawori0', { timeout: 60000 });
    
    categoryList = await page.$$eval('.etawori0 a', (el) => 
        el.map((e) => ({
            title: e.querySelector('span.ltr-1kilgry').textContent,
            link: e.href
        }))
    );
    console.log(categoryList);

    await browser.close();
}

export function GET(){
    run();
    // return new Response(Json.stringfy(obj), {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    return json(categoryList);
}

/*
export async function POST(requestEvent) {
    const {request} = requestEvent;
    const { test } = await request.json();
    const newTest = {
        id: obj.length + 1,
        test
    };
    obj.push(newTest);
    
    // return new Response(JSON.stringify(newTest), { status: 201 });
    return json(newTest, { status: 201 });
}
*/