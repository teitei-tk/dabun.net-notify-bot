import * as Puppeteer from "puppeteer";

import { Request, Response } from "express";

export const fetchFunction = async (_: Request, res: Response) => {
  const url = "https://dabun.net/";

  const browser = await Puppeteer.launch({
    args: ["--no-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(url);

  const latest = await page.$eval(".permanentlink > a:last-child", el => {
    return el.getAttribute("href").replace("/news/", "");
  });

  browser.close();

  return res.status(200).json({
    message: "success",
    url: latest
  });
};
