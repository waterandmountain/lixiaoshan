function bar_group(){
    group_ident=1,
    $(".bar_group").each(function(){
        $(this).addClass("group_ident-"+group_ident),
        
        $(this).data("gid",group_ident),
        
        group_ident++}
    )
    }
    
    function get_max(){
        $(".bar_group").each(function(){
            var t=[];
            $(this).children().each(function(){
                t.push($(this).attr("value")
            )}
        ),
        max_arr["group_ident-"+$(this).data("gid")]=t,
        void 0!==$(this).attr("max")?$(this).data("bg_max",$(this).attr("max")):$(this).data("bg_max",Math.max.apply(null,t))
    }
)
}

function data_labels(){
    $(".bar_group__bar").each(function(){
        void 0!==$(this).attr("label")&&$('<p class="b_label">'+$(this).attr("label")+"</p>").insertBefore($(this)
         )
        }
    )
}
function show_values(){
    $(".bar_group__bar").each(function(){
        "true"==$(this).attr("show_values")&&($(this).css("margin-bottom","40px"),
        void 0!==$(this).attr("unit")?($(this).append('<p class="bar_label_min">0 '+$(this).attr("unit")+"</p>"),
        $(this).append('<p class="bar_label_max">'+$(this).parent().data("bg_max")+" "+$(this).
        
        attr("unit")+"</p>")):($(this).append('<p class="bar_label_min">0</p>'),

        $(this).append('<p class="bar_label_max">'+$(this).parent().data("bg_max")+"</p>"))
    )})}
    
    function show_tooltips(){
        $(".bar_group__bar").each(function()
        {"true"==$(this).attr("tooltip")&&($(this).
        css("margin-bottom","40px"),
        $(this).append('<div class="b_tooltip"><span>'+$(this).attr("value")+'</span><div class="b_tooltip--tri"></div></div>')
    )})}
        
        
        function in_view(t){
            var a=$(t),i=$(window),
            s=i.scrollTop(),
            r=s+i.height(),
            n=a.offset().top,
            o=n+a.height();
            r>o-45&&a.css("width",a.attr("value")/a.parent().data("bg_max")*100+"%")}
            
            function bars(){bar_group(),
                get_max(),data_labels(),
                show_tooltips(),
                show_values()}max_arr={},
                $(".bar_group__bar").each(function(){
                    in_view($(this)
                )}),
                $(window).scroll(function(){
                    $(".bar_group__bar").each(function(){
                        in_view($(this))
                    })
                }),bars();