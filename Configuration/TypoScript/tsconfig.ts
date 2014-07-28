
/* --------------------
 * RTE.default
 */
RTE.default {
	# Tags allowed outside p & div
	# Adding i tag to the default list
	proc.allowTagsOutside := addToList(i)

	# Do not remove i tags
	proc.entryHTMLparser_db.tags.i >

    # Enable the fonticon  button (included in ext:bsdist tsconfig)
    #showButtons := addToList(fonticon)
}
