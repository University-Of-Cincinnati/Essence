'use strict';

var body = document.body, // default React render path is html body
    byID = document.getElementById("header"),
    header = document.querySelector(".header"),
    content = document.querySelector(".content"),
    footer = document.querySelector(".footer"),
    React = Essence.React,
    AppBar = Essence.AppBar,
    BottomSheets = Essence.BottomSheets,
    BottomSheetsItem = Essence.BottomSheetsItem,
    Btn = Essence.Btn,
    BtnItem = Essence.BtnItem,
    Block = Essence.Block,
    Card = Essence.Card,
    CardItem = Essence.CardItem,
    CardItemHeader = Essence.CardItemHeader,
    CardItemContent = Essence.CardItemContent,
    CardItemFooter = Essence.CardItemFooter,
    Chip = Essence.Chip,
    ChipItem = Essence.ChipItem,
    DatePicker = Essence.DatePicker,
    DatePickerItem = Essence.DatePickerItem,
    DatePickerHeader = Essence.DatePickerHeader,
    DatePickerHeaderDay = Essence.DatePickerHeaderDay,
    DatePickerHeaderDate = Essence.DatePickerHeaderDate,
    DatePickerContent = Essence.DatePickerContent,
    DatePickerFooter = Essence.DatePickerFooter,
    Dialog = Essence.Dialog,
    DialogItem = Essence.DialogItem,
    DialogItemHeader = Essence.DialogItemHeader,
    DialogItemContent = Essence.DialogItemContent,
    DialogItemFooter = Essence.DialogItemFooter,
    Divider = Essence.Divider,
    Icon = Essence.Icon,
    Image = Essence.Image,
    Input = Essence.Input,
    InputItem = Essence.InputItem,
    List = Essence.List,
    ListItem = Essence.ListItem,
    Menu = Essence.Menu,
    MenuItem = Essence.MenuItem,
    Navigation = Essence.Navigation,
    Paper = Essence.Paper,
    PaperItem = Essence.PaperItem,
    Progress = Essence.Progress,
    Slider = Essence.Slider,
    SliderItem = Essence.SliderItem,
    Snackbar = Essence.Snackbar,
    SnackbarItem = Essence.SnackbarItem,
    Switch = Essence.Switch,
    SwitchItem = Essence.SwitchItem,
    TabItem = Essence.TabItem,
    TabMenu = Essence.TabMenu,
    Text = Essence.Text,
    Toast = Essence.Toast,
    ToastItem = Essence.ToastItem,
    ToolBar = Essence.ToolBar,
    BackgroundColor = Essence.BackgroundColor,
    ClassNames = Essence.ClassNames,
    ClickPosition = Essence.ClickPosition,
    DateFormat = Essence.DateFormat,
    Mobile = Essence.Mobile,
    Position = Essence.Position,
    PositionHorizontal = Essence.PositionHorizontal,
    PubSub = Essence.PubSub;

React.render(
    <Block type='div' classes='e-background-grey-500 e-text-center'>
    <Block classes={"e-row"}>
<Block classes={"brick brick-12"}>brick-12</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-6"}>brick-6</Block>
<Block classes={"brick brick-6"}>brick-6</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-4"}>brick-4</Block>
<Block classes={"brick brick-4"}>brick-4</Block>
<Block classes={"brick brick-4"}>brick-4</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-3"}>brick-3</Block>
<Block classes={"brick brick-3"}>brick-3</Block>
<Block classes={"brick brick-3"}>brick-3</Block>
<Block classes={"brick brick-3"}>brick-3</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-1"}>brick-1</Block>
<Block classes={"brick brick-11"}>brick-11</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-2"}>brick-2</Block>
<Block classes={"brick brick-10"}>brick-10</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-3"}>brick-3</Block>
<Block classes={"brick brick-9"}>brick-9</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-4"}>brick-4</Block>
<Block classes={"brick brick-8"}>brick-8</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-5"}>brick-5</Block>
<Block classes={"brick brick-7"}>brick-7</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-6"}>brick-6</Block>
<Block classes={"brick brick-6"}>brick-6</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-7"}>brick-7</Block>
<Block classes={"brick brick-5"}>brick-5</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-8"}>brick-8</Block>
<Block classes={"brick brick-4"}>brick-4</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-9"}>brick-9</Block>
<Block classes={"brick brick-3"}>brick-3</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-10"}>brick-10</Block>
<Block classes={"brick brick-2"}>brick-2</Block>
</Block>
<Block classes={"e-row"}>
<Block classes={"brick brick-11"}>brick-11</Block>
<Block classes={"brick brick-1"}>brick-1</Block>
</Block>
    </Block>
    ,byID
);

React.render(
    <Block type='div' classes='e-background-red-500 e-text-center'>
      your content by class .header here
    </Block>
    ,header
);

React.render(
    <Block type='div' classes='e-background-yellow-500 e-text-center'>
    <TabMenu type='simple' id={'tab_menu_simple'}>
<TabItem
  type='list'
  id='tab-item-one'
  label='Tab Item One'
/>
<TabItem
  type='content'
  id='tab-item-one'
>
  <h2 className='e-display-2'>Tab Item One Example</h2>
  <p>
    This is an example of a tab template!
  </p>
  <p>
    You can put any sort of HTML or Essence component in here.
  </p>
</TabItem>

<TabItem
  type='list'
  id='tab-item-two'
  label='Tab Item Two'
/>
<TabItem
  type='content'
  id='tab-item-two'
>
  <h2 className='e-display-2'>Tab Item Two Example</h2>
  <p>
    This is another example of a tab two template!
  </p>
  <p>
    You can put any sort of HTML or Essence component in here.
  </p>
  <p>
    <Btn>
      <BtnItem
        classes={'flat'}
        label='Say Hello!'
        type='danger'
        rippleEffect={true}
      />
    </Btn>
  </p>
</TabItem>

<TabItem
  type='list'
  id='tab-item-tree'
  label='Tab Item Tree'
/>
<TabItem
  type='content'
  id='tab-item-tree'
>
  <h2 className='e-headline'>Tab Item Two Example</h2>
  <p>
    This is another example of a tab tree template!
  </p>
  <p>
    You can put any sort of HTML or Essence component in here.
  </p>
  <div className='brick brick-4'>
    <Chip>
      <ChipItem
        image='assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Gonzales'
        email='gon@zal.es'
      >
      </ChipItem>
      <ChipItem
        image='assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Iolanda Curtiz'
        email='io@lan.da'
      >
      </ChipItem>
      <ChipItem
        image='assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Gizela Timliv'
        email='gizela@timl.iv'
      >
      </ChipItem>
    </Chip>
  </div>
</TabItem>
</TabMenu>
    </Block>
    ,content
);

React.render(
    <Block type='div' classes='e-background-blue-500 e-text-center'>
      your content by class .footer here
    </Block>
    ,footer
);
