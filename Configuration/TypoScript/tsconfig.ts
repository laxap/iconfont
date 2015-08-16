
/* --------------------
 * RTE.default
 */
RTE.default {
	# Tags allowed outside p & div
	proc.allowTagsOutside := addToList(i)
	# Do not remove i tags
	proc.entryHTMLparser_db.tags.i >
    # Enable the fonticon  button
	showButtons := addToList(fonticon)
	# Add at end (without the toolbarOrder the fonticon button would be on a single row on top of all other)
	toolbarOrder (
	bar, blockstylelabel, blockstyle, textstylelabel, textstyle, linebreak,
			bar, formattext, bold,  strong, italic, emphasis, big, small, insertedtext, deletedtext, citation, code,
			definition, keyboard, monospaced, quotation, sample, variable, bidioverride, strikethrough, subscript, superscript, underline, span,
			bar, fontstyle, fontsize, bar, formatblock, insertparagraphbefore, insertparagraphafter, blockquote, line,
			bar, left, center, right, justifyfull,
			bar, orderedlist, unorderedlist, definitionlist, definitionitem, outdent, indent,
			bar, language, showlanguagemarks,lefttoright, righttoleft,
			bar, textcolor, bgcolor, textindicator,
			bar, editelement, showmicrodata,
			bar, image, emoticon, insertcharacter, insertsofthyphen, abbreviation, user,
			bar, link, unlink,
			bar, table,
			bar, findreplace, spellcheck,
			bar, chMode, inserttag, removeformat, bar, copy, cut, paste, pastetoggle, pastebehaviour, bar, undo, redo, bar, about, linebreak,
			bar, toggleborders,
			bar, tableproperties, tablerestyle, bar, rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, bar,
			columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, bar,
			cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge,
			bar, fonticon
	)

}
