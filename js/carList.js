/**
 * Created by zhulinhai on 16/3/9.
 */
$(function(){
    var indexList = ["1系","2系","3系","4系","5系","6系","7系","X","Z4","M","i"];
    var selectItem;
    var selectIndex;
    var content="";
    for (var i=0;i<indexList.length;i++) {content +="<div class='item'>" + indexList[i] +"</div>";}
    $('#lIndex').html(content);

    var items = $('#lIndex').find('.item');
    updateItemInfo(1,$(items[1]), true);

    $('#lIndex').find('.item').click(function(){
        var content = $(this).html();
        updateItemInfo(indexList.indexOf(content), $(this));
    });

    function updateItemInfo(index, item){
        if (selectItem != null) {
            $(selectItem).css("color","#76787f");
            $(selectItem).css("backgroundColor","transparent");
        }
        selectIndex =index;
        selectItem = item;

        $('#num').html(indexList[index].substring(0,1));
        $("#activeBg").css("backgroundColor","#2d6799");
        $("#activeBg").animate({
            marginTop:(0.3 + 1.9*selectIndex) +'rem'
        }, function(){
            $(item).css("color","white");
            $(item).css("backgroundColor","#2d6799");
            $("#activeBg").css("backgroundColor","white");
        });

        var list = carList[index].c;
        var content="";
        for (var i=0;i<list.length;i++) {
            content+="<div class='carItem'><img class='car' src='"+ list[i].i +"' /><p class='carTitle'>"+ list[i].n +"</p><p class='carPrice'>"+ list[i].p + "</p></div>";
        }
        $('#rInfo').html(content);
        $('.carItem').click(function(){
            window.location.href="carDetail.html?id=" + list[$(this).index()].id;
        });
    }

});