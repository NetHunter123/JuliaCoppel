import React from 'react';
import {Accordion, rem} from '@mantine/core';
import {IconPlus} from '@tabler/icons-react';


const AccordionServices = () => {
  return (
    <Accordion
      chevron={<IconPlus size="1rem"/>}
      styles={{
        root: {
          borderTop: `${rem(1)} solid #C98D4E`,
          "&": {

            maxWidth: "760px",
            width: "100%",
          },
        },
        control: {
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


          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      <Accordion.Item value="diagnostic">
        <Accordion.Control>ДИАГНОСТИКА</Accordion.Control>
        <Accordion.Panel>

          <p className={"mb-[20px]"}>Вы устали от безуспешных поисков решения своих проблем? Не ищите дальше! Мой подход
            похож на подход специалиста - я не просто предлагаю общее решение вашей проблемы без должного исследования.
            Вместо этого я уделяю время тщательному изучению вашей ситуации и предлагаю индивидуальный ритуал, который
            соответствует вашим потребностям. С моей помощью вы сможете наконец-то обнаружить корень своей проблемы и
            решить ее раз и навсегда. Не довольствуйтесь шаблонными решениями - доверьтесь моему опыту, и я окажу вам
            индивидуальную помощь, которой вы заслуживаете.</p>
          <p className={"mb-[20px]"}>Получите комплексную диагностику всех сфер вашей жизни с помощью моих услуг. Я
            оценю ваши отношения, здоровье, финансовое положение и проверю на наличие негативных магических воздействий.
            Позвольте мне помочь вам найти корень ваших проблем и предложить индивидуальное решение.</p>
          <p>Иногда требуется диагностика, чтобы просто понять причины вашего беспокойства и найти правильное решение. Я
            всегда начинаю с диагностики, чтобы выяснить, какой обряд подходит именно вам. А после диагностики мы можем
            сразу перейти к действиям.
            Чтобы написать о диагностике - пишите мне в личные сообщения.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="love_spell">
        <Accordion.Control>ЛЮБОВНЫЙ ПРИВОРОТ "ЗОВ СЕРДЦА"❤️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Вы устали от ощущения, что ваши отношения зашли в тупик? Вы изо всех сил пытаетесь
            привлечь внимание и привязанность своего любимого человека? Обратите внимание на "Зов сердца", мощный
            любовный талисман, который обязательно вдохнет новую жизнь в ваши романтические отношения.</p>
          <p className={"mb-[30px]"}>Благодаря этому обряду ваше присутствие станет центром внимания вашего партнера,
            его глаза и сердце будут прикованы исключительно к вам. "Зов сердца" создает истинные, подлинные чувства
            любви, укрепляя связь между вами и вашим партнером на всю жизнь.</p>
          <p className={"mb-[30px]"}>Вы сразу заметите разницу - чувства взаимной любви расцветут и окрепнут, а внимание
            вашего партнера будет сосредоточено исключительно на вас. Любовный талисман будет работать над тем, чтобы
            мысли и душа вашего любимого человека полностью принадлежали вам.</p>
          <p>Представьте себе отношения, в которых оба партнера чувствуют постоянное влечение друг к другу, без
            отвлечений и блуждающих взглядов. С "Зовом сердца" это может стать реальностью.
            Не соглашайтесь на застойные отношения или безответную привязанность. Раскройте силу истинной любви с
            помощью "Зова сердца" и испытайте отношения, в которых ваш партнер будет любить вас так же, как прежде, и
            даже больше.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="protection">
        <Accordion.Control>⚔️МАГИЧЕСКАЯ ЗАЩИТА⚔️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>К сожалению, сегодняшний мир становится все более жестоким и опасным для жизни.
            Помимо негативно настроенных людей, которые не могут просто радоваться чужому успеху, а намеренно хотят
            причинить вред из зависти, нас атакуют различные вирусы, которые приводят к смерти многих людей. Магическая
            защита человека способна оградить его от опасных последствий любого вида воздействия</p>
          <p className={"mb-[30px]"}>Ваше энергетическое поле подобно вашему иммунитету, кто-то очень слаб и легко
            поддается эрозии, а кто-то просто непробиваем, но такие люди обычно в меньшинстве. Это может показать и ваш
            характер, если вы чувствительный и недоверчивый человек, то, скорее всего, вы легко поддадитесь плохим
            чарам, а если вы волевой и несентиментальный человек, то наоборот. Но так бывает не всегда, случаи бывают
            разные, и почти все одинаково нуждаются в магической защите от негатива!</p>
          <p>Если вы хотите защитить себя и своих близких от сглаза, то вам необходимо воспользоваться магическим
            талисманом.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="cemetery_love_spell">
        <Accordion.Control>🪦КЛАДБИЩЕНСКИЙ ЛЮБОВНЫЙ ПРИВОРОТ🪦</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Кладбище - это место, где сосредоточена сильная энергия. Поэтому сильные маги часто
            прибегают к помощи земли с этой территории и к помощи своих предков.</p>
          <p className={"mb-[30px]"}>Суть кладбищенского любовного приворота заключается в том, чтобы вызвать у
            конкретного человека сильные чувства, связанные с любовью или сексуальным влечением. Благодаря помощи духов
            мы добиваемся максимальной эффективности обряда и получаем желаемый результат в кратчайшие сроки!</p>
          <p className={"mb-[30px]"}>Этот ритуал является одним из самых популярных в последнее время, ведь он
            гарантированно поможет вернуть человека, если вы расстались после сильной ссоры или после расставания прошло
            много времени.</p>
          <p className={"mb-[30px]"}>Кладбищенский любовный приворот не имеет ПЛОХИХ последствий. Как и во всех обрядах,
            я делаю восковую отливку с негатива, это позволяет обряду работать гораздо эффективнее, а также избежать
            откупа!"</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="harmonization">
        <Accordion.Control>🙌🏻 ГАРМОНИЗАЦИЯ ОТНОШЕНИЙ 🙌🏻</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Это один из самых эффективных способов улучшить отношения в семье ❗️
          </p>
          <p className={"mb-[30px]"}>Я очищаю вашу пару от негатива, который накопился за многие годы. Между супругами
            возвращается мир и спокойствие в семью, но не с помощью чужих Сил, а с помощью собственных усилий.</p>
          <p className={"mb-[30px]"}>Ритуал ведет вас к результату, который будет лучшим для вас в долгосрочной
            перспективе.run❗️⠀</p>
          <p className={"mb-[30px]"}>🔸 В КАКОМ СЛУЧАЕ ВАМ НУЖНА ГАРМОНИЗАЦИЯ?</p>
          <p>- Партнеры испытывают взаимные чувства, любят друг друга, однако время от времени между ними возникает
            недопонимание.</p>
          <p>- Возлюбленный не разрывает отношения, но не прилагает усилий для их развития и улучшения.⠀ ⠀</p>
          <p>- Влюбленные часто ссорятся.⠀
          </p>
          <p>- Один партнер отдает слишком много времени и сил другому, пытаясь облегчить его жизнь.⠀ Любимый часто
            ссорится.</p>
          <p>- Любимый человек ушел или собирается это сделать.⠀ Влюбленные часто ссорятся.</p>
          <p>- Избранник постоянно изменяет, при этом не разрывая отношений.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="wedding">
        <Accordion.Control>🔮 ЛЮБОВНЫЙ ПРИВОРОТ НА СВАДЬБУ В ЧЕРНОЙ ЦЕРКВИ 🔮</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[25px]"}>Он соединяет человеческие сердца и судьбы. После любовного приворота заказчик и околдованный начинают жить
            одной жизнью. В доме у них всегда будет тепло и уют, а в сердцах - страсть и любовь друг к другу.
          </p>
          <p className={"mb-[25px]"}>Любовь, созданная с помощью этого любовного приворота, неподвластна времени. Спустя годы люди продолжают
            любить сильнее прежнего, уважать и ценить друг друга.</p>
          <p className={"mb-[25px]"}>За любовный приворот, сделанный на любимого человека, клиенту не придется платить в будущем. Такой любовный
            приворот не имеет плохих последствий, так как я всегда делаю отливки против негатива.</p>
          <p className={"mb-[25px]"}>Воспользоваться этим может даже глубоко религиозный и крещеный человек.</p>
          <p className={"mb-[25px]"}>Сохраните свою любовь 😌</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="crossing">
        <Accordion.Control>🪢CROSSING OF FATE🪢</Accordion.Control>
        <Accordion.Panel>😌 Sometimes a person is not able to attract love in the usual way, so he resorts to the help of higher powers.
          ⠀
          The crossing of fate strengthens already begun relationships, helps to attract love and keep it for a long time‼️
          ⠀
          ""Crossing of Fates"" is a change in the fate of you and your chosen one!
          ⠀
          A distinctive feature is the introduction of happiness into your life together.
          ⠀
          CROSSING OF FATE operates in a complex way:
          ⠀
          ✔️ evokes feelings of love
          ✔️ strengthens marriage
          ✔️ promotes a long life together
          ⠀
          Other girls simply do not interest him and disgust him.
          ⠀
          🔸IS IT DANGEROUS?
          ⠀
          No negative!
          ⠀
          Additionally, protection is placed on your love union.
          ⠀
          😍RESULTS:
          ⠀
          1. The destinies of two people are connected and feelings are intensified in both!
          ⠀
          2. You become each other's fate and will be together in sorrow and in joy!
          ⠀
          Write to me in private messages, I will help you decide on the ceremony</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="matchmaker">
        <Accordion.Control>🌪 BLACK MATCHMAKER LOVE SPELL🌪</Accordion.Control>
        <Accordion.Panel>
          One of the most powerful spells

          Comprehensive program (think-love-wish)🕯
          After this spell:

          ❤️‍🔥The Beloved will increasingly think and remember you, all his thoughts will be only about you.

          The beloved will miss you, his heart will be filled with love.

          ❤️‍🔥 A person will have a passion for you, a spark, a strong attraction. He will not want anyone but you!

          And also this rite can lead to marriage 🙌
          The man will definitely come back to you!

          For details, please contact in direct messages!
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default AccordionServices;
