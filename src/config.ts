
import {register, registerHtmlTag} from "./rx-drag/RxDrag";
import { Divider, Typography } from '@material-ui/core';
import PortletGridItem from 'Components/Portlet/GridItem';
import ListView from 'Components/ListView';
import OneToManyTable from 'Components/OneToMany/OneToManyTable';
import Portlet from 'Components/Portlet';
import PortletFooter from 'Components/Portlet/Footer';
import FormGridContainer from 'Components/Portlet/FormGridContainer';
import {Combobox} from 'Components/Inputs/Select/Combobox';
import {SelectBox} from 'Components/Inputs/Select/SelectBox';
import Canvas from 'AppStudio/RxPageEditor/Canvas';
import MediasPortlet from 'Components/MediasPortlet';
import { HeadConfig } from 'Components/Head/HeadConfig';
import { ButtonConfig } from 'Components/Buttons/Button/ButtonConfig';
import { DividerRule } from 'Components/Divider/Rule';
import { CanvasConfig } from 'AppStudio/RxPageEditor/Canvas/CanvasConfig';
import GridRow from 'Components/Grid/GridRow';
import GridColumn from 'Components/Grid/GridColumn';
import { TypographyRule } from 'Components/Typography/Rule';
import { PortletGridItemRule } from 'Components/Portlet/GridItem/Rule';
import { TextBox }from 'Components/Inputs/TextBox';
import { TextBoxConfig } from 'Components/Inputs/TextBox/TextBoxConfig';
import { MediasPortletConfig } from 'Components/MediasPortlet/MediasPortletConfig';
import { SelectConfig } from 'Components/Inputs/Select/SelectConfig';
import { OneToManyTableConfig } from 'Components/OneToMany/OneToManyTable/OneToManyTableConfig';
import { PortletConfig } from 'Components/Portlet/PortletConfig';
import { ListViewConfig } from 'Components/ListView/ListViewConfig';
import { GridColumnConfig } from 'Components/Grid/GridColumn/GridColumnConfig';
import { GridRowConfig } from 'Components/Grid/GridRow/GridRowConfig';
import OneToManyPortlet from 'Components/OneToMany/OneToManyPortlet';
import { OneToManyPortletConfig } from 'Components/OneToMany/OneToManyPortlet/OneToManyPortletConfig';
import { MultiSelectBox } from 'Components/Inputs/Select/MultiSelectBox';
import { SwitchBox } from 'Components/Inputs/SwitchBox';
import { SwitchBoxConfig } from 'Components/Inputs/SwitchBox/SwitchBoxConfig';
import {TinyMCEConifg} from 'Components/Inputs/TinyMCE/TinyMCEConifg';
import TreeEditor from 'Components/TreeEditor';
import { TreeEditorConfig } from 'Components/TreeEditor/TreeEditorConfig';
import { TreeSelectConfig } from 'Components/Inputs/TreeSelect/TreeSelectConfig';
import Medias from 'Components/Medias';
import AntDesignChart from 'Components/AntDesignChart';
import { CheckboxConfig } from 'Components/Inputs/Checkbox/CheckboxConfig';
import CheckboxGroup from 'Components/Inputs/CheckboxGroup';
import { CheckboxGroupConfig } from 'Components/Inputs/CheckboxGroup/CheckboxGroupConfig';
import RadioGroup from 'Components/Inputs/RadioGroup';
import { RadioGroupConfig } from 'Components/Inputs/RadioGroup/RadioGroupConfig';
import { AntDesignChartConfig } from 'Components/AntDesignChart/AntDesignChartConfig';
import { MediaSelectConfig } from "Components/Inputs/MediaSelect/MediaSelectConfig";
import TableColumn from "Components/OneToMany/OneToManyTable/TableColumn";
import { TableColumnConfig } from "Components/OneToMany/OneToManyTable/TableColumn/TableColumnConfig";
import TextView from "Components/Displays/TextView";
import { TextViewRule } from "Components/Displays/TextView/Rule";
import { EnumViewRule } from "Components/Displays/EnumView/Rule";
import  EnumView  from "Components/Displays/EnumView";
import { MediaViewRule } from "Components/Displays/MediaView/Rule";
import MediaView from "Components/Displays/MediaView";
import DayView from "Components/Displays/DayView";
import { DayViewRule } from "Components/Displays/DayView/Rule";
import ListViewBody from "Components/ListView/ListViewBody";
import { ListViewBodyRule } from "Components/ListView/ListViewBody/Rule";
import { ListViewToolbarRule } from "Components/ListView/ListViewToolbar/Rule";
import ListViewToolbar from "Components/ListView/ListViewToolbar";
import ListViewFilters from "Components/ListView/ListViewFilters";
import { ListViewBatchActionsRule } from "Components/ListView/ListViewBatchActions/Rule";
import ListViewBatchActions from "Components/ListView/ListViewBatchActions";
import ListViewEnumFilter from "Components/ListView/ListViewFilters/ListViewEnumFilter";
import { ListViewEnumFilterRUle } from "Components/ListView/ListViewFilters/ListViewEnumFilter/Rule";
import { ListViewFiltersRule } from "Components/ListView/ListViewFilters/Rule";
import { ListViewKeywordFilterRule } from "Components/ListView/ListViewFilters/ListViewKeywordFilter/Rule";
import ListViewKeywordFilter from "Components/ListView/ListViewFilters/ListViewKeywordFilter";
import Button from "Components/Buttons/Button";
import ListViewPagination from "Components/ListView/ListViewPagination";
import { ListViewPaginationRule } from "Components/ListView/ListViewPagination/Rule";
import { IconButtonConfig } from "Components/Buttons/IconButton/IconButtonConfig";
import IconButton from "Components/Buttons/IconButton";
import JsxTemplateParser from "Components/JsxTemplateParser";
import { JsxTemplateParserRule } from "Components/JsxTemplateParser/Rule";
import { ListViewBodyTableRow } from "Components/ListView/ListViewBody/ListViewBodyTableRow";
import withFormField from "Components/common/withFormField";
import withSkeleton from "Base/HOCs/withSkeleton";
import { TinyMCE } from "Components/Inputs/TinyMCE";
import { TreeSelect } from "Components/Inputs/TreeSelect";
import { MediaSelect } from "Components/Inputs/MediaSelect/MediaSelect";
import { Checkbox } from "Components/Inputs/Checkbox";

register('Canvas', Canvas, CanvasConfig);
register('Divider', Divider, DividerRule);
register('GridRow', GridRow, GridRowConfig);
register('GridColumn', GridColumn, GridColumnConfig);
register('Button',Button, ButtonConfig);
register('IconButton', IconButton, IconButtonConfig);
register('TextBox', withFormField(withSkeleton(TextBox)), TextBoxConfig);
register('SwitchBox', withFormField(withSkeleton(SwitchBox)), SwitchBoxConfig);
register('Checkbox', withFormField(withSkeleton(Checkbox)), CheckboxConfig);
register('CheckboxGroup', CheckboxGroup, CheckboxGroupConfig);
register('RadioGroup', RadioGroup, RadioGroupConfig);
register('Portlet', Portlet, PortletConfig);
register('FormGridContainer', FormGridContainer);
register('PortletGridItem', PortletGridItem, PortletGridItemRule);
register('PortletFooter', PortletFooter);
register('Typography', Typography, TypographyRule);
register('ListView', ListView, ListViewConfig);
register('ListViewBody', ListViewBody, ListViewBodyRule);
register('ListViewToolbar', ListViewToolbar, ListViewToolbarRule);
register('ListViewFilters', ListViewFilters, ListViewFiltersRule);
register('ListViewKeywordFilter', ListViewKeywordFilter, ListViewKeywordFilterRule);
register('ListViewEnumFilter', ListViewEnumFilter, ListViewEnumFilterRUle);
register('ListViewBatchActions', ListViewBatchActions, ListViewBatchActionsRule);
register('ListViewPagination', ListViewPagination, ListViewPaginationRule);
register('ListViewBodyTableRow', ListViewBodyTableRow);
register('MediasPortlet', MediasPortlet, MediasPortletConfig);
register('SelectBox', withFormField(SelectBox), SelectConfig);
register('Combobox', withFormField(Combobox), SelectConfig);
register('MultiSelectBox', withFormField(MultiSelectBox), SelectConfig );
register ('TableColumn', TableColumn, TableColumnConfig);
register('OneToManyTable', OneToManyTable, OneToManyTableConfig);
register('OneToManyPortlet', OneToManyPortlet, OneToManyPortletConfig);
register('TinyMCE', withFormField(withSkeleton(TinyMCE)), TinyMCEConifg);
register('TreeEditor', TreeEditor, TreeEditorConfig);
register('TreeSelect', withFormField(TreeSelect), TreeSelectConfig);
register('MediaSelect', withFormField(withSkeleton(MediaSelect)), MediaSelectConfig);
register('Medias', Medias);
register('AntDesignChart', AntDesignChart, AntDesignChartConfig);

register('TextView', TextView, TextViewRule);
register('MediaView', MediaView, MediaViewRule);
register('EnumView', EnumView, EnumViewRule);
register('DayView', DayView, DayViewRule);

register('JsxTemplateParser', JsxTemplateParser, JsxTemplateParserRule);

registerHtmlTag('h1', HeadConfig);
registerHtmlTag('h2', HeadConfig);
registerHtmlTag('h3', HeadConfig);
registerHtmlTag('h4', HeadConfig);
registerHtmlTag('h5', HeadConfig);
registerHtmlTag('h6', HeadConfig);