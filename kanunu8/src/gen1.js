function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        const data = [];
		doc.select("table:nth-child(7) > tbody  tr  td").forEach(e => {
            let link = e.select("a").first().attr("href");
            if(link.includes(".html"))
                data.push({
                    cover:'https://raw.githubusercontent.com/dat-bi/ext-vbook/main/anh-bia/0.png',
                    name: e.select("a").first().text(),
                    link: "https://www.kanunu8.com" + link,
                    description: '',
                    host: "https://www.kanunu8.com"
                });
        });
        return Response.success(data)
    }
    return null;
}