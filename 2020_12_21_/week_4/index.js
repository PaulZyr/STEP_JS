class PrintMaсhine {
    constructor(size, family, color){
        this.fontSize = size;
        this.fontFamily = family;
        this.textColor = color;
    }
    print(text){
        document.write(`<p style='color:${this.textColor}' font-family:'${this.fontFamily}' font-size:'${this.fontSize}'>${text}</p>`);
    }
}

class NewsItem {
    constructor(titleNews, txtNews, dateNews, tagsNews)
    {
        this.title = titleNews;
        this.txt = txtNews;
        this.date = new Date(dateNews);
        this.tags = tagsNews;
    }
    print()
    {
        // console.log(this);
        let strDate = '';
        let nowDate = new Date();
        let difference = Math.floor((+nowDate - +this.date) / 86400000);
        // console.log(difference);
        if (nowDate.toLocaleDateString() === this.date.toLocaleDateString())
        {
            strDate = 'today';
        }
        else if (difference < 7)
        {
            strDate = `${difference} days ago`
        }
        else
        {
            strDate = this.date.toLocaleDateString();
        }
        let strTags = '';
        if(this.tags.length > 0)
        {
            strTags += '#' + this.tags[0];
            for (let i = 1; i < this.tags.length; ++i)
            {
                strTags += ' #' + this.tags[i];
            }
        }
        document.write(`<h3>${this.title}</h3><p style="font-size:smaller">${strDate}</p><p>${this.txt}</p><span>${strTags}</span>`);
    }
}

class NewsFeed {
    constructor()
    {
        this.feed = [];
    }
    add(titleNews, txtNews, dateNews, tagsNews)
    {
        let item = new NewsItem(titleNews, txtNews, dateNews, tagsNews);
        this.feed.push(item);
    }
    findByTitle(str)
    {
        for (let i =0; i < this.feed.length; ++i)
        {
            if (this.feed[i].title.indexOf(str) !== -1) return i;
        }
        return -1;
    }
    findByTag(str)
    {
        for (let item of this.feed)
        {
            for(let it of item.tags)
            {
                if(it.indexOf(str) !== -1)
                {
                    document.write('<hr><div class="newsBlock">');
                    item.print();
                    document.write('</div><hr>');
                    return;
                }
            }
        }
        document.write('<hr><div class="newsBlock"><h3>Нет новости с таким тэгом</h3></div><hr>');
    }
    delete(str)
    {
        let n = this.findByTitle(str);
        if (n !== -1)
        {
            this.feed.splice(n, 1);
        }
    }
    sortByDate()
    {
        this.feed.sort((a,b) => b.date - a.date);
    }
    get feedLength()
    {
        return this.feed.length;
    }
    printNewsFeed()
    {
        for (const item of this.feed)
        {
            document.write('<hr><div class="newsBlock">');
            item.print();
            document.write('</div>');
        }
        document.write('<hr>');
    }
    
}

function checkNewsFeed()
{
    let titleNews = 'Маша потеряла мяч!';
    let txtNews = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus possimus provident iste ducimus cumque animi quaerat architecto dignissimos magnam aut sit sequi eveniet totam est eaque, officiis fugit porro!';
    let dateNews = '2020-11-11';
    let tagsNews = ['маша', 'мяч', 'депрессия'];
    
    let feed = new NewsFeed();
    feed.add(titleNews, txtNews, dateNews, tagsNews);

    titleNews = 'Петя выиграл матч!';
    dateNews = '2020-12-24';
    tagsNews = ['chess', 'cup', 'joy'];
    feed.add(titleNews, txtNews, dateNews, tagsNews);

    titleNews = 'Странный шум во дворе!';
    dateNews = '2020-12-12';
    tagsNews = ['noice', 'backyard', 'nightmare'];
    feed.add(titleNews, txtNews, dateNews, tagsNews);

    titleNews = 'Где прячутся тараканы...';
    dateNews = '2020-12-20';
    tagsNews = ['таракан', 'шкаф', 'мэрия', 'сосед'];
    feed.add(titleNews, txtNews, dateNews, tagsNews);

    // console.log(feed);
    document.write('<h2>ВСЕ НОВОСТИ</h2>');
    feed.printNewsFeed();

    document.write('<h2>Сортировка по дате</h2>');
    feed.sortByDate();
    feed.printNewsFeed();

    document.write("<h2>ПОИСК по тэгу 'депрессия'</h2>");
    feed.findByTag('депрессия');

    document.write("<h2>ПОИСК по тэгу 'кувалда'</h2>");
    feed.findByTag('кувалда');

    document.write("<h2>DELETE NEWS 'Петя выиграл матч!'</h2>");
    feed.delete('Петя выиграл матч');
    feed.printNewsFeed();

}
