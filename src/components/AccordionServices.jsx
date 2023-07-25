import React from 'react';
import {Accordion, rem} from '@mantine/core';
import {IconPlus} from '@tabler/icons-react';
import useMediaQueries from "@/utils/useMediaQueries";


const AccordionServices = () => {
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")

  const services = [
    {
      title: "РАСКЛАД ТАРО (ДИАГНОСТИКА) 🔍",
      desc: "Сегодня хочу рассказать Вам о таком важном инструмент как таро 🙏 Расклад таро — это зеркало души, с его помощью я могу в полной мере проанализировать Вашу ситуацию, а после предложить наиболее подходящее решение. С моей помощью вы сможете наконец-то обнаружить корень своей проблемы и решить ее раз и навсегда. Не довольствуйтесь шаблонными решениями - доверьтесь моему опыту, и я окажу вам индивидуальную помощь, которую вы заслуживаете 😌\n" +
        "\n" +
        "🔸 Получите комплексную диагностику всех сфер вашей жизни с помощью моих услуг. Я оценю ваши отношения, здоровье, финансовое положение и проверю на наличие негативных магических воздействий. Позвольте мне помочь вам найти корень ваших проблем и предложить индивидуальное решение.\n" +
        "\n" +
        "🔸 Для диагностики мне нужны только ваши фото и дата рождения. По этим данным я могу точно определить ситуацию, которая происходит в вашей жизни и отношениях. Иногда диагностика нужна только для того, чтобы понять причины вашего страха и найти правильное решение. А после диагностики мы можем сразу перейти к действиям. Чтобы заказать диагностику - пишите мне в личные сообщения.\n",
      value: "diagnostic"
    },
    {
      title: "ЛЮБОВНЫЙ ПРИВОРОТ «ЗОВ СЕРДЦА» ❤️",
      desc: "Приворот «Зов сердца» — один из самых сильных в любовной магии. 🔥 Создает настоящие чувства, наполняет светом сердца влюбленных, связывает их на всю жизнь. \n" +
        "\n" +
        "После ритуала вы начнете испытывать взаимные чувства любви, а все обстоятельства будут способствовать улучшению отношений между вами. Приворот сделает душу, мысли и сердце любимого человека полностью вашими.\n" +
        "\n" +
        "🔸 ЭФФЕКТ:\n" +
        "1. Мужчина перестает обращать внимание на других женщин.\n" +
        "2. Вы оба начинаете чувствовать, что вас постоянно тянет друг к другу и никто другой вам не нужен.\n" +
        "3. В отношениях появляются свежие чувства, избранник будет любить вас так сильно как раньше. \n" +
        "\n" +
        "🔸 Представьте себе отношения, в которых оба партнера чувствуют постоянное влечение друг к другу, без отвлечений и блуждающих взглядов. С «Зовом сердца» это станет реальностью. Не соглашайтесь на застойные отношения или безответную привязанность. Раскройте силу истинной любви с помощью «Зова сердца» и испытайте отношения, в которых ваш партнер будет любить вас так же, как прежде, и даже больше.\n"
      ,
      value: "love_spell"
    },

  ]

  return (
    <Accordion
      chevron={<IconPlus size="2rem"/>}
      styles={{
        root: {
          borderTop: `${rem(1)} solid #C98D4E`,
          "&": {

            maxWidth: "760px",
            width: "100%",
          },
        },
        control: {
          whiteSpace: "wrap",
          wordWrap: "wrap",
          padding: ` ${!md ? "0 10px" : " 0 16px 0 20px"}`,
          color: "#C98D4E",
          '&:hover': {
            backgroundColor: '#111',
          },
          border: "none",
          '&:first-child': {
            borderTop: `${rem(1)} solid #C98D4E`,
          },
        },

        item: {
          // styles added to all items
          color: "#C98D4E",
          border: "none",
          '&:last-child': {
            borderBottom: `${rem(1)} solid #C98D4E`,
          },
          backgroundColor: '#22222200',
          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#110',
          },
          '&:hover': {
            backgroundColor: '#111',
          }
        },

        chevron: {
          // styles added to chevron when it should rotate
          color: "#C98D4E",
          marginLeft: md ? '20px' : '4px',

          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      <Accordion.Item value="diagnostic">
        <Accordion.Control>РАСКЛАД ТАРО <span className={"whitespace-nowrap"}>(ДИАГНОСТИКА) 🔍</span></Accordion.Control>
        <Accordion.Panel>

          <p className={"mb-[20px]"}>Сегодня хочу рассказать Вам о таком важном инструмент как таро 🙏 Расклад таро — это
            зеркало души, с его помощью я могу в полной мере проанализировать Вашу ситуацию, а после предложить наиболее
            подходящее решение. С моей помощью вы сможете наконец-то обнаружить корень своей проблемы и решить ее раз и
            навсегда. Не довольствуйтесь шаблонными решениями - доверьтесь моему опыту, и я окажу вам индивидуальную
            помощь, которую вы заслуживаете 😌</p>
          <p className={"mb-[20px]"}>🔸 Получите комплексную диагностику всех сфер вашей жизни с помощью моих услуг. Я
            оценю ваши отношения, здоровье, финансовое положение и проверю на наличие негативных магических воздействий.
            Позвольте мне помочь вам найти корень ваших проблем и предложить индивидуальное решение.</p>
          <p>🔸 Для диагностики мне нужны только ваши фото и дата рождения. По этим данным я могу точно определить
            ситуацию, которая происходит в вашей жизни и отношениях. Иногда диагностика нужна только для того, чтобы
            понять причины вашего страха и найти правильное решение. А после диагностики мы можем сразу перейти к
            действиям. Чтобы заказать диагностику - пишите мне в личные сообщения.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="love_spell">
        <Accordion.Control>ЛЮБОВНЫЙ ПРИВОРОТ <span
          className={"whitespace-nowrap"}>«ЗОВ СЕРДЦА» ❤️</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Приворот «Зов сердца» — один из самых сильных в любовной магии. 🔥 Создает настоящие
            чувства, наполняет светом сердца влюбленных, связывает их на всю жизнь.</p>
          <p className={"mb-[30px]"}>После ритуала вы начнете испытывать взаимные чувства любви, а все обстоятельства
            будут способствовать улучшению отношений между вами. Приворот сделает душу, мысли и сердце любимого человека
            полностью вашими.</p>
          <p className={"mb-[30px]"}>🔸 ЭФФЕКТ:<br/>
            1. Мужчина перестает обращать внимание на других женщин.<br/>
            2. Вы оба начинаете чувствовать, что вас постоянно тянет друг к другу и никто другой вам не нужен.<br/>
            3. В отношениях появляются свежие чувства, избранник будет любить вас так сильно как раньше.<br/>
          </p>
          <p>🔸 Представьте себе отношения, в которых оба партнера чувствуют постоянное влечение друг к другу, без
            отвлечений и блуждающих взглядов. С «Зовом сердца» это станет реальностью. Не соглашайтесь на застойные
            отношения или безответную привязанность. Раскройте силу истинной любви с помощью «Зова сердца» и испытайте
            отношения, в которых ваш партнер будет любить вас так же, как прежде, и даже больше.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="protection">
        <Accordion.Control>⚔️МАГИЧЕСКАЯ ЗАЩИТА⚔️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>🔸 К сожалению, сегодняшний мир становится все более жестоким и опасным для жизни.
            Помимо негативно настроенных людей, которые не могут просто радоваться чужому успеху, а намеренно хотят
            причинить вред из зависти, нас атакуют различные вирусы, которые приводят к смерти многих людей. Магическая
            защита человека способна оградить его от опасных последствий любого вида воздействия.</p>
          <p className={"mb-[30px]"}>🔸 Ваше энергетическое поле подобно вашему иммунитету, кто-то очень слаб и легко
            поддается влиянию, а кто-то просто непробиваем, но такие люди обычно в меньшинстве. Это может показать и ваш
            характер, если вы чувствительный и робкий человек, то, скорее всего, вы легко поддадитесь негативным
            воздействиям, а если вы волевой и несентиментальный человек, то наоборот. Но так бывает не всегда, случаи
            бывают разные, и почти все одинаково нуждаются в магической защите от негатива!</p>
          <p>🔸 Данный ритуал призван обеспечить вам комплексную и пожизненную защиту от сглаза, проклятий,
            энергетических вампиров и всего зла, которое только может ожидаться на вашем жизненном пути. Благодаря этому
            вы получите не только полное очищение, но и защитный барьер.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="harmonization">
        <Accordion.Control>ГАРМОНИЗАЦИЯ <span className={"whitespace-nowrap"}>ОТНОШЕНИЙ 🙌</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Это один из самых эффективных способов улучшить отношения в семье ❗️</p>
          <p className={"mb-[30px]"}>Я очищаю вашу пару от негатива, который накопился за многие годы. Между супругами
            возвращается мир и спокойствие в семью, но не с помощью чужих сил, а с помощью совместных усилий.</p>
          <p className={"mb-[30px]"}>Ритуал приведет вас к результату, который будет лучшим для вас в долгосрочной
            перспективе❗️</p>
          <p className={"mb-[30px]"}>🔸 В КАКОМ СЛУЧАЕ ВАМ НУЖНА ГАРМОНИЗАЦИЯ?<br/>

            - Ваши любовные чувства давно угасли, и нет надежды на их возобновление.<br/>
            - Партнеры испытывали взаимные чувства, любили друг друга, однако теперь между ними возникает недопонимание.<br/>
            - Возлюбленный не разрывает отношения, но и не прилагает усилий для их развития и улучшения.<br/>
            - Влюбленные часто ссорятся.<br/>
            - Один партнер слишком сильно зацикливается на себе, полностью забывая о тебе.<br/>
            - Любимый человек ушел или собирается это сделать.<br/>
            - Избранник постоянно изменяет, при этом не разрывая отношений.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="cemetery_love_spell">
        <Accordion.Control>ЛЮБОВНЫЙ РИТУАЛ <span
          className={"whitespace-nowrap"}>«ПОВОРОТ СУДЬБЫ» 💘</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>🔸 Он соединяет человеческие сердца и судьбы. После этого любовного приворота вы с
            партером начнете жить одной жизнью. В доме у них всегда будет тепло и уют, а в сердцах - страсть и любовь
            друг к другу.
          </p>
          <p className={"mb-[30px]"}>🔸 Любовь, созданная с помощью этого любовного приворота, неподвластна времени.
            Спустя годы люди продолжают любить сильнее прежнего, уважать и ценить друг друга.</p>
          <p className={"mb-[30px]"}>🔸 Такой любовный приворот не имеет негативных последствий, так как я всегда делаю
            отлив воска против негатива.</p>
          <p>Сохраните свою любовь 😌</p>
        </Accordion.Panel>
      </Accordion.Item>
      {/*<Accordion.Item value="wedding">*/}
      {/*  <Accordion.Control>ЛЮБОВНЫЙ РИТУАЛ НА ПРИВЛЕЧЕНИЕ МУЖЧИНЫ 👩‍❤️‍👨</Accordion.Control>*/}
      {/*  <Accordion.Panel>*/}
      {/*    <p className={"mb-[25px]"}>🔮 Этот ритуал является одним из самых сильных!</p>*/}
      {/*    <p className={"mb-[25px]"}>☝🏻 включает в себя комплексную программу (думай-люби-желай) После этого*/}
      {/*      приворота:</p>*/}
      {/*    <p className={"mb-[10px]"}>- Мужчина будет думать и упоминать тебя все больше и больше, все его мысли будут*/}
      {/*      только о тебе.</p>*/}
      {/*    <p className={"mb-[10px]"}>- Он будет скучать по тебе, его сердце будет полно любви.</p>*/}
      {/*    <p className={"mb-[25px]"}>- Мужчина испытает страсть, искру, сильное влечение. Он не захочет никого, кроме*/}
      {/*      тебя!</p>*/}
      {/*    <p className={"mb-[25px]"}>А также этот ритуал часто приводит к браку. Мужчина обязательно выберет вас!</p>*/}
      {/*    <p className={"mb-[0px]"}>Для записи на ритуал пишите мне в личные сообщения 🙏🏻🥰</p>*/}
      {/*  </Accordion.Panel>*/}
      {/*</Accordion.Item>*/}
      {/*<Accordion.Item value="moneys">*/}
      {/*  <Accordion.Control>ВАШ ДЕНЕЖНЫЙ КАНАЛ ЗАБЛОКИРОВАН❗️</Accordion.Control>*/}
      {/*  <Accordion.Panel>*/}
      {/*    <p className={"mb-[25px]"}>Вам знакома ситуация, когда вы делаете все возможное, стараться изо всех сил, а*/}
      {/*      деньги как бы намеренно проходят мимо вас?*/}
      {/*      Ваш денежный канал заблокирован❗️*/}
      {/*      Его нужно срочно почистить. Последствия могут быть ужасными.*/}
      {/*    </p>*/}
      {/*    <p className={"mb-[25px]"}>🔸КАК ОЧИСТИТЬ ДЕНЕЖНЫЙ КАНАЛ?</p>*/}
      {/*    <p className={"mb-[25px]"}>В магии много эффективных ритуалов по очистке денежных каналов, но я владею самым*/}
      {/*      мощным и действенным 🔥*/}
      {/*      Один из способов очистки:*/}
      {/*    </p>*/}
      {/*    <p className={"mb-[10px]"}>Восковый отлив денежного канала:</p>*/}
      {/*    <p className={"mb-[25px]"}>- работа выполняется воском. У него есть способность накапливать на себе негативные*/}
      {/*      программы, как чужие, так и свои собственные.</p>*/}
      {/*    <p className={"mb-[25px]"}>В то же время он действует как щит, отражающий все атаки.</p>*/}
      {/*    <p className={"mb-[25px]"}>Это невероятно эффективный ритуал, который гарантирует результат!</p>*/}
      {/*    <p className={"mb-[25px]"}>🔸 ЭФФЕКТ:<br/>*/}
      {/*      Сразу после этого магического ритуала вы заметите, как чудесным образом изменится финансовая сфера вашей*/}
      {/*      жизни!*/}
      {/*      У вас появятся новые источники дохода, деньги потекут рекой 💵*/}
      {/*    </p>*/}
      {/*    <p className={"mb-[25px]"}>🔸 ЧТО НЕОБХОДИМО ДЛЯ РИТУАЛА?<br/>*/}
      {/*      Просто напишите мне. Работаю на любом расстоянии, как бы далеко вы не находились, мне нужна только ваша фотография.</p>*/}
      {/*    <p className={"mb-[25px]"}>🔸 ДИАГНОСТИКА ПЕРЕД РИТУАЛОМ<br/>*/}
      {/*      При начале работы необходимо провести диагностику 🔮*/}
      {/*    </p>*/}
      {/*    <p className={"mb-[15px]"}>❕После диагностики я смогу точно оценить объем работ и гарантировать эффект.</p>*/}
      {/*    <p >Для связи со мной напишите личное сообщение</p>*/}
      {/*  </Accordion.Panel>*/}
      {/*</Accordion.Item>*/}
      {/*<Accordion.Item value="vocation">*/}
      {/*  <Accordion.Control>РИТУАЛ «НАЙДИ СВОЕ ПРИЗВАНИЕ» 💃</Accordion.Control>*/}
      {/*  <Accordion.Panel>*/}
      {/*    <p className={"mb-[25px]"}>Вы не обрели свой путь по жизни? Вы не до конца понимаете зачем пришли в этот мир?</p>*/}
      {/*    <p className={"mb-[25px]"}>🔸 Этот ритуал направлен на работу с теми проблемами, которые идентифицирую в вашей диагностике. На протяжении 21 дня я буду настраиваться на Ваше биополе и усиленно работать над блоками в судьбе. От Вас потребуется всего 5-10 минут в день для глубокой проработки с помощью мощных авторских медитаций. Уже в первые дни работы Вы заметите, что окружающие начнут относится к вам по-другому. Вас начнут больше ценить, заботиться, начнут появляться новые люди и положительные ситуации.</p>*/}
      {/*    <p className={"mb-[25px]"}>🔸 Ваше ментальное здоровье будет в норме, уйдет тревожность, усталость. Вы сможете обрести свое предназначение в жизни, появиться цель и вера в себя!</p>*/}
      {/*  </Accordion.Panel>*/}
      {/*</Accordion.Item>*/}
      <Accordion.Item value="amulets">
        <Accordion.Control>МАГИЧИСКИЕ АМУЛЕТЫ 🧿</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[25px]"}>Во время ритуалов и в повседневной жизни я использую магические амулеты, которые
            помогают преодолеть любые трудности.</p>
          <p className={"mb-[25px]"}>🔸 В моем ассортименте есть множество ценных амулетов из натурального камня,
            запрограммированных на защиту, удачу, любовь, гармонию, здоровье, финансы.</p>
          <p className={"mb-[25px]"}>🔸 Когда этого требует случай я программирую амулет и привязываю его к Вашей ауре
            или ауре человека, для которого он будет предназначен (также можно заказать для других людей). В каждом
            амулете заключены Силы Света.</p>
          <p className={"mb-[25px]"}>Как только вы его получите, вы сразу почувствуете его силу и позитивные
            вибрации.</p>
          <p>❗️ Амулеты могут отличаться друг от друга. Нет двух одинаковых. Специально для вас я интуитивно выберу
            самый подходящий из них.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="moneys">
        <Accordion.Control>ФИНАНСОВЫЕ ТРУДНОСТИ ❓️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[25px]"}>Вам знакома ситуация, когда вы делаете все возможное, стараться изо всех сил, а
            деньги как бы намеренно проходят мимо вас?
            Ваш денежный канал заблокирован❗️
            Его нужно срочно почистить. Последствия могут быть ужасными.
          </p>
          <p className={"mb-[25px]"}>🔸КАК ОЧИСТИТЬ ДЕНЕЖНЫЙ КАНАЛ?</p>
          <p className={"mb-[25px]"}>В магии много эффективных ритуалов по очистке денежных каналов, но я владею самым
            мощным и действенным 🔥
            Один из способов очистки:
          </p>
          <p className={"mb-[10px]"}>Восковый отлив денежного канала:</p>
          <p className={"mb-[25px]"}>- работа выполняется воском. У него есть способность накапливать на себе негативные
            программы, как чужие, так и свои собственные.</p>
          <p className={"mb-[25px]"}>В то же время он действует как щит, отражающий все атаки.</p>
          <p className={"mb-[25px]"}>Это невероятно эффективный ритуал, который гарантирует результат!</p>
          <p className={"mb-[25px]"}>🔸 ЭФФЕКТ:<br/>
            Сразу после этого магического ритуала вы заметите, как чудесным образом изменится финансовая сфера вашей
            жизни!
            У вас появятся новые источники дохода, деньги потекут рекой 💵
          </p>
          <p className={"mb-[25px]"}>🔸 ЧТО НЕОБХОДИМО ДЛЯ РИТУАЛА?<br/>
            Просто напишите мне. Работаю на любом расстоянии, как бы далеко вы не находились, мне нужна только ваша
            фотография.</p>
          <p className={"mb-[25px]"}>🔸 ДИАГНОСТИКА ПЕРЕД РИТУАЛОМ<br/>
            При начале работы необходимо провести диагностику 🔮
          </p>
          <p className={"mb-[15px]"}>❕После диагностики я смогу точно оценить объем работ и гарантировать эффект.</p>
          <p>Для связи со мной напишите личное сообщение</p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default AccordionServices;
